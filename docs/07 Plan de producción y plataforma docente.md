# Plan de producción y plataforma docente

Oct 24, 2026 · @Óscar Parada

## Resumen

Sí: hay que crear cuentos, ilustraciones, canciones, audios y materiales imprimibles, además de los planes de sesión. Para el núcleo de los tres cursos son unos **24 cuentos, unas 210 flashcards, unas 30 canciones o chants y 240 planes de sesión**; los módulos de proyecto y las festividades se añaden después. Todo se publica en una web docente estática en GitHub Pages, construida con Claude Code.

**Decisiones de partida:**

- **Contenido como datos.** Cada unidad se escribe una vez (vocabulario, cuento, chant, sesiones) y la web genera a partir de ella las páginas, los imprimibles y los juegos. Así 240 sesiones no son 240 documentos sueltos.
- **Lo imprimible y lo manipulativo van primero;** la pizarra digital es un apoyo de pocos minutos, nunca el centro.
- **Todo interactivo funciona sin pantalla táctil y sin conexión,** y aprovecha el tacto cuando lo hay.
- **Ningún dato de alumnos en la web:** sin cuentas ni seguimiento; el registro de evaluación se descarga y se rellena en el centro.
- **Repositorio público:** en el plan gratuito de GitHub, Pages publica desde repositorios públicos, así que todo el material será visible. Encaja con una licencia abierta del método (CC BY-NC-SA).

## Inventario de materiales

Cantidades estimadas para el núcleo (8 unidades × 3 cursos). Los módulos de proyecto (9 proyectos × 3 edades) y las festividades se producen después con las mismas plantillas.

| Material | Cantidad (núcleo) | Formato | Cómo se produce | Prioridad |
| --- | --- | --- | --- | --- |
| Personajes guía | 3 marionetas, con 10-15 posturas ilustradas cada una | Marioneta física + ilustraciones | Diseño propio; la marioneta se compra o se fabrica | Fase 0 |
| Cuentos | 24 (uno por unidad y edad) | PDF para proyectar e imprimir (A3 para contar) + versión digital con audio | Texto propio; ilustraciones propias o reutilizadas con licencia CC BY (Book Dash, StoryWeaver) | Alta |
| Ilustraciones de cuentos | 200-300 escenas | PNG/WebP | Reutilización CC BY + ilustración propia; estilo común | Alta |
| Flashcards | Unas 210 (40 en 3 años, 56 en 4, 72 en 5, unas 40 de rutinas) | PDF en 3 tamaños: grande para presentar, pequeña por duplicado para juegos y rincón, digital | Imágenes CC BY, fotos de Openverse o ilustración propia; maquetación automática | Alta |
| Pictogramas de aula | 1 kit: agenda visual, 3 normas, señal de atención, tiempo, emociones, días, números | PDF para plastificar | ARASAAC (CC BY-NC-SA) | Fase 0 |
| Canciones y chants | Unas 30: 6 de rutina comunes + 24 chants de unidad | Letra con gestos, partitura sencilla y audio | Letra y música originales o melodías tradicionales de dominio público | Alta |
| Audios | Unas 80 pistas: cuento narrado, chant y audio diario de 5-10 min por unidad y edad, más rutinas | MP3 u Opus comprimido | Grabación con voces del equipo (y auxiliar si lo hay) | Alta |
| Planes de sesión | 240 (10 por unidad y edad) | Página web + PDF | Escritos como datos sobre una plantilla; versión base y recuadro *Con auxiliar* | Alta |
| Ficha resumen de unidad | 24 | Página web + PDF de una cara | Generada desde los datos de la unidad | Alta |
| Banco de juegos | 8 juegos | Ficha de instrucciones + vídeo corto | Escrito una vez; vale para todas las unidades | Fase 0 |
| Material del rincón | 24 lotes: cuento pequeño, flashcards dobles, cartones de bingo, tablero | PDF imprimible | Generado automáticamente desde el vocabulario de la unidad | Media |
| Fichas para casa | 24 | PDF A4 con QR + página web pública | Generadas desde la unidad; dibujo para colorear | Media |
| Registro de observación | 3 plantillas (una por curso) | Hoja de cálculo o PDF descargable | Con los 5 criterios; se rellena fuera de la web | Media |
| Guía del método | 1 | Web + PDF | Síntesis de los documentos de investigación | Fase 0 |
| Vídeos para el profesorado | 15-25 cortos: rutinas, gestos clave, cómo contar el cuento, cada juego | Vídeo corto | Grabados por el equipo | Media |
| Comunicación con familias | Carta de inicio (castellano y otras lenguas) + vídeo explicativo | PDF + vídeo | Redacción propia; traducción con el servicio de la Consejería | Media |

