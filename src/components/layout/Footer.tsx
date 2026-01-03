import React from 'react';

/**
 * Componente Footer - Layout
 * 
 * Pie de página (Fila 10 del diseño)
 * - Fondo azul fuerte (#07549b) como MAKERS y ARTISTRY
 * - Texto blanco
 * - Mismo alto que MAKERS (padding: 3rem 0)
 * - Sin márgenes laterales, 100% del ancho
 */
export function Footer() {
  return (
    <footer className="w-full flex items-center" style={{ backgroundColor: '#07549b', flexShrink: 0 }}>
      <style>
        {`
          footer {
            flex-shrink: 0 !important;
          }
          @media (min-width: 768px) {
            footer .footer-container {
              
              margin-left: auto !important;
              margin-right: auto !important;
              padding-left: 2rem !important; /* px-8 = 2rem = 32px - igual que header lg:px-8 */
              padding-right: 2rem !important; /* px-8 = 2rem = 32px - igual que header lg:px-8 */
              width: 100% !important;
            }
            footer .footer-inner {
              width: 100% !important;
              max-width: 100% !important;
            }
          }
        `}
      </style>
      <div className="w-full px-4 md:px-0 footer-container">
        <div className="flex justify-between items-center relative footer-inner py-2 md:py-4" style={{ height: '100%' }}>
          {/* Texto izquierda - Auguslabs - 2025 */}
          <div className="flex justify-start items-center">
            <p 
              className="text-white font-medium"
              style={{
                fontSize: 'clamp(0.7rem, 1.4vw, 0.875rem)' // Reducido 30% del tamaño original
              }}
            >
              Auguslabs - 2025
            </p>
          </div>
          
          {/* Iconos derecha - 3 iconos */}
          <div className="flex justify-end items-center gap-3 md:gap-6">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Icono 1">
              <img src="/icon-demo.svg" alt="Icon" className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Icono 2">
              <img src="/icon-demo.svg" alt="Icon" className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Icono 3">
              <img src="/icon-demo.svg" alt="Icon" className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
