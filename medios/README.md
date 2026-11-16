# Medios

Las rutas van por convención: los archivos YAML de `contenido/` no las escriben.

- `lexico/<id>.webp` y `lexico/<id>.mp3` — imagen y audio de cada palabra del léxico, compartidos por las tres edades (`lexico/teddy.webp`).
- `<unidad>/` — cuento, chant y dibujo para casa de cada unidad y edad (`u1-3/cuento-01.webp`, `u1-3/cuento-01.mp3`, `u1-3/chant.mp3`, `u1-3/casa.webp`).
- `personajes/` — ficha aprobada y biblioteca de posturas de cada personaje guía.

Formatos: imágenes en WebP; audio en MP3 mono de 48-64 kbps.

Solo entran aquí medios finales y aprobados: cada archivo sustituido queda para siempre en el historial de git. Los originales de alta resolución, las pruebas y los vídeos no se guardan aquí: el sitio publicado no puede pasar de 1 GB.

Cada recurso de terceros, y todo lo generado con IA, se anota en `../creditos/atribuciones.csv` en el mismo commit en que se añade.
