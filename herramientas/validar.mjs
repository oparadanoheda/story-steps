#!/usr/bin/env node
// Validador de las reglas del método Story Steps.
// Comprueba que los datos de contenido/ cumplen las reglas de CLAUDE.md y docs/06.
// No depende del generador de la web: se ejecuta solo, antes de publicar y en cada cambio.
//
// Uso:  npm run validar            (valida este repositorio)
//       node herramientas/validar.mjs <carpeta>
//
// Sale con código 1 si hay algún error. Los avisos no impiden publicar.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const MINUTOS_SESION = 45;
const CURSOS = ['3', '4', '5'];
const TIPOS = ['entrada', 'warm-up', 'story', 'juego', 'manipulacion', 'movimiento', 'salida'];
const TIPOS_OBLIGATORIOS = ['entrada', 'warm-up', 'story', 'juego', 'salida'];
const NO_RECORTABLES = ['entrada', 'story', 'salida'];
const ENERGIAS = ['quieto', 'movimiento'];
const ESTADOS = ['borrador', 'revisado', 'pilotado'];
const NIVELES = ['dicen', 'entienden', 'formula'];
const CAMPOS_DE_CAMBIO = ['bloque', 'minutos', 'energia', 'descripcion', 'recortable', 'adultos', 'opcional'];
const CABECERA_CREDITOS = 'archivo,recurso,autoria,fuente_url,licencia,modificado,notas';
const EXTENSIONES_DE_MEDIOS = { '.webp': 'imagen', '.mp3': 'audio' };
const PESO_MAXIMO = { imagen: 400 * 1024, audio: 2 * 1024 * 1024, total: 600 * 1024 * 1024 };

// Ortografía británica: términos americanos que no deben aparecer en el contenido para los niños.
const AMERICANISMOS = [
  'color', 'colors', 'colored', 'favorite', 'gray', 'center', 'theater', 'mom', 'mommy',
  'sweater', 'eraser', 'cookie', 'cookies', 'candy', 'truck', 'airplane', 'pajamas',
  'vacation', 'sneakers', 'diaper', 'trash', 'soccer', 'math',
];

const esTexto = (v) => typeof v === 'string';
const esLista = (v) => Array.isArray(v);
const esEntero = (v) => Number.isInteger(v);

