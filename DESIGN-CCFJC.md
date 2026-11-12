# Propuesta visual CCFJC — "Operate" adaptado a la identidad institucional

> Basada en `DESIGN.md` (sistema "Operate — botanist's data terminal", tema light),
> con la paleta institucional del Centro de Ciencia Francisco José de Caldas.

La idea central del sistema original: la página se comporta como un **instrumento de
medición** — un lienzo de "papel" con tarjetas planas de borde fino (hairline), una
sola acción cromática por pantalla, etiquetas mono en MAYÚSCULAS con tracking amplio
tipo `[ specimen ]`, y datos/visualizaciones dibujados directamente sobre el lienzo.
Aquí ese sistema se re-colorea con los cuatro colores institucionales.

## 1. Paleta — mapeo de roles

Paleta base dada: `#e22d45` · `#161635` · `#ed7f2a` · `#7f7f7f7`

| Rol en DESIGN.md | Hex original | Nuevo (CCFJC) | Uso |
|---|---|---|---|
| Forest Ink (tinta principal) | `#09352e` | **`#161635`** | Texto principal, iconos, strokes de gráficos, bordes outlined, paneles oscuros (Charcoal Bark) |
| Sage Paper (canvas) | `#e0e0e0` | **`#f4f4f4`** (tinte claro de `#7f7f7f7`) | Fondo de página, edge-to-edge |
| Ash Gray (bloque hundido) | `#e5e5e5` | **`#ececec`** | Superficie alterna bajo tarjetas |
| Lichen (hairlines / ejes) | `#cad3d2` | **`#7f7f7f7`** | Bordes de 0.5px, divisores punteados, ejes |
| Slate Smoke (metadata) | `#6c7a79` | **`#7f7f7f7`** | Textos secundarios, captions |
| Bone White (cards) | `#ffffff` | **`#ffffff`** | Único blanco puro: superficies de tarjetas y texto inverso |
| Moss (único CTA filled) | `#85c093` | **`#e22d45`** | El único botón filled por pantalla (ej. "Enviar", "Cotizar") |
| Deep Fern / Pine / Emerald (links, tags) | `#007010` etc. | **`#ed7f2a`** | Links, tags, acentos de texto enfatizado |
| Indigo Accent (puntuación) | `#433787` | **`#ed7f2a`** | Una sola anotación cromática por página — usar con moderación |
| Muted Sage (washes) | `#77aa83` | `rgba(226,45,69,0.08)` | Fondos suaves detrás de datos (halos, chips) |

**Regla de oro del sistema:** un solo color de acción filled por pantalla → en CCFJC
eso es el rojo `#e22d45`. El naranja `#ed7f2a` es solo para links/tags/anotaciones.

Ya aplicado en `src/app/globals.css` (variables `--ink`, `--paper`, `--paper-light`,
`--accent`, `--accent-2`, `--surface`) y en el fondo 3D (`ThreeBackground.tsx`,
partículas `0x161635`).

## 2. Tipografía

El sistema usa tres roles; con fuentes de Google Fonts (next/font) los sustitutos
directos son:

| Rol DESIGN.md | Función | Sustituto recomendado | Implementación actual |
|---|---|---|---|
| denim (workhorse) | Body, headings, UI | **Inter** o IBM Plex Sans 400/500 | Lato (body) / Alegreya Sans (headings) — se puede migrar a Inter |
| muoto (UI compacta) | Tags, labels, ejes, micro-copy | **IBM Plex Mono** o JetBrains Mono 400/500 | — (nuevo) |
| cinetype (display decorativa) | Etiquetas MAYÚSCULAS, axis titles, badges | IBM Plex Mono / JetBrains Mono con letter-spacing manual | — (nuevo) |

Escala tipográfica (base 4px, densidad compacta):

| Rol | Tamaño | Line-height | Tracking |
|---|---|---|---|
| caption | 11px | 1.38 | -0.132px |
| body | 14px | 1.5 | +0.168px |
| body-lg | 16px | 1.44 | +0.192px |
| subheading | 18px | 1.4 | 0 |
| heading-sm | 20px | 1.35 | 0 |
| heading | 32px | 1.17 | 0 |
| display (hero) | 48px | 1.11 | 0 |

La firma visual: etiquetas tipo `[ VALORES ]` en mono, uppercase, letter-spacing
**+0.30em**, como "specimen tags" al inicio de cada sección.

## 3. Espaciado, radius y layout

- **Unidad base:** 4px · densidad compacta
- **Max-width de página:** 1280px · **gap entre secciones:** 64px · **padding de card:** 20px · **gap entre elementos:** 8px
- **Radius:** tags 4px · cards 12px · botones 12px · paneles hero 24px · paneles grandes 18px
- **Bordes:** 0.5px inset en `#7f7f7f7` — sin sombras (máx. opacidad 6% en hover de card)
- **Divisores:** hairline de 1px (a menudo punteada) en `#7f7f7f7`, nunca barras gruesas
- **Canvas:** `#f4f4f4` edge-to-edge — el blanco puro solo entra dentro de las cards

