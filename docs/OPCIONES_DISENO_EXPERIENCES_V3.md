# OPCIONES DE DISEÑO - EXPERIENCES v3
## Alternativas Creativas (Sin Timeline Vertical)

---

## CONTEXTO

**Problema identificado:**
- SOLUTIONS ya usa timeline vertical con línea central
- EXPERIENCES no debe repetir el mismo diseño
- Necesitamos creatividad y diferenciación visual

**Requisitos:**
- ✅ Mostrar proceso: Escuchar → Entender → Proponer → Desarrollar
- ✅ Historias únicas por proyecto
- ✅ Links a cada sitio
- ✅ Contenido adicional (antes/después) cuando aplique
- ✅ Minimalista y alineado con plan v2

---

## OPCIÓN 1: GRID DE CARDS CON PROCESO INTEGRADO

### Concepto
Grid 2x2 (desktop) con cards grandes que muestran el proceso como badges/chips en la parte superior. Cada card es una "historia" visual.

### Estructura Visual

```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

┌──────────────────────┐  ┌──────────────────────┐
│  [Badges proceso]    │  │  [Badges proceso]    │
│  👂 💡 ✨ 🚀         │  │  👂 💡 ✨ 🚀         │
│                      │  │                      │
│  [Imagen grande]     │  │  [Imagen grande]     │
│                      │  │                      │
│  WholeselfNM         │  │  eabuencamino         │
│                      │  │                      │
│  Reestructuración    │  │  Rediseño logo       │
│  Reorganización UX   │  │  Cocreación          │
│                      │  │                      │
│  [Ver historia →]    │  │  [Ver historia →]    │
│  [Visitar sitio →]   │  │  [Visitar sitio →]   │
└──────────────────────┘  └──────────────────────┘

┌──────────────────────┐  ┌──────────────────────┐
│  [Badges proceso]    │  │  [Badges proceso]    │
│  👂 💡 ✨ 🚀         │  │  👂 💡 ✨ 🚀         │
│                      │  │                      │
│  [Imagen grande]     │  │  [Imagen grande]     │
│                      │  │                      │
│  dulceSaladoCT       │  │  TreesbyJuan         │
│                      │  │                      │
│  Branding completo   │  │  Primera experiencia │
│  Cooperación         │  │  Desde cero          │
│                      │  │                      │
│  [Ver historia →]    │  │  [Ver historia →]    │
│  [Visitar sitio →]   │  │  [Visitar sitio →]   │
└──────────────────────┘  └──────────────────────┘
```

### Características
- **Badges de proceso:** Pequeños iconos/chips en la parte superior que indican el proceso
- **Imagen grande:** Ocupa ~60% del card
- **Información mínima:** Nombre + 2 líneas de descripción
- **Dos CTAs:** "Ver historia" (expandir) y "Visitar sitio" (link externo)
- **Hover:** Sombra sutil + ligero scale

### Al expandir (Modal o Inline)
- Imagen principal
- Proceso completo con texto
- Servicios realizados
- Historia detallada
- Contenido adicional si aplica

**Ventajas:**
- ✅ Visualmente diferente a timeline
- ✅ Grid limpio y organizado
- ✅ Proceso visible pero no dominante
- ✅ Fácil de escanear

---

## OPCIÓN 2: LAYOUT TIPO "STORY CARDS" HORIZONTAL

### Concepto
Cards horizontales tipo "case study" que se expanden. Cada card muestra el proceso como una barra de progreso visual o steps horizontales.

### Estructura Visual

```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  WholeselfNM                               │
│  ┌─────────────────────────────────────┐   │
│  │ [Imagen]  │  PROCESO:               │   │
│  │           │  👂 → 💡 → ✨ → 🚀      │   │
│  │           │  [Barra de progreso]   │   │
│  └─────────────────────────────────────┘   │
│  Reestructuración • UX • Investigación     │
│  [Ver historia completa →] [Visitar →]     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  eabuencamino                               │
│  ┌─────────────────────────────────────┐   │
│  │ [Imagen]  │  PROCESO:               │   │
│  │           │  👂 → 💡 → ✨ → 🚀      │   │
│  │           │  [Barra de progreso]   │   │
│  └─────────────────────────────────────┘   │
│  Logo • Sitio • Cocreación                  │
│  [Ver historia completa →] [Visitar →]     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  dulceSaladoCT                              │
│  ┌─────────────────────────────────────┐   │
│  │ [Imagen]  │  PROCESO:               │   │
│  │           │  👂 → 💡 → ✨ → 🚀      │   │
│  │           │  [Barra de progreso]   │   │
│  └─────────────────────────────────────┘   │
│  Web • Branding • Contenido                │
│  [Ver historia completa →] [Visitar →]     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  TreesbyJuan                                │
│  ┌─────────────────────────────────────┐   │
│  │ [Imagen]  │  PROCESO:               │   │
│  │           │  👂 → 💡 → ✨ → 🚀      │   │
│  │           │  [Barra de progreso]   │   │
│  └─────────────────────────────────────┘   │
│  Web • Primera experiencia                  │
│  [Ver historia completa →] [Visitar →]     │
└─────────────────────────────────────────────┘
```

