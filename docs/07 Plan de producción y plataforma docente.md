# Plan de producción y plataforma docente

Oct 24, 2026 · @Óscar Parada · Revisado el 12/11/2026 (ver `docs/08 Revisión y propuestas.md`)

## Resumen

Hay que crear cuentos, ilustraciones, canciones, audios y materiales imprimibles, además de los planes de sesión. Para el núcleo de los tres cursos son **24 cuentos, unas 200 flashcards, 30 canciones o chants y 240 sesiones**. Hecho pieza a pieza serían entre 550 y 850 horas; con los recortes de este plan, unas 300-400. Todo se publica en una web docente estática en GitHub Pages, construida con Claude Code.

**Decisiones de partida:**

- **Contenido como datos.** Cada palabra se define una vez en el léxico y cada unidad se escribe una vez. La web genera a partir de ahí las páginas, los imprimibles y los juegos.
- **Sesiones desde arquetipos.** Las 240 sesiones salen de 30 arquetipos (10 por edad) más unos pocos datos por unidad.
- **Lo imprimible y lo manipulativo van primero;** la pizarra digital es un apoyo de pocos minutos, nunca el centro.
- **Todo interactivo funciona sin pantalla táctil y sin conexión,** y aprovecha el tacto cuando lo hay.
- **Ningún dato de alumnos en la web:** sin cuentas ni seguimiento; el registro de evaluación se descarga y se rellena en el centro.
- **Repositorio público:** en el plan gratuito de GitHub, Pages publica desde repositorios públicos, así que todo el material será visible. La licencia debe estar decidida antes de la primera publicación.
- **Piloto escalonado:** la U1 se prueba primero en 3 años y, con las plantillas corregidas, en 4 y 5.

## Inventario de materiales

Cantidades para el núcleo (8 unidades × 3 cursos). Los módulos de proyecto quedan congelados hasta que el núcleo haya pasado un curso completo.

| Material | Cantidad (núcleo) | Formato | Cómo se produce | Prioridad |
| --- | --- | --- | --- | --- |
| Personajes guía | 3, con una biblioteca de 10-15 posturas cada uno | Marioneta física + ilustraciones con fondo transparente | Diseño de origen humano; la marioneta se encarga a partir del diseño | Fase 0 |
| Cuentos | 24 (uno por unidad y edad) | Cuento digital con audio + PDF para imprimir (A3 para contar) | Texto original con el personaje del curso; páginas compuestas con posturas, fondos y objetos | Alta |
| Ilustraciones | Unas 120 piezas nuevas: posturas, fondos y objetos | PNG de trabajo, WebP en la web | Gouache suave, generado con Venice a partir de la ficha aprobada; revisión humana de cada pieza | Alta |
| Léxico ilustrado (flashcards) | Unas 200: 47 palabras en 3 años, 57 en 4, 55 en 5 y unas 40 de rutinas | Una imagen por palabra, compartida por las tres edades; tres tamaños desde la misma imagen | Ilustración propia; maquetación automática. Las mismas imágenes sirven de objetos en los cuentos | Alta |
| Pictogramas de aula | 1 kit: agenda visual, 3 normas, señal de atención, tiempo, emociones, días, números | PDF para plastificar | ARASAAC (CC BY-NC-SA), en su propio kit y con su atribución | Fase 0 |
| Canciones y chants | 6 canciones de rutina + 24 chants de unidad | Letra con gestos y audio | Chants rítmicos hablados; canciones de rutina sobre melodías tradicionales de dominio público. Voz humana para cantar | Alta |
| Audios | Tres pistas cortas por unidad y edad (chant, cuento, canción de rutina) más las palabras del léxico | MP3 mono, 48-64 kbps | Voz sintética con Venice; ritmo fijado en producción | Alta |
| Sesiones | 240, generadas desde 30 arquetipos | Página web + PDF | Arquetipo por edad más los datos de la unidad; recuadro *Con auxiliar* | Alta |
| Ficha resumen de unidad | 24 | Página web + PDF de una cara | Generada desde los datos de la unidad | Alta |
| Banco de juegos | 8 juegos | Ficha de instrucciones con versión de gran grupo | Escrito una vez; vale para todas las unidades | Fase 0 |
| Material del rincón | 24 lotes: cuento pequeño, flashcards dobles, marionetas de palo, cartones de bingo | PDF imprimible | Generado automáticamente desde el léxico de la unidad | Media |
| Fichas para casa | 24 | PDF A4 con QR + página web pública | Generadas desde la unidad; dibujo para colorear | Media |
| Registro de observación | 3 plantillas (una por curso) | Hoja de cálculo o PDF descargable | Con los 5 criterios y sus indicadores; se rellena fuera de la web | Media |
| Guía del método | 1, con una página "Si es tu primer día" para sustitutos | Web + PDF | Síntesis de los documentos de investigación | Fase 0 |
| Vídeos para el profesorado | 6 para empezar: ritual, señal de atención, tres juegos y cómo contar el cuento | Vídeo corto | Grabados con el móvil y sin niños | Media |
| Comunicación con familias | Carta de inicio (castellano y otras lenguas) | PDF | Redacción propia; traducción con el servicio de la Consejería | Media |

