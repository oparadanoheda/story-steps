# Revisión crítica y propuestas

12 de noviembre de 2026 · Revisión de `CLAUDE.md`, `docs/01` a `docs/07`, las plantillas de `contenido/` y la estructura del repositorio.

**Estado: propuestas aplicadas el 12/11/2026**, con la aprobación de Óscar. Este documento queda como registro de por qué se cambió cada regla.

| Aplicado | Dónde |
| --- | --- |
| Mapa del núcleo dentro del rango, con vocabulario nuclear y exposición (47, 57 y 55 palabras) | `docs/06`, `contenido/comun/lexico.yaml` |
| Sesión tipo con tope por edad, energía y bloque recortable | `docs/06`, `CLAUDE.md`, `contenido/comun/arquetipos.yaml` |
| Calendario sobre 90 sesiones útiles; módulos congelados | `docs/06`, `docs/01` |
| Respuesta simultánea y banco de juegos por edad | `docs/06`, `docs/03`, `docs/04`, `contenido/comun/juegos.yaml` |
| Indicadores de evaluación y observación por muestreo | `docs/06`, `docs/02` |
| Rutinas con calendario; inglés entre sesiones; encaje con las áreas en inglés | `docs/06`, `contenido/comun/rutinas.yaml` |
| Estrategia única de ilustración, Venice, gouache, voces, MP3, un solo mecanismo sin conexión, piloto escalonado | `docs/07`, `docs/05` |
| Licencias de entrada sin CC BY-SA; alcance real de ARASAAC | `docs/05`, `CLAUDE.md` |
| Léxico único, rutas por convención, identificador `u1-3`, plantillas nuevas | `CLAUDE.md`, `contenido/` |
| Enlace oficial de la Orden 460/2023 | `docs/01`, `docs/02`, `docs/04` |

Lo que **no** se ha hecho, porque no era un cambio de documento o porque es una decisión pendiente:

- Las decisiones de la sección 8 que siguen abiertas: generador, licencia, dirección pública, personajes de 4 y 5 años. La lista al día está en `docs/07`.
- El validador automático, los 30 arquetipos de sesión y los gestos del léxico: son trabajo de las próximas semanas (sección 11).
- El calendario de rutinas y los indicadores de evaluación de `docs/06` son propuestas pendientes de validar con el equipo.

Un ajuste hecho al aplicar: al omitir el bloque recortable quedan juntos dos bloques de la misma energía. Se añadió la regla de separarlos con una pausa de un minuto de la energía contraria.

El texto que sigue es el informe original, con sus actualizaciones del mismo día. Cada hallazgo indica a qué documento afecta y qué se cambió; la sección 10 reúne los cambios por archivo.

**Actualización del mismo día, tras la respuesta de Óscar:**

- **Ratio:** el máximo es de 20 niños por aula, no 25. Las cifras de A2, A4, A9, B9 y B10 están recalculadas. Los hallazgos se mantienen: con 20 niños y turnos individuales, cada uno sigue esperando el 95 % del juego.
- **Ilustración y voz:** decidido que ambas se producen con la API de Venice. La decisión 4 de la sección 8 queda reescrita como procedimiento.
- **Prueba de la API:** hecha con una clave nueva; hay muestras de voz e imagen. Ver "Estado de la API de Venice" al final de la sección 8.

**Decisiones de Óscar del 12/11/2026, tras las pruebas:**

| Qué | Decisión | Dato para producir |
| --- | --- | --- |
| Técnica de ilustración | Gouache suave, con la guía de estilo provisional de la sección 8 | Falta elegir modelo y aprobar el diseño de Pip |
| Voz del narrador, común a los tres cursos | Verity X | ElevenLabs, voz de biblioteca `1hlpeD1ydbI2ow0Tt3EW`, modelo `elevenlabs-tts-v4` |
| Voz de Pip | Ana | ElevenLabs, voz de biblioteca `rCmVtv8cYU60uhlsOo1M`, modelo `elevenlabs-tts-v4` |

Las dos voces son de la biblioteca, no de serie: su autor puede retirarlas. Conviene generar todo el audio de cada una en pocas tandas, guardar los originales fuera del repositorio y tener una voz de serie de reserva (Lily o George). Sigue pendiente comprobar las condiciones de uso y fijar el ritmo por curso.

## 1. Veredicto

El método está bien fundamentado: el cuento como eje, la comprensión antes que la producción, las rutinas fijas, el banco de juegos y la evaluación por observación son decisiones sólidas y encajan con el Decreto 36/2022, que he comprobado artículo por artículo (sección 5). El problema no está en los principios sino en tres sitios:

1. **Varias reglas no se cumplen a sí mismas.** El mapa de vocabulario incumple su propio rango en 15 de 24 unidades, la sesión no cabe en 45 minutos reales y el calendario no deja margen para ninguna sesión perdida.
2. **El plan está dimensionado para una editorial, no para un equipo pequeño.** Estimo entre 550 y 850 horas de trabajo para el núcleo. Hay que recortar y generar por plantilla antes de producir en serie.
3. **El modelo de datos todavía no garantiza el principio "se escribe una vez".** El vocabulario se repite entre archivos y las rutas de medios de las tres edades chocan entre sí.

Nada de esto obliga a rehacer el método. Sí obliga a corregir `docs/06`, `docs/07`, `CLAUDE.md` y las dos plantillas antes de escribir la U1.

**Las siete cosas que haría primero:**

| # | Qué | Hallazgo |
| --- | --- | --- |
| 1 | Corregir el mapa del núcleo para que cumpla el rango de palabras | A1 |
| 2 | Rehacer la sesión tipo con un bloque recortable y juegos de respuesta simultánea | A2, A4 |
| 3 | Centralizar el vocabulario en un léxico único y generar las sesiones desde arquetipos | A8, sección 6 |
| 4 | Decidir una sola estrategia de ilustración y traer al repositorio el cuento de la U1 | A5 |
| 5 | Fijar la URL definitiva antes de imprimir ningún código QR | A10 |
| 6 | Pilotar la U1 primero en 3 años y después en 4 y 5 | A7 |
| 7 | Cerrar con el centro el papel de los tutores y la aprobación formal | A6, B13 |

## 2. Hallazgos críticos

Bloquean el piloto o invalidan una regla "no negociable".

### A1. El mapa del núcleo incumple la regla de palabras por unidad

**Afecta a:** `docs/06` (mapa del núcleo y tabla de progresión), `docs/07` (inventario de flashcards), `CLAUDE.md` (progresión por edad), `contenido/unidades/_plantilla.yaml`.

**Problema.** La regla dice 4-6 palabras nuevas en 3 años, 6-8 en 4 y 8-10 en 5. Contando las palabras de cada celda del mapa (sin los verbos de las estructuras ni los días de la semana):

| Unidad | 3 años (4-6) | 4 años (6-8) | 5 años (8-10) |
| --- | --- | --- | --- |
| U1 | 6 | **5** | **6** |
| U2 | **8** | 6 | **6** |
| U3 | **8** | **10** | **7** |
| U4 | 6 | **5** | 8 |
| U5 | **7** | 8 | 8 |
| U6 | **8** | 7 | **6** |
| U7 | **8** | 6 | 8 |
| U8 | **8** | **5** | **4** |
| Total | 59 | 52 | 53 |

En negrita, fuera de rango: 15 de 24 celdas. Además la progresión queda invertida: 3 años recibe más palabras nuevas (59) que 5 años (53), cuando la regla prevé entre 32-48 y 64-80. Una validación automática rechazaría la mayoría de las unidades.

Hay también palabras "nuevas" repetidas: *car* (U3 y U8 de 3 años), *bike* (U3 y U8 de 4 años), *table* (U1 de 4 años y U4 de 5 años), *train* (U8 de 3 años y U3 de 4 años).

**Cambio propuesto.**

- En `docs/06`, distinguir dos listas por unidad: **vocabulario nuclear** (lleva flashcard y gesto, se observa, cumple el rango) y **exposición** (aparece en el cuento o en la rutina, no se trabaja ni cuenta).
- Reescribir el mapa con esa distinción. En 3 años, por ejemplo: U2 queda en *head, hands, feet, eyes, nose, mouth* y *happy/sad* pasan a la rutina de emociones; U3 queda en cuatro colores más *ball* y *teddy*; U5 pierde *yummy/yucky*; U6 deja *big/small* como exposición; U7 queda en las cuatro prendas, porque el tiempo ya está en la rutina; U8 pierde *car* (repetida) y *sun*.
- En 5 años, subir a 8 las celdas cortas (U1, U2, U6, U8) o bajar el rango a 6-8 y decir que la progresión está en las estructuras, no en el número de palabras. Recomiendo lo segundo: es más honesto con lo que el mapa ya hace.
- En `docs/07`, recalcular las flashcards a partir del mapa corregido en vez de usar la media del rango (40, 56 y 72).

### A2. La sesión no cabe en 45 minutos reales

**Afecta a:** `docs/06` (estructura de sesión), `docs/04` (ritmo de la sesión), `CLAUDE.md` (reglas del método), plantilla de unidad.

**Problema.** Son tres cosas distintas:

- **Los minutos no cuadran.** Los seis bloques suman entre 40 y 50 según se elijan los intervalos (5 + 5 + 10 + 10-15 + 5-10 + 5). Solo algunas combinaciones dan 45.
- **Dos documentos se contradicen.** `docs/04` pide alternar quieto y movimiento cada 5-8 minutos en todas las edades; `docs/06` permite un cuento de 10 minutos y un juego de 15. Un juego de 15 minutos con turnos individuales y 20 niños de 4 años no se sostiene.
- **45 minutos de horario no son 45 de sesión.** El especialista cambia de aula, coloca al grupo, saca el material y atiende imprevistos. Lo realista son 35-40 minutos, y menos en 3 años durante el primer trimestre. Además la *Hello routine* reúne seis cosas (marioneta, canción, agenda, quién ha venido, tiempo y emociones) en 5 minutos.

