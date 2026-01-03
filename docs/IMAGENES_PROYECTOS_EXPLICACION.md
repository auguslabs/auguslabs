# EXPLICACIÓN DE IMÁGENES EN PROJECT CARDS
## ¿Qué imagen va dónde?

---

## ESTRUCTURA DE LA CARD

```
┌─────────────────────────────────────────┐
│  [LOGO CLIENTE]    [Iconos Proceso]    │ ← Parte superior
│  Nombre del Proyecto                    │
├─────────────────────────────────────────┤
│                                         │
│      [IMAGEN GRANDE DEL PROYECTO]       │ ← Parte central (thumbnail)
│                                         │
│                                         │
├─────────────────────────────────────────┤
│  [Tags de servicios]                    │ ← Parte inferior
│  [Botones: View Story | Visit Site]     │
└─────────────────────────────────────────┘
```

---

## 1. LOGO DEL CLIENTE (Parte Superior Izquierda)

**Ubicación:** Parte superior izquierda de la card, antes del nombre del proyecto

**Archivo actual (placeholder):**
- `project.logo` → `/resources/wholeselfnm-logo.svg`
- `project.logo` → `/resources/eabuencamino-logo.svg`
- `project.logo` → `/resources/dulcesaladoct-logo.svg`
- `project.logo` → `/resources/treesbyjuan-logo.svg`

**Qué va aquí:**
- ✅ **Logo del cliente** (WholeselfNM, eabuencamino, dulceSaladoCT, TreesbyJuan)
- Formato: SVG, PNG o JPG
- Tamaño recomendado: ~200px de ancho máximo
- Se muestra pequeño (h-8 md:h-10 en Tailwind)

**Código:**
```tsx
<img
  src={project.logo}  // ← Aquí va el logo del cliente
  alt={`${project.name} logo`}
  className="h-8 md:h-10 w-auto object-contain"
/>
```

---

## 2. IMAGEN GRANDE DEL PROYECTO (Parte Central)

**Ubicación:** Parte central de la card, ocupa la mayor parte del espacio

**Archivo actual (placeholder):**
- `project.thumbnail` → `/icon-demo.svg` (temporal)

**Qué va aquí:**
- ✅ **Imagen representativa del proyecto**
  - Puede ser:
    - Screenshot del sitio web
    - Imagen del proyecto completo
    - Mockup del diseño
    - Imagen destacada del trabajo realizado
- Formato: JPG, PNG o WebP
- Tamaño recomendado: ~1200px de ancho
- Se muestra grande (h-48 md:h-64 en Tailwind, full width)

**Código:**
```tsx
<img
  src={project.thumbnail}  // ← Aquí va la imagen grande del proyecto
  alt={project.name}
  className="w-full h-full object-cover"
/>
```

**Ejemplos de qué podría ser:**
- Para WholeselfNM: Screenshot del sitio web rediseñado
- Para eabuencamino: Imagen del sitio o del logo nuevo
- Para dulceSaladoCT: Imagen del sitio web o piezas gráficas
- Para TreesbyJuan: Screenshot del sitio web

---

## 3. ICONOS DEL PROCESO (Parte Superior Derecha)

**Ubicación:** Esquina superior derecha, al lado del logo del cliente

**Archivo actual (provisional):**
- `/iconos/icon-generic.svg` (temporal, se reemplazará)

**Qué va aquí:**
- ✅ **4 iconos diferentes** que representan el proceso:
  1. 👂 **Escuchar** (Listen)
  2. 💡 **Entender** (Understand)
  3. ✨ **Proponer** (Propose)
  4. 🚀 **Desarrollar** (Develop)

**Código:**
```tsx
<img
  src="/iconos/icon-generic.svg"  // ← Provisional, se reemplazará con iconos finales
  alt="Listen"
  className="w-4 h-4 md:w-5 md:h-5 opacity-70"
/>
```

**Nota:** Actualmente todos usan `icon-generic.svg` como placeholder. Tú crearás los 4 iconos finales que reemplazarán este.

---

## 4. IMÁGENES ANTES/DESPUÉS (Solo eabuencamino)

**Ubicación:** Dentro de la sección expandida, cuando se hace click en "View Story"