**Lo que no se produce en el primer curso:** vídeos y animaciones para los niños, vídeo generado con IA, aplicación instalable, paquetes ZIP y los 27 kits de módulos. El "cuento digital" (ilustración a pantalla completa, audio y página a página) da casi el mismo efecto que un vídeo con muchísimo menos peso y trabajo.

**Presupuesto de impresión.** El método ahorra el libro a las familias, pero traslada al centro un coste: flashcards en color y por duplicado para cada aula, plastificado y cuentos en A3. Hay que calcularlo por aula antes del piloto, y cada material tiene una versión en blanco y negro.

## Interactivos para la pizarra digital

La pizarra es un apoyo de pocos minutos por sesión. Cada interactivo es un **motor reutilizable** que se alimenta con el vocabulario y las imágenes de la unidad: se programa una vez y sirve para las 24 unidades. Todos tienen dos modos: **táctil** (los niños tocan la pantalla) y **sin táctil** (el docente maneja con ratón o teclado y los niños responden con el cuerpo o señalando).

El piloto empieza con tres: cuento digital, Listen and touch y Bingo caller. Los demás se programan cuando un docente los pida.

| Interactivo | Para qué | Sin pantalla táctil | Con pantalla táctil |
| --- | --- | --- | --- |
| Cuento digital | Story time con ilustración a pantalla completa y audio | El docente pasa páginas; los niños señalan y repiten | Un niño pasa la página o toca un personaje y oye su frase |
| Listen and point / touch | Comprensión del vocabulario | Suena la palabra; los niños señalan la tarjeta física o en pantalla | Un niño toca la imagen correcta |
| Bingo caller | Llamador de bingo con imagen y audio | Igual en ambos modos | Igual en ambos modos |
| Rutina del día | Hello routine: quién ha venido, tiempo, emociones, día | El docente elige; los niños dicen o hacen el gesto | Un niño arrastra el tiempo o su emoción |
| Agenda visual | Pasos de la sesión con pictogramas | Se marca el paso actual con una tecla | Un niño mueve la marca al paso siguiente |
| What's missing? | Memoria de vocabulario | El docente oculta una imagen con una tecla | Igual, y un niño toca dónde estaba |
| Pair game (memory) | Parejas con la palabra dicha en voz alta | El docente gira las cartas que pide el grupo | El niño gira las cartas |
| Ruleta o dado | Elegir turno, palabra o acción del juego | Una tecla la hace girar | Un niño la toca |
| Who says…? | Discriminación auditiva con sonidos de animales, transportes o tiempo | El docente lanza el sonido; los niños imitan o nombran | Un niño toca la imagen que suena |

**Requisitos técnicos de todos los interactivos:**

- Funcionan **sin conexión** con un solo mecanismo: el botón "Descargar para usar sin conexión" monta en el navegador un único archivo HTML con sus imágenes y audios. No añade peso al sitio.
- Ese archivo lleva todo dentro: un HTML abierto desde el disco no puede cargar módulos ni pedir datos.
- Botones táctiles grandes (mínimo 80 píxeles), nada que dependa de leer y sin anuncios, cuentas ni seguimiento.
- Atajos de teclado y mando de presentaciones para el modo sin táctil.
- Pantalla completa, alto contraste y textos en inglés solo como apoyo del docente.
- Duración pensada para 3-5 minutos: un niño sale a la pizarra mientras el grupo participa desde su sitio.

## Imagen y voz con Venice

