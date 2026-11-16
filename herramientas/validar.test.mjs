// Pruebas del validador. Se ejecutan con: npm test
// Cada prueba monta un repositorio mínimo en una carpeta temporal, rompe una regla
// y comprueba que el validador la detecta.

import assert from 'node:assert/strict';
import { copyFileSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { parse, stringify } from 'yaml';
import { validar } from './validar.mjs';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const temporales = [];
after(() => {
  for (const d of temporales) rmSync(d, { recursive: true, force: true });
});

const FASES = ['Encounter', 'Encounter', 'Encounter', 'Engage', 'Engage', 'Engage', 'Engage', 'Exploit', 'Exploit', 'Exploit'];

// Una unidad de 3 años completa y correcta.
function unidadValida() {
  return {
    curso: 3,
    unidad: 1,
    titulo: 'Hello, school!',
    estado: 'borrador',
    vocabulario: ['hello', 'goodbye', 'sit-down', 'stand-up', 'listen', 'quiet'],
    exposicion: ['bag'],
    recicla: [],
    chunks: [
      { texto: 'Sit down, please.', nivel: 'entienden' },
      { texto: 'Hello!', nivel: 'formula' },
    ],
    criterios: ['1.3', '2.3', '5.2'],
    cuento: { titulo: 'Pip goes to school', paginas: [{ texto: 'Hello! I am Pip.', corta: true, participan: 'saludan' }] },
    chant: { titulo: 'Hello chant', letra: 'Hello, hello, sit down!', gestos: 'saludo' },
    sesiones: FASES.map((_, i) => {
      const n = i + 1;
      const s = { n, arquetipo: `prueba-${n}`, juego: 'listen-and-do', palabras: ['hello'], dice: ['Hello! Look!'], cambios: [], materiales: [] };
      if (n >= 8) s.observacion = { criterios: ['2.3'], indicador: 'Responde con el cuerpo a tres órdenes' };
      return s;
    }),
  };
}

// Monta un repositorio temporal con los datos comunes reales, diez arquetipos de prueba y una unidad.
function montar(modificar = () => {}) {
  const raiz = mkdtempSync(join(tmpdir(), 'story-steps-'));
  temporales.push(raiz);
  // Copia archivo a archivo: fs.cpSync falla en Windows cuando la ruta lleva tildes.
  mkdirSync(join(raiz, 'contenido', 'comun'), { recursive: true });
  for (const f of readdirSync(join(REPO, 'contenido', 'comun'))) {
    copyFileSync(join(REPO, 'contenido', 'comun', f), join(raiz, 'contenido', 'comun', f));
  }
  mkdirSync(join(raiz, 'contenido', 'unidades'), { recursive: true });
  mkdirSync(join(raiz, 'creditos'), { recursive: true });
  const repo = {
    raiz,
    creditos: 'archivo,recurso,autoria,fuente_url,licencia,modificado,notas\n',
    arquetipos: parse(readFileSync(join(raiz, 'contenido', 'comun', 'arquetipos.yaml'), 'utf8')),
    unidades: { 'u1-3.yaml': unidadValida() },
  };
  const base = repo.arquetipos.sesion_tipo['3'].juego_movimiento;
  for (const [i, fase] of FASES.entries()) {
    repo.arquetipos.arquetipos.push({
      id: `prueba-${i + 1}`,
      curso: 3,
      sesion: i + 1,
      fase,
      estado: 'borrador',
      bloques: base.map((b) => ({ ...b })),
    });
  }
  modificar(repo);
  writeFileSync(join(raiz, 'contenido', 'comun', 'arquetipos.yaml'), stringify(repo.arquetipos));
  writeFileSync(join(raiz, 'creditos', 'atribuciones.csv'), repo.creditos);
  for (const [nombre, datos] of Object.entries(repo.unidades)) {
    writeFileSync(join(raiz, 'contenido', 'unidades', nombre), stringify(datos));
  }
  return raiz;
}

const mensajes = (resultado) => resultado.errores.map((e) => `${e.archivo}: ${e.mensaje}`).join('\n');

function debeFallar(nombre, modificar, patron) {
  test(nombre, () => {
    const resultado = validar(montar(modificar));
    assert.match(mensajes(resultado), patron);
  });
}

test('el repositorio real no tiene errores', () => {
  const resultado = validar(REPO);
  assert.equal(mensajes(resultado), '');
});

test('una unidad completa y correcta pasa', () => {
  const resultado = validar(montar());
  assert.equal(mensajes(resultado), '');
  assert.equal(resultado.resumen.unidades, 1);
});

const u = (repo) => repo.unidades['u1-3.yaml'];

debeFallar('los minutos de la sesión deben sumar 45', (r) => {
  u(r).sesiones[0].cambios = [{ bloque: 3, minutos: 7 }];
}, /suman 44 min/);

debeFallar('ningún bloque supera el tope de la edad', (r) => {
  u(r).sesiones[0].cambios = [{ bloque: 3, minutos: 9 }, { bloque: 4, minutos: 7 }];
}, /dura 9 min y el tope de esta edad es 8/);

debeFallar('no puede haber dos bloques recortables', (r) => {
  u(r).sesiones[0].cambios = [{ bloque: 6, recortable: true }];
}, /2 bloques recortables/);

debeFallar('el cuento nunca es recortable', (r) => {
  u(r).sesiones[0].cambios = [{ bloque: 3, recortable: true }, { bloque: 5, recortable: false }];
}, /"story" nunca es recortable/);

debeFallar('no se encadena más de un tope de la misma energía', (r) => {
  u(r).sesiones[0].cambios = [{ bloque: 5, energia: 'movimiento' }];
}, /seguidos de "movimiento" superan el tope/);

debeFallar('un bloque de dos adultos debe ser opcional', (r) => {
  u(r).sesiones[0].cambios = [{ bloque: 4, adultos: 2 }];
}, /opcional: true/);

debeFallar('un cambio no puede tocar el tipo de bloque', (r) => {
  u(r).sesiones[0].cambios = [{ bloque: 4, tipo: 'story' }];
}, /no puede tocar "tipo"/);

debeFallar('el vocabulario nuclear no supera el rango de la edad', (r) => {
  u(r).vocabulario.push('head');
}, /7 palabras nucleares; en 3 años son 6 como mucho/);

debeFallar('las palabras del vocabulario existen en el léxico', (r) => {
  u(r).vocabulario[0] = 'dragon';
}, /"dragon" no está en el léxico/);

debeFallar('una palabra es nuclear una sola vez', (r) => {
  r.unidades['u2-3.yaml'] = { ...unidadValida(), unidad: 2, vocabulario: ['hello', 'head', 'hands', 'feet'] };
}, /"hello" ya es nuclear en contenido\/unidades\/u1-3\.yaml/);

debeFallar('no se recicla una palabra antes de que sea nuclear', (r) => {
  r.unidades['u2-3.yaml'] = { ...unidadValida(), unidad: 2, vocabulario: ['head', 'hands', 'feet', 'eyes'] };
  u(r).recicla = ['head'];
}, /recicla "head", que es nuclear más tarde/);

debeFallar('las palabras de una sesión salen del vocabulario de la unidad', (r) => {
  u(r).sesiones[1].palabras = ['cat'];
}, /la palabra "cat" no está en el vocabulario ni en recicla/);

debeFallar('en 3 años no hay estructuras para decir', (r) => {
  u(r).chunks.push({ texto: 'It is a ball.', nivel: 'dicen' });
}, /estructuras para decir; en esta edad son 0 como mucho/);

debeFallar('solo valen los cinco criterios de lengua extranjera', (r) => {
  u(r).criterios = ['4.1'];
}, /el criterio "4\.1" no es de lengua extranjera/);

debeFallar('el juego debe estar en el banco fijo', (r) => {
  u(r).sesiones[2].juego = 'simon-says';
}, /"simon-says" no está en el banco fijo/);

debeFallar('el juego debe estar permitido para la edad', (r) => {
  u(r).sesiones[2].juego = 'bingo';
}, /"Bingo" se usa desde 4 años, no en 3/);

debeFallar('un juego quieto necesita el arquetipo de juego quieto', (r) => {
  u(r).sesiones[2].juego = 'whats-missing';
}, /es un juego quieto y el arquetipo reserva un bloque de juego movimiento/);

debeFallar('las sesiones 8 a 10 llevan observación', (r) => {
  delete u(r).sesiones[8].observacion;
}, /sesión 9: falta la observación/);

debeFallar('el arquetipo debe existir', (r) => {
  u(r).sesiones[0].arquetipo = 'inventado';
}, /el arquetipo "inventado" no existe/);

debeFallar('el contenido para los niños va en inglés británico', (r) => {
  u(r).chunks[0].texto = 'What color is it?';
}, /inglés americano \("color"\)/);

debeFallar('el nombre del archivo sigue el patrón de unidad', (r) => {
  r.unidades['u9-3.yaml'] = unidadValida();
}, /u9-3\.yaml: nombre de archivo no válido/);

debeFallar('el nombre del archivo y su contenido coinciden', (r) => {
  r.unidades['u1-4.yaml'] = r.unidades['u1-3.yaml'];
  delete r.unidades['u1-3.yaml'];
}, /se llama u1-4 pero dentro dice unidad 1, curso 3/);

debeFallar('una unidad revisada necesita sus diez sesiones', (r) => {
  u(r).estado = 'revisado';
  u(r).sesiones.pop();
}, /tiene 9 sesiones y una unidad son 10/);

debeFallar('una unidad revisada necesita sus medios', (r) => {
  u(r).estado = 'revisado';
}, /falta el archivo de medios medios\/lexico\/hello\.webp/);

debeFallar('no se admiten recursos con licencia CC BY-SA', (r) => {
  r.creditos += 'medios/lexico/cat.webp,Gato,Alguien,https://example.org,CC BY-SA 4.0,sí,\n';
}, /licencia CC BY-SA no admitida/);

debeFallar('la única licencia no comercial admitida es la de ARASAAC', (r) => {
  r.creditos += 'medios/lexico/cat.webp,Gato,Alguien,https://example.org,CC BY-NC 4.0,no,\n';
}, /única licencia no comercial admitida es la de ARASAAC/);

test('un pictograma de ARASAAC con su licencia pasa', () => {
  const resultado = validar(montar((r) => {
    r.creditos += 'kit/agenda.pdf,Agenda visual,Sergio Palao,https://arasaac.org,CC BY-NC-SA,sí,\n';
  }));
  assert.equal(mensajes(resultado), '');
});

test('un borrador incompleto da avisos, no errores', () => {
  const resultado = validar(montar((r) => {
    u(r).sesiones = u(r).sesiones.slice(0, 3);
    u(r).vocabulario = ['hello', 'goodbye'];
  }));
  assert.equal(mensajes(resultado), '');
  const avisos = resultado.avisos.map((a) => a.mensaje).join('\n');
  assert.match(avisos, /tiene 3 sesiones/);
  assert.match(avisos, /2 palabras nucleares/);
});