## 4. Componentes del sistema → secciones actuales de la web

| Sección actual | Tratamiento propuesto |
|---|---|
| **Hero** | Panel hero de 24px radius sobre el canvas; logo azul `#161635` (ya está); título display 48px; etiqueta mono `[ CENTRO DE CIENCIA ]` arriba; un único botón filled rojo `#e22d45` ("Cotizar" / "Conócenos"); el resto de acciones outlined en `#161635` |
| **Valores** | 5 cards blancas 12px radius, hairline `#7f7f7f7`, iconos monoline 1px en `#161635` de 16–20px; cada card con tag mono `[ 01 ]`…`[ 05 ]` en naranja `#ed7f2a` |
| **EspaciosTabs** | Tabs como tags 4px radius: activo = fill `#161635` con texto blanco; inactivo = outline hairline. Galería de imágenes dentro de card blanca con borde hairline |
| **SolucionesAccordion** | Items como filas hairline (sin cards pesadas); header con icono monoline `#161635` + título; botón "Cotizar" filled `#e22d45` solo en el item activo (una acción cromática por pantalla) |
| **Beneficios** | Cards flip se conservan pero con superficie blanca + hairline; el "front" lleva el icono en `#161635` y el "back" texto sobre `#f4f4f4` |
| **Programas** | 3 cards blancas 12px, título heading-sm 20px, tag mono numerado |
| **Alianzas** | El carrusel vive directamente sobre el canvas (sin card), logos en escala de grises con hover a color — como "data points" del sistema |
| **Equipo** | Grid de cards blancas hairline; foto cuadrada; nombre 14px 500; rol en caption gris `#7f7f7f7`; hover: borde `#161635` en vez de escala |
| **Contacto** | Split: info a la izquierda sobre canvas con etiqueta `[ CONTACTO ]`; formulario dentro de card blanca 12px con inputs de borde hairline 0.5px `#7f7f7f7`, focus con borde `#161635`; botón "Enviar" filled `#e22d45` (único filled de la sección) |
| **FloatingNav** | Se rediseña como eje vertical tipo "axis ticks": números mono 11px en `#7f7f7f7`, activo en `#e22d45` con línea hairline vertical |
| **Fondo 3D** | Partículas `#161635` ya aplicado; opcional: reducir opacidad sobre el canvas claro para no competir con el texto |

> **Actualización (rama `redesign`):** el material particulado (Three.js) se reemplazó
> por `ScrollCanvas.tsx` — un scatter plot / timeline en canvas fijo que se **dibuja
> progresivamente según el progreso del scroll** (puntos hollow ink + data marks en
> `#e22d45`, ejes hairline `#7f7f7f7`, grid punteado). Cada sección lleva etiqueta de
> eje `[ 0X ]` vía `data-axis` + CSS, y las cards numeran con counters `[ 01 ]`.

## 5. Do's and Don'ts (adaptados)

### Do
- Usar `#e22d45` solo para la acción más importante de cada pantalla; todo lo demás outlined/ghost en `#161635`.
- Radius consistente: 12px cards, 4px tags, 24px solo en hero.
- Etiquetas `[ SECCIÓN ]` en mono uppercase con +0.30em al inicio de cada sección.
- Links inline con corchetes: `[ cotizar ]` en naranja `#ed7f2a`, subrayado solo en hover.
- Mantener el canvas `#f4f4f4` edge-to-edge; el blanco puro solo dentro de cards.
- Bordes inset 0.5px en `#7f7f7f7` en lugar de sombras.

### Don't
- No agregar un segundo color de acción filled — si `#e22d45` ya está en uso, el resto va outlined.
- No usar el face decorativa (cinetype) para body ni títulos largos.
- No sombras > 6% de opacidad — el sistema es plano.
- No texto en negro puro `#000` — siempre `#161635`.
- No usar `#ed7f2a` como color de acción filled; es solo para anotaciones/links.
- No fondo de página blanco — el canvas gris claro es estructural.

## 6. Roadmap de implementación

1. ✅ Paleta base en `globals.css` + partículas 3D en `#161635` (esta rama `redesign`)
2. Tipografías: migrar headings/body a Inter; agregar IBM Plex Mono para tags/labels (`layout.tsx`)
3. Secciones con etiqueta `[ SECCIÓN ]` + hairline divisoria (page.tsx + un componente `SectionTag`)
4. Cards de Valores/Beneficios/Programas/Equipo a superficie blanca + hairline 0.5px
5. Botones unificados: `.btn-primary` filled `#e22d45`, `.btn-outline` 0.5px `#161635`
6. FloatingNav como eje con ticks mono
7. Contacto: formulario dentro de card blanca, inputs hairline

## 7. Marcas de referencia del sistema original

Linear (mono-accent + hairlines), Vercel (componentes casi sin sombra sobre canvas con
color), Observable (página como canvas de datos con etiquetas de eje), Arc (sans de
UI pequeña + display decorativa), Are.na (estética archivística/herbario).
