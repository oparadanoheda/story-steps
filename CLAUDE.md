# Story Steps — convenciones del proyecto

Método de inglés sin libro para Educación Infantil (3, 4 y 5 años) de un CEIP público bilingüe de la Comunidad de Madrid. Ámbito: bloque J "Lengua extranjera", 3 sesiones de 45 min por semana, grupos de 20 niños como máximo. Se publica como web docente estática en GitHub Pages.

Las fuentes de todo lo que sigue están en `docs/` (01-08), que es la versión canónica; los documentos originales de claude.ai pueden estar desfasados. Ante una duda de método, manda `docs/06` (núcleo y módulos); ante una duda técnica, `docs/07` (plan de producción); ante una duda normativa, `docs/01` (marco curricular). `docs/08` explica por qué se cambió cada regla el 12/11/2026.

## Idiomas

- Interfaz de la web, guías, comentarios de código y commits: **castellano**.
- Contenido para los niños (cuentos, chants, vocabulario, *chunks*): **inglés británico** (*colour*, *mummy*, *jumper*).
- Páginas para familias: castellano, sin exigir saber inglés.

## Principio técnico: contenido como datos

Cada cosa se escribe **una vez** en `contenido/` (YAML) y el código genera a partir de ella páginas, sesiones, flashcards, bingo, fichas y juegos. Corregir una palabra debe cambiarla en todas partes. Nunca dupliques contenido didáctico dentro de plantillas o motores de juego.

- **Léxico único:** cada palabra se define una sola vez en `contenido/comun/lexico.yaml` (id, palabra, gesto). Las unidades la citan por su id. Imagen, audio y gesto son los mismos en las tres edades.
- **Datos comunes** en `contenido/comun/`: `cursos.yaml`, `lexico.yaml`, `juegos.yaml`, `rutinas.yaml`, `arquetipos.yaml`.
- **Una unidad** = un archivo por unidad y edad: `contenido/unidades/u1-3.yaml` (unidad 1, 3 años). Plantilla: `contenido/unidades/_plantilla.yaml`.
- **Un módulo de proyecto** = `contenido/modulos/<proyecto>-<edad>.yaml`. Plantilla: `contenido/modulos/_plantilla.yaml`.
- **Una festividad** = `contenido/festividades/<fiesta>-<edad>.yaml`. Plantilla: `contenido/festividades/_plantilla.yaml`.
- **Sesiones desde arquetipos:** cada sesión parte de un arquetipo por edad (`arquetipos.yaml`) y solo escribe lo que cambia.
- Los archivos que empiezan por `_` son plantillas y no se publican.
- **Rutas de medios por convención:** el YAML no lleva rutas. Léxico en `medios/lexico/<id>.webp` y `.mp3`; cuento y chant en `medios/<unidad>/` (`medios/u1-3/cuento-01.webp`, `chant.mp3`); personajes en `medios/personajes/`.
- **Los identificadores no cambian** una vez publicados: aparecen en las direcciones de las páginas de familias y en los QR impresos.

## Reglas del método (no negociables)

**Sesión de 45 min de horario, siempre la misma secuencia:**

1. Ritual de entrada y Hello routine
2. Warm-up: chant de la unidad con gestos
3. Story time
4. Juego del banco fijo
5. Movimiento o manipulación
6. Goodbye routine y ritual de salida

- Los minutos de los bloques **suman 45**.
- **Tope de actividad continua:** 8 minutos en 3 años, 10 en 4 y 12 en 5.
- Cada bloque declara su `energia` (`quieto` o `movimiento`); **nunca más de un tope seguido de la misma energía**.
- **Exactamente un bloque `recortable` por sesión**, que se omite si la sesión empieza tarde. Entrada, cuento y salida nunca son recortables. Al omitirlo, los dos bloques vecinos se separan con una pausa de un minuto de la energía contraria; la alternancia se valida sobre la sesión completa.
- La Hello routine es canción de saludo más **un** elemento que rota (quién ha venido, tiempo o emociones).
- Sesión tipo en `docs/06`: siete bloques, con el juego y la manipulación alternados según la energía del juego.