**Cambio propuesto.**

- Mantener 45 como unidad de planificación, pero **marcar en cada sesión un bloque `recortable: true`** (5-8 minutos) que se omite si la sesión empieza tarde. Entrada, cuento y salida nunca son recortables.
- Fijar un tope por edad para cualquier actividad continua: **8 minutos en 3 años, 10 en 4 y 12 en 5**. Un bloque de juego más largo se parte en dos actividades.
- Añadir a cada bloque el campo `energia: quieto | movimiento` y validar que no haya más de un tope seguido del mismo tipo. Hoy la plantilla de 3 años encadena *Listen and do* y un bloque de movimiento: 16 minutos seguidos de movimiento sin que nada lo detecte.
- Reducir la *Hello routine* a un núcleo fijo (marioneta y canción) más **un** elemento que rota (tiempo, emociones o quién ha venido).

### A3. El calendario gasta todas las sesiones teóricas

**Afecta a:** `docs/06` (calendario anual), `docs/01` (implicaciones).

**Problema.** `docs/01` calcula 105 sesiones y `docs/06` 108. Las dos cifras salen de multiplicar semanas por tres. El Decreto fija un mínimo de 175 días lectivos (art. 18), pero de ahí hay que restar excursiones, fiestas del centro (Carnaval, Día de la Paz, Día del Libro, jornadas culturales), periodo de adaptación de 3 años, jornada reducida de junio y septiembre, festivos que caen en día de inglés y ausencias del especialista. Lo razonable es contar con **85-95 sesiones útiles**. Como el núcleo (80) y las festividades (10) ya suman 90, las 18 sesiones "flexibles" para módulos no existen: son el colchón.

**Cambio propuesto.**

- En `docs/06`, declarar el calendario sobre 90 sesiones útiles: 80 de núcleo y 10 de festividades, con los módulos de proyecto como **sustitutos opcionales de sesiones de Exploit**, no como añadido.
- Definir qué se recorta cuando falta tiempo: una unidad puede cerrarse con 8 sesiones (se funden las sesiones 8 y 9, y la 10 de observación se mantiene).
- Unificar la cifra en `docs/01` y `docs/06`.
- Congelar el catálogo de 27 módulos hasta que el núcleo haya pasado un curso completo.

### A4. Los juegos y agrupamientos no están pensados para 20 niños con un adulto

**Afecta a:** `docs/06` (banco de juegos, Exploit), `docs/03` (estándar 12), `docs/04` (agrupamientos), `docs/07` (ficha de cada juego).

**Problema.** `docs/03` promete "subgrupos, rincón y rotaciones" y `docs/04` "parejas o tríos mixtos", pero el método garantiza un solo adulto. Con un adulto y 20 niños de 3 años no hay rotaciones. En un juego de 10 minutos con turnos individuales, cada niño participa unos 30 segundos y espera el resto. *Telephone*, *Bingo* con cartones y un juego de tablero son especialmente difíciles en gran grupo.

**Cambio propuesto.**

- Añadir a `docs/06` un principio de diseño: **respuesta simultánea**. En todo juego, todos los niños responden a la vez (señalan, se levantan, muestran una tarjeta, hacen el gesto); el turno individual es un momento breve dentro del juego, no su mecánica.
- Para cada juego del banco, escribir la **versión de gran grupo con un adulto** y la edad mínima. Propuesta: en 3 años solo *Listen and do*, *Stop!* y *What's missing?*; *Pair game* y *Bingo* desde 4 años; *Telephone* y tablero (gigante, por equipos) solo en 5 años.
- Reservar parejas y subgrupos para sesiones con auxiliar o para 5 años a partir del segundo trimestre, y decirlo así en `docs/03` y `docs/04`.

### A5. Hay tres estrategias de ilustración que no pueden convivir

**Afecta a:** `docs/05` (conclusión), `docs/06` (señas de identidad y próximos pasos), `docs/07` (inventario e imagen con IA).

**Problema.** `docs/05` presenta los álbumes CC BY de Book Dash y StoryWeaver como "la oportunidad más valiosa" para los 24 cuentos. `docs/06` dice que el personaje guía protagoniza los cuentos del curso. `docs/07` genera las ilustraciones con IA a partir de la marioneta. Pip no puede protagonizar un álbum de Book Dash, y mezclar las tres fuentes rompe el "estilo común" que exige el inventario.

Relacionado: `docs/07` da por hecho un cuento de la U1 de 3 años (mochila roja, abrigo amarillo, la cola de Pip), pero **ese cuento no está en el repositorio**.

**Cambio propuesto.**

- Decidir y escribir en `docs/06` y `docs/07`: los 24 cuentos del núcleo son originales, con el personaje del curso y un único estilo de ilustración propia.
- En `docs/05`, rebajar los álbumes CC BY a su uso real: biblioteca complementaria del rincón, módulos de proyecto y festividades.
- Traer el cuento de la U1 al repositorio (texto y guion de páginas) antes de cualquier prueba de imagen.

### A6. La exposición diaria depende de quien no está en el proyecto

**Afecta a:** `docs/06` (exposición diaria, rincón), `docs/02` (condición imprescindible), `docs/01` (exposición total en CEIP bilingüe).

**Problema.**

- El audio diario, el rincón y el traspaso dependen de cada tutor, que no participa en el diseño y, según el art. 17.7 del Decreto, ni siquiera tiene que estar en la sesión. `docs/02` llama a esta coordinación "condición imprescindible" sin decir cómo se consigue.
- El método ignora el resto del programa bilingüe. Con 2 h 15 min de bloque J, al centro le quedan por cubrir 1 h 45 min semanales en inglés en 3 años, 2 h 45 min en 4 y 3 h 45 min en 5, con sesión diaria. Esa franja ya existe, y es el sitio natural para el audio y el chant, en lugar de inventar cinco minutos aparte.
- La escucha pasiva de un mismo audio de 5-10 minutos durante tres semanas tiene poco respaldo. `docs/03` ya advierte que canciones y vídeos sirven como apoyo, no como fuente principal.

**Cambio propuesto.**

- En `docs/06`, cambiar "5 minutos de audio" por **"5 minutos de inglés en acción"**: el chant con gestos, la canción de recoger o de hacer la fila. Los tutores adoptan lo que les resuelve una transición.
- Sustituir el audio único por tres pistas cortas por unidad (chant, cuento y canción de rutina).
- Añadir a `docs/06` una sección "Encaje con las áreas en inglés": quién imparte esas horas y qué comparte con Story Steps (normas, señal de atención, canciones de rutina, *chunks*).
- Declarar que el núcleo funciona aunque el aula no haga nada entre sesiones. La exposición diaria es un refuerzo que se mide (cuántas aulas lo hacen), no una seña de identidad.

### A7. La carga de trabajo no cabe en un curso y el piloto llega fuera de fecha

**Afecta a:** `docs/07` (inventario y fases), `docs/06` (próximos pasos).

**Problema.** Mi estimación del núcleo, hecha con tiempos por pieza y por tanto orientativa:

| Pieza | Cantidad | Horas |
| --- | --- | --- |
| Cuentos (texto y revisión del inglés) | 24 | 70-100 |
| Ilustraciones (generar, seleccionar, corregir, exportar) | 200-300 | 80-150 |
| Planes de sesión | 240 | 120-180 |
| Canciones y chants (letra, ensayo, grabación) | 30 | 45-60 |
| Audios (grabar, editar, exportar) | 80 pistas | 40-60 |
| Flashcards (imagen, atribución, gesto) | 210 | 50 |
| Web y 9 interactivos, probados en pizarras reales | — | 80-120 |
| Vídeos para el profesorado | 15-25 | 30-50 |
| Rutinas, juegos, guía, familias y registro | — | 40-60 |
| **Total** | | **550-850** |

No incluye imprimir, plastificar y montar las cajas de cada aula. Un equipo de dos o tres docentes con dos o tres horas semanales cada uno reúne entre 140 y 315 horas por curso: **de dos a cuatro cursos** al ritmo actual.

Segundo problema: estamos en noviembre. La U1, *Hello, school!*, es la unidad de septiembre. El piloto no puede entrar en el aula antes de enero de 2027, cuando los niños llevan cuatro meses de rutinas.

**Cambio propuesto.**

- Pilotar la U1 **primero en 3 años** (10 sesiones a la vuelta de Navidad, que funciona como un pequeño reinicio) y, con las plantillas ya corregidas, en 4 y 5 años. Así el mismo error no se comete tres veces, y los personajes de 4 y 5 años dejan de bloquear el arranque.
- **Medir las horas reales** de la U1 de 3 años y decidir con ese dato el ritmo de implantación (sección 8, decisión 7).
- Aplicar los recortes de la sección 7.

### A8. El modelo de datos no garantiza "se escribe una vez"

**Afecta a:** `contenido/unidades/_plantilla.yaml`, `contenido/modulos/_plantilla.yaml`, `docs/07` (modelo de datos), `CLAUDE.md`, `medios/README.md`.

**Problema.**

- **El vocabulario vive dentro de cada unidad.** Una palabra que se recicla es una cadena de texto libre en `recicla: []`. Si se corrige *teddy* (imagen, audio o gesto) en una unidad, no cambia en las demás. El gesto, que debe ser el mismo en todas las aulas, puede escribirse distinto en cada archivo.
- **Las rutas de medios chocan.** `img/u1/cuento-01.webp` y `audio/u1/chant.opus` no llevan la edad: los cuentos y chants de la U1 de 3, 4 y 5 años comparten ruta. La plantilla de módulo usa otra convención (`chant-3anos.opus`).
- **No hay sitio para lo común:** rutinas, canciones de rutina, banco de juegos, normas, señal de atención y personajes no tienen archivo en `contenido/`.
- **Los bloques fijos se copian 240 veces.** La entrada y la salida son idénticas en casi todas las sesiones, y la plantilla obliga a repetirlas.
- **Faltan campos que las reglas necesitan:** `opcional` (lo exige `CLAUDE.md`), `energia`, `recortable`, la observación de la sesión 10 y el estado de revisión.
- **`recicla` significa dos cosas:** palabras en las unidades y códigos de unidad en los módulos.
- **El ejemplo contradice el mapa:** usa *teddy* en la U1 de 3 años (es de la U3), el *chunk* *What's your name?* (es de 4 años) y los criterios 3.8 y 5.2 en una unidad de comprensión.

