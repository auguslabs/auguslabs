# Fotos de Makers

Esta carpeta contiene las fotos de los integrantes del equipo.

## Estructura de archivos

Las fotos deben nombrarse según el ID del maker en `src/data/mock/makers.ts`:

- `maker-1.webp` - Foto del primer maker
- `maker-2.webp` - Foto del segundo maker
- `maker-3.webp` - Foto del tercer maker
- `maker-4.webp` - Foto del cuarto maker

## Recomendaciones para las fotos

### Formato
- **Formato recomendado:** WebP (mejor compresión) o JPG/PNG
- **Tamaño recomendado:** 400x400px mínimo (se mostrarán en 160x160px en móvil y 200x200px en desktop)
- **Aspecto:** Cuadrado (1:1) para que se vea bien en el círculo

### Fondo
Las fotos pueden tener cualquier fondo, ya que:
- Se mostrarán en formato circular con recorte
- Si tienen fondo distinto, el recorte circular lo ocultará automáticamente
- El componente tiene un fondo azul suave (#eef3f7) que se verá solo si la foto no cubre todo el círculo

### Opciones de procesamiento

Si quieres unificar los fondos:

1. **Fondo blanco:** Limpio y profesional
2. **Fondo azul suave (#eef3f7):** Coincide con el diseño del sitio
3. **Fondo negro:** Elegante y moderno
4. **Sin fondo (transparente PNG):** Se verá el fondo azul suave del componente

### Herramientas recomendadas

- **Para quitar fondos:** Remove.bg, Canva, Photoshop
- **Para optimizar:** Squoosh, TinyPNG
- **Para convertir a WebP:** Squoosh, ImageMagick

## Nota

Si una foto no se encuentra, el componente mostrará automáticamente las iniciales del nombre del maker como fallback.

