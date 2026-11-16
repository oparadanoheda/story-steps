# Story Steps

Método de inglés sin libro para Educación Infantil (3, 4 y 5 años). Lo forman un núcleo en espiral de 8 unidades por curso, contadas a partir de un cuento, y un catálogo de módulos de proyecto. Todo el material (cuentos, chants, flashcards, sesiones e interactivos para la pizarra) se publica como web docente gratuita.

**Estado:** fase 0 (cimientos). Todavía no hay web. El método se revisó el 12/11/2026; el siguiente paso es el piloto de la unidad 1 en 3 años.

## Estructura

| Carpeta | Contenido |
| --- | --- |
| `docs/` | Documentos de investigación y diseño del método (01-08). Es la versión canónica |
| `contenido/comun/` | Datos comunes: cursos, léxico, banco de juegos, rutinas y arquetipos de sesión |
| `contenido/` | Unidades, módulos y festividades como datos YAML |
| `medios/` | Imágenes (WebP) y audios (MP3) finales y optimizados |
| `juegos/` | Motores de los interactivos para la pizarra digital |
| `src/` | Plantillas de páginas y vista de impresión (pendiente del generador) |
| `herramientas/` | Validador de las reglas del método y sus pruebas |
| `creditos/` | Registro de atribuciones y licencias |
| `pruebas/` | Pruebas de producción de voz e imagen; no se publican |
| `CLAUDE.md` | Reglas del método y del proyecto para Claude Code |

## Comprobar las reglas del método

Hace falta [Node.js](https://nodejs.org) 20 o posterior. La primera vez:

```bash
npm install
```

Para comprobar que el contenido cumple las reglas (minutos por sesión, tope por edad, rango de vocabulario, criterios, juegos por edad, licencias, inglés británico):

```bash
npm run validar
```

Los errores impiden publicar; los avisos son normales en un borrador. Las pruebas del propio validador se ejecutan con `npm test`.

## Documentos de diseño

1. [Marco curricular](docs/01%20Marco%20curricular%20-%20inglés%20en%20Infantil%20(Comunidad%20de%20Madrid).md)
2. [Líneas metodológicas](docs/02%20Líneas%20metodológicas%20-%20inglés%20en%20Infantil.md)
3. [Métodos de referencia](docs/03%20Métodos%20de%20referencia%20-%20qué%20funciona%20en%20inglés%20para%20Infantil.md)
4. [Atención a la diversidad y gestión de conducta](docs/04%20Atención%20a%20la%20diversidad%20y%20gestión%20de%20conducta.md)
5. [Recursos abiertos](docs/05%20Recursos%20abiertos%20para%20inglés%20en%20Infantil.md)
6. [Núcleo y módulos](docs/06%20Método%20de%20inglés%20sin%20libros%20-%20núcleo%20y%20módulos%20(Infantil).md)
7. [Plan de producción y plataforma docente](docs/07%20Plan%20de%20producción%20y%20plataforma%20docente.md)
8. [Revisión y propuestas](docs/08%20Revisión%20y%20propuestas.md): por qué se cambió cada regla el 12/11/2026

Los documentos nacieron en claude.ai y se exportaron aquí. Desde el 12/11/2026 la versión que manda es la de esta carpeta.

## Licencia

Pendiente de decidir (propuesta: CC BY-NC-SA 4.0 para el contenido y una licencia de software para el código). Hasta que se decida, todos los derechos reservados. Los recursos de terceros conservan su licencia; ver `creditos/atribuciones.csv`.