**Cambio propuesto.** El modelo de la sección 6: un léxico único, datos comunes, rutas por convención y sesiones generadas a partir de arquetipos.

### A9. La evaluación, tal como está, no se puede hacer

**Afecta a:** `docs/06` (sesión 10, próximos pasos), `docs/02` (evaluación por observación), plantilla de unidad.

**Problema.** Un adulto no puede dirigir la sesión 10 y registrar a 20 niños en cinco criterios. Con seis grupos serían 600 valoraciones por trimestre. Tampoco existen los **indicadores observables** por criterio y edad: el Decreto fija los criterios por ciclo, y `docs/06` solo gradúa el 5.2 y el 5.4.

**Cambio propuesto.**

- Añadir a `docs/06` una tabla de indicadores: los 5 criterios por 3 edades, con una conducta observable en cada celda (por ejemplo, 2.3 en 3 años: "responde con el cuerpo a tres órdenes de la unidad").
- Sustituir "la sesión 10 sirve para observar" por **observación por muestreo**: 6 o 7 niños foco por sesión durante las sesiones 8 a 10, de modo que cada niño se observa una vez por unidad.
- Registro **por excepción**: escala de tres niveles, y solo se anota a quien se sale de lo esperado.
- Añadir a la plantilla un campo `observacion` en las sesiones 8 a 10, con los criterios y sus indicadores.
- Aclarar en `docs/02` que el especialista aporta su registro y el tutor es quien informa a las familias.

### A10. La URL tiene que ser definitiva antes de imprimir un QR

**Afecta a:** `docs/07` (decisiones pendientes: cuenta de GitHub), `CLAUDE.md`.

**Problema.** `docs/07` prevé empezar en una cuenta personal y transferir después el repositorio a una organización del centro. Al transferir o renombrar, la dirección de GitHub Pages cambia y **no redirige**. Todas las fichas para casa ya impresas quedarían con el QR roto. El identificador `u1-3anos` también acabaría en esas direcciones, a la vista de las familias.

**Cambio propuesto.**

- Decidir ahora la dirección pública: crear ya la organización o usar un dominio propio, que sobrevive a cualquier cambio de cuenta.
- Cambiar el identificador a `u1-3` en archivos y rutas. Hoy no cuesta nada; después del primer QR sale caro.
- Generar los QR en local, apuntando a direcciones propias y sin acortadores.

## 3. Hallazgos importantes

No bloquean el piloto, pero conviene resolverlos antes de producir en serie.

### B1. La espiral da por hechos cursos que la primera promoción no ha tenido

**Afecta a:** `docs/06` (mapa y progresión).

**Problema.** "Lo de cursos anteriores se recicla, no se vuelve a enseñar desde cero." El primer año, los niños de 4 y 5 años no han hecho Story Steps; y cada curso llegan alumnos nuevos o que no cursaron 3 años, algo frecuente en un contexto medio-bajo. La U3 de 5 años enseña formas dando por sabidos diez colores.

**Cambio.** Cada unidad de 4 y 5 años declara en `recicla` las palabras previas que necesita, y su sesión 1 las presenta como si fueran nuevas, con respuesta física. Añadir a `docs/06` un párrafo "Primer año y alumnado de incorporación tardía".

### B2. Licencias: tres afirmaciones que hay que corregir

**Afecta a:** `docs/05` (licencias), `docs/06` (próximos pasos), `docs/07` (decisiones de partida), `CLAUDE.md` (licencias y créditos).

- **ARASAAC no obliga a licenciar todo el método.** La cláusula de compartir igual alcanza a las obras que adaptan los pictogramas (la agenda visual, las normas), no a una web que además los contiene. `docs/05` y `docs/06` dicen lo contrario. **Cambio:** "los materiales que incorporan pictogramas de ARASAAC llevan CC BY-NC-SA; la licencia del resto se decide por sus propios motivos".
- **`CLAUDE.md` admite imágenes CC BY-SA, incompatibles con la licencia propuesta.** Una flashcard que adapta una imagen BY-SA debe ser BY-SA y no puede ser BY-NC-SA. Casi todo Wikimedia Commons y todo OpenMoji son BY-SA. **Cambio:** admitir solo CC0, dominio público y CC BY, más ARASAAC en su propio kit; retirar OpenMoji de `docs/05` y de `CLAUDE.md`.
- **El contenido generado con IA probablemente no tiene derechos de autor.** Según la interpretación mayoritaria, sin autoría humana no hay obra protegida. La licencia cubriría los textos, la selección y el conjunto, pero no impediría que alguien reutilizara una ilustración suelta. No es un obstáculo; hay que saberlo y no prometer lo contrario.

Otros dos cabos sueltos: el **código** necesita una licencia de software aparte de la del contenido, y los **autores** (docentes, y el auxiliar si graba voces) deben aceptar por escrito la licencia y la cesión de su voz. No soy asesor jurídico: son puntos para confirmar con quien corresponda en el centro o en la DAT.

### B3. Producción con IA: cuatro riesgos

**Afecta a:** `docs/07` (imagen, audio y vídeo con IA), `CLAUDE.md` (medios).

- **Los pasos 4 y 5 del flujo de la marioneta se contradicen.** Si la marioneta es de un fabricante, generar la ficha oficial "a partir de las fotos" es justo derivar de su diseño. **Cambio:** con una marioneta comprada, la ilustración se diseña sin usar las fotos como referencia. Mejor aún, invertir el orden: se diseña a Pip en ilustración y la marioneta se encarga a medida a partir de ese diseño, con los derechos por escrito. Además, eso saca a la marioneta del camino crítico.
- **"El modelo queda fijado" no depende de nosotros.** Los modelos se retiran. Con 300 imágenes repartidas en dos cursos, el estilo derivará. **Cambio:** generar de una vez una biblioteca de posturas por personaje y componer las páginas con posturas, fondos y objetos; guardar en el repositorio el manifiesto de cada tanda (modelo, parámetros, referencia).
- **La voz sintética hay que elegirla con una referencia humana.** Los 24 cuentos narrados suman alrededor de una hora de audio, y las 210 palabras otra media hora: el volumen es pequeño, así que lo que se decide es calidad, no ahorro. **Cambio:** incluir en la prueba ciega una voz humana del equipo como vara de medir; exigir acento británico; probar sobre todo palabras sueltas, que es donde más falla la síntesis.
- **Vídeo con IA:** es la pieza de más riesgo y menos valor. **Cambio:** sacarla del primer curso y dejar solo la grabación de la marioneta real con el móvil.

Añadir a `CLAUDE.md`: declarar en créditos qué se ha generado con IA y quién lo revisó.

### B4. Privacidad: lo que falta por cerrar

**Afecta a:** `CLAUDE.md` (privacidad), `docs/07` (plataforma).

| Riesgo | Cambio |
| --- | --- |
| DM Sans, Fredoka y Atkinson cargadas desde Google Fonts envían la IP de cada visitante a Google | Alojar las tipografías en el propio sitio (las tres tienen licencia abierta). Regla nueva en `CLAUDE.md`: ningún recurso de terceros en tiempo de carga |
| Incrustar YouTube instala seguimiento en las páginas de familias | Mediateca de EducaMadrid; ver decisión 5 |
| El registro de observación "se rellena fuera de la web", sin decir dónde | Indicar en la plantilla: solo en la nube de EducaMadrid o en equipos del centro, nunca en dispositivos o cuentas personales |
| Las voces grabadas de docentes y auxiliar son datos personales | Autorización escrita antes de publicar |
| Los vídeos modelo para docentes podrían mostrar una clase real | Regla: se graban sin niños |
| El sitio no explica qué datos trata | Página breve de privacidad: sin cookies ni analítica; el alojamiento registra las IP de acceso |

### B5. Los tres mecanismos sin conexión triplican el peso y se pisan

**Afecta a:** `docs/07` (funciones y límites), `CLAUDE.md` (interactivos y medios), `juegos/README.md`.

**Problema.** El plan suma HTML único por interactivo, ZIP por unidad y aplicación instalable. La estimación de 170 MB cuenta los medios una sola vez, pero cada exportación los duplica: publicados los tres, el núcleo ronda los 550-600 MB, y con módulos y festividades se acerca al límite de 1 GB. El *service worker* añade un problema clásico: docentes que ven una versión antigua.

Dos restricciones técnicas que el plan no menciona:

- Un HTML abierto desde un archivo local no puede cargar módulos ni pedir datos: el exportado tiene que llevar todo dentro, sin `import` ni `fetch`.
- El audio Ogg Opus solo funciona en iPhone desde iOS 18.4. Las familias con móviles antiguos no oirían nada.

**Cambio propuesto.**

- Un solo mecanismo en el piloto: el **HTML único, montado en el navegador** al pulsar "Descargar para usar sin conexión". No añade peso al sitio.
- Aplazar la aplicación instalable y el ZIP hasta que un docente los pida.
- **Audio en MP3 mono** a 48-64 kbps en todo el proyecto. Cambiar `.opus` por `.mp3` en las plantillas y en `CLAUDE.md`.
- Presupuesto de peso validado en cada publicación: páginas de familias por debajo de 5 MB.

### B6. Imprimir no es gratis ni automático