**Unidad de 10 sesiones, Encounter–Engage–Exploit:** Encounter = sesiones 1-3, Engage = 4-7, Exploit = 8-10. El cuento es el eje y aparece en casi todas las sesiones. **Las sesiones 8 a 10 incluyen observación** por muestreo (6 o 7 niños foco por sesión).

**Calendario:** se planifica sobre 90 sesiones útiles por curso (80 de núcleo y 10 de festividades). Los módulos de proyecto sustituyen sesiones de Exploit o usan el margen; no se añaden.

**Un solo adulto basta.** Cada sesión tiene versión base para 1 adulto y un recuadro opcional `con_auxiliar`. Los bloques son de 1 adulto salvo que digan `adultos: 2`, y **ningún bloque imprescindible puede ser de 2 adultos** (márcalo `opcional: true`). El auxiliar no evalúa. Subgrupos y rotaciones, solo con segundo adulto; parejas, desde 5 años.

**Respuesta simultánea.** En todo juego, todos los niños responden a la vez; el turno individual es un momento breve, no la mecánica.

**Vocabulario por unidad:**

| | 3 años | 4 años | 5 años |
| --- | --- | --- | --- |
| Nuclear (flashcard, gesto, se observa) | 4-6 | 6-8 | 6-8 |
| Estructuras | 1 para entender | 1 para decir + 1 para entender | 1 para decir + 1 para entender |
| Números en rutinas | 1-5 | 1-10 | 1-20 |
| Palabras nuevas en un módulo | 3-4 | 4-6 | 6-8 |

- `vocabulario` es lo nuclear y cumple el rango. `exposicion` son palabras que salen en el cuento o la rutina: no cuentan ni llevan flashcard.
- Una palabra es nuclear **una sola vez** en todo el ciclo; después va en `recicla`.
- Las unidades de 4 y 5 años declaran en `recicla` las palabras previas que necesitan.
- Primero entienden, después dicen: nunca se exige producción, pero se provoca y se registra.

**Criterios de evaluación** (Decreto 36/2022, área III): solo `1.3`, `2.3`, `3.8`, `5.2`, `5.4`. Evaluación por observación, sin notas. Indicadores por edad en `docs/06`.

**Banco fijo de juegos** (`contenido/comun/juegos.yaml`): *Listen and do*, *Stop!* y *What's missing?* desde 3 años; *Guess the card*, *Pair game* y *Bingo* desde 4; *Telephone* y juego de tablero desde 5. Todos tienen versión de gran grupo.

**Señas fijas:** un personaje guía por curso (3 años: **Pip**, zorrito naranja, tímido y cariñoso; 4 y 5 años pendientes), 3 normas *Look, Listen, Kind hands*, señal de atención con respuesta a coro, un gesto fijo por palabra clave. Nada de lectura ni escritura en inglés: ninguna imagen lleva letras.

**Material:** todo lo de una sesión cabe en una bolsa y se prepara en menos de un minuto. Sin comida real ni manualidades dentro de la sesión.

## Interactivos (`juegos/`)

- JavaScript **sin dependencias**; leen los datos de la unidad.
- **Un solo mecanismo sin conexión:** el botón de descarga monta en el navegador un único HTML con sus imágenes y audios. Ese archivo lleva todo dentro, sin `import` ni `fetch`. Nada de aplicación instalable ni ZIP por ahora.
- Dos modos: **táctil** y **sin táctil** (teclado y mando de presentaciones).
- Botones de **mínimo 80 px**, pantalla completa, alto contraste, nada que dependa de leer.
- Pensados para 3-5 minutos de uso.

## Privacidad