Decidido el 12/11/2026: la ilustración y la voz se producen con la API de Venice. Las pruebas de ese día están en `pruebas/venice-2026-11-12/` y su análisis en `docs/08`.

**Principio:** material de calidad o nada. Si algo se nota claramente hecho con IA o queda cutre, no se publica.

**Los nombres de modelo caducan.** En tres semanas cambiaron tres de los cuatro modelos que este documento citaba. Por eso aquí se fija el procedimiento, y cada tanda guarda en el repositorio su manifiesto (modelo, voz o estilo, parámetros, referencia y fecha).

### Ilustración

**El diseño lo origina una persona; la IA lo extiende.** Un personaje inventado por el modelo converge en el mismo aspecto genérico que todo lo que se genera hoy.

1. **Diseño de Pip:** boceto del equipo o ficha encargada a un ilustrador.
2. **Ficha oficial** en gouache suave: frente, perfil, espalda y 6-8 expresiones. Se aprueba con el equipo y se guarda en `medios/personajes/`.
3. **Marioneta:** se encarga a medida a partir del diseño, con los derechos por escrito y al menos dos unidades. Si se compra una genérica, la ilustración no usa sus fotos como referencia: solo comparte el animal y los colores.
4. **Biblioteca de posturas:** 10-15 posturas por personaje con fondo transparente, generadas en una sola tanda con la ficha como referencia.
5. **Páginas compuestas:** cada página del cuento combina una postura, un fondo sencillo y objetos del léxico. Se genera poco y se compone mucho: da consistencia y resiste los cambios de modelo.
6. **Revisión:** una persona aprueba cada imagen. Se descarta lo que tenga deformaciones, letras, cambios en el personaje o parecido con personajes comerciales.

**Técnica:** gouache suave (decidido el 12/11/2026).

**Guía de estilo provisional.** El objetivo es que el estilo resulte reconfortante para el alumnado:

| Regla | Concreción |
| --- | --- |
| Emoción | Reconfortante. El gesto y la postura llevan la emoción; nunca miedo sin consuelo en la misma página |
| Personaje | Pequeño en el encuadre, de perfil o tres cuartos. Ojos de punto, sin brillo ni colorete |
| Luz | Una fuente de luz cálida por página; una zona cálida y otra fría, sin sombras duras |
| Espacio | Fondo en calma, con un máximo de tres o cuatro objetos y sin letras |
| Paleta | El color del personaje, crema, azul cielo, miel y madera. Un único acento por página |
| Punto de vista | A la altura de un niño de 3 años |

**Elección del modelo.** Se eligen los modelos que admiten imágenes de referencia, porque la consistencia sale de ahí. Criterios: coherencia del personaje en diez posturas, fidelidad a la guía de estilo y condiciones de redistribución. Prueba ciega con la ficha aprobada y pruebas duras: sentado, de espaldas, triste, con otro personaje y tres páginas seguidas.

**Detalles técnicos comprobados:**

- El filtro de contenido falla de forma intermitente y devuelve una imagen en negro con respuesta correcta. El guion de producción lee las cabeceras `x-venice-is-content-violation` y `x-venice-is-blurred` y descarta esas imágenes.
- Algunos modelos devuelven un formato distinto del pedido: el guion comprueba el formato real.
- Fondo transparente: disponible en algunos modelos; hay que revisar los bordes sobre blanco.

**Coste estimado:** unos 75-135 $ para todas las imágenes del núcleo, con tres intentos por cada una aprobada. Lo caro es el tiempo de revisión.

### Voz

| Uso | Voz | Dato para producir |
| --- | --- | --- |
| Narrador, común a los tres cursos; también dice las palabras sueltas | Verity X | ElevenLabs, voz de biblioteca `1hlpeD1ydbI2ow0Tt3EW`, modelo `elevenlabs-tts-v4` |
| Pip | Ana | ElevenLabs, voz de biblioteca `rCmVtv8cYU60uhlsOo1M`, modelo `elevenlabs-tts-v4` |
| Personajes de 4 y 5 años | Pendiente | Se eligen cuando existan los personajes |
| Reserva | Lily o George | Voces de serie de ElevenLabs |