**Vídeos y animaciones para los niños:** no son imprescindibles. El "cuento digital" (ilustración a pantalla completa + audio + página a página) da casi el mismo efecto con muchísimo menos peso y trabajo.

## Interactivos para la pizarra digital

La pizarra es un apoyo de pocos minutos por sesión. Cada interactivo es un **motor reutilizable** que se alimenta con el vocabulario y las imágenes de la unidad: se programa una vez y sirve para las 24 unidades. Todos tienen dos modos: **táctil** (los niños tocan la pantalla) y **sin táctil** (el docente maneja con ratón o teclado y los niños responden con el cuerpo o señalando).

| Interactivo | Para qué | Sin pantalla táctil | Con pantalla táctil |
| --- | --- | --- | --- |
| Cuento digital | Story time con ilustración a pantalla completa y audio | El docente pasa páginas; los niños señalan y repiten | Un niño pasa la página o toca un personaje y oye su frase |
| Rutina del día | Hello routine: quién ha venido, tiempo, emociones, día | El docente elige; los niños dicen o hacen el gesto | Un niño arrastra el tiempo o su emoción |
| Agenda visual | Pasos de la sesión con pictogramas | Se marca el paso actual con una tecla | Un niño mueve la marca al paso siguiente |
| Listen and point / touch | Comprensión del vocabulario | Suena la palabra; los niños señalan la tarjeta física o en pantalla | Un niño toca la imagen correcta |
| What's missing? | Memoria de vocabulario | El docente oculta una imagen con una tecla | Igual, y un niño toca dónde estaba |
| Pair game (memory) | Parejas con la palabra dicha en voz alta | El docente gira las cartas que pide cada niño | El niño gira las cartas |
| Bingo caller | Llamador de bingo con imagen y audio | Igual en ambos modos | Igual en ambos modos |
| Ruleta o dado | Elegir turno, palabra o acción del juego | Una tecla la hace girar | Un niño la toca |
| Who says…? | Discriminación auditiva con sonidos de animales, transportes o tiempo | El docente lanza el sonido; los niños imitan o nombran | Un niño toca la imagen que suena |

**Requisitos técnicos de todos los interactivos:**

- Funcionan **sin conexión**: cada uno se puede descargar como un único archivo HTML con sus imágenes y audios, para clases sin wifi fiable.
- Botones táctiles grandes (mínimo 80 píxeles), nada que dependa de leer y sin anuncios, cuentas ni seguimiento.
- Atajos de teclado y mando de presentaciones para el modo sin táctil.
- Pantalla completa, alto contraste y textos en inglés solo como apoyo del docente.
- Duración pensada para 3-5 minutos: un niño sale a la pizarra mientras el grupo participa desde su sitio.

## Imagen, audio y vídeo con IA (Venice)

**Principio:** material de calidad o nada. Si algo se nota claramente hecho con IA o queda cutre, no se publica y se usa la alternativa manual.

**Imágenes: la marioneta manda.** Lo que los niños ven cada sesión es la marioneta física, y es lo más difícil de encontrar y de reponer. Por eso la ilustración se diseña a partir de ella:

1. **Conseguir la marioneta de Pip:** de guante, con cola visible (el cuento la usa), de un tamaño cómodo para la mano del docente y que se pueda reponer. Hacen falta al menos 2 (una de repuesto) y, si varios docentes dan 3 años a la vez, una por docente. Dos vías:
   - Comprar una marioneta genérica de zorro de un fabricante que la mantenga en catálogo.
   - Encargarla a medida (fieltro o peluche), con lo que el diseño es nuestro y se pueden pedir réplicas iguales.
