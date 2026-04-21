# Examen Parcial — Desarrollo Web e IA

**Duración:** 2 horas | **Modalidad:** Individual

---

## Consigna: "The Broken Character Sheet"

Recibirás la ficha de un personaje de videojuego hecha con HTML malo. Tu tarea es **corregirla**, darle estilos modernos y agregar lógica en JavaScript que se ejecute en la consola del navegador.

---

## Requisitos Técnicos

### 1. Git & GitHub (obligatorio para aprobar)
- Hacer **fork** del repositorio template provisto por el docente (ya tiene la estructura base lista).
- Subir los cambios con **mínimo 4 commits** con mensajes descriptivos en inglés.
  - ❌ Incorrecto: `"entrega final"`, `"cambios"`, `"fix"`
  - ✅ Correcto: `"fix: replace divs with semantic HTML elements"`, `"feat: add CSS grid layout"`

### 2. HTML & Accesibilidad
- Reemplazar todos los `<div>` y `<span>` estructurales por etiquetas semánticas:
  `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc.
- Agregar `alt` descriptivo a **todas** las imágenes.
- Asociar cada campo del formulario con su `<label>` correspondiente (usando `for` e `id`).
- Reemplazar los falsos botones (`<div class="btn">`) por elementos `<button>`.
- Corregir la paleta de colores para cumplir WCAG AA (contraste mínimo **4.5:1** para texto normal).
- Agregar `lang="es"` al `<html>` y `<meta name="viewport">` en el `<head>`.

### 3. CSS Moderno (crear `style.css`)
- Definir layout macro con `grid-template-areas` para `header`, `main` y `footer`.
- Usar `display: flex` para la barra de navegación y las etiquetas de habilidades (`.tags`).
- Implementar breakpoint en `768px`: la grilla de stats pasa de **2 columnas a 1**.
- Eliminar los estilos inline y el bloque `<style>` del HTML.

### 4. JavaScript (crear `script.js`)

El archivo se vincula desde el HTML con `<script src="script.js"></script>`. Verificar resultados en **DevTools → Console**.

**Variables:**
- Declarar las stats del personaje (nombre, clase, nivel, vida, mana, ataque, defensa) usando `const` o `let` según corresponda. Nunca usar `var`.

**Funciones a implementar:**

| Función | Tipo | Qué debe hacer |
| :--- | :--- | :--- |
| `calcularDaño(ataque, defensa)` | Declarada | Retornar la diferencia entre ataque y defensa. |
| `estaVivo` | Arrow function | Recibir `vida`, retornar `true` si es mayor a `0`. |
| `puedeLanzarHechizo(manaActual, costoHechizo, estaAturdido)` | Arrow function | Retornar `true` solo si hay mana suficiente **y** el personaje no está aturdido. |
| `obtenerPresentacion(nombre, clase, nivel)` | Declarada | Retornar un string que combine los tres datos. |

**Resultados:**
- Llamar a cada función con los valores declarados y mostrar cada resultado con `console.log`.

**Buenas prácticas obligatorias:**
- Nombres descriptivos (no `x`, `a`, `temp`).
- Sin `var`.
- Sin números mágicos: usar las constantes declaradas como argumentos, no valores sueltos.

### 5. Uso Crítico de IA (completar `IA_HISTORY.md`)
- Documentar **2 prompts** usados durante el examen.
- Para cada uno: qué le pediste a la IA, qué devolvió, y qué debiste corregir manualmente y por qué.

---

## Criterios de Fallo Automático

| Criterio | Fallo |
| :--- | :--- |
| **HTML** | La estructura principal sigue siendo `<div>` anidados. |
| **Accesibilidad** | El formulario no tiene `<label>` o las imágenes no tienen `alt`. |
| **CSS** | No se usa Grid para el layout. El sitio no es responsive. |
| **JavaScript** | Errores en consola que impidan la ejecución del script. |
| **Git** | Un solo commit con todo el trabajo, o mensajes sin formato descriptivo. |

---

## Cronograma Sugerido

| Tiempo | Actividad |
| :--- | :--- |
| 00:00 – 00:10 | Leer la consigna, hacer fork del template, primer commit. |
| 00:10 – 00:45 | Corregir HTML semántico y accesibilidad. |
| 00:45 – 01:15 | Escribir `style.css` (Grid, Flexbox, responsive). |
| 01:15 – 01:40 | Escribir `script.js` (variables + funciones + `console.log`). |
| 01:40 – 02:00 | Completar `IA_HISTORY.md` con criterio. |

---

## Entrega

Al finalizar, completar el formulario de entrega con:
1. URL del **repositorio** forkeado en GitHub (debe ser público).
2. Archivo `IA_HISTORY.md` dentro del repositorio.

---

> **Recordatorio:** La IA es una herramienta. El código que genera puede tener errores de lógica, semántica o accesibilidad. Usarla sin criterio propio es parte de lo que se evalúa.