- **Las dos voces elegidas son de biblioteca:** su autor puede retirarlas. Todo el audio de cada voz se genera en pocas tandas y los originales se guardan fuera del repositorio.
- **El ritmo es un dato del método, no del modelo.** Cada frase se genera por separado; el guion las une con la pausa que fija cada curso y, si hace falta, ralentiza sin cambiar el tono. Más pausa en 3 años.
- **Chants y canciones:** voz humana. Ninguna voz cantada por IA.
- **Efectos de sonido:** Freesound CC0 antes que efectos generados.
- **Coste estimado:** entre 5 y 10 $ para todo el audio del núcleo.

### Vídeo

Aplazado. El vídeo con IA es la pieza de más riesgo y menos valor, y no forma parte del primer curso. Para los mini-diálogos y los vídeos de formación se graba la marioneta real con el móvil, sin niños.

### Comprobaciones antes de publicar

- Condiciones de Venice y de cada proveedor: que imágenes y audio generados se pueden redistribuir con la licencia del método.
- Condiciones de uso de las voces de biblioteca de ElevenLabs.
- En créditos: qué se ha generado con IA, con qué herramienta y quién lo revisó.
- La clave de la API nunca entra en la web ni en el repositorio: los medios se generan en local y solo se publican los archivos resultantes.
- Nunca se envían a la API voces, imágenes ni datos de alumnos.

## Plataforma docente en GitHub Pages

Una web estática al estilo de las plataformas de editorial: el docente elige curso, trimestre y unidad, y encuentra todo lo que necesita para cada sesión.

**Secciones:**

| Sección | Contenido |
| --- | --- |
| Inicio | Elegir curso (3, 4 o 5 años); accesos a guía, rutinas y juegos |
| Curso | Calendario del año con las 8 unidades, festividades y margen |
| Unidad | Ficha resumen (vocabulario, *chunks*, criterios, cuento, chant), 10 sesiones, recursos, interactivos, material del rincón y ficha para casa |
| Sesión | Plan paso a paso de 45 min (versión base + recuadro *Con auxiliar*), bloque recortable, materiales necesarios, botón para abrir cada interactivo |
| Módulos de proyecto | Buscador por proyecto y edad; mismo formato que las unidades |
| Festividades | Sesiones de Halloween, Christmas, Easter y fin de curso, con su versión neutra |
| Rutinas y juegos | Canciones de rutina, banco de juegos con instrucciones, gestos clave |
| Evaluación | Criterios, indicadores, cómo observar y plantillas descargables del registro |
| Guía del método | Principios, diversidad y conducta, uso del castellano, auxiliar, "Si es tu primer día" |
| Familias | Una página pública por unidad, a la que lleva el QR: audio, canción y dibujo, con explicación en castellano |
| Créditos, licencias y privacidad | Atribuciones, licencia del método, qué se ha generado con IA y qué datos trata el sitio (ninguno de alumnos) |

**Funciones:**

- **Modo pizarra:** cada cuento e interactivo se abre a pantalla completa con controles grandes.
- **Imprimir:** vista de impresión en el navegador y, además, PDF ya generados en cada publicación, que se sirven como descarga fuera del repositorio. Un PDF hecho es más fiable que el diálogo de impresión.
- **Sin conexión:** el archivo HTML único de cada interactivo. La aplicación instalable y el ZIP por unidad quedan aplazados.
- **Filtros:** curso, unidad, tipo de recurso, "1 adulto" o "con auxiliar".
- **Sin recursos de terceros al cargar:** las tipografías se alojan en el propio sitio; ni fuentes ni vídeos ni scripts externos.
- **Direcciones estables:** las páginas de familias no cambian de dirección; los QR se generan en local y sin acortadores.

**Límites de GitHub Pages** ([documentación de GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)) y cómo los cumplimos:

| Límite | Valor | Estimación del método | Medida |
| --- | --- | --- | --- |
| Tamaño del sitio publicado | Máximo 1 GB | Unos 110 MB de audio y unos 60 MB de imágenes en el núcleo | MP3 mono comprimido, imágenes WebP, sin vídeos; las descargas sin conexión se montan en el navegador |
| Repositorio | 1 GB recomendado | Similar al sitio | Solo entran medios finales y aprobados: cada archivo sustituido queda para siempre en el historial. Sin Git LFS |
| Ancho de banda | 100 GB/mes (límite flexible) | Muy por debajo, incluso con las familias escuchando audios | Páginas de familias por debajo de 5 MB |
| Despliegue | 10 minutos | Holgado | Publicación con GitHub Actions |
| Contenido | Sin datos sensibles ni uso comercial | Ningún dato de alumnos ni registros | Sin cuentas ni formularios |

