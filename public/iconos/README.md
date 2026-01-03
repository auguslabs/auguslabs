# Iconos SVG - Guía de Creación

## Especificaciones Técnicas

### Tamaño y ViewBox
- **ViewBox:** `0 0 32 32`
- **Sin width/height fijos** en el SVG (dejarlo al CSS para escalado perfecto)
- O usar `width="32" height="32"` si prefieres tamaño base

### Estructura Recomendada

```svg
<svg 
  viewBox="0 0 32 32" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Contenido del icono aquí -->
</svg>
```

### Colores

**Para iconos en cajas azules (servicios principales):**
- Usar `fill="white"` o `fill="currentColor"` (se adaptará al color del texto)

**Para iconos en fondo blanco:**
- Usar `fill="#07549b"` (azul principal) o `fill="currentColor"`

### Archivos Necesarios

Crear los siguientes archivos SVG en esta carpeta:

1. `diseno-grafico.svg`
2. `video.svg`
3. `identidad-visual.svg`
4. `redes-sociales.svg`
5. `diseno-web.svg`
6. `aplicaciones-web.svg`
7. `ux-ui.svg`
8. `animaciones.svg`
9. `creacion-contenido.svg`
10. `product-design.svg`
11. `ia-automatizacion.svg`

### Tamaños de Uso

- **Timeline:** 32px × 32px (w-8 h-8)
- **Modal:** 128px × 128px (w-32 h-32)
- Los SVGs se escalarán automáticamente sin perder calidad

### Mejores Prácticas

1. Mantener el diseño simple y reconocible
2. Usar trazos de 2px para detalles finos
3. Asegurar que el icono esté centrado en el viewBox
4. Optimizar el código SVG (eliminar metadatos innecesarios)
5. Probar en ambos tamaños (32px y 128px) para verificar legibilidad

