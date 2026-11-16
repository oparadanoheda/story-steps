# Interactivos

Motores reutilizables para la pizarra digital que se alimentan de los datos de cada unidad (`contenido/`).

El piloto empieza por tres: cuento digital, Listen and touch y Bingo caller.
Los demás (rutina del día, agenda visual, What's missing?, Pair game, ruleta o dado, Who says…?) se programan cuando un docente los pida.

Requisitos (ver `CLAUDE.md`):

- JavaScript sin dependencias.
- Modos táctil y sin táctil, botones de al menos 80 px y nada que dependa de leer.
- Un solo mecanismo sin conexión: el botón de descarga monta en el navegador un único HTML con sus imágenes y audios. Ese archivo lleva todo dentro, sin `import` ni `fetch`, porque se abrirá desde el disco.