- **Audio en MP3, no en Opus:** el Ogg Opus solo funciona en iPhone desde iOS 18.4, y las familias escuchan los audios en el móvil.
- **Red del centro:** hay que comprobar desde un ordenador de aula que el filtro no bloquea `github.io`.
- **Vídeos:** se alojan fuera y la web solo los enlaza.

## Mapa de la web

&#91;embedded content: mapa de la web docente · del inicio a la sesión\]

El docente llega a cualquier sesión en tres pasos (curso, unidad, sesión); las secciones fijas están siempre en el menú y la página de familias es la única pensada para público externo.

## Arquitectura técnica para Claude Code

**Principio:** el contenido didáctico se escribe como datos estructurados y el código lo convierte en páginas, imprimibles e interactivos. Corregir una palabra en un solo sitio la cambia en la sesión, la flashcard, el bingo y el juego.

**Pila propuesta:**

- **Generador de sitio estático** (Astro o Eleventy, pendiente) publicado con GitHub Actions en GitHub Pages.
- **Validador independiente del generador:** `herramientas/validar.mjs` comprueba las reglas del método en cada cambio y antes de publicar (`npm run validar`). Así las reglas sobreviven a un cambio de generador. Tiene sus propias pruebas (`npm test`).
- **Contenido en archivos YAML,** editables sin saber programar.
- **Motores de juego en JavaScript sin dependencias,** que leen los datos de la unidad.
- **Hojas de estilo de impresión** y PDF generados para flashcards, cuentos, fichas y cartones de bingo.

**Modelo de datos:**

```text
contenido/
  comun/
    cursos.yaml       por edad: personaje, color, tope de bloque, rango de palabras, ritmo de la voz
    lexico.yaml       una entrada por palabra: id, palabra, gesto
    juegos.yaml       banco fijo: energía, edad mínima, versión de gran grupo
    rutinas.yaml      normas, señal de atención y calendario de rutinas
    arquetipos.yaml   esqueleto de las sesiones 1 a 10 por edad
  unidades/u1-3.yaml
  modulos/  festividades/
medios/
  lexico/teddy.webp · teddy.mp3
  u1-3/cuento-01.webp · cuento-01.mp3 · chant.mp3
  personajes/
```

Una unidad:

```yaml
curso: 3
unidad: 1
titulo: Hello, school!
estado: borrador                  # borrador · revisado · pilotado
vocabulario: [hello, goodbye, sit-down, stand-up, listen, quiet]   # ids del léxico
exposicion: [bag, coat]           # salen en el cuento; no cuentan ni llevan flashcard
recicla: []
chunks:
  - {texto: "Sit down, please.", nivel: entienden}
  - {texto: "Hello!", nivel: formula}   # fórmula de rutina; no cuenta como estructura
criterios: ["1.3", "2.3", "5.2"]
cuento:
  titulo: ...
  paginas:
    - {texto: ..., corta: true, participan: "saludan con la mano"}
chant: {titulo: ..., letra: ..., gestos: ...}
sesiones:
  - n: 1
    arquetipo: encounter-1        # aporta bloques, minutos y energía
    juego: listen-and-do
    palabras: [hello, goodbye]
    cambios: []                   # solo lo que se sale del arquetipo
    con_auxiliar: ...
```

- **Una palabra, un sitio:** imagen, audio y gesto viven en el léxico; las tres edades comparten la misma flashcard.
- **Rutas por convención:** el YAML no lleva rutas de medios; el validador comprueba que existe cada archivo esperado.
- **Identificadores cortos:** `u1-3` es la unidad 1 de 3 años. Aparecen en direcciones públicas, así que no cambian.

**Qué comprueba el validador:**

- Los minutos de cada sesión suman 45 y hay exactamente un bloque recortable.
- Tope de actividad continua por edad (8, 10 y 12) y alternancia de energía.
- Vocabulario nuclear dentro del rango de la edad; ninguna palabra es nuclear dos veces.
- Criterios dentro de los cinco admitidos.
- Diez sesiones con la fase que corresponde a su número; sesiones 8 a 10 con observación.
- Todo bloque de dos adultos es opcional.
- Juego dentro del banco y permitido para la edad.
- Existen todos los medios esperados; cada medio de terceros tiene fila en `creditos/atribuciones.csv` con licencia admitida.
- Ortografía británica: lista corta de términos vetados.
- Peso máximo por imagen, por audio y del sitio.