### Características
- **Layout horizontal:** Imagen a la izquierda, info a la derecha
- **Barra de proceso:** Visual horizontal que muestra los 4 pasos
- **Cards full-width:** Cada proyecto ocupa todo el ancho
- **Stack vertical:** Uno debajo del otro

**Ventajas:**
- ✅ Completamente diferente a timeline vertical
- ✅ Enfoque en historias (case studies)
- ✅ Fácil de leer
- ✅ Responsive friendly

---

## OPCIÓN 3: GRID ASIMÉTRICO TIPO "MAGAZINE"

### Concepto
Grid asimétrico donde algunos proyectos son más grandes (destacados) y otros más pequeños. El proceso se muestra como pequeños iconos discretos.

### Estructura Visual

```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

┌──────────────────────────────┐  ┌──────────┐
│                              │  │          │
│     WholeselfNM              │  │ eabuencamino│
│                              │  │          │
│   [Imagen grande]            │  │ [Imagen] │
│                              │  │          │
│   👂 💡 ✨ 🚀                │  │ 👂 💡 ✨ │
│                              │  │ 🚀      │
│   Reestructuración           │  │ Logo     │
│   Reorganización UX          │  │ Sitio    │
│                              │  │          │
│   [Ver →] [Visitar →]        │  │ [Ver →]  │
│                              │  │ [Visitar]│
└──────────────────────────────┘  └──────────┘

┌──────────┐  ┌──────────────────────────────┐
│          │  │                              │
│ dulceSalado│  │     TreesbyJuan              │
│ CT        │  │                              │
│          │  │   [Imagen grande]            │
│ [Imagen] │  │                              │
│          │  │   👂 💡 ✨ 🚀                │
│ 👂 💡 ✨ │  │                              │
│ 🚀      │  │   Primera experiencia         │
│          │  │   Desde cero                 │
│ Branding │  │                              │
│ Web      │  │   [Ver →] [Visitar →]        │
│          │  │                              │
│ [Ver →]  │  └──────────────────────────────┘
│ [Visitar]│
└──────────┘
```

### Características
- **Tamaños variados:** Algunos cards 2x más grandes
- **Iconos discretos:** Proceso como pequeños iconos
- **Visual dinámico:** Layout interesante y no uniforme
- **Destaca proyectos:** Los más grandes llaman más atención

**Ventajas:**
- ✅ Muy creativo y visual
- ✅ Diferente a todo lo demás
- ✅ Permite destacar proyectos importantes
- ✅ Layout tipo revista/magazine

**Desventajas:**
- ⚠️ Más complejo de implementar
- ⚠️ Puede ser menos uniforme

---

## OPCIÓN 4: CARDS CON PROCESO CIRCULAR/RADIAL

### Concepto
Cards cuadradas con el proceso mostrado como un círculo/radial en una esquina. Visual único y moderno.

### Estructura Visual

```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐
│     👂       │  │     👂       │
│   🚀    💡   │  │   🚀    💡   │
│     ✨       │  │     ✨       │
│              │  │              │
│ [Imagen]     │  │ [Imagen]     │
│              │  │              │
│ WholeselfNM  │  │ eabuencamino │
│              │  │              │
│ [Ver →]      │  │ [Ver →]      │
│ [Visitar →]  │  │ [Visitar →]  │
└──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐
│     👂       │  │     👂       │
│   🚀    💡   │  │   🚀    💡   │
│     ✨       │  │     ✨       │
│              │  │              │
│ [Imagen]     │  │ [Imagen]     │
│              │  │              │
│ dulceSaladoCT│  │ TreesbyJuan  │
│              │  │              │
│ [Ver →]      │  │ [Ver →]      │
│ [Visitar →]  │  │ [Visitar →]  │
└──────────────┘  └──────────────┘
```