**Afecta a:** `docs/07` (inventario y funciones), `docs/02` (decisiones de diseño).

**Problema.** La "vista de impresión del navegador" da resultados distintos según el navegador, los márgenes y la opción de ajustar a página. Para un docente sin perfil técnico, un PDF ya hecho es más fiable. Y el método ahorra el libro a las familias, pero traslada al centro un coste que nadie ha calculado: flashcards en color y por duplicado para cada aula, plastificado y 24 cuentos en A3.

**Cambio.** Generar también los PDF en la publicación automática y servirlos como descarga, fuera del repositorio. Probar la impresión en la fotocopiadora del centro durante el piloto. Añadir a `docs/07` un presupuesto de impresión por aula y una versión en blanco y negro de cada material.

### B7. Las rutinas esconden vocabulario que nadie cuenta

**Afecta a:** `docs/06` (estructura de sesión), `docs/07` (flashcards de rutinas).

**Problema.** La *Hello routine* trae tiempo, emociones, números y días desde la primera sesión. En 3 años eso son unas doce palabras más en septiembre, encima de las seis de la U1 y en pleno periodo de adaptación.

**Cambio.** Un calendario de rutinas por edad en `docs/06` y como dato en `contenido/comun/rutinas.yaml`: qué elemento entra en cada unidad. En 3 años, por ejemplo, solo saludo y canción en la U1, emociones (*happy/sad*) en la U2 y tiempo (*sunny/rainy*) en la U3.

### B8. Algunas estructuras de 5 años superan lo que el propio método promete

**Afecta a:** `docs/06` (mapa, columna de 5 años).

**Problema.** La progresión dice "frases de 3-5 palabras" y 2-3 *chunks* por unidad. *I go to the park by bike* tiene siete palabras. La U7 mezcla *I'm wearing…* con *In winter I wear…*, dos tiempos verbales. La U3 junta tres estructuras y las formas.

**Cambio.** Una estructura para decir y, como mucho, una para entender por unidad. En la U8 dejar *Let's go by bike!* y *Where are you going?* solo como comprensión; en la U7, elegir *I'm wearing…*.

### B9. Actividades que no caben con 20 niños y un adulto

**Afecta a:** `docs/06` (bloque de movimiento o manipulación, Exploit, U5).

- **Manualidades en 5-10 minutos:** repartir tijeras y pegamento a 20 niños de 3 años consume el bloque entero. **Cambio:** la manipulación se limita a material que se reparte en un minuto (gomets, tarjetas, objetos); las manualidades se proponen al tutor como parte del proyecto de aula.
- **Comida real en la U5:** exige el protocolo de alergias del centro. **Cambio:** comida de juguete o tarjetas; lo dice la ficha de la unidad.
- **Material transportable:** el especialista encadena aulas de distintas edades sin tiempo entre ellas. **Cambio:** regla en `docs/06`: todo el material de una sesión cabe en una bolsa y se prepara en menos de un minuto.

### B10. "Un adulto basta" tiene una excepción de seguridad

**Afecta a:** `docs/06` (auxiliar de conversación), `CLAUDE.md`.

**Problema.** En 3 años y durante el primer trimestre, un adulto solo con 20 niños (llantos, control de esfínteres, salidas al baño) tiene un problema de seguridad antes que uno didáctico. El método solo contempla al auxiliar como segundo adulto.

**Cambio.** Distinguir **apoyo de aula** (tutor o apoyo de Infantil, no lingüístico) de **auxiliar de conversación**. Pedir al equipo directivo apoyo de aula en 3 años al menos hasta diciembre, y recogerlo en `docs/06`.

### B11. Nadie revisa todavía el inglés

**Afecta a:** `docs/07` (decisiones pendientes), `CLAUDE.md` (decisiones pendientes: no figura).

**Cambio.** Nombrar a una persona revisora antes de grabar nada, con una lista de comprobación: uso británico, adecuación a la edad y, sobre todo, **acento de los chants** leyéndolos en voz alta con palmas; los chants escritos por no nativos suelen forzar el ritmo natural. Añadir a la plantilla el campo `estado: borrador | revisado | pilotado`.

### B12. El piloto no tiene instrumento para aprender de él

**Afecta a:** `docs/07` (fase 1).

**Problema.** "Se prueba en el aula y se ajustan las plantillas" no dice qué se mide. Como la web no lleva analítica, tampoco se sabrá si las familias usan los audios.

**Cambio.** Una ficha de dos minutos por sesión: minutos reales por bloque, bloque recortado, qué funcionó y qué no. Una pregunta a los tutores al final. Una pregunta a las familias en papel o en tutoría. Y, escritos de antemano, los criterios que harían cambiar la plantilla.

### B13. Falta el encaje formal en el centro

**Afecta a:** `docs/01` (implicaciones), `docs/06` (próximos pasos).

**Problema.** El Decreto exige que la propuesta pedagógica recoja los criterios de selección de recursos (art. 14.2.d) y la colaboración con las familias (art. 14.2.f). Sustituir el material actual por un método propio es una decisión de ciclo y de claustro, no solo del especialista.

**Cambio.** Añadir a los próximos pasos: presentación al equipo de ciclo y a la CCP, acuerdo de claustro, mención en la PGA y carta a las familias antes del piloto. Preparar una página "Story Steps en la propuesta pedagógica" con el texto listo para incorporar.

## 4. Hallazgos menores

| # | Qué | Afecta a | Cambio |
| --- | --- | --- | --- |
| C1 | El estudio de Albaladejo se cita con niños "de 3 años" en un documento y "de 2-3 años" en otro | `docs/02`, `docs/03` | Unificar con el dato del artículo y añadir el tamaño de la muestra; no pude confirmarlo en abierto |
| C2 | El enlace a la Orden 460/2023 devolvió error 404 al comprobarlo | `docs/02`, `docs/04` | Enlazar al BOCM de 28/2/2023 |
| C3 | Dos fuentes de verdad: los documentos de claude.ai y `docs/` | `README.md`, `CLAUDE.md` | Declarar `docs/` como versión canónica desde el 12/11/2026 |
| C4 | `CLAUDE.md` lista 5 decisiones pendientes y `docs/07` lista 10 | `CLAUDE.md` | Una sola lista, en `docs/07`, y `CLAUDE.md` remite a ella |
| C5 | Halloween, Christmas y Easter sin alternativa para familias que no las celebran | `docs/06` | Versión neutra de cada una (otoño, invierno, primavera) con la misma lengua |
| C6 | *Yucky* aplicado a la comida choca con el trabajo de comedor | `docs/06` (U5) | Sustituir por *I like / I don't like* como comprensión |
| C7 | El mini-show de fin de curso tensiona el "sin presión" y consume sesiones | `docs/06` (U8) | Opcional, sin ensayos fuera de las tres sesiones previstas |
| C8 | 210 gestos fijos sin diccionario | `docs/06`, `docs/07` | Foto o clip de 3 segundos por gesto, enlazado desde el léxico |
| C9 | El rincón incluye "una marioneta" por aula | `docs/06` | Marionetas de palo en papel; Pip solo aparece con el especialista |
| C10 | Fotos reales de Openverse frente a "ilustración plana y cálida" | `docs/05`, `CLAUDE.md` | Decidir: flashcards ilustradas y fotos solo en módulos |
| C11 | `id`, `trimestre` y `personaje` se pueden deducir | Plantilla de unidad | Quitarlos y derivarlos del nombre del archivo y de `cursos.yaml` |
| C12 | No hay guía para un sustituto | `docs/07` | Página "Si es tu primer día": una pantalla con ritual, normas, señal y la sesión que toca |
| C13 | No hay plantilla de festividad | `contenido/festividades/` | Crearla a partir de la de módulo |
| C14 | Los nombres de los personajes no se han contrastado con marcas | `docs/07` | Búsqueda rápida en la OEPM y TMview antes de imprimir |
| C15 | `docs/03` habla de "unos 25 alumnos por aula"; la ratio máxima es 20 | `docs/03`, `CLAUDE.md` | Corregir la cifra y añadir la ratio a `CLAUDE.md` como dato del centro |

## 5. Normativa: qué he comprobado

Leí el Decreto 36/2022 en el PDF del BOCM que enlaza `docs/01`.

