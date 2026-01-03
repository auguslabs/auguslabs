/**
 * Utilidades y Helpers
 * 
 * Funciones auxiliares reutilizables en toda la aplicación.
 */

/**
 * Obtiene el base URL del sitio (ej: '/auguslabs/' o '/')
 * Detecta automáticamente desde la URL actual o desde el meta tag
 */
export function getBaseUrl(): string {
  if (typeof window === 'undefined') {
    // En el servidor, usar el base de Astro si está disponible
    try {
      return (import.meta.env?.BASE_URL as string) || '/';
    } catch {
      return '/';
    }
  }
  
  // En el cliente, intentar obtener desde un meta tag o detectar desde la URL
  // Astro inyecta el base en el HTML, pero si no está disponible, detectar desde la URL
  const pathname = window.location.pathname;
  
  // Si la URL contiene '/auguslabs/', ese es el base
  if (pathname.startsWith('/auguslabs/') || pathname === '/auguslabs') {
    return '/auguslabs/';
  }
  
  // Si estamos en la raíz pero el pathname es solo '/', podría ser desarrollo
  // En producción con base, nunca estaríamos en '/' directamente
  return '/';
}

/**
 * Construye una ruta completa con el base URL
 * @param path - Ruta relativa (ej: '/about', '/contact')
 * @returns Ruta completa con base (ej: '/auguslabs/about' o '/about')
 */
export function withBase(path: string): string {
  const base = getBaseUrl();
  
  // Si el path ya incluye el base, retornarlo tal cual
  if (path.startsWith(base)) {
    return path;
  }
  
  // Asegurar que el base termine con '/' y el path empiece con '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Si el base es '/', retornar solo el path
  if (normalizedBase === '/') {
    return normalizedPath;
  }
  
  // Combinar base + path (remover el '/' duplicado)
  return `${normalizedBase}${normalizedPath.slice(1)}`;
}