### Características
- **Proceso circular:** Iconos en círculo en esquina superior
- **Cards cuadradas:** Formato uniforme y limpio
- **Grid 2x2:** Simple y organizado
- **Visual moderno:** Diferente y creativo

**Ventajas:**
- ✅ Muy diferente visualmente
- ✅ Proceso visible pero no dominante
- ✅ Moderno y minimalista
- ✅ Fácil de implementar

---

## OPCIÓN 5: LAYOUT TIPO "PORTFOLIO" CON HOVER STATES

### Concepto
Grid de cards minimalistas que al hacer hover revelan el proceso. Enfoque en imágenes con información que aparece.

### Estructura Visual

```
┌─────────────────────────────────────────┐
│         EXPERIENCES                     │
│    Proyectos realizados                 │
└─────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐
│              │  │              │
│ [Imagen]     │  │ [Imagen]     │
│              │  │              │
│ WholeselfNM  │  │ eabuencamino │
│              │  │              │
└──────────────┘  └──────────────┘
  [Hover revela:]
  ┌──────────────┐
  │ PROCESO:     │
  │ 👂 Escuchamos│
  │ 💡 Entendimos│
  │ ✨ Propusimos│
  │ 🚀 Desarrollamos│
  │              │
  │ [Ver →]      │
  │ [Visitar →]  │
  └──────────────┘

┌──────────────┐  ┌──────────────┐
│              │  │              │
│ [Imagen]     │  │ [Imagen]     │
│              │  │              │
│ dulceSaladoCT│  │ TreesbyJuan  │
│              │  │              │
└──────────────┘  └──────────────┘
```

### Características
- **Cards minimalistas:** Solo imagen + nombre inicialmente
- **Hover reveal:** Proceso aparece al hacer hover
- **Grid limpio:** Visual muy limpio inicialmente
- **Interactivo:** Requiere interacción para ver detalles

**Ventajas:**
- ✅ Extremadamente minimalista
- ✅ Muy diferente visualmente
- ✅ Enfoque en imágenes
- ✅ Interactivo y moderno

**Desventajas:**
- ⚠️ Requiere hover (no funciona en móvil igual)
- ⚠️ Información oculta inicialmente

---

## COMPARACIÓN RÁPIDA

| Opción | Creatividad | Diferencia vs SOLUTIONS | Minimalismo | Implementación |
|--------|-------------|-------------------------|-------------|----------------|
| 1. Grid con Badges | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 2. Story Cards Horizontal | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 3. Grid Asimétrico | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 4. Proceso Circular | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 5. Portfolio Hover | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## RECOMENDACIÓN: OPCIÓN 1 (Grid con Badges) o OPCIÓN 4 (Proceso Circular)

### Opción 1 - Grid con Badges
**Razones:**
- ✅ Balance perfecto entre creatividad y funcionalidad
- ✅ Completamente diferente a timeline vertical
- ✅ Proceso visible pero no dominante
- ✅ Fácil de implementar y mantener
- ✅ Responsive friendly

### Opción 4 - Proceso Circular
**Razones:**
- ✅ Muy creativo y moderno
- ✅ Visual único y diferenciado
- ✅ Minimalista pero informativo
- ✅ Fácil de escanear
- ✅ Implementación sencilla

---

## ESTRUCTURA DE DATOS (Igual para todas las opciones)

```typescript
interface Project {
  id: string;
  name: string;
  order: number; // 1 = más reciente
  url: string;
  thumbnail: string;
  mainImage: string;
  services: string[];
  process: {
    listen: string;
    understand: string;
    propose: string;
    develop: string;
  };
  story?: string;
  additionalContent?: {
    type: 'before-after' | 'gallery';
    data: any;
  };
}
```

---

## PRÓXIMOS PASOS

1. Seleccionar opción de diseño
2. Confirmar preferencias visuales
3. Crear modelos de datos
4. Implementar componentes
5. Integrar en experiences.astro

---

## PREGUNTA CLAVE

¿Cuál opción te parece más creativa y diferente a SOLUTIONS?

- **Opción 1:** Grid con badges (balanceado)
- **Opción 2:** Story cards horizontal (case study style)
- **Opción 3:** Grid asimétrico (magazine style)
- **Opción 4:** Proceso circular (moderno)
- **Opción 5:** Portfolio hover (ultra minimalista)