2. **Accesorios** de la U1: mochila roja y abrigo amarillo a su tamaño.
3. **Fotografiarla** con fondo neutro desde varios ángulos, solo la marioneta.
4. **Ficha oficial ilustrada** generada a partir de las fotos (frente, perfil, espalda y 6-8 expresiones). Se aprueba con el equipo y desde ahí se genera todo lo demás, con un solo modelo y un solo estilo.
5. Si la marioneta es de un fabricante, la ilustración solo toma la idea general del animal y los colores, no los rasgos distintivos de su diseño.

**Piloto de imagen:** la ficha de Pip y 3 páginas del cuento de la U1 en 3 o 4 modelos de Venice (por ejemplo Nano Banana 2, GPT Image 2.5, Recraft V4 y Seedream). El equipo elige a ciegas; el modelo y el estilo elegidos quedan fijados. Coste estimado de todas las imágenes del núcleo: 75-225 $, contando intentos descartados.

**Audio:**

- La API de Venice da acceso a muchos modelos de voz (ElevenLabs v3 y v4, Kokoro, Inworld, xAI, Qwen 3 y otros), además de efectos y música.
- Antes de producir en serie se hace una **prueba ciega**: la misma página de cuento y la misma lista de palabras en 5 o 6 modelos. Los docentes eligen por claridad para niños de 3 años, calidez y ritmo.
- **Reparto:**
  - Voz barata para las palabras sueltas.
  - Voz expresiva fija para cada personaje en los cuentos.
  - Voz humana para cantar.
  - Freesound CC0 antes que efectos generados.
- **Coste estimado del audio del núcleo:** unos 10-20 $.

**Vídeo puntual:**

| Tipo | Duración | Uso |
| --- | --- | --- |
| Clip del personaje | 5-15 s | Ritual de entrada y salida, reacciones de la marioneta |
| Flashcard animada | 5 s | Verbos de acción (jump, run, rain) |
| Escena con diálogo o canción | 20-60 s | Mini-diálogos entre marionetas, chant de la unidad, presentación del cuento, vídeo para familias |

