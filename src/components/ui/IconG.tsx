import React from 'react';

/**
 * Componente IconG - Icono estilizado de la letra "g"
 * 
 * Basado en el archivo: /public/icon-gi-28-46-px.svg
 * ViewBox original: 0 0 28.57 46.27
 * 
 * Tamaño recomendado para móvil: 40-48px (w-10 h-10 o w-12 h-12 en Tailwind)
 * El componente es responsive y se ajusta automáticamente
 */
export function IconG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28.57 46.27"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Letra g principal - adaptado del SVG original */}
      <path
        d="M22.78,9.29c-2.36-2.43-5.19-3.65-8.49-3.65s-5.95,1.14-8.27,3.43c-2.32,2.29-3.48,5.06-3.48,8.33s1.16,5.95,3.48,8.27c2.32,2.32,5.08,3.48,8.27,3.48,3.48,0,6.4-1.31,8.76-3.92v6.15c0,2.61-.88,4.76-2.64,6.45-1.76,1.69-3.87,2.53-6.34,2.53-2.8,0-5.04-.98-6.73-2.92.02.11.04.23.04.36,0,.97-.78,1.75-1.75,1.75-.13,0-.26-.02-.38-.04,2.33,2.56,5.27,3.85,8.82,3.85,3.27,0,6.08-1.16,8.44-3.48,2.36-2.32,3.54-5.15,3.54-8.49V6.24l-3.27,3.05ZM20.49,23.6c-1.71,1.71-3.77,2.56-6.2,2.56s-4.55-.84-6.23-2.53-2.53-3.76-2.53-6.23.84-4.54,2.53-6.23c1.69-1.69,3.76-2.53,6.23-2.53s4.5.85,6.2,2.56c1.7,1.71,2.56,3.77,2.56,6.2s-.85,4.5-2.56,6.2Z"
      />
      {/* Punto pequeño en la parte inferior */}
      <circle cx="4.45" cy="36.55" r="1.75" />
      {/* Elemento decorativo superior derecho */}
      <path
        d="M26.04,3.44h-11.76c1.57,0,3.06.28,4.43.83h-4.43c3.3,0,6.26,1.26,8.49,3.65l3.27-3.05v-.6h-.25l.25-.24v-.6Z"
      />
    </svg>
  );
}