| Cita de los documentos | Resultado |
| --- | --- |
| Art. 9.2: 1,5 h semanales, mínimo dos sesiones | Correcta |
| Art. 9.3: lo imparten maestros de la especialidad en centros públicos | Correcta |
| Art. 10: áreas en inglés salvo el bloque D; nivel C1 | Correcta |
| Art. 11.6: aproximación no exigible para Primaria | Correcta |
| Art. 13.4: sesiones diarias de bloque D y bloque A en 5 años | Correcta |
| Art. 14.2: contenido de la propuesta pedagógica | Correcta |
| Art. 15.4: flexibilizar metodologías en lengua extranjera | Correcta |
| Art. 16: evaluación global, continua y formativa | Correcta |
| Art. 17.5, 17.7 y 17.8: autonomía, presencia del tutor, familias | Correcta |
| Art. 18: mínimo de 175 días lectivos | Correcta |
| Criterios 1.3, 2.3, 3.8, 5.2 y 5.4 del área III | Texto literal correcto |
| Contenidos del bloque J | Texto literal correcto |
| Orden 1120/2022: extensión del programa bilingüe a Infantil | Existe y coincide (BOCM 18/5/2022) |
| Orden 460/2023, arts. 3.5, 6, 8, 10-12, 17, 22 y anexo III | Correcta. Verificada después en el [BOCM de 28/2/2023](https://www.bocm.es/boletin/CM_Orden_BOCM/2023/02/28/BOCM-20230228-30.PDF): métodos (3.5), propuesta pedagógica (6), evaluación de la práctica docente (8), medidas de atención (10-12), evaluación (17), informe final (20), autonomía y materiales (22) y anexo III con "Conseguido" y "En proceso" |
| Instrucciones de bilingüismo 2026-27 y Decreto 23/2023 | No verificados en esta revisión |

**Encaje general.** El método cabe sin forzar en el Decreto: oralidad, juego, ningún contenido del bloque D, evaluación por observación con los cinco criterios y autonomía del centro para elegir recursos. Tres matices:

- **El criterio 3.8** pide "adquirir y utilizar" vocabulario y expresiones. "Nunca se exige producción" es compatible, pero el método debe **provocar** producción con preguntas graduadas (las de `docs/04`) y registrarla. Conviene decirlo expresamente en `docs/06`.
- **El art. 16.4:** el informe final lo completa el tutor. El registro del especialista es una aportación, no un informe paralelo.
- **Los 2 h 15 min** superan el mínimo. El resto de la exposición obligatoria en centro bilingüe queda fuera del método (A6).

## 6. Plan técnico: propuesta

### Modelo de datos

```text
contenido/
  comun/
    cursos.yaml       por edad: personaje, color, tope de bloque, rango de palabras, números
    lexico.yaml       una entrada por palabra: id, palabra, gesto, origen de la imagen
    juegos.yaml       banco fijo: energía, edad mínima, versión de gran grupo
    rutinas.yaml      entrada, salida, normas, señal; qué entra en cada unidad y edad
    arquetipos.yaml   esqueleto de las sesiones 1 a 10 por edad
  unidades/u1-3.yaml
  modulos/  festividades/
medios/
  lexico/teddy.webp · teddy.mp3
  u1-3/cuento-01.webp · cuento-01.mp3 · chant.mp3
```

Una unidad queda así:

```yaml
curso: 3
unidad: 1
titulo: Hello, school!
estado: borrador                  # borrador · revisado · pilotado
vocabulario: [hello, goodbye, sit-down, stand-up, listen, quiet]   # ids del léxico
exposicion: [bag, coat]           # salen en el cuento; no cuentan ni llevan flashcard
recicla: []
chunks:
  - {texto: "Hello!", nivel: dicen}
  - {texto: "Sit down, please.", nivel: entienden}
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
    recortable: movimiento-2
    cambios: []                   # solo lo que se sale del arquetipo
    con_auxiliar: ...
```

Qué resuelve:

- **Una palabra, un sitio.** Imagen, audio y gesto están en el léxico; las tres edades comparten la misma flashcard de *cat*.
- **Rutas por convención.** El YAML no lleva rutas; el validador comprueba que existe cada archivo esperado. Desaparece el choque entre edades.
- **Sesiones generadas.** Treinta arquetipos (10 por edad) más unos pocos parámetros por unidad sustituyen a 240 planes escritos a mano. Es también lo que pide el método: formatos repetidos y previsibles.
- **Idiomas separados.** Las frases que dice el docente en inglés van en su propio campo (`dice`), aparte de la descripción en castellano. Así se pueden revisar y, si hiciera falta, locutar.

### Validaciones

Un script independiente del generador, que se ejecuta en cada cambio y antes de publicar:

- Los minutos de cada sesión suman 45 y hay exactamente un bloque recortable.
- Tope de actividad continua por edad (8, 10 y 12) y alternancia de `energia`.
- Palabras nuevas dentro del rango de la edad; ninguna palabra "nueva" repetida en el curso o en cursos anteriores.
- Criterios dentro de los cinco admitidos.
- Diez sesiones con la fase que corresponde a su número; sesiones 8 a 10 con `observacion`.
- Todo bloque con `adultos: 2` lleva `opcional: true`.
- Juego dentro del banco y permitido para la edad.
- Existen todos los medios esperados; cada medio de terceros tiene fila en `creditos/atribuciones.csv` con licencia admitida.
- Ortografía británica: lista corta de términos vetados (*color*, *mom*, *sweater*, *eraser*…).
- Peso: imagen y audio por debajo de un máximo, y total del sitio.

Así las reglas "no negociables" dejan de depender de que alguien las recuerde.

### Astro frente a Eleventy

| Criterio | Astro | Eleventy |
| --- | --- | --- |
| Validación de datos | Integrada: esquema por colección, error al construir | Hay que programarla aparte |
| Datos YAML | Colecciones con cargador de archivos | Soportado con una extensión de datos |
| JavaScript enviado al navegador | Ninguno por defecto | Ninguno |
| Motores de juego sin dependencias | Scripts estáticos, sin fricción | Igual |
| Imágenes | Optimización y WebP integrados | Complemento oficial |
| Complejidad y mantenimiento | Más piezas (Vite), versiones mayores frecuentes | Menos piezas, evolución lenta |
| Trabajo con Claude Code | Tipos y esquema ayudan a mantener la coherencia | Plantillas sueltas; más disciplina manual |

Recomendación en la sección 8. La decisión es de bajo riesgo: el contenido en YAML y el validador no dependen del generador, y cambiar más adelante costaría reescribir unas diez plantillas.

### GitHub Pages

Límites comprobados en la documentación oficial: 1 GB de sitio publicado, 1 GB recomendado de repositorio, 100 GB mensuales de ancho de banda (límite flexible) y 10 minutos por despliegue. El límite de 10 construcciones por hora no se aplica al publicar con GitHub Actions.

- El riesgo real no es el sitio sino el **historial**: cada imagen o audio sustituido queda para siempre en git. Regla: solo entran al repositorio medios finales y aprobados; las pruebas se quedan fuera.
- No usar Git LFS: complica la publicación y tiene cuota propia.
- Comprobar desde un ordenador de aula que el filtro de la red del centro no bloquea `github.io`.

## 7. Viabilidad: qué recortar y qué automatizar

| Medida | Ahorro estimado | Coste |
| --- | --- | --- |
| Sesiones desde 30 arquetipos en vez de 240 planes | 60-90 h | Menos variedad; se compensa con `cambios` por sesión |
| Biblioteca de posturas por personaje y composición de páginas; las imágenes del léxico sirven de objetos del cuento | La mitad de las ilustraciones | Páginas más sencillas |
| Léxico compartido entre edades: una flashcard por palabra | Elimina duplicados | Ninguno |
| Flashcards en tres tamaños desde la misma imagen | Total | Ninguno |
| Chants rítmicos hablados en las 24 unidades; melodía solo en las 6 canciones de rutina, sobre melodías tradicionales de dominio público | 20-30 h; sin partituras | Menos música original |
| 3 interactivos en vez de 9 hasta que el aula pida más | 40-60 h | Ninguno a corto plazo |
| 6 vídeos para docentes en vez de 15-25, grabados con el móvil | 20-30 h | Menos formación audiovisual |
| Sin vídeo con IA, sin aplicación instalable y sin ZIP | 20-40 h y mucho riesgo | Ninguno apreciable |
| Módulos de proyecto congelados | Los 27 kits | Los huecos flexibles se usan como colchón |

Con estos recortes el núcleo baja, a mi juicio, a unas 300-400 horas. La cifra buena saldrá de medir la U1 de 3 años.

**Lo que no recortaría:** la revisión del inglés, la prueba de cada material en un aula real, el registro de atribuciones y la validación automática. Son las cuatro cosas que sostienen la calidad cuando el equipo es pequeño.

## 8. Recomendación sobre las decisiones pendientes

### 1. Generador de la web: Astro

La validación con esquema es exactamente lo que este proyecto necesita, y la trae integrada. Tres condiciones: sin marcos de interfaz (ni React ni similares), versiones fijadas con archivo de bloqueo, y el validador como script independiente para que las reglas sobrevivan a un cambio de generador. Si el equipo valora más la estabilidad a diez años que la comodidad de hoy, Eleventy es una opción defendible; no hay elección mala.

### 2. Licencia: CC BY-NC-SA 4.0 para el contenido y MIT para el código

- BY-NC-SA es la única que permite integrar ARASAAC en los materiales sin zonas grises, y es compatible con todo lo CC BY.
- Impide que una editorial o una academia empaquete y venda el método.
- El código necesita una licencia de software; MIT es la más simple.
- Consecuencias que hay que aceptar: quedan vetadas las fuentes BY-SA (B2) y la licencia no protege las piezas generadas con IA.
- La alternativa, CC BY-SA, facilita más la reutilización y es habitual en repositorios institucionales, pero obliga a mantener ARASAAC en un kit aparte y permite el uso comercial.

Decidirla **antes de la primera publicación**: un repositorio público sin licencia es, por defecto, "todos los derechos reservados". Con ella, el acuerdo escrito de los autores.

### 3. Personajes de 4 y 5 años: aprobar los animales, revisar un nombre, decidir en enero

- Con el piloto empezando por 3 años, esta decisión no bloquea nada hasta enero.
- Koala y lechuza funcionan. Lo que manda es que exista marioneta, con boca móvil a ser posible, o que se encargue a medida.
- **Ollie** es buen nombre: corto y con fonología inglesa. Comprobar que no coincide con un producto comercial.
- **Kiko** suena a nombre español, no aporta sonidos del inglés y en castellano ya significa otra cosa. Propondría al equipo dos o tres alternativas (por ejemplo, *Milo* o *Joey*, que además es como se llama la cría del koala).
- Dar a cada personaje un carácter que acompañe la progresión: Pip, tímido (3 años: adaptación); el koala, juguetón (4: primeras producciones); Ollie, preguntón (5: preguntas y adivinanzas).
- Que Pip reaparezca como invitado en 4 y 5 años: da continuidad afectiva y reutiliza su biblioteca de posturas.

### 4. Modelos de voz e imagen: Venice decidido; falta elegir modelo y voz

Decidido el 12/11/2026: ilustración y voz se producen con la API de Venice. Queda elegir el modelo y la voz concretos, y para eso propongo este procedimiento:

- **Imagen:** elegir entre los modelos que admiten imágenes de referencia, porque la consistencia del personaje sale de ahí y no del texto del *prompt*. Criterios: coherencia de Pip en diez posturas, estilo plano y condiciones de redistribución, no la mejor imagen aislada. Generar la biblioteca de posturas en una sola tanda.
- **Voz:** misma página de cuento y misma lista de palabras en cinco o seis voces británicas, con una grabación humana del equipo como referencia. Una voz fija por personaje y otra para las palabras sueltas. Los chants cantados siguen siendo de voz humana.
- **En ambos casos:** leer las condiciones de Venice y del proveedor de cada modelo antes de la prueba, no después, y guardar en el repositorio el manifiesto de cada tanda (modelo, voz o estilo, parámetros, referencia, fecha).

**Catálogo de Venice consultado el 12/11/2026** (la lista de modelos es pública):

| Uso | Candidatos | Precio |
| --- | --- | --- |
| Imagen con referencia (hasta 6-16 imágenes de entrada) | `seedream-v5-5-edit`, `qwen-image-2-1-pro-edit`, `nano-banana-2-1-edit`, `gpt-image-2-6-flare-edit`, `minimax-h3-image-edit` | 0,03-0,10 $ por imagen a 1K |
| Imagen sin referencia, estilo ilustración | `recraft-v4`, `seedream-v5-5`, `nano-banana-2-1` | 0,03-0,10 $ |
| Fondo transparente para flashcards | `seedream-v5-5`, familia `gpt-image-2-5` y `2-6` | 0,03-0,09 $ |
| Voz para cuentos, por cola | ElevenLabs v4 y v3, con las voces británicas Lily, George, Alice y Daniel | 0,092 y 0,115 $ por 1.000 caracteres |
| Voz inmediata | ElevenLabs Turbo v2.5, Kokoro, Gemini 3.1 Flash | De 0,0035 a 0,19 $ por 1.000 caracteres |

Esta tabla es el primer vistazo. La revisión completa, con pruebas, está en "Segunda prueba", más abajo.

Dos consecuencias:

- **El coste no es el problema.** Unas 250 imágenes a 0,10 $, con tres intentos por imagen aprobada, son unos 75 $. Todo el audio del núcleo cuesta céntimos. Lo caro es el tiempo de revisar.
- **Los modelos ya han rotado.** En las tres semanas transcurridas desde `docs/07` han aparecido `nano-banana-2-1`, `gpt-image-2-6` y `seedream-v5-5`, que sustituyen a los que el documento cita por nombre. Confirma B3: los documentos deben fijar el procedimiento y el manifiesto, no nombres de modelo.

El acento de cada voz hay que confirmarlo escuchando; el catálogo no lo indica.

### Estado de la API de Venice

La primera clave fue rechazada (error 401). Con una clave nueva, guardada como variable de entorno del usuario, la prueba mínima del 12/11/2026 funcionó. Coste: 0,27 $. Las muestras están en `pruebas/venice-2026-11-12/`, fuera del control de versiones por ahora.

Es una prueba de conexión y de calidad, no la prueba ciega del método: el texto y el diseño de Pip son provisionales.

**Imagen**

| Modelo | Resultado |
| --- | --- |
| `nano-banana-2-1` | Pip con estilo plano, cálido y textura de papel, tal como se pidió. Sin texto ni defectos visibles |
| `nano-banana-2-1-edit`, con esa imagen como única referencia | Escena nueva (Pip asomado a la puerta del aula con mochila roja). **El personaje se mantiene:** colores, orejas, punta de la cola, proporciones y estilo. Cambios menores: aparecen pestañas y la puerta tiene una geometría algo rara |
| `recraft-v4` | Más plano y vectorial. Personaje descentrado y con mano de cinco dedos. Devolvió WebP aunque se pidió PNG |
| `seedream-v5-5` | Dos intentos, dos imágenes en negro marcadas por Venice como infracción de contenido. Causa desconocida; no se insistió |

Lo que enseña la prueba:

- **La consistencia con una sola imagen de referencia ya es buena.** Con una ficha completa (frente, perfil, espalda y expresiones) debería ser mejor. Es el flujo que conviene: ficha aprobada y, a partir de ella, cada página.
- **Hay falsos positivos del filtro de contenido.** Una descripción inocente de un zorrito fue bloqueada dos veces en un modelo. El guion de producción tiene que leer las cabeceras `x-venice-is-content-violation` y `x-venice-is-blurred` y descartar esas imágenes, porque la respuesta llega como correcta (HTTP 200).
- **Cada modelo tiene sus manías de formato.** El guion debe comprobar el formato real del archivo recibido y no fiarse del solicitado.

**Voz**

Cinco muestras del mismo texto: dos de ElevenLabs Turbo v2.5, dos de Kokoro y una de Inworld. No puedo escucharlas, así que la valoración es del equipo. Lo que sí se puede medir:

- **El ritmo varía el doble.** El mismo texto dura entre 7,8 y 14,2 segundos según el modelo. Las dos voces de Kokoro son las más rápidas y probablemente ignoran las pausas marcadas; para 3 años habrá que pedirlas más lentas o descartarlas.
- **La calidad del archivo no es igual.** ElevenLabs entrega 128 kbps y Kokoro 32 kbps.
- **Inworld solo entrega WAV:** hay que convertir.

### Segunda prueba: revisión del catálogo y modelos de gama alta

La primera tanda usó ElevenLabs Turbo v2.5 por comodidad (responde al momento), no por calidad. Óscar pidió revisar todo el catálogo y usar lo mejor para cada fin. Coste de la segunda tanda: 1,13 $. Total del día: 1,40 $.

**Voz: qué hay y qué sirve**

Venice ofrece 11 modelos de voz inmediatos y 5 de ElevenLabs por cola. Para cuentos en inglés británico para niños de 3 a 5 años:

| Modelo | Para qué | Dato de la prueba | Precio por 1.000 caracteres |
| --- | --- | --- | --- |
| `elevenlabs-tts-v4` | Cuentos y voces de personaje. Admite etiquetas de expresión (`[warmly]`, `[shyly]`, `[pause]`) | Las etiquetas no se leen en voz alta. 12-13 s | 0,092 $ |
| `elevenlabs-tts-v3` | Alternativa más pausada | El mismo texto dura 17 s: es la más lenta de ElevenLabs | 0,115 $ |
| `elevenlabs-tts-v4-turbo` | Palabras sueltas, si al oído no se distingue de v4 | 12 s | 0,046 $ |
| `elevenlabs-tts-multilingual-v2` | Única de ElevenLabs con control de velocidad (0,7-1,2) | Pedida a 0,85 | 0,115 $ |
| `tts-gemini-3-1-flash` | Acento y ritmo por instrucción escrita | Obedece la instrucción sin leerla. 24 s, muy pausada. Posible tropiezo en "red bag" | 0,1875 $ |

- **Voces británicas de ElevenLabs:** Lily, George, Alice y Daniel, según recuerdo del catálogo de ElevenLabs; Venice no indica el acento. Las cinco versiones de ElevenLabs comparten las mismas 20 voces.
- **Voces a medida:** los modelos de ElevenLabs aceptan el identificador de cualquier voz de su biblioteca. Se puede buscar ahí una voz británica de cuentacuentos infantil y usarla desde Venice.
- **Descartados para este uso:** Kokoro (une las frases sin pausas y entrega 32 kbps), Turbo v2.5 (generación anterior) y el resto (Qwen 3, xAI, Orpheus, MiniMax, Chatterbox, Gradium, Inworld), en los que no he identificado voces británicas.
- **El precio no decide nada.** Todo el texto del núcleo, unas 60.000 letras, cuesta entre 5 y 7 $ con v4 o v3.

**Imagen: la misma escena, con la misma referencia, en once modelos**

Todos recibieron la imagen de Pip como única referencia y la misma descripción: Pip asomado tímidamente a la puerta del aula, con mochila roja. Las once imágenes están en `pruebas/venice-2026-11-12/imagen/comparativa-1.jpg` y `comparativa-2.jpg`.

| Modelo | Personaje | Estilo plano y cálido | Sigue la pose pedida | Precio a 1K |
| --- | --- | --- | --- | --- |
| `nano-banana-pro-edit` | Muy fiel | Sí | Sí, la mejor: se asoma con la pata en la puerta | 0,18 $ |
| `nano-banana-2-1-edit` | Fiel; añade pestañas | Sí | Sí | 0,10 $ |
| `qwen-image-2-1-pro-edit` | Fiel | Sí, limpio | Sí | 0,05 $ |
| `gpt-image-2-6-sunburst-edit` | Muy fiel | Sí, el acabado más limpio | A medias: repite el saludo de la referencia | 0,10 $ |
| `seedream-v5-pro-edit` | Fiel | Sí, algo pálido | Sí | 0,06 $ |
| `minimax-h3-image-edit` | Fiel | Sí | A medias | 0,06 $ |
| `qwen-image-3-pro-edit` | Fiel; pelo más texturado | Sí; fondo recargado | Sí | 0,05 $ |
| `seedream-v5-5-edit` | Fiel y de perfil, un ángulo nuevo | Fondo más realista; cambió el formato a apaisado | Sí | 0,03 $ |
| `grok-imagine-image-2-0-edit` | Fiel | Sí | No: casi copia la referencia | 0,07 $ |
| `flux-3-image-edit` | Fiel | No: fondo pictórico con profundidad y viñeta | Sí | 0,12 $ |
| `krea-3-edit` | Cambia proporciones | No: deriva a boceto a lápiz | Sí | 0,07 $ |

Es una sola imagen por modelo, vista en miniatura: orienta, no decide.

- **Los once mantienen a Pip reconocible** con una sola referencia. La diferencia está en el estilo y en si obedecen la pose.
- **Finalistas que propongo para la prueba ciega:** `nano-banana-pro-edit`, `gpt-image-2-6-sunburst-edit`, `qwen-image-2-1-pro-edit` y `seedream-v5-pro-edit`. Cubren la gama de precio, de 0,05 a 0,18 $.
- **Descartaría** `flux-3-image-edit` y `krea-3-edit` por salirse del estilo, y `grok-imagine-image-2-0-edit` por no cambiar la pose.
- **El bloqueo de la primera tanda no se repitió:** `seedream-v5-5-edit` funcionó. El filtro falla de forma intermitente y hay que detectarlo siempre.
- **Fondo transparente:** `gpt-image-2-6-sunburst` devuelve PNG con transparencia real, útil para flashcards. La pelota de prueba salió con un halo rojizo alrededor; hay que verla sobre blanco antes de darla por buena.
- **Coste del núcleo con el modelo más caro:** 250 imágenes a 0,18 $ con tres intentos por cada una aprobada son unos 135 $.

**Pendiente para la prueba ciega de verdad**

- Texto real de la U1 y ficha de Pip aprobada.
- Voz: v4, v3 y Gemini con dos o tres voces británicas, una voz de la biblioteca de ElevenLabs y la grabación humana de referencia, todas al mismo formato.
- Imagen: los cuatro finalistas con pruebas más duras que una escena: Pip sentado, de espaldas, triste, con otro personaje, y tres páginas seguidas del cuento.

### Tercera prueba: voces de biblioteca, ritmo y estilo de ilustración

Coste: 0,96 $. Total del día: 2,38 $.

**Voces de la biblioteca de ElevenLabs**

- Venice acepta el identificador de cualquier voz de ElevenLabs, de serie o de la biblioteca. Probadas catorce, todas funcionaron.
- La biblioteca solo se puede filtrar con sesión iniciada en ElevenLabs. Las candidatas salen de su lista pública de voces de serie y de un directorio de terceros, así que la búsqueda no es exhaustiva.
- **Narrador, uno para los tres cursos:** nueve candidatos, de serie (George, Lily, Dorothy) y de biblioteca (Bradford, Owen, Verity X, Ana-Rita2, Imogen, Abbey). Dorothy es la única descrita expresamente para cuentos infantiles.
- **Personaje:** cinco candidatas de voz joven para Pip (Emmaline, Amelia, Emilia, Ana, Johnny Kid Serious).
- Muestras e identificadores en `pruebas/venice-2026-11-12/voces/LEEME.md`.
- **Riesgo:** una voz de biblioteca es de quien la grabó y puede retirarla. Para un método de varios cursos, las de serie son más seguras; si se elige una de biblioteca, conviene generar todo el audio de ese personaje en pocas tandas.

Propuesta de reparto: un narrador fijo para todo el método y una voz por personaje guía (Pip y los dos de 4 y 5 años). Las palabras sueltas las dice el narrador.

**Ritmo**

Óscar observó que la muestra de Gemini era la que más frenaba el ritmo. Las medidas lo confirman, con el mismo texto de 88 letras:

| Cómo | Duración |
| --- | --- |
| ElevenLabs v4, sin ajustes | 8,4 s |
| ElevenLabs v3, sin ajustes | 8,4 s |
| Multilingual v2 con velocidad 0,7 | 9,4 s |
| v4 ralentizado al 85 % después de generar | 9,9 s |
| v4 con etiquetas `[slowly]` y `[pause]` | 10,0 s |
| v4 frase a frase, unidas con 1 s de silencio | 10,8 s |
| Lo anterior, ralentizado al 85 % | 12,7 s |
| Gemini 3.1 Flash con instrucción de hablar despacio | 14,3-15,4 s |

- Gemini es el único que obedece de verdad una instrucción de ritmo: tarda un 75 % más que ElevenLabs.
- ElevenLabs no tiene un mando de velocidad útil en v4 ni v3, pero el ritmo se puede fijar **después**: generar cada frase por separado, unirlas con el silencio que se quiera y, si hace falta, ralentizar sin cambiar el tono.
- **Propuesta:** el ritmo pasa a ser un dato del método y no del modelo. En `contenido/comun/cursos.yaml`, cada curso fija su pausa entre frases y su velocidad (más pausa en 3 años), y el guion de producción lo aplica a cualquier voz. Así se elige la voz por timbre y calidez, y el ritmo se ajusta sin regenerar ni pagar de nuevo.

**Estilo de ilustración: cómo evitar el aspecto de imagen genérica de IA**

De dónde salió la referencia de Pip usada en las pruebas: la generó `nano-banana-2-1` a partir de una descripción que escribí yo para probar la conexión. No hay detrás ningún diseño humano ni decisión del equipo. Por eso tiene exactamente el aspecto por defecto de estos modelos: ojos grandes con brillo, colorete, pelo difuminado a lápiz, textura de papel falsa y fondo crema. **No debe usarse como diseño de Pip.**

Qué delata una imagen genérica de IA y cómo se evita:

| Lo que delata | Qué hacer |
| --- | --- |
| El diseño lo inventa el modelo y converge en lo mismo que todos | El diseño lo origina una persona: boceto del equipo, ficha encargada a un ilustrador o la marioneta real. La IA extiende, no inventa |
| Degradados suaves, brillos, colorete, texturas simuladas | Estilo gráfico con reglas: formas planas, sin degradados, ojos de punto, paleta cerrada de cuatro o cinco colores |
| Fondos recargados con objetos sin sentido | Fondo liso o un solo elemento. También es mejor para 3 años: una acción por página |
| Cada imagen sale un poco distinta | Generar pocas piezas y componer: biblioteca de posturas del personaje con fondo transparente, más fondos planos |
| Colores que derivan entre tandas | Forzar después la paleta exacta del método en todas las imágenes |
| Nadie revisa | Dirección de arte humana: una persona aprueba cada imagen y descarta lo dudoso |

Probé la misma descripción en cuatro estilos con reglas (`pruebas/venice-2026-11-12/imagen/estilos/comparativa-estilos.jpg`):

| Estilo | Resultado | Para qué encaja |
| --- | --- | --- |
| Papel recortado | El más distinto del aspecto por defecto: piezas planas, paleta cerrada, aspecto manual. Añadió una bufanda sin pedirla | Cuentos. Se puede imitar con tijeras y cartulina en el aula |
| Serigrafía a dos tintas | Silueta fuerte y muy poca información | Cuentos y fichas. Una tinta podría ser el color del curso (naranja, verde, morado), y abarata la impresión |
| Línea gruesa y color plano | Muy simple y limpio, tipo pictograma o pegatina. Algo impersonal | Flashcards e interactivos. Se puede vectorizar y retocar a mano |
| Gouache de formas simples | El más parecido al aspecto por defecto | No lo recomiendo |

Consistencia en estos estilos (`comparativa-consistencia.jpg`): con la imagen de estilo como referencia, la escena nueva mantiene personaje, paleta y técnica tanto en papel recortado como en línea gruesa. Cuanto más plano y reglado es el estilo, menos margen tiene el modelo para desviarse.

Tres vías, de menos a más riesgo de aspecto genérico:

1. **Fotografiar la marioneta real** para los cuentos, sobre fondos sencillos y sin niños. Consistencia total, ningún aspecto de IA y es el mismo Pip que los niños ven en clase. La IA quedaría para flashcards y fondos.
2. **Diseño humano y estilo gráfico reglado**, con la IA como extensión: ficha de personaje dibujada o encargada, uno de los estilos de arriba y composición por piezas.
3. **Todo generado**, aunque sea con buen modelo y buen estilo: es lo más rápido y lo que más se parecerá a todo lo demás que se genera hoy.

Recomiendo decidir el estilo antes que el modelo, y que la decisión la tome el equipo viendo las hojas comparativas. Esto refuerza el hallazgo B3: primero el diseño, después la marioneta y la ilustración.

### Cuarta prueba: dirección de estilo cálida

Criterio de Óscar tras ver los estilos: el papel recortado es poco evocador; el estilo tiene que ser **reconfortante para el alumnado**, amable y cálido. Le funcionan mejor la serigrafía a dos tintas y el gouache, y le pareció muy evocadora la escena de `seedream-v5-5-edit` (Pip de perfil asomado a la puerta del aula).

Por qué esa imagen reconforta. Lo que la hace funcionar es la composición y la luz, más que la técnica:

- **Es un momento del cuento, no una pose.** Pip está de perfil, con la pata en el marco: curioso, no asustado. El gesto cuenta la emoción.
- **Pip es pequeño en el encuadre**, a la altura de los ojos de un niño.
- **Luz cálida y contraste suave:** el aula se ve en azul claro con sol en el suelo; el pasillo es crema.
- **Mucho espacio en calma:** una pared vacía y tres o cuatro objetos.
- **Un solo acento de color:** la mochila roja guía la mirada.

Prueba: la misma escena redibujada en cuatro técnicas (gouache, risografía a tres tintas, acuarela con lápiz y pastel), en `pruebas/venice-2026-11-12/imagen/calidos/comparativa-calidos.jpg`. Coste: 0,34 $.

- **La calidez se mantiene en todas**, porque viene de la composición.
- **Quitar el brillo de los ojos y el colorete no enfría la imagen.** Las versiones con ojos de punto siguen siendo amables y pierden dos de los rasgos más reconocibles de la imagen genérica de IA. Cálido y poco genérico no están reñidos.
- **La técnica cambió poco** en gouache, acuarela y pastel: al redibujar a partir de una imagen, el modelo conserva casi todo. La risografía sí cambia: más grano y color más vivo.
- **Detalle a vigilar:** el original lleva letras ilegibles en los libros. La versión en gouache de `nano-banana-2-1-edit` las quitó; las de `seedream-v5-5-edit` no del todo.

**Guía de estilo provisional**, para discutir con el equipo:

| Regla | Concreción |
| --- | --- |
| Emoción | Reconfortante. El gesto y la postura llevan la emoción; nunca miedo sin consuelo en la misma página |
| Personaje | Pequeño en el encuadre, de perfil o tres cuartos. Ojos de punto, sin brillo ni colorete |
| Luz | Una fuente de luz cálida por página; una zona cálida y otra fría, sin sombras duras |
| Espacio | Fondo en calma, con un máximo de tres o cuatro objetos y sin letras |
| Paleta | Naranja de Pip, crema, azul cielo, miel y madera. Un único acento por página |
| Técnica | Gouache suave (decidido el 12/11/2026) |
| Punto de vista | A la altura de un niño de 3 años |

Estas reglas dan también consistencia: si todas las páginas las cumplen, el cuento se reconoce aunque cambie la escena.

Lo que sigue pendiente no cambia: el diseño de Pip debe originarlo una persona, y con él se repite esta prueba antes de producir nada.

**Saldo de Venice:** quedan 0,62 $. Entre dos comprobaciones seguidas el saldo bajó 0,51 $ sin que esta sesión hiciera llamadas; puede ser un cargo que se asienta con retraso o un uso de la cuenta en otro sitio. Conviene revisarlo en el panel de Venice antes de recargar.

### 5. Alojamiento de vídeos: Mediateca de EducaMadrid

Es institucional, sin publicidad ni seguimiento y sin vídeos recomendados al terminar. Usar una cuenta del centro, no la personal de un docente. YouTube solo como último recurso, en modo sin cookies y nunca incrustado en las páginas de familias. Comprobar antes que la Mediateca permite incrustar y que los vídeos se ven sin iniciar sesión.

### 6. Decisiones nuevas que añadiría a la lista

- **Dirección pública definitiva** (A10). Recomiendo un dominio propio.
- **Quién revisa el inglés** (B11).
- **Marioneta:** encargo a medida a partir del diseño (B3).

### 7. Ritmo de implantación

Decidirlo en marzo, con las horas reales del piloto:

- **Opción A, tres cursos a la vez:** primer trimestre completo (9 unidades) listo en septiembre de 2027 y producción un trimestre por delante. Exigente.
- **Opción B, con la promoción:** 3 años en 2027-28, 4 años en 2028-29 y 5 años en 2029-30. Son ocho unidades por curso, resuelve de raíz el problema de la primera promoción (B1) y permite que 4 y 5 años adopten ya lo común (rutinas, normas, señal, banco de juegos).

Si el piloto confirma mi estimación de horas, recomendaré la B.

## 9. Lo que falta para empezar el piloto

**Decisiones**

- [ ] Aprobar o descartar las propuestas de este documento.
- [ ] Generador, licencia y dirección pública.
- [ ] Persona que revisa el inglés.
- [ ] Marioneta: a medida o comprada; cuántas.

**Centro**

- [ ] Número de grupos por nivel y docentes que participan.
- [ ] Acuerdo con los tutores de 3 años: rincón, cinco minutos diarios y canal de traspaso.
- [ ] Apoyo de aula en 3 años.
- [ ] Presentación al ciclo y a la CCP; carta a las familias.
- [ ] Inventario de pantallas y sonido de cada aula; prueba de acceso a la web desde el centro.
- [ ] Presupuesto de impresión y plastificado.

**Método**

- [ ] Mapa del núcleo corregido (A1).
- [ ] Sesión tipo por edad con bloque recortable (A2) y 10 arquetipos de 3 años.
- [ ] Banco de juegos escrito, con versión de gran grupo (A4).
- [ ] Rutinas: canciones de entrada y salida, señal de atención, tres normas, calendario de rutinas (B7).
- [ ] Indicadores por criterio y edad, y registro de observación (A9).
- [ ] Ficha de seguimiento del piloto (B12).

**Contenido de la U1 de 3 años**

- [ ] Cuento en el repositorio, revisado.
- [ ] Chant, gestos y frases del docente.
- [ ] Diez sesiones generadas desde los arquetipos.
- [ ] Ficha para casa y página de familias.

**Medios**

- [ ] Diseño de Pip y biblioteca de posturas.
- [ ] Ilustraciones del cuento y del léxico de la U1.
- [ ] Audios en MP3: palabras, cuento, chant y canciones de rutina.
- [ ] Kit de pictogramas de ARASAAC con su atribución.

**Técnica**

- [ ] Estructura de `contenido/comun/` y plantillas nuevas.
- [ ] Validador.
- [ ] Web mínima: unidad, sesión, flashcards imprimibles y página de familias.
- [ ] Cuento digital con sus dos modos, probado en una pizarra del centro.

## 10. Cambios por archivo, si se aprueban

| Archivo | Cambios | Hallazgos |
| --- | --- | --- |
| `CLAUDE.md` | Tope por edad y bloque recortable; `energia`; vocabulario nuclear y exposición; léxico único y rutas por convención; MP3; licencias de entrada sin BY-SA; tipografías alojadas en el sitio; identificador `u1-3`; decisiones pendientes remitidas a `docs/07`; ratio máxima de 20 | A1, A2, A8, A10, B2, B4, B5, C4, C15 |
| `docs/01` | Cifra de sesiones útiles; encaje formal en el centro | A3, B13 |
| `docs/02` | Papel del especialista y del tutor en la evaluación; enlace de la Orden 460/2023; dato del estudio de cuentos y canciones | A9, C1, C2 |
| `docs/03` | Estándar 12, realista con un adulto; ratio de 20 | A4, C15 |
| `docs/04` | Ritmo de sesión coherente con el tope por edad; agrupamientos | A2, A4 |
| `docs/05` | Papel real de los álbumes CC BY; ARASAAC y licencia del método; retirar OpenMoji | A5, B2, C10 |
| `docs/06` | Mapa del núcleo; sesión tipo; calendario sobre 90 sesiones; respuesta simultánea; exposición diaria y áreas en inglés; indicadores y observación por muestreo; primera promoción; calendario de rutinas; estructuras de 5 años; apoyo de aula | A1-A4, A6, A9, B1, B7-B10, C5-C9 |
| `docs/07` | Estrategia única de ilustración; flujo de la marioneta; inventario recalculado y recortes; un solo mecanismo sin conexión; MP3; PDF generados; fases y piloto escalonado; lista única de decisiones | A5, A7, A10, B3, B5, B6, B11, B12, C12 |
| `contenido/unidades/_plantilla.yaml` | Reescritura según la sección 6 | A8, A9, C11 |
| `contenido/modulos/_plantilla.yaml` | Mismas convenciones; sesiones modeladas | A8 |
| `contenido/comun/` (nuevo) | `cursos`, `lexico`, `juegos`, `rutinas` y `arquetipos` | A8, B7 |
| `contenido/festividades/` | Plantilla | C13 |
| `README.md`, `medios/README.md`, `juegos/README.md` | Rutas, formato de audio, fuente canónica | B5, C3 |

## 11. Hoja de ruta

Fechas orientativas; hay que ajustarlas al calendario escolar oficial.

| Semana | Pasos |
| --- | --- |
| 16-20 nov | Aprobar propuestas. Decidir generador, licencia y dirección pública. Aplicar los cambios a `docs/` y `CLAUDE.md`. Pedir reunión con el equipo directivo y los tutores de 3 años. Encargar el diseño de Pip y pedir presupuesto de la marioneta |
| 23-27 nov | Crear `contenido/comun/` y las plantillas nuevas. Escribir el validador. Corregir el mapa del núcleo. Redactar banco de juegos, rutinas y normas. Nombrar a quien revisa el inglés |
| 30 nov-4 dic | Cuento, chant y frases de la U1 de 3 años, revisados. Diez arquetipos de 3 años y las diez sesiones generadas. Indicadores y registro de observación |
| 9-11 dic | Esqueleto de la web: unidad, sesión, flashcards y página de familias. Prototipo del cuento digital con imágenes provisionales. Preparar las pruebas ciegas de voz e imagen |
| 14-18 dic | Pruebas ciegas con los docentes. Biblioteca de posturas de Pip. Ilustraciones y audios de la U1. Prueba en una pizarra real y en la fotocopiadora del centro. Carta a las familias |
| Navidad | Colchón. Imprimir, plastificar y montar la caja del rincón |
| 11 ene-5 feb | **Piloto de la U1 en 3 años** (10 sesiones), con ficha de seguimiento en cada sesión. En paralelo: decidir los personajes de 4 y 5 años y adaptar su U1 |
| 8-12 feb | Revisión del piloto: horas reales, minutos reales por bloque, cambios en plantillas y arquetipos |
| 15 feb-12 mar | **Piloto de la U1 en 4 y 5 años** con las plantillas corregidas |
| 15-19 mar | Decidir el ritmo de implantación (opción A o B) y planificar la producción hasta septiembre de 2027 |

Camino crítico: diseño de Pip → biblioteca de posturas → ilustraciones del cuento. Si el diseño no está aprobado a mediados de diciembre, el piloto se retrasa.

## Fuentes consultadas en esta revisión

- [Decreto 36/2022, de 8 de junio (BOCM n.º 136, 9/6/2022)](https://www.comunidad.madrid/transparencia/sites/default/files/5-decreto_educ_infantil-bocm.pdf)
- [GitHub Pages: límites de uso](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [ARASAAC, Aula Abierta: condiciones de uso](https://aulaabierta.arasaac.org/en/terms-of-use)
- [Dictamen 48/2022 sobre el proyecto de orden de Infantil (numeración del borrador)](https://www.comunidad.madrid/sites/default/files/dictamen_48_2022_orden_ordenacion_func_infantil_firm.pdf)
- [Instrucciones de centros bilingües 2026-2027](https://documentos.anpemadrid.es/docs/pdf/Instrucciones_centros_bilingues_2026-2027.pdf) (localizadas, no releídas)
- [Formato Opus: compatibilidad por navegador](https://www.caniuse.com/opus)