**Estructura del repositorio:**

```text
/contenido/      léxico, datos comunes, unidades, módulos y festividades (YAML)
/medios/         imágenes y audios finales y optimizados
/juegos/         motores de los interactivos
/src/            plantillas de páginas y vista de impresión
/herramientas/   validador de las reglas del método y sus pruebas
/creditos/       registro de atribuciones y licencias
/docs/           documentos del método (versión canónica)
/pruebas/        pruebas de producción; no se publican
CLAUDE.md        convenciones del proyecto para Claude Code
```

## Fases de producción

| Fase | Qué se produce | Resultado |
| --- | --- | --- |
| 0. Cimientos | Diseño de Pip y estilo visual, léxico y datos comunes, validador, kit de pictogramas, banco de juegos, canciones de rutina y esqueleto de la web | Todo lo común a las 24 unidades |
| 1a. Piloto en 3 años | U1 de 3 años completa: cuento, audios, flashcards, 10 sesiones desde arquetipos y cuento digital | Primera versión usable; se prueba en el aula con una ficha de seguimiento por sesión y se miden las horas reales |
| 1b. Piloto en 4 y 5 años | U1 de 4 y 5 años con las plantillas corregidas; Listen and touch y Bingo caller | Los tres cursos probados |
| 2. Primer trimestre | U2, U3, Halloween y Christmas | Primer trimestre completo |
| 3. Resto del núcleo | U4 a U8, Easter, fin de curso y páginas de familias | Núcleo de los tres cursos |
| 4. Ampliación | Módulos de proyecto, resto de interactivos y vídeos de formación | Método completo |

**Qué mide el piloto:** minutos reales por bloque, bloque recortado, qué funcionó y qué no en cada sesión; una pregunta a los tutores y otra a las familias, en papel o en tutoría, porque la web no lleva analítica. Los criterios que harían cambiar una plantilla se escriben antes de empezar.

**Ritmo de implantación.** Se decide con las horas reales del piloto: los tres cursos a la vez, o un curso por año siguiendo a la promoción (3 años primero), que reparte el trabajo en ocho unidades por curso.

## Decisiones

Lista única del proyecto. Las recomendaciones razonadas de las pendientes están en `docs/08`, sección 8.

**Tomadas**

- [x] Nombre del método: **Story Steps** (repositorio `story-steps`).
- [x] Identidad visual en dos capas: plataforma docente sobria (azul `#1B3A6B`, magenta `#C2185B`, DM Sans) y materiales de aula infantiles (Fredoka y Atkinson Hyperlegible, un color por curso: naranja, verde y morado).
- [x] Personaje de 3 años: **Pip**, zorrito naranja, tímido y cariñoso.
- [x] Ilustración y voz con la API de Venice (12/11/2026).
- [x] Técnica de ilustración: gouache suave, con la guía de estilo provisional (12/11/2026).
- [x] Voz del narrador: Verity X. Voz de Pip: Ana (12/11/2026).
- [x] Audio en MP3; un solo mecanismo sin conexión; vídeo con IA aplazado (12/11/2026).

**Pendientes**

- [ ] Generador de la web: Astro o Eleventy.
- [ ] Licencia del método y del código, antes de la primera publicación.
- [ ] Dirección pública definitiva, antes de imprimir ningún QR: al transferir el repositorio la dirección de Pages cambia y no redirige.
- [ ] Diseño de Pip y marioneta: quién lo dibuja, a quién se encarga la marioneta y cuántas hacen falta.
- [ ] Personajes de 4 y 5 años (propuesta: Kiko, koala, y Ollie, lechuza) y sus voces.
- [ ] Modelo de imagen: prueba ciega con la ficha de Pip aprobada.
- [ ] Ritmo de la voz por curso.
- [ ] Quién revisa el inglés de cuentos, canciones y sesiones.
- [ ] Dónde se alojan los vídeos: Mediateca de EducaMadrid o YouTube en modo oculto.
- [ ] Ritmo de implantación, tras el piloto.
- [ ] Inventario de pantallas y sonido del centro, y presupuesto de impresión por aula.
- [ ] Comprobar las condiciones de Venice, de cada proveedor y de las voces de biblioteca.