- Las escenas largas se montan encadenando planos de unos 15 segundos.
- La herramienta candidata es [venice-video-harness](https://github.com/jordanurbs/venice-video-harness), de código abierto: mantiene al personaje igual entre planos con imágenes de referencia, presupuesta antes de pagar y monta el resultado.
- No forma parte de la web; se usa en local.

**Criterios de calidad (todos obligatorios):**

- **Estilo ilustrado y coherente** con los cuentos (2D o aspecto de marioneta), nunca fotorrealista. El estilo ilustrado disimula mejor los defectos y encaja con la edad.
- **El personaje siempre igual:** se genera a partir de las ilustraciones oficiales de cada marioneta como referencia.
- **Movimiento sencillo y planos cortos.** Se evitan manos en primer plano, multitudes y texto dentro del vídeo, que es donde más falla la IA.
- **Sonido controlado:** las voces salen del modelo elegido en la prueba ciega y la música es una base instrumental. Nada de voces cantadas por IA.
- **Revisión de cada clip:** deformaciones, parpadeos, cambios de cara o de color, gestos raros y sincronía labial. Lo que falla se regenera o se descarta.
- **Validación por los docentes antes de publicar.**

**Alternativas si el vídeo con IA no da la calidad o el coste se dispara:**

- Animar en la propia web nuestras ilustraciones (movimiento suave, zoom, capas) con audio. Es barato y totalmente controlable.
- Grabar la marioneta real con el móvil. Es auténtico y tiene la mejor relación calidad-esfuerzo para los mini-diálogos.

**Coste:** se decide tras un piloto. Un clip de 10 segundos y una escena de 30 segundos del personaje de 3 años sirven para medir el gasto real por segundo útil, contando los intentos descartados.

## Plataforma docente en GitHub Pages

Una web estática al estilo de las plataformas de editorial: el docente elige curso, trimestre y unidad, y encuentra todo lo que necesita para cada sesión.

**Secciones:**

| Sección | Contenido |
| --- | --- |
| Inicio | Elegir curso (3, 4 o 5 años); accesos a guía, rutinas y juegos |
| Curso | Calendario del año con las 8 unidades, festividades y huecos flexibles |
| Unidad | Ficha resumen (vocabulario, *chunks*, criterios, cuento, chant), 10 sesiones, recursos, interactivos, material del rincón y ficha para casa |
| Sesión | Plan paso a paso de 45 min (versión base + recuadro *Con auxiliar*), materiales necesarios, botón para abrir cada interactivo |
| Módulos de proyecto | Buscador por proyecto y edad; mismo formato que las unidades |
| Festividades | Sesiones de Halloween, Christmas, Easter y fin de curso |
| Rutinas y juegos | Canciones de rutina, banco de juegos con instrucciones y vídeo, gestos clave |
| Evaluación | Criterios, cómo observar y plantillas descargables del registro |
| Guía del método | Principios, diversidad y conducta, uso del castellano, auxiliar |
| Familias | Una página pública por unidad, a la que lleva el QR: audio, canción y dibujo, con explicación en castellano |
| Créditos y licencias | Atribuciones de todo lo reutilizado y licencia del método |

**Funciones:**

- **Modo pizarra:** cada cuento e interactivo se abre a pantalla completa con controles grandes.
- **Imprimir sin PDFs pesados:** las flashcards, cuentos y fichas tienen una vista de impresión que genera el PDF desde el navegador.
- **Descarga por unidad:** un paquete ZIP con interactivos, audios e imágenes para usar sin conexión.
- **Funciona sin conexión** una vez visitada (aplicación web instalable).
- **Filtros:** curso, unidad, tipo de recurso, "1 adulto" o "con auxiliar".

**Límites de GitHub Pages** ([documentación de GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)) y cómo los cumplimos:

| Límite | Valor | Estimación del método | Medida |
| --- | --- | --- | --- |
| Tamaño del sitio publicado | Máximo 1 GB | Unos 110 MB de audio y unos 60 MB de imágenes en el núcleo | Audio mono comprimido, imágenes WebP, sin vídeos ni PDFs pesados en el repositorio |
| Repositorio | 1 GB recomendado | Similar al sitio | Originales de alta resolución fuera del repositorio |
| Ancho de banda | 100 GB/mes (límite flexible) | Muy por debajo, incluso con las familias escuchando audios | Audios ligeros |
| Contenido | Sin datos sensibles ni uso comercial | Ningún dato de alumnos ni registros | Sin cuentas ni formularios |

**Vídeos:** se alojan fuera (Mediateca de EducaMadrid o YouTube en modo oculto) y la web solo los enlaza o los incrusta.

## Mapa de la web

&#91;embedded content: mapa de la web docente · del inicio a la sesión\]

El docente llega a cualquier sesión en tres pasos (curso, unidad, sesión); las secciones fijas están siempre en el menú y la página de familias es la única pensada para público externo.

## Arquitectura técnica para Claude Code

**Principio:** el contenido didáctico se escribe como datos estructurados y el código lo convierte en páginas, imprimibles e interactivos. Así se puede corregir una palabra en un solo sitio y cambia en la sesión, la flashcard, el bingo y el juego.

**Pila propuesta:**

- **Generador de sitio estático** (Astro o Eleventy) publicado con GitHub Actions en GitHub Pages. Astro tiene la ventaja de validar los datos de cada unidad con un esquema, lo que evita errores al escribir 240 sesiones.
- **Contenido en archivos YAML o Markdown,** un archivo por unidad y edad, editables sin saber programar.
- **Motores de juego en JavaScript sin dependencias,** que leen los datos de la unidad y se exportan también como archivo HTML único para usar sin conexión.
- **Aplicación web instalable** (service worker) para que funcione sin conexión una vez visitada.
- **Hojas de estilo de impresión** para flashcards, cuentos, fichas y cartones de bingo.

**Modelo de datos de una unidad** (simplificado):

```yaml
id: u1-3anos
curso: 3
unidad: 1
titulo: Hello, school!
vocabulario:
  - palabra: teddy
    imagen: img/u1/teddy.webp
    audio: audio/u1/teddy.opus
    gesto: abrazarse
chunks: ["Hello!", "What's your name?"]
criterios: ["3.8", "5.2"]
cuento:
  titulo: ...
  paginas: [{imagen: ..., texto: ..., audio: ...}]
chant: {letra: ..., audio: ...}
sesiones:
  - n: 1
    fase: Encounter
    bloques:
      - tipo: story
        minutos: 10
        adultos: 1
        descripcion: ...
    con_auxiliar: ...
```

**Estructura del repositorio:**

```text
/contenido/      unidades, módulos y festividades (YAML/Markdown)
/medios/         imágenes y audios optimizados
/juegos/         motores de los interactivos
/src/            plantillas de páginas y vista de impresión
/creditos/       registro de atribuciones y licencias
CLAUDE.md        convenciones del proyecto para Claude Code
```

**Trabajo con Claude Code:** el archivo CLAUDE.md recoge las reglas del método (estructura de sesión, versión base y con auxiliar, licencias, accesibilidad, privacidad). Con él, Claude Code puede generar plantillas, motores de juego, validaciones y vistas de impresión de forma coherente a lo largo de todo el proyecto.

## Fases de producción

Se empieza con una unidad piloto completa para probar plantillas y flujo antes de producir en serie.

| Fase | Qué se produce | Resultado |
| --- | --- | --- |
| 0. Cimientos | Estilo visual, 3 personajes, modelo de datos, kit de pictogramas, banco de juegos, canciones de rutina, CLAUDE.md y esqueleto de la web | Todo lo común a las 24 unidades |
| 1. Piloto | U1 completa para las 3 edades: cuentos, audios, flashcards, 30 sesiones y 3 interactivos (cuento digital, Listen and touch, bingo) | Primera versión usable; se prueba en el aula y se ajustan las plantillas |
| 2. Primer trimestre | U2, U3, Halloween y Christmas | Primer trimestre completo |
| 3. Resto del núcleo | U4 a U8, Easter, fin de curso, resto de interactivos y páginas de familias | Núcleo de los tres cursos |
| 4. Ampliación | Módulos de proyecto y vídeos de formación | Método completo |

## Decisiones pendientes

- [x] Nombre del método: **Story Steps** (repositorio `story-steps`).
- [x] Cuenta de GitHub: personal; se podrá transferir a una organización del centro.
- [x] Identidad visual en dos capas: plataforma docente sobria (azul `#1B3A6B`, magenta `#C2185B`, DM Sans) y materiales de aula infantiles (ilustración plana y cálida, Fredoka y Atkinson Hyperlegible, un color por curso: naranja, verde y morado).
- [x] Personaje de 3 años: **Pip**, zorrito naranja, tímido y cariñoso.
- [ ] Personajes de 4 y 5 años (propuesta: Kiko, koala, y Ollie, lechuza).
- [ ] Marioneta de Pip: comprar una genérica o encargarla a medida, cuántas hacen falta y con qué accesorios. Después, fotografiarla y hacer el piloto de imagen (ficha y 3 páginas en 3-4 modelos).
- [ ] Modelos de voz: resultado de la prueba ciega con docentes (Venice: ElevenLabs, Kokoro, Inworld, xAI, Qwen 3…).
- [ ] Vídeo con IA: hacer el piloto (clip de 10 s y escena de 30 s) y decidir si alcanza el nivel de calidad y a qué coste; si no, usar animación de ilustraciones o grabación de marionetas.
- [ ] Comprobar en las condiciones de Venice y de cada proveedor que audio, música y vídeo generados se pueden redistribuir con la licencia del método.
- [ ] Licencia del método (propuesta: CC BY-NC-SA).
- [ ] Dónde se alojan los vídeos: Mediateca de EducaMadrid o YouTube en modo oculto.
- [ ] Generador de la web: Astro o Eleventy.
- [ ] Quién revisa el inglés de cuentos, canciones y sesiones.
- [ ] Inventario de pantallas del centro: cuántas aulas tienen pizarra táctil, no táctil o ninguna.
