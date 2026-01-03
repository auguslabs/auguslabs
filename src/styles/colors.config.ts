/**
 * Configuración de Colores - Auguslabs
 * 
 * Este archivo maneja todos los colores del proyecto.
 * Solo necesitas cambiar los colores base y las sombras/tintes se generan automáticamente.
 * 
 * Para usar en otro proyecto, simplemente copia este archivo y cambia los colores base.
 */

// ============================================
// COLORES BASE
// ============================================
// Cambia estos dos colores y todo se actualizará automáticamente

export const COLOR_PRIMARY = '#07549b';      // Azul principal
export const COLOR_SECONDARY = '#9b4f07';    // Color complementario

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

/**
 * Convierte un color hexadecimal a RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

/**
 * Convierte RGB a hexadecimal
 */
function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

/**
 * Mezcla dos colores RGB con un porcentaje
 * @param color1 - Color base en RGB
 * @param color2 - Color a mezclar en RGB
 * @param percentage - Porcentaje de mezcla (0-1)
 */
function mixColors(
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number },
  percentage: number
): { r: number; g: number; b: number } {
  return {
    r: color1.r + (color2.r - color1.r) * percentage,
    g: color1.g + (color2.g - color1.g) * percentage,
    b: color1.b + (color2.b - color1.b) * percentage,
  };
}

/**
 * Genera tintes (colores más claros) mezclando con blanco
 */
function generateTints(baseColor: string, count: number = 10): Record<string, string> {
  const base = hexToRgb(baseColor);
  const white = { r: 255, g: 255, b: 255 };
  const tints: Record<string, string> = {};

  // Generar 10 tintes del más claro al más oscuro
  // 50, 100, 150, 200, 250, 300, 350, 400, 450, 500
  const tintKeys = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
  
  for (let i = 0; i < count; i++) {
    // Porcentaje de mezcla: más blanco = más claro
    // 50 es el más claro (90% blanco), 500 es el color base (0% blanco)
    const percentage = 1 - (i / (count - 1)) * 0.9; // De 1.0 a 0.1
    const mixed = mixColors(white, base, percentage);
    tints[tintKeys[i]] = rgbToHex(mixed.r, mixed.g, mixed.b);
  }

  return tints;
}

/**
 * Genera sombras (colores más oscuros) mezclando con negro
 */
function generateShades(baseColor: string, count: number = 10): Record<string, string> {
  const base = hexToRgb(baseColor);
  const black = { r: 0, g: 0, b: 0 };
  const shades: Record<string, string> = {};

  // Generar 10 sombras del más claro al más oscuro
  // 500, 550, 600, 650, 700, 750, 800, 850, 900, 950
  const shadeKeys = [500, 550, 600, 650, 700, 750, 800, 850, 900, 950];
  
  for (let i = 0; i < count; i++) {
    // Porcentaje de mezcla: más negro = más oscuro
    // 500 es el color base (0% negro), 950 es el más oscuro (90% negro)
    const percentage = (i / (count - 1)) * 0.9; // De 0.0 a 0.9
    const mixed = mixColors(base, black, percentage);
    shades[shadeKeys[i]] = rgbToHex(mixed.r, mixed.g, mixed.b);
  }

  return shades;
}

/**
 * Genera la paleta completa de un color (tintes + base + sombras)
 */
function generateColorPalette(baseColor: string) {
  const tints = generateTints(baseColor, 10);
  const shades = generateShades(baseColor, 10);
  
  // Combinar tintes y sombras
  // Nota: el 500 aparece en ambos, usamos el de shades (que es el color base exacto)
  return {
    ...tints,
    ...shades,
  };
}

// ============================================
// PALETAS GENERADAS
// ============================================

export const primaryColors = generateColorPalette(COLOR_PRIMARY);
export const secondaryColors = generateColorPalette(COLOR_SECONDARY);

// ============================================
// EXPORT PARA TAILWIND
// ============================================

/**
 * Objeto de colores listo para usar en tailwind.config.mjs
 */
export const tailwindColors = {
  primary: primaryColors,
  secondary: secondaryColors,
};

