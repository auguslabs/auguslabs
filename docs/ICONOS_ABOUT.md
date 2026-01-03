# ICONOS PARA PÁGINA ABOUT
## Iconos que deberías crear para reemplazar icon-demo.svg

---

## ICONOS NECESARIOS

### 1. **icon-location.svg** (Ubicación)
**Ubicación actual:** `/icon-demo.svg` (temporal)

**Qué representa:**
- Ubicación geográfica de AugusLabs
- California, USA y Colombia

**Sugerencias de diseño:**
- Mapa o marcador de ubicación
- Globo terráqueo con puntos marcados
- Icono de ubicación/pin simple

**Uso:** Sección "Location" - muestra California y Colombia

---

### 2. **icon-focus.svg** (Enfoque)
**Ubicación actual:** `/icon-demo.svg` (temporal)

**Qué representa:**
- Enfoque en pequeñas empresas y startups
- Target/objetivo de la empresa

**Sugerencias de diseño:**
- Diana/target
- Flecha apuntando a objetivo
- Icono de enfoque/concentración
- Pequeña empresa o startup (símbolo)

**Uso:** Sección "Focus" - muestra Small Businesses y Startups

---

### 3. **icon-language.svg** (Idioma/Bilingüe)
**Ubicación actual:** `/icon-demo.svg` (temporal)

**Qué representa:**
- Capacidad bilingüe (inglés y español)
- Enfoque bicultural

**Sugerencias de diseño:**
- Dos globos de diálogo
- Icono de idioma/traducción
- Dos letras (E y S) o banderas
- Icono de comunicación multilingüe

**Uso:** Sección "Bilingual" - muestra English & Spanish, Bicultural Approach

---

### 4. **icon-services.svg** (Servicios)
**Ubicación actual:** `/icon-demo.svg` (temporal)

**Qué representa:**
- Servicios ofrecidos
- Web Design & Development, Digital Identity & Branding

**Sugerencias de diseño:**
- Herramientas de diseño
- Pantalla/monitor con elementos
- Icono de servicios/servicios digitales
- Grid o layout representando diseño web

**Uso:** Sección "Services" - muestra Web Design & Development, Digital Identity & Branding

---

## ESPECIFICACIONES TÉCNICAS

### Tamaño:
- **Recomendado:** 48x48px (w-12 h-12 en Tailwind)
- **Formato:** SVG
- **Color:** Usar color azul (#07549b) o gris para que funcione con opacity-70

### Estilo:
- **Minimalista:** Líneas simples, sin rellenos complejos
- **Consistente:** Mismo estilo visual entre todos los iconos
- **Legible:** Que se vea bien a 48px

### Ubicación de archivos:
```
public/
├── iconos/
│   ├── icon-location.svg
│   ├── icon-focus.svg
│   ├── icon-language.svg
│   └── icon-services.svg
```

---

## CÓDIGO ACTUAL (usando icon-demo.svg)

```astro
<img 
  src="/icon-demo.svg" 
  alt="Location icon" 
  class="w-12 h-12 mx-auto opacity-70"
/>
```

## CÓDIGO DESPUÉS (con iconos finales)

```astro
<img 
  src="/iconos/icon-location.svg" 
  alt="Location" 
  class="w-12 h-12 mx-auto opacity-70"
/>
```

---

## RESUMEN

**4 iconos necesarios:**
1. ✅ `icon-location.svg` - Para ubicación (California/Colombia)
2. ✅ `icon-focus.svg` - Para enfoque (PYMEs/Startups)
3. ✅ `icon-language.svg` - Para bilingüe (English/Spanish)
4. ✅ `icon-services.svg` - Para servicios (Web Design/Branding)

**Todos deben ser:**
- SVG
- 48x48px recomendado
- Minimalistas
- Color azul o gris
- Estilo consistente

---

