# Story Steps — convenciones del proyecto

Método de inglés sin libro para Educación Infantil (3, 4 y 5 años) de un CEIP público bilingüe de la Comunidad de Madrid. Ámbito: bloque J "Lengua extranjera", 3 sesiones de 45 min por semana. Se publica como web docente estática en GitHub Pages.

Las fuentes de todo lo que sigue están en `docs/` (01-07). Ante una duda de método, manda `docs/06` (núcleo y módulos); ante una duda técnica, `docs/07` (plan de producción); ante una duda normativa, `docs/01` (marco curricular).

## Idiomas

- Interfaz de la web, guías, comentarios de código y commits: **castellano**.
- Contenido para los niños (cuentos, chants, vocabulario, *chunks*): **inglés británico** (*colour*, *mummy*, *jumper*).
- Páginas para familias: castellano, sin exigir saber inglés.

## Principio técnico: contenido como datos

Cada unidad se escribe **una vez** en `contenido/` (YAML) y el código genera a partir de ella páginas, sesiones, flashcards, bingo, fichas y juegos. Corregir una palabra en el YAML debe cambiarla en todas partes. Nunca dupliques contenido didáctico dentro de plantillas o motores de juego.

- Una unidad = un archivo por unidad y edad: `contenido/unidades/u1-3anos.yaml`. Plantilla: `contenido/unidades/_plantilla.yaml`.
- Un módulo de proyecto = `contenido/modulos/<proyecto>-<edad>anos.yaml`. Plantilla: `contenido/modulos/_plantilla.yaml`.
- Los archivos que empiezan por `_` son plantillas y no se publican.
- Rutas de medios relativas a `medios/`: `img/u1/teddy.webp`, `audio/u1/teddy.opus`.

## Reglas del método (no negociables)

**Sesión de 45 min, siempre la misma secuencia:**

1. Ritual de entrada y Hello routine (5 min)
2. Warm-up: chant de la unidad con gestos (5 min)
3. Story time (10 min)
4. Juego del banco fijo (10-15 min)
5. Movimiento o manipulación (5-10 min)
6. Goodbye routine y ritual de salida (5 min)

Se alterna quieto/movimiento cada 5-8 min. **En 3 años ningún bloque pasa de 8 minutos**; como seis bloques no llegan a 45 min con ese tope, en 3 años se parte algún bloque (p. ej. una pausa de movimiento entre story y juego). Una validación debe comprobar que los minutos suman 45 y este límite.

**Unidad de 10 sesiones, Encounter–Engage–Exploit:** Encounter = sesiones 1-3, Engage = 4-7, Exploit = 8-10. La sesión 10 incluye observación y registro. El cuento es el eje y aparece en casi todas las sesiones.

**Un solo adulto basta.** Cada sesión tiene versión base para 1 adulto y un recuadro opcional `con_auxiliar`. Cada bloque lleva `adultos: 1` o `adultos: 2`; **ningún bloque imprescindible puede ser de 2 adultos** (márcalo `opcional: true`). El auxiliar no evalúa.

**Progresión por edad (palabras nuevas por unidad):** 3 años 4-6 · 4 años 6-8 · 5 años 8-10. Números en rutinas: 1-5 · 1-10 · 1-20. En módulos: 3-4 · 4-6 · 6-8. Primero entienden, después dicen: nunca se exige producción.

**Criterios de evaluación** (Decreto 36/2022, área III): solo `1.3`, `2.3`, `3.8`, `5.2`, `5.4`. Evaluación por observación, sin notas.

**Banco fijo de juegos:** *Listen and do*, *Stop!*, *What's missing?*, *Pair game*, *Guess the card*, *Telephone*, *Bingo* y juego de tablero. En 3 años, sobre todo los tres primeros.

**Señas fijas:** un personaje guía por curso (3 años: **Pip**, zorrito naranja, tímido y cariñoso; 4 y 5 años pendientes), 3 normas *Look, Listen, Kind hands*, señal de atención con respuesta a coro, un gesto fijo por palabra clave. Nada de lectura ni escritura en inglés.

## Interactivos (`juegos/`)

- JavaScript **sin dependencias**; leen los datos de la unidad.
- Cada uno se exporta también como **un único HTML** con sus imágenes y audios, para usar sin conexión.
- Dos modos: **táctil** y **sin táctil** (teclado y mando de presentaciones).
- Botones de **mínimo 80 px**, pantalla completa, alto contraste, nada que dependa de leer.
- Pensados para 3-5 minutos de uso.

## Privacidad

- **Ningún dato de alumnos** en el repositorio ni en la web: sin cuentas, formularios, analítica ni cookies de seguimiento.
- El registro de observación se descarga como plantilla y se rellena fuera de la web.
- Fotos de niños: nunca.

## Licencias y créditos

- Todo recurso reutilizado se anota en `creditos/atribuciones.csv` **en el mismo commit** que lo añade.
- Imágenes de terceros: solo CC BY, CC BY-SA, CC0 o dominio público, salvo pictogramas de ARASAAC (CC BY-NC-SA).
- No mezclar en una misma lámina ARASAAC (BY-NC-SA) con OpenMoji (BY-SA).
- Prohibido: personajes de marcas o dibujos comerciales, vídeos o canciones de canales comerciales, álbumes comerciales escaneados.
- Licencia del método: **pendiente** (propuesta CC BY-NC-SA). No añadas un archivo LICENSE hasta que se decida.

## Medios

- Imágenes en **WebP**; audio en **Opus o MP3 mono** comprimido.
- Originales de alta resolución y vídeos **fuera del repositorio** (el sitio publicado no puede pasar de 1 GB). Los vídeos se enlazan desde EducaMadrid o YouTube oculto.
- Material generado con IA: solo si alcanza calidad profesional y lo validan los docentes; estilo ilustrado, nunca fotorrealista; ninguna voz cantada por IA.

## Identidad visual

- Plataforma docente: azul `#1B3A6B`, magenta `#C2185B`, tipografía DM Sans.
- Materiales de aula: ilustración plana y cálida, Fredoka y Atkinson Hyperlegible; un color por curso: naranja (3 años), verde (4), morado (5).

## Decisiones pendientes

No las tomes por tu cuenta; pregunta:

- Generador de la web: **Astro o Eleventy** (`src/` está vacío hasta entonces).
- Licencia del método.
- Personajes de 4 y 5 años (propuesta: Kiko, koala; Ollie, lechuza).
- Modelos de voz e imagen (tras las pruebas ciegas con docentes).
- Alojamiento de vídeos.
