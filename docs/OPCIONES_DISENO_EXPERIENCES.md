# OPCIONES DE DISEÑO - SECCIÓN EXPERIENCES
## AugusLabs - Plan v2

---

## CONTEXTO

**Proyectos a mostrar:**
1. **Diseño de página web** - Organización de información, construcción desde cero
2. **Dulces Salado CT** - Diseño web, logotipo, branding, brochure, piezas gráficas, contenido digital
3. **EA Buen Camino** - Rediseño total de logo, construcción del sitio desde cero, proceso de cooperación
4. **All NM** - Proyecto actual, rediseño de secciones, reorganización de información, nuevos elementos

**Principios de diseño:**
- Minimalista, puntual y directo
- Enfoque en el proceso: escuchar → entender → proponer → desarrollar
- Colores: azul (#07549b) y naranja (#9b4f07) únicamente
- Texto mínimo, storytelling visual
- CTA al final: "Empecemos tu proyecto"

---

## OPCIÓN 1: GRID MINIMALISTA CON CARDS EXPANDIBLES

### Estructura Visual
```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

┌──────────┐  ┌──────────┐
│  All NM  │  │  EA Buen │
│  [img]   │  │  Camino  │
│          │  │  [img]   │
└──────────┘  └──────────┘

┌──────────┐  ┌──────────┐
│  Dulces  │  │  Diseño  │
│  Salado  │  │  Web     │
│  [img]   │  │  [img]   │
└──────────┘  └──────────┘

┌─────────────────────────────────────────┐
│    ¿Listo para tu proyecto?             │
│    [Empecemos tu proyecto] (CTA)        │
└─────────────────────────────────────────┘
```

### Información por Proyecto
**Card inicial (cerrada):**
- Imagen/thumbnail del proyecto
- Nombre del proyecto
- Badge con tipo de servicio principal

**Al hacer click (expandida/modal):**
- Imagen principal del proyecto
- Nombre del proyecto
- **Servicios realizados** (lista minimalista con iconos):
  - Diseño Web
  - Branding
  - Logotipo
  - etc.
- **Breve historia del proceso** (2-3 líneas máximo):
  - "Escuchamos su necesidad de..."
  - "Propusimos..."
  - "Desarrollamos..."

### Ventajas
- Visual limpio y organizado
- Fácil de escanear
- Información progresiva (no abruma)
- Responsive friendly

### Desventajas
- Requiere interacción para ver detalles
- Puede ser menos impactante visualmente

---

## OPCIÓN 2: TIMELINE VERTICAL CON HISTORIAS

### Estructura Visual
```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

    │
    ├─ All NM
    │  [Imagen] ── Rediseño completo
    │             Reorganización de información
    │             Nuevos elementos digitales
    │
    ├─ EA Buen Camino
    │  [Imagen] ── Rediseño total de logo
    │             Sitio desde cero
    │             Proceso colaborativo
    │
    ├─ Dulces Salado CT
    │  [Imagen] ── Diseño web + branding
    │             Logotipo + piezas gráficas
    │             Contenido digital completo
    │
    └─ Diseño Web
       [Imagen] ── Organización de información
                  Construcción desde cero
                  Primera experiencia

┌─────────────────────────────────────────┐
│    ¿Tienes un proyecto en mente?         │
│    [Empecemos tu proyecto] (CTA)        │
└─────────────────────────────────────────┘
```

### Información por Proyecto
**Cada entrada del timeline:**
- Imagen del proyecto (lado izquierdo o derecho, alternando)
- Nombre del proyecto (azul, grande)
- **Servicios** (lista corta, 2-3 items principales)
- **Proceso en 3 puntos**:
  - Escuchamos: [breve descripción]
  - Propusimos: [solución]
  - Desarrollamos: [resultado]

### Ventajas
- Muestra el orden cronológico
- Fácil de seguir la narrativa
- Visual storytelling claro
- No requiere interacción

### Desventajas
- Puede ser más largo verticalmente
- Menos compacto

---

## OPCIÓN 3: CAROUSEL HORIZONTAL CON DETALLES

### Estructura Visual
```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

[←]  ┌──────────────────────────┐  [→]
     │                          │
     │      [Imagen Grande]      │
     │                          │
     │    All NM                │
     │                          │
     │    Rediseño completo     │
     │    • Secciones           │
     │    • Información         │
     │    • Elementos nuevos    │
     │                          │
     │    Proceso colaborativo  │
     │    de creación           │
     └──────────────────────────┘

     • • • •  (indicadores)

┌─────────────────────────────────────────┐
│    ¿Listo para comenzar?                │
│    [Empecemos tu proyecto] (CTA)        │
└─────────────────────────────────────────┘
```

### Información por Proyecto
**Cada slide:**
- Imagen grande del proyecto (60% del espacio)
- Nombre del proyecto (azul, destacado)
- **Servicios** (lista con bullets, minimalista)
- **Historia breve** (1-2 líneas sobre el proceso)
- Navegación: flechas + indicadores de puntos

### Ventajas
- Enfoque en un proyecto a la vez
- Imágenes grandes y destacadas
- Interactivo pero simple
- Muy visual

### Desventajas
- Requiere navegación para ver todos
- Puede ser menos eficiente para comparar

---

## OPCIÓN 4: GRID ASIMÉTRICO CON ENFOQUE VISUAL

### Estructura Visual
```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

┌──────────────────┐  ┌──────────┐
│                  │  │  EA Buen │
│     All NM       │  │  Camino  │
│                  │  │  [img]   │
│   [Imagen Grande]│  │          │
│                  │  │  Rediseño│
│   Proyecto actual│  │  logo    │
│   Rediseño total │  │  Sitio   │
└──────────────────┘  └──────────┘

┌──────────┐  ┌──────────────────┐
│  Dulces  │  │                  │
│  Salado  │  │   Diseño Web     │
│  [img]   │  │                  │
│          │  │  [Imagen Grande] │
│  Branding│  │                  │
│  Web     │  │  Primera exp.   │
│          │  │  Desde cero      │
└──────────┘  └──────────────────┘

┌─────────────────────────────────────────┐
│    ¿Empezamos tu proyecto?               │
│    [Empecemos tu proyecto] (CTA)        │
└─────────────────────────────────────────┘
```

### Información por Proyecto
**Cards pequeños:**
- Imagen thumbnail
- Nombre
- 2-3 palabras clave de servicios

**Cards grandes (destacados):**
- Imagen grande
- Nombre
- Lista de servicios (3-4 items)
- Breve descripción del proceso (1 línea)

### Ventajas
- Visual dinámico e interesante
- Destaca proyectos importantes
- Mantiene interés visual
- Balance entre información y espacio

### Desventajas
- Layout más complejo
- Puede ser menos uniforme

---

## OPCIÓN 5: LISTA VERTICAL MINIMALISTA CON ACORDEÓN

### Estructura Visual
```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  All NM                          [▼]    │
│  Rediseño • Secciones • Información     │
└─────────────────────────────────────────┘
  [Al expandir:]
  ┌─────────────────────────────────────┐
  │  [Imagen]                            │
  │  Rediseño completo de todas las      │
  │  secciones. Reorganización de       │
  │  información y nuevos elementos      │
  │  para presencia digital robusta.     │
  │                                      │
  │  Servicios:                          │
  │  • Rediseño web                      │
  │  • Reorganización UX                 │
  │  • Investigación de industria       │
  └─────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  EA Buen Camino                    [▶]  │
│  Logo • Sitio • Colaboración            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Dulces Salado CT                  [▶]  │
│  Web • Branding • Contenido            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Diseño Web                        [▶]  │
│  Organización • Primera vez            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│    ¿Tienes una idea?                    │
│    [Empecemos tu proyecto] (CTA)        │
└─────────────────────────────────────────┘
```

### Información por Proyecto
**Estado cerrado:**
- Nombre del proyecto (azul, clickeable)
- Tags de servicios (2-3 palabras clave)
- Flecha indicadora

**Estado expandido:**
- Imagen del proyecto
- Descripción del proceso (3-4 líneas)
- Lista de servicios realizados
- Puede incluir múltiples imágenes si es necesario

### Ventajas
- Muy compacto inicialmente
- Usuario controla qué ver
- Escalable (fácil agregar más proyectos)
- Minimalista por excelencia

### Desventajas
- Menos visual inicialmente
- Requiere clicks para ver detalles

---

## COMPARACIÓN RÁPIDA

| Opción | Visual Impact | Información | Interactividad | Escalabilidad |
|--------|---------------|-------------|----------------|---------------|
| 1. Grid Cards | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 2. Timeline | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| 3. Carousel | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 4. Grid Asimétrico | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 5. Lista Acordeón | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## RECOMENDACIÓN: OPCIÓN 1 (Grid Minimalista)

**Razones:**
- ✅ Balance perfecto entre visual e información
- ✅ Minimalista pero impactante
- ✅ Fácil de escanear
- ✅ Responsive friendly
- ✅ Alineado con plan v2
- ✅ Permite mostrar proceso sin abrumar

**Implementación sugerida:**
- Grid 2x2 en desktop, 1 columna en móvil
- Cards con hover sutil (scale 1.02)
- Modal con animación suave al hacer click
- CTA destacado al final con color naranja

---

## ESTRUCTURA DE INFORMACIÓN POR PROYECTO

### Template de Información

**All NM**
- **Servicios:** Rediseño web, Reorganización UX, Investigación de industria
- **Historia:** "Proyecto actual de rediseño completo. Trabajamos en la reorganización de todas las secciones del sitio, mejorando la forma en que se muestra la información. Después de una investigación profunda de la industria, adicionamos nuevos elementos importantes para hacer más robusta la presencia digital de la marca. Un proceso colaborativo de creación."

**EA Buen Camino**
- **Servicios:** Rediseño de logo, Diseño web, Branding
- **Historia:** "Rediseño total del logo desde su primera versión. Construimos el sitio desde cero en un proceso colaborativo donde escuchamos sus necesidades, entendimos su visión y propusimos soluciones que reflejaran su identidad."

**Dulces Salado CT**
- **Servicios:** Diseño web, Logotipo, Branding, Brochure, Piezas gráficas, Contenido digital
- **Historia:** "Proyecto integral de identidad visual y presencia digital. Desarrollamos desde el logotipo hasta el sitio web completo, incluyendo brochure, piezas gráficas y contenido digital. Un trabajo completo de branding que fortaleció su presencia en el mercado."

**Diseño Web (Primera experiencia)**
- **Servicios:** Diseño web, Organización de información
- **Historia:** "Nuestra primera experiencia construyendo un sitio desde cero. Trabajamos en el diseño completo de la página web, organizando la información de manera clara y efectiva. Un proceso de aprendizaje mutuo donde aplicamos nuestro enfoque: escuchar, entender, proponer y desarrollar."

---

## CTA FINAL

**Texto sugerido:**
- "¿Listo para tu proyecto?"
- "Empecemos tu proyecto"
- "¿Tienes una idea en mente?"
- "Hagamos tu proyecto realidad"

**Diseño:**
- Botón grande, color naranja (#9b4f07)
- Texto blanco, bold
- Centrado, con espacio generoso arriba
- Hover: ligero cambio de opacidad o scale

---

## PRÓXIMOS PASOS

1. Seleccionar opción de diseño
2. Crear modelos de datos para proyectos
3. Implementar componente de visualización
4. Crear modal/expansión de detalles
5. Integrar CTA final
6. Ajustar responsive y animaciones