**Archivos actuales (placeholders):**
- `project.additionalContent.data.before` → `/resources/eabuencamino-card-old.jpg`
- `project.additionalContent.data.after` → `/resources/eabuencamino-card-new.jpg`

**Qué va aquí:**
- ✅ **Solo para eabuencamino:**
  - **Before:** Imagen de la tarjeta de negocios antigua
  - **After:** Imagen de la tarjeta de negocios nueva

**Código:**
```tsx
<img
  src={project.additionalContent.data.before}  // ← Tarjeta antigua
  alt="Before"
/>
<img
  src={project.additionalContent.data.after}  // ← Tarjeta nueva
  alt="After"
/>
```

---

## RESUMEN: QUÉ IMÁGENES NECESITAS CREAR/AGREGAR

### Logos de Clientes (4 archivos)
- [ ] `/public/resources/wholeselfnm-logo.svg` (o .png/.jpg)
- [ ] `/public/resources/eabuencamino-logo.svg` (o .png/.jpg)
- [ ] `/public/resources/dulcesaladoct-logo.svg` (o .png/.jpg)
- [ ] `/public/resources/treesbyjuan-logo.svg` (o .png/.jpg)

### Imágenes Grandes de Proyectos (4 archivos)
- [ ] Imagen para WholeselfNM (screenshot o imagen representativa)
- [ ] Imagen para eabuencamino (screenshot o imagen representativa)
- [ ] Imagen para dulceSaladoCT (screenshot o imagen representativa)
- [ ] Imagen para TreesbyJuan (screenshot o imagen representativa)

**Nota:** Estas imágenes se agregarán en `project.thumbnail` en `src/data/mock/projects.ts`

### Iconos del Proceso (4 iconos)
- [ ] Icono para "Listen" (Escuchar)
- [ ] Icono para "Understand" (Entender)
- [ ] Icono para "Propose" (Proponer)
- [ ] Icono para "Develop" (Desarrollar)

**Nota:** Estos reemplazarán `/iconos/icon-generic.svg` en el código

### Imágenes Antes/Después (2 archivos, solo eabuencamino)
- [ ] `/public/resources/eabuencamino-card-old.jpg` (tarjeta antigua)
- [ ] `/public/resources/eabuencamino-card-new.jpg` (tarjeta nueva)

---

## PREGUNTA: ¿Qué imagen grande usar?

Para la **imagen grande del proyecto** (`project.thumbnail`), puedes usar:

1. **Screenshot del sitio web** (recomendado)
   - Captura de pantalla de la página principal
   - Muestra el resultado final del trabajo

2. **Mockup del diseño**
   - Imagen del diseño en un dispositivo
   - Más visual y profesional

3. **Imagen representativa del proyecto**
   - Algo que represente el trabajo realizado
   - Puede ser una composición visual

**¿Cuál prefieres usar?** Una vez que decidas, actualizamos los datos en `src/data/mock/projects.ts` con las rutas correctas de las imágenes.

---

## ESTRUCTURA DE CARPETAS FINAL

```
public/
├── resources/
│   ├── wholeselfnm-logo.svg
│   ├── eabuencamino-logo.svg
│   ├── dulcesaladoct-logo.svg
│   ├── treesbyjuan-logo.svg
│   ├── eabuencamino-card-old.jpg
│   ├── eabuencamino-card-new.jpg
│   ├── wholeselfnm-thumbnail.jpg (o .png/.webp)
│   ├── eabuencamino-thumbnail.jpg
│   ├── dulcesaladoct-thumbnail.jpg
│   └── treesbyjuan-thumbnail.jpg
└── iconos/
    ├── icon-listen.svg (nuevo)
    ├── icon-understand.svg (nuevo)
    ├── icon-propose.svg (nuevo)
    └── icon-develop.svg (nuevo)
```

---

## CONCLUSIÓN

**En resumen:**
1. **Logo del cliente** → Parte superior izquierda (pequeño)
2. **Imagen grande** → Parte central (grande, ocupa la mayor parte)
3. **Iconos del proceso** → Parte superior derecha (4 iconos pequeños)
4. **Antes/Después** → Solo en eabuencamino, dentro de la sección expandida

¿Queda claro qué va dónde? ¿Tienes alguna pregunta sobre qué tipo de imagen usar para la parte central?