export function validar(raiz = '.') {
  const errores = [];
  const avisos = [];
  const error = (archivo, mensaje) => errores.push({ archivo, mensaje });
  const aviso = (archivo, mensaje) => avisos.push({ archivo, mensaje });
  const resumen = { palabras: 0, arquetipos: 0, unidades: 0, modulos: 0, festividades: 0 };

  const leerYaml = (rel) => {
    const ruta = join(raiz, rel);
    if (!existsSync(ruta)) {
      error(rel, 'no existe el archivo');
      return null;
    }
    try {
      return parse(readFileSync(ruta, 'utf8'));
    } catch (e) {
      error(rel, `YAML no válido: ${String(e.message).split('\n')[0]}`);
      return null;
    }
  };

  const revisarIngles = (archivo, donde, texto) => {
    if (!esTexto(texto)) return;
    for (const palabra of AMERICANISMOS) {
      if (new RegExp(`\\b${palabra}\\b`, 'i').test(texto)) {
        error(archivo, `${donde}: inglés americano ("${palabra}"). El contenido para los niños va en inglés británico`);
      }
    }
  };

  // ---------- Datos comunes ----------

  const COMUN = 'contenido/comun';
  const cursos = leerYaml(`${COMUN}/cursos.yaml`);
  const lexico = leerYaml(`${COMUN}/lexico.yaml`);
  const juegos = leerYaml(`${COMUN}/juegos.yaml`);
  const rutinas = leerYaml(`${COMUN}/rutinas.yaml`);
  const arquetipos = leerYaml(`${COMUN}/arquetipos.yaml`);
  if (!cursos || !lexico || !juegos || !rutinas || !arquetipos) return { errores, avisos, resumen };

  // Cursos
  const A_CURSOS = `${COMUN}/cursos.yaml`;
  const esRango = (r) => esLista(r) && r.length === 2 && r.every(esEntero) && r[0] <= r[1];
  let cursosCorrectos = true;
  for (const c of CURSOS) {
    const d = cursos.cursos?.[c];
    if (
      !d || !esEntero(d.tope_bloque) || !esRango(d.vocabulario_nuclear) || !esRango(d.vocabulario_modulo) ||
      !esEntero(d.estructuras?.dicen) || !esEntero(d.estructuras?.entienden)
    ) {
      error(A_CURSOS, `curso ${c}: faltan o son incorrectos tope_bloque, vocabulario_nuclear, vocabulario_modulo o estructuras`);
      cursosCorrectos = false;
    }
  }
  const criteriosAdmitidos = cursos.criterios_admitidos;
  const fases = cursos.calendario?.fases;
  const sesionesConObservacion = cursos.calendario?.sesiones_con_observacion;
  const sesionesPorUnidad = cursos.calendario?.sesiones_por_unidad;
  if (!esLista(criteriosAdmitidos) || !fases || !esLista(sesionesConObservacion) || !esEntero(sesionesPorUnidad)) {
    error(A_CURSOS, 'faltan criterios_admitidos o el calendario (fases, sesiones_con_observacion, sesiones_por_unidad)');
    cursosCorrectos = false;
  }
  if (!cursosCorrectos) return { errores, avisos, resumen };
  const faseDe = (n) => Object.keys(fases).find((f) => fases[f].includes(n));

  // Léxico
  const A_LEXICO = `${COMUN}/lexico.yaml`;
  const idsLexico = new Set();
  if (!esLista(lexico.palabras)) {
    error(A_LEXICO, 'falta la lista "palabras"');
  } else {
    for (const p of lexico.palabras) {
      if (!esTexto(p?.id)) {
        error(A_LEXICO, `id no válido (${JSON.stringify(p?.id)}). Si es "on", "no" o "yes", va entre comillas`);
        continue;
      }
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.id)) error(A_LEXICO, `id "${p.id}": solo minúsculas, cifras y guiones`);
      if (idsLexico.has(p.id)) error(A_LEXICO, `la palabra "${p.id}" está definida dos veces`);
      idsLexico.add(p.id);
      if (!esTexto(p.palabra) || !p.palabra.trim()) error(A_LEXICO, `"${p.id}": falta la palabra`);
      if (p.gesto !== undefined && !esTexto(p.gesto)) error(A_LEXICO, `"${p.id}": el gesto debe ser un texto`);
      revisarIngles(A_LEXICO, `"${p.id}"`, p.palabra);
    }
  }
  resumen.palabras = idsLexico.size;

  // Banco de juegos
  const A_JUEGOS = `${COMUN}/juegos.yaml`;
  const juegosPorId = new Map();
  if (!esLista(juegos.juegos)) {
    error(A_JUEGOS, 'falta la lista "juegos"');
  } else {
    for (const j of juegos.juegos) {
      if (!esTexto(j?.id)) {
        error(A_JUEGOS, 'hay un juego sin id');
        continue;
      }
      if (juegosPorId.has(j.id)) error(A_JUEGOS, `el juego "${j.id}" está dos veces`);
      juegosPorId.set(j.id, j);
      if (!ENERGIAS.includes(j.energia)) error(A_JUEGOS, `"${j.id}": energia debe ser quieto o movimiento`);
      if (![3, 4, 5].includes(j.desde)) error(A_JUEGOS, `"${j.id}": "desde" debe ser 3, 4 o 5`);
      if (!esTexto(j.gran_grupo) || !j.gran_grupo.trim()) error(A_JUEGOS, `"${j.id}": falta la versión de gran grupo`);
    }
  }

  // Rutinas
  const A_RUTINAS = `${COMUN}/rutinas.yaml`;
  if (!esLista(rutinas.normas) || rutinas.normas.length !== 3) error(A_RUTINAS, 'las normas comunes son exactamente 3');

  // ---------- Bloques de una sesión ----------

  const validarBloques = (archivo, donde, bloques, tope) => {
    if (!esLista(bloques) || bloques.length === 0) {
      error(archivo, `${donde}: no tiene bloques`);
      return;
    }
    let total = 0;
    let racha = 0;
    let energiaAnterior = null;
    for (const [i, b] of bloques.entries()) {
      const etiqueta = `${donde}, bloque ${i + 1} (${b?.tipo ?? 'sin tipo'})`;
      if (!TIPOS.includes(b?.tipo)) error(archivo, `${etiqueta}: tipo no admitido. Tipos: ${TIPOS.join(', ')}`);
      if (!ENERGIAS.includes(b?.energia)) error(archivo, `${etiqueta}: falta la energía (quieto o movimiento)`);
      if (!esEntero(b?.minutos) || b.minutos <= 0) {
        error(archivo, `${etiqueta}: los minutos deben ser un número entero mayor que cero`);
        continue;
      }
      total += b.minutos;
      if (b.minutos > tope) error(archivo, `${etiqueta}: dura ${b.minutos} min y el tope de esta edad es ${tope}`);
      if (b.adultos !== undefined && ![1, 2].includes(b.adultos)) error(archivo, `${etiqueta}: adultos debe ser 1 o 2`);
      if (b.adultos === 2 && b.opcional !== true) {
        error(archivo, `${etiqueta}: un bloque de 2 adultos debe llevar "opcional: true". Un solo adulto basta`);
      }
      racha = b.energia === energiaAnterior ? racha + b.minutos : b.minutos;
      energiaAnterior = b.energia;
      if (racha > tope && racha !== b.minutos) {
        error(archivo, `${etiqueta}: ${racha} min seguidos de "${b.energia}" superan el tope de ${tope}. Hay que alternar`);
      }
    }
    if (total !== MINUTOS_SESION) error(archivo, `${donde}: los bloques suman ${total} min y deben sumar ${MINUTOS_SESION}`);
    const recortables = bloques.filter((b) => b?.recortable === true);
    if (recortables.length !== 1) {
      error(archivo, `${donde}: tiene ${recortables.length} bloques recortables y debe tener exactamente uno`);
    }
    for (const b of recortables) {
      if (NO_RECORTABLES.includes(b.tipo)) error(archivo, `${donde}: el bloque "${b.tipo}" nunca es recortable`);
    }
    if (bloques[0]?.tipo !== 'entrada') error(archivo, `${donde}: la sesión empieza por la entrada`);
    if (bloques.at(-1)?.tipo !== 'salida') error(archivo, `${donde}: la sesión termina con la salida`);
    for (const t of TIPOS_OBLIGATORIOS) {
      if (!bloques.some((b) => b?.tipo === t)) error(archivo, `${donde}: falta el bloque "${t}"`);
    }
  };

  // Devuelve los bloques del arquetipo con los cambios de la sesión aplicados.
  const aplicarCambios = (archivo, donde, bloques, cambios) => {
    const copia = bloques.map((b) => ({ ...b }));
    if (cambios === undefined || cambios === null) return copia;
    if (!esLista(cambios)) {
      error(archivo, `${donde}: "cambios" debe ser una lista`);
      return copia;
    }
    for (const c of cambios) {
      if (!esEntero(c?.bloque) || c.bloque < 1 || c.bloque > copia.length) {
        error(archivo, `${donde}: cada cambio indica "bloque" con su posición (de 1 a ${copia.length})`);
        continue;
      }
      for (const campo of Object.keys(c)) {
        if (!CAMPOS_DE_CAMBIO.includes(campo)) {
          error(archivo, `${donde}: un cambio no puede tocar "${campo}". Campos: ${CAMPOS_DE_CAMBIO.join(', ')}`);
        } else if (campo !== 'bloque') {
          copia[c.bloque - 1][campo] = c[campo];
        }
      }
    }
    return copia;
  };

  // ---------- Arquetipos ----------

  const A_ARQ = `${COMUN}/arquetipos.yaml`;
  const ENERGIA_DE_VARIANTE = { juego_movimiento: 'movimiento', juego_quieto: 'quieto' };
  for (const c of CURSOS) {
    const variantes = arquetipos.sesion_tipo?.[c];
    if (!variantes) {
      error(A_ARQ, `falta la sesión tipo de ${c} años`);
      continue;
    }
    for (const [variante, energia] of Object.entries(ENERGIA_DE_VARIANTE)) {
      const bloques = variantes[variante];
      const donde = `sesión tipo de ${c} años, ${variante}`;
      validarBloques(A_ARQ, donde, bloques, cursos.cursos[c].tope_bloque);
      const juego = esLista(bloques) ? bloques.find((b) => b?.tipo === 'juego') : null;
      if (juego && juego.energia !== energia) error(A_ARQ, `${donde}: el bloque de juego debe ser "${energia}"`);
    }
  }
  const arquetiposPorId = new Map();
  for (const a of arquetipos.arquetipos ?? []) {
    if (!esTexto(a?.id)) {
      error(A_ARQ, 'hay un arquetipo sin id');
      continue;
    }
    const donde = `arquetipo "${a.id}"`;
    if (arquetiposPorId.has(a.id)) error(A_ARQ, `${donde}: está dos veces`);
    arquetiposPorId.set(a.id, a);
    if (!CURSOS.includes(String(a.curso))) {
      error(A_ARQ, `${donde}: curso debe ser 3, 4 o 5`);
      continue;
    }
    if (!esEntero(a.sesion) || a.sesion < 1 || a.sesion > sesionesPorUnidad) {
      error(A_ARQ, `${donde}: sesion debe estar entre 1 y ${sesionesPorUnidad}`);
    } else if (a.fase !== faseDe(a.sesion)) {
      error(A_ARQ, `${donde}: la sesión ${a.sesion} es de la fase ${faseDe(a.sesion)}, no ${a.fase}`);
    }
    if (!ESTADOS.includes(a.estado)) error(A_ARQ, `${donde}: estado debe ser ${ESTADOS.join(', ')}`);
    validarBloques(A_ARQ, donde, a.bloques, cursos.cursos[String(a.curso)].tope_bloque);
  }
  resumen.arquetipos = arquetiposPorId.size;

  // ---------- Piezas comunes a unidades, módulos y festividades ----------

  const validarCriterios = (archivo, donde, criterios, obligatorio = true) => {
    if (!esLista(criterios) || criterios.length === 0) {
      if (obligatorio) error(archivo, `${donde}: faltan los criterios de evaluación`);
      return;
    }
    for (const c of criterios) {
      if (!criteriosAdmitidos.includes(c)) {
        error(archivo, `${donde}: el criterio "${c}" no es de lengua extranjera. Solo ${criteriosAdmitidos.join(', ')}`);
      }
    }
  };

  const validarChunks = (archivo, chunks, maximos) => {
    if (chunks === undefined) return;
    if (!esLista(chunks)) {
      error(archivo, '"chunks" debe ser una lista');
      return;
    }
    const cuenta = { dicen: 0, entienden: 0, formula: 0 };
    for (const ch of chunks) {
      if (!esTexto(ch?.texto)) error(archivo, 'hay un chunk sin texto');
      if (!NIVELES.includes(ch?.nivel)) {
        error(archivo, `chunk "${ch?.texto}": nivel debe ser ${NIVELES.join(', ')}`);
        continue;
      }
      cuenta[ch.nivel] += 1;
      revisarIngles(archivo, `chunk "${ch.texto}"`, ch.texto);
    }
    if (cuenta.dicen > maximos.dicen) {
      error(archivo, `${cuenta.dicen} estructuras para decir; en esta edad son ${maximos.dicen} como mucho. Las fórmulas de rutina van con "nivel: formula"`);
    }
    if (cuenta.entienden > maximos.entienden) {
      error(archivo, `${cuenta.entienden} estructuras para entender; en esta edad son ${maximos.entienden} como mucho`);
    }
  };

  const validarSesion = (archivo, s, ctx) => {
    const { curso, plantilla, vocabularioPermitido } = ctx;
    const donde = `sesión ${s?.n}`;
    if (!esTexto(s?.arquetipo)) {
      error(archivo, `${donde}: falta el arquetipo`);
    } else {
      const a = arquetiposPorId.get(s.arquetipo);
      if (!a) {
        if (!plantilla) error(archivo, `${donde}: el arquetipo "${s.arquetipo}" no existe en arquetipos.yaml`);
      } else {
        if (String(a.curso) !== curso) error(archivo, `${donde}: el arquetipo "${a.id}" es de ${a.curso} años`);
        if (ctx.comprobarNumero && a.sesion !== s.n) aviso(archivo, `${donde}: usa el arquetipo de la sesión ${a.sesion}`);
        const bloques = aplicarCambios(archivo, donde, a.bloques ?? [], s.cambios);
        validarBloques(archivo, donde, bloques, cursos.cursos[curso].tope_bloque);
        const juego = juegosPorId.get(s.juego);
        const bloqueJuego = bloques.find((b) => b.tipo === 'juego');
        if (juego && bloqueJuego && juego.energia !== bloqueJuego.energia) {
          error(archivo, `${donde}: "${juego.nombre}" es un juego ${juego.energia} y el arquetipo reserva un bloque de juego ${bloqueJuego.energia}`);
        }
      }
    }
    const juego = juegosPorId.get(s?.juego);
    if (!juego) {
      error(archivo, `${donde}: el juego "${s?.juego}" no está en el banco fijo`);
    } else if (juego.desde > Number(curso)) {
      error(archivo, `${donde}: "${juego.nombre}" se usa desde ${juego.desde} años, no en ${curso}`);
    }
    for (const p of s?.palabras ?? []) {
      if (!vocabularioPermitido.has(p)) error(archivo, `${donde}: la palabra "${p}" no está en el vocabulario ni en recicla`);
    }
    for (const [i, frase] of (s?.dice ?? []).entries()) revisarIngles(archivo, `${donde}, frase ${i + 1} del docente`, frase);
    if (s?.materiales !== undefined && !esLista(s.materiales)) error(archivo, `${donde}: "materiales" debe ser una lista`);
  };

  const faltanMedios = (rutas) => rutas.filter((r) => !existsSync(join(raiz, r)));

  // ---------- Unidades ----------

  const nucleares = new Map(); // id de palabra -> { archivo, orden }
  const reciclajes = []; // { archivo, id, orden }

  const validarUnidad = (archivo, u, deArchivo) => {
    const plantilla = deArchivo === null;
    const curso = String(u?.curso);
    if (!CURSOS.includes(curso)) {
      error(archivo, 'curso debe ser 3, 4 o 5');
      return;
    }
    if (!esEntero(u.unidad) || u.unidad < 1 || u.unidad > 8) error(archivo, 'unidad debe estar entre 1 y 8');
    if (!plantilla && (curso !== deArchivo.curso || u.unidad !== deArchivo.unidad)) {
      error(archivo, `el archivo se llama u${deArchivo.unidad}-${deArchivo.curso} pero dentro dice unidad ${u.unidad}, curso ${curso}`);
    }
    if (!esTexto(u.titulo) || !u.titulo.trim()) error(archivo, 'falta el título');
    if (!ESTADOS.includes(u.estado)) error(archivo, `estado debe ser ${ESTADOS.join(', ')}`);
    const borrador = u.estado === 'borrador';
    const orden = Number(curso) * 10 + u.unidad;
    const datosCurso = cursos.cursos[curso];

    // Vocabulario nuclear
    const vocabulario = esLista(u.vocabulario) ? u.vocabulario : [];
    if (!esLista(u.vocabulario)) error(archivo, 'falta la lista "vocabulario"');
    const [minimo, maximo] = datosCurso.vocabulario_nuclear;
    if (vocabulario.length > maximo) {
      error(archivo, `${vocabulario.length} palabras nucleares; en ${curso} años son ${maximo} como mucho. Lo demás va en "exposicion"`);
    } else if (vocabulario.length < minimo && !plantilla) {
      const mensaje = `${vocabulario.length} palabras nucleares; en ${curso} años son al menos ${minimo}`;
      if (borrador) aviso(archivo, mensaje);
      else error(archivo, mensaje);
    }
    for (const id of vocabulario) {
      if (!esTexto(id) || !idsLexico.has(id)) {
        error(archivo, `la palabra ${JSON.stringify(id)} no está en el léxico`);
        continue;
      }
      if (vocabulario.indexOf(id) !== vocabulario.lastIndexOf(id)) error(archivo, `la palabra "${id}" está dos veces en el vocabulario`);
      if (plantilla) continue;
      if (nucleares.has(id)) {
        error(archivo, `"${id}" ya es nuclear en ${nucleares.get(id).archivo}. Una palabra es nuclear una sola vez; aquí va en "recicla"`);
      } else {
        nucleares.set(id, { archivo, orden });
      }
    }

    // Reciclaje y exposición
    const recicla = esLista(u.recicla) ? u.recicla : [];
    for (const id of recicla) {
      if (!esTexto(id) || !idsLexico.has(id)) error(archivo, `recicla: ${JSON.stringify(id)} no está en el léxico`);
      else if (vocabulario.includes(id)) error(archivo, `"${id}" está a la vez en vocabulario y en recicla`);
      else if (!plantilla) reciclajes.push({ archivo, id, orden });
    }
    if (u.exposicion !== undefined && !esLista(u.exposicion)) error(archivo, '"exposicion" debe ser una lista');

    validarChunks(archivo, u.chunks, datosCurso.estructuras);
    if (!plantilla && !borrador && !(u.chunks ?? []).length) error(archivo, 'faltan los chunks de la unidad');
    validarCriterios(archivo, 'unidad', u.criterios);

    // Cuento y chant
    const paginas = esLista(u.cuento?.paginas) ? u.cuento.paginas : [];
    if (!plantilla && !borrador) {
      if (!esTexto(u.cuento?.titulo) || !u.cuento.titulo.trim()) error(archivo, 'falta el título del cuento');
      if (paginas.length === 0) error(archivo, 'el cuento no tiene páginas');
      if (!esTexto(u.chant?.letra) || !u.chant.letra.trim()) error(archivo, 'falta la letra del chant');
      if (curso === '3' && !paginas.some((p) => p?.corta === true)) error(archivo, 'en 3 años el cuento necesita una versión corta: marca páginas con "corta: true"');
    }
    for (const [i, p] of paginas.entries()) {
      if (!plantilla && !borrador && (!esTexto(p?.texto) || !p.texto.trim())) error(archivo, `la página ${i + 1} del cuento no tiene texto`);
      revisarIngles(archivo, `página ${i + 1} del cuento`, p?.texto);
    }
    revisarIngles(archivo, 'chant', u.chant?.letra);

    // Sesiones
    const sesiones = esLista(u.sesiones) ? u.sesiones : [];
    if (!plantilla && sesiones.length !== sesionesPorUnidad) {
      const mensaje = `tiene ${sesiones.length} sesiones y una unidad son ${sesionesPorUnidad}`;
      if (borrador) aviso(archivo, mensaje);
      else error(archivo, mensaje);
    }
    const vistos = new Set();
    const vocabularioPermitido = new Set([...vocabulario, ...recicla]);
    for (const s of sesiones) {
      if (!esEntero(s?.n) || s.n < 1 || s.n > sesionesPorUnidad) {
        error(archivo, `hay una sesión con número no válido (${JSON.stringify(s?.n)})`);
        continue;
      }
      if (vistos.has(s.n)) error(archivo, `la sesión ${s.n} está dos veces`);
      vistos.add(s.n);
      validarSesion(archivo, s, { curso, plantilla, vocabularioPermitido, comprobarNumero: true });
      if (sesionesConObservacion.includes(s.n)) {
        if (!s.observacion) {
          error(archivo, `sesión ${s.n}: falta la observación. Las sesiones ${sesionesConObservacion.join(', ')} la llevan siempre`);
        } else {
          validarCriterios(archivo, `sesión ${s.n}, observación`, s.observacion.criterios);
          if (!plantilla && !borrador && !(esTexto(s.observacion.indicador) && s.observacion.indicador.trim())) {
            error(archivo, `sesión ${s.n}: la observación necesita un indicador observable`);
          }
        }
      }
    }

    // Medios esperados, por convención
    if (!plantilla) {
      const id = `u${u.unidad}-${curso}`;
      const esperados = [`medios/${id}/chant.mp3`, `medios/${id}/casa.webp`];
      for (const palabra of vocabulario) esperados.push(`medios/lexico/${palabra}.webp`, `medios/lexico/${palabra}.mp3`);
      for (let i = 1; i <= paginas.length; i += 1) {
        const n = String(i).padStart(2, '0');
        esperados.push(`medios/${id}/cuento-${n}.webp`, `medios/${id}/cuento-${n}.mp3`);
      }
      const faltan = faltanMedios(esperados);
      if (faltan.length && borrador) aviso(archivo, `faltan ${faltan.length} de ${esperados.length} archivos de medios (normal en un borrador)`);
      else for (const f of faltan) error(archivo, `falta el archivo de medios ${f}`);
    }
  };

  const listarYaml = (carpeta) => {
    const ruta = join(raiz, carpeta);
    if (!existsSync(ruta)) return [];
    return readdirSync(ruta).filter((f) => f.endsWith('.yaml')).sort();
  };

  for (const f of listarYaml('contenido/unidades')) {
    const archivo = `contenido/unidades/${f}`;
    const datos = leerYaml(archivo);
    if (!datos) continue;
    if (f.startsWith('_')) {
      validarUnidad(archivo, datos, null);
      continue;
    }
    const m = /^u([1-8])-([345])\.yaml$/.exec(f);
    if (!m) {
      error(archivo, 'nombre de archivo no válido. Debe ser u<unidad>-<edad>.yaml, por ejemplo u1-3.yaml');
      continue;
    }
    resumen.unidades += 1;
    validarUnidad(archivo, datos, { unidad: Number(m[1]), curso: m[2] });
  }

  // Una palabra solo se recicla después de haber sido nuclear.
  for (const r of reciclajes) {
    const origen = nucleares.get(r.id);
    if (origen && origen.orden >= r.orden) {
      error(r.archivo, `recicla "${r.id}", que es nuclear más tarde o a la vez (${origen.archivo})`);
    }
  }

  // ---------- Módulos de proyecto y festividades ----------

  const validarKit = (archivo, k, opciones) => {
    const { plantilla, cursoArchivo, tipo } = opciones;
    const curso = String(k?.curso);
    if (!CURSOS.includes(curso)) {
      error(archivo, 'curso debe ser 3, 4 o 5');
      return;
    }
    if (!plantilla && curso !== cursoArchivo) error(archivo, `el nombre del archivo indica ${cursoArchivo} años y dentro dice ${curso}`);
    if (!ESTADOS.includes(k.estado)) error(archivo, `estado debe ser ${ESTADOS.join(', ')}`);
    const borrador = k.estado === 'borrador';
    const nombre = tipo === 'modulo' ? k.proyecto : k.fiesta;
    if (!esTexto(nombre) || !nombre.trim()) error(archivo, tipo === 'modulo' ? 'falta el nombre del proyecto' : 'falta el nombre de la fiesta');

    const vocabulario = esLista(k.vocabulario) ? k.vocabulario : [];
    const maximo = cursos.cursos[curso].vocabulario_modulo[1];
    if (vocabulario.length > maximo) error(archivo, `${vocabulario.length} palabras nuevas; en ${curso} años son ${maximo} como mucho`);
    const recicla = esLista(k.recicla) ? k.recicla : [];
    if (!plantilla) {
      for (const id of [...vocabulario, ...recicla]) {
        if (!esTexto(id) || !idsLexico.has(id)) error(archivo, `la palabra ${JSON.stringify(id)} no está en el léxico`);
      }
    }
    validarChunks(archivo, k.chunks, { dicen: 1, entienden: 1 });
    const estructuras = (k.chunks ?? []).filter((c) => c?.nivel !== 'formula').length;
    if (tipo === 'modulo' && estructuras > 1) error(archivo, `un módulo lleva una sola estructura clave y tiene ${estructuras}`);
    validarCriterios(archivo, tipo, k.criterios);
    revisarIngles(archivo, 'chant', k.chant?.letra);
    if (tipo === 'festividad' && !k.version_neutra?.titulo) {
      const mensaje = 'falta la versión neutra de la festividad';
      if (borrador || plantilla) aviso(archivo, mensaje);
      else error(archivo, mensaje);
    }

    const sesiones = esLista(k.sesiones) ? k.sesiones : [];
    if (tipo === 'modulo' && !plantilla) {
      const admitidas = curso === '3' ? [3] : [3, 4];
      if (!admitidas.includes(sesiones.length)) {
        const mensaje = `tiene ${sesiones.length} sesiones; un módulo de ${curso} años tiene ${admitidas.join(' o ')}`;
        if (borrador) aviso(archivo, mensaje);
        else error(archivo, mensaje);
      }
    }
    const vocabularioPermitido = new Set([...vocabulario, ...recicla]);
    for (const s of sesiones) validarSesion(archivo, s, { curso, plantilla, vocabularioPermitido, comprobarNumero: false });
  };

  for (const [carpeta, tipo, contador] of [['contenido/modulos', 'modulo', 'modulos'], ['contenido/festividades', 'festividad', 'festividades']]) {
    for (const f of listarYaml(carpeta)) {
      const archivo = `${carpeta}/${f}`;
      const datos = leerYaml(archivo);
      if (!datos) continue;
      if (f.startsWith('_')) {
        validarKit(archivo, datos, { plantilla: true, tipo });
        continue;
      }
      const m = /^[a-z0-9]+(?:-[a-z0-9]+)*-([345])\.yaml$/.exec(f);
      if (!m) {
        error(archivo, 'nombre de archivo no válido. Debe ser <nombre>-<edad>.yaml, por ejemplo prehistoria-3.yaml');
        continue;
      }
      resumen[contador] += 1;
      validarKit(archivo, datos, { plantilla: false, cursoArchivo: m[1], tipo });
    }
  }

  // ---------- Créditos ----------

  const A_CREDITOS = 'creditos/atribuciones.csv';
  const acreditados = new Set();
  if (!existsSync(join(raiz, A_CREDITOS))) {
    error(A_CREDITOS, 'no existe el registro de atribuciones');
  } else {
    const lineas = readFileSync(join(raiz, A_CREDITOS), 'utf8').replace(/^﻿/, '').split(/\r?\n/).filter((l) => l.trim());
    if (lineas[0] !== CABECERA_CREDITOS) error(A_CREDITOS, `la primera línea debe ser: ${CABECERA_CREDITOS}`);
    const columnas = CABECERA_CREDITOS.split(',');
    for (const [i, linea] of lineas.slice(1).entries()) {
      const celdas = partirCsv(linea);
      const fila = i + 2;
      if (celdas.length !== columnas.length) {
        error(A_CREDITOS, `fila ${fila}: tiene ${celdas.length} columnas y deben ser ${columnas.length}`);
        continue;
      }
      const dato = Object.fromEntries(columnas.map((c, j) => [c, celdas[j].trim()]));
      acreditados.add(dato.archivo.replaceAll('\\', '/'));
      if (!dato.archivo) error(A_CREDITOS, `fila ${fila}: falta el archivo`);
      if (!dato.licencia) error(A_CREDITOS, `fila ${fila}: falta la licencia`);
      if (/BY-SA/i.test(dato.licencia)) error(A_CREDITOS, `fila ${fila}: licencia CC BY-SA no admitida (${dato.archivo}). Solo dominio público, CC0, CC BY y ARASAAC`);
      if (/-ND/i.test(dato.licencia)) error(A_CREDITOS, `fila ${fila}: una licencia sin obra derivada (ND) no permite adaptar el recurso`);
      if (/-NC/i.test(dato.licencia) && !/arasaac/i.test(`${dato.archivo} ${dato.recurso} ${dato.fuente_url}`)) {
        error(A_CREDITOS, `fila ${fila}: la única licencia no comercial admitida es la de ARASAAC`);
      }
    }
  }

  // ---------- Medios ----------

  const A_MEDIOS = 'medios';
  const sinAcreditar = [];
  let pesoTotal = 0;
  const recorrer = (rel) => {
    const ruta = join(raiz, rel);
    if (!existsSync(ruta)) return;
    for (const nombre of readdirSync(ruta)) {
      const hijo = `${rel}/${nombre}`;
      const info = statSync(join(raiz, hijo));
      if (info.isDirectory()) {
        recorrer(hijo);
        continue;
      }
      if (nombre === 'README.md' || nombre === '.gitkeep') continue;
      const extension = nombre.slice(nombre.lastIndexOf('.')).toLowerCase();
      const clase = EXTENSIONES_DE_MEDIOS[extension];
      pesoTotal += info.size;
      if (!clase) {
        error(hijo, 'formato no admitido. Imágenes en WebP y audio en MP3');
        continue;
      }
      if (info.size > PESO_MAXIMO[clase]) {
        error(hijo, `pesa ${Math.round(info.size / 1024)} KB y el máximo para ${clase} es ${Math.round(PESO_MAXIMO[clase] / 1024)} KB`);
      }
      if (!acreditados.has(hijo)) sinAcreditar.push(hijo);
    }
  };
  recorrer(A_MEDIOS);
  if (pesoTotal > PESO_MAXIMO.total) {
    aviso(A_MEDIOS, `los medios pesan ${Math.round(pesoTotal / 1024 / 1024)} MB; el sitio publicado no puede pasar de 1 GB`);
  }
  if (sinAcreditar.length) {
    aviso(A_CREDITOS, `${sinAcreditar.length} medios sin fila en el registro (por ejemplo, ${sinAcreditar.slice(0, 3).join(', ')}). Todo recurso de terceros o generado con IA se anota`);
  }

  return { errores, avisos, resumen };
}

