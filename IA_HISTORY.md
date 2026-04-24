# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- Tu nombre completo -->
**Fecha:** <!-- Fecha del examen, ej: 21/04/2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
Durante la etapa de resolver la parte de JavaScript, cuando la IA me propuso declarar las variables
con los valores del personaje. Me di cuenta que los valores estaban escritos directamente
en el código y ahí me pregunté si eso era lo correcto o si debían extraerse del HTML.
```

### Lo que le pedí a la IA

```
"pero estas estadisticas no deberiamos sacarlas del html? o sea en el html estan
hardcodeadas, que analisis haces para declararlas asi en js? hay alguna parte del
examen que te lo indica?"
```

### Análisis del resultado obtenido

```
La IA declaró las variables con valores hardcodeados en lugar de usar
`document.querySelector` para extraerlos del DOM. En un primer momento asumí
que esto podría ser un error porque los mismos valores ya estaban en el HTML,
y me pareció redundante declararlos dos veces. La IA justificó su enfoque
señalando que la consigna pedía explícitamente declarar variables en JS sin
ninguna referencia al DOM, y que era una separación intencional de
responsabilidades: el HTML maneja la presentación visual y el JS los datos
para la lógica de juego.
```

### Qué debí corregir manualmente y por qué

```
Fui a releer la consigna y confirmé que efectivamente pedía declarar las stats
como variables independientes en JS, sin ninguna mención a extraerlas del HTML.
El código de la IA era correcto, pero mi intervención fue necesaria para
validarlo — sin ese análisis crítico podría haber reescrito las variables
innecesariamente usando querySelector y generado un acoplamiento entre el HTML
y el JS que la consigna no pedía y podía haber complejizado todo innecesariamente. Lo que corregí no fue el código sino mi
propia interpretación inicial, que fue el resultado más valioso del intercambio.
```

---

## Prompt 2

### Momento del proceso

```
Durante la mejora del navbar que quise hacer despues de terminar el mvp digamos, cuando detecté que al tabular en desktop los
links del nav eran salteados. Le pedí a la IA que resolviera el problema de
accesibilidad y propuso una solución que combinaba cambios en HTML, CSS y JS
simultáneamente usando el atributo `inert` y reemplazando `display: none` por
`max-height` para las transiciones en mobile.

```

### Lo que le pedí a la IA

```
chat los cambios no funcionaron, el nav en desktop ahora no se puede seleccionar
y en mobile esta media abierta la hamburguesa, creo que se perdio el hilo y por
las dudas voy a deshacer los cambios asi no nos desvirtuamos. planifiquemos de
nuevo que vamos a hacer para resolver lo del tab en el nav
```

### Análisis del resultado obtenido

```
La IA propuso una solución técnicamente válida en teoría — usar `inert` para
bloquear el foco en mobile cuando el menú está cerrado y `max-height` para
permitir transiciones CSS que `display: none` no permite. Sin embargo al
aplicar los cambios el resultado fue que en desktop los links dejaron de ser
focuseables y en mobile el menú quedó parcialmente abierto. La solución tocaba
demasiadas capas al mismo tiempo sin un diagnóstico claro del problema real,
lo que generó regresiones en funcionalidad que antes estaba correcta.
```

### Qué debí corregir manualmente y por qué

```
Detecté los errores inmediatamente usando el live server que tenía corriendo
durante todo el desarrollo, y confirmé el problema swicheando entre desktop y
modo mobile en DevTools. Como llevaba un control estricto de ramas y commits,
la versión anterior era completamente funcional, entonces decidí revertir todos
los cambios y eliminar la rama en lugar de intentar parchear una solución que
estaba generando más problemas de los que resolvía. Finalmente consultando con
otro agente determinamos que el tab en realidad funcionaba correctamente y el
problema era algo del "entorno de testing" que yo estaba usando. pero como no venia al caso decidí dejarlo asi y seguir con el resto del examen.

```

---

## Reflexión final

```
La IA fue útil como punto de partida y para avanzar rápido en partes donde la
estructura era clara, pero tendió a proponer soluciones que tocaban múltiples
capas simultáneamente sin validar cada paso por separado. El error más
repetido fue asumir que el problema estaba en el código cuando en realidad
era un problema del entorno de testing. Hubo cosas que la IA resolvió muy
bien a la primera, como la lógica de las funciones JS, el layout flex del
hero y el sistema de mensajes dinámicos del formulario según el nivel del
personaje. La próxima vez le pediría que hiciera cambios más pequeños y
verificables antes de combinar modificaciones en HTML, CSS y JS al mismo
tiempo, porque cuando algo falla en un cambio múltiple es difícil aislar
cuál de las partes generó el error.
```