- **Ningún dato de alumnos** en el repositorio ni en la web: sin cuentas, formularios, analítica ni cookies de seguimiento.
- **Ningún recurso de terceros al cargar la web:** tipografías alojadas en el propio sitio; sin fuentes, scripts ni vídeos incrustados de otros servidores.
- El registro de observación se descarga como plantilla y se rellena fuera de la web, en la nube de EducaMadrid o en equipos del centro.
- Fotos de niños: nunca. Los vídeos para docentes se graban sin niños.
- Las voces grabadas de personas (docentes, auxiliar) necesitan su autorización escrita.
- Nunca se envían a una API externa voces, imágenes ni datos de alumnos.

## Licencias y créditos

- Todo recurso reutilizado se anota en `creditos/atribuciones.csv` **en el mismo commit** que lo añade.
- Recursos de terceros: solo **dominio público, CC0 o CC BY**, más los pictogramas de ARASAAC (CC BY-NC-SA) en su propio kit. **Nada con CC BY-SA** (OpenMoji, casi todo Wikimedia Commons): es incompatible con la licencia propuesta.
- Los materiales que incorporan pictogramas de ARASAAC llevan CC BY-NC-SA y su atribución.
- Todo lo generado con IA se anota en créditos: herramienta, modelo, voz o estilo, fecha y quién lo revisó.
- Prohibido: personajes de marcas o dibujos comerciales, vídeos o canciones de canales comerciales, álbumes comerciales escaneados.
- Licencia del método: **pendiente** (propuesta: CC BY-NC-SA para el contenido y una licencia de software para el código). No añadas un archivo LICENSE hasta que se decida.

## Medios

- Imágenes en **WebP**; audio en **MP3 mono** de 48-64 kbps (el Ogg Opus no suena en iPhone antiguos).
- Solo entran al repositorio **medios finales y aprobados**: cada archivo sustituido queda para siempre en el historial. Sin Git LFS.
- Originales, pruebas y vídeos **fuera del repositorio publicado** (el sitio no puede pasar de 1 GB). `pruebas/` no se publica.
- Páginas de familias por debajo de 5 MB.

## Producción con IA (Venice)

- Ilustración y voz se producen con la API de Venice, **en local**. La clave va en la variable de entorno `VENICE_API_KEY`; nunca en la web, en el repositorio ni en el chat.
- **Revisa el catálogo entero antes de elegir modelo** (`GET /models` en todos los tipos) y no escribas nombres de modelo en el código: caducan. Cada tanda guarda su manifiesto.
- **Ilustración:** gouache suave, con la guía de estilo de `docs/07`. El diseño de cada personaje lo origina una persona y se aprueba como ficha; la IA lo extiende con la ficha como referencia. Estilo ilustrado, nunca fotorrealista. Las imágenes de Pip de `pruebas/` no son un diseño aprobado.
- **Voz:** narrador Verity X y Pip Ana, ambas de ElevenLabs con el modelo v4 (identificadores en `docs/07`). El ritmo se fija en producción, frase a frase, con la pausa de cada curso. Ninguna voz cantada por IA.
- Antes de una tanda, lista lo que se va a generar y su coste, y pide confirmación.
- Revisa cada imagen y cada audio antes de darlo por bueno; lo dudoso se descarta.

## Identidad visual

- Plataforma docente: azul `#1B3A6B`, magenta `#C2185B`, tipografía DM Sans.
- Materiales de aula: ilustración en gouache suave, reconfortante; Fredoka y Atkinson Hyperlegible; un color por curso: naranja (3 años), verde (4), morado (5).

## Decisiones pendientes

No las tomes por tu cuenta; pregunta. La lista completa y al día está en `docs/07`, sección "Decisiones". Las principales:

- Generador de la web: **Astro o Eleventy** (`src/` está vacío hasta entonces).
- Licencia del método y del código.
- Dirección pública definitiva.
- Diseño de Pip y marioneta; personajes de 4 y 5 años (propuesta: Kiko, koala; Ollie, lechuza).
- Modelo de imagen y ritmo de la voz por curso.
- Quién revisa el inglés.
- Alojamiento de vídeos.