// Parte una línea de CSV respetando las comillas.
function partirCsv(linea) {
  const celdas = [];
  let actual = '';
  let entreComillas = false;
  for (let i = 0; i < linea.length; i += 1) {
    const c = linea[i];
    if (entreComillas) {
      if (c === '"' && linea[i + 1] === '"') {
        actual += '"';
        i += 1;
      } else if (c === '"') {
        entreComillas = false;
      } else {
        actual += c;
      }
    } else if (c === '"') {
      entreComillas = true;
    } else if (c === ',') {
      celdas.push(actual);
      actual = '';
    } else {
      actual += c;
    }
  }
  celdas.push(actual);
  return celdas;
}

function imprimir(titulo, lista) {
  if (!lista.length) return;
  console.log(`\n${titulo} (${lista.length})`);
  let anterior = null;
  for (const { archivo, mensaje } of lista) {
    if (archivo !== anterior) console.log(`  ${archivo}`);
    anterior = archivo;
    console.log(`    - ${mensaje}`);
  }
}

const ejecutadoDirectamente = process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url));
if (ejecutadoDirectamente) {
  const raiz = process.argv[2] ?? '.';
  const { errores, avisos, resumen } = validar(raiz);
  console.log(
    `Story Steps · validación de ${resolve(raiz)}\n` +
      `${resumen.palabras} palabras en el léxico · ${resumen.arquetipos} arquetipos · ${resumen.unidades} unidades · ` +
      `${resumen.modulos} módulos · ${resumen.festividades} festividades`,
  );
  imprimir('AVISOS', avisos);
  imprimir('ERRORES', errores);
  console.log(errores.length ? `\nNo se puede publicar: ${errores.length} errores.` : '\nTodo correcto.');
  process.exit(errores.length ? 1 : 0);
}
