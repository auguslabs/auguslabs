import React, { useEffect, useState } from 'react';
import { IconG } from '@/components/ui';

/**
 * Componente Header - Layout
 * 
 * Header dinámico que cambia según la ruta actual:
 * - En /makers, /solutions, /experiences, /artistry: Muestra icono G a la izquierda y título a la derecha con fondo azul
 * - En /about y /contact: Muestra icono home + texto "HOME" o "BACK" para mejor UX
 * - En otras páginas: Muestra el header tradicional con about/contact
 */
export function Header() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [specialPage, setSpecialPage] = useState<string | null>(null);
  const [isAboutOrContact, setIsAboutOrContact] = useState(false);

  useEffect(() => {
    // Detectar la ruta actual
    const updatePath = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      
      // Detectar páginas especiales que usan el header con icono G y fondo azul
      const specialPages = ['makers', 'solutions', 'experiences', 'artistry'];
      const foundPage = specialPages.find(page => 
        path === `/${page}` || path.startsWith(`/${page}/`)
      );
      setSpecialPage(foundPage || null);

      // Detectar páginas about, contact y services
      setIsAboutOrContact(path === '/about' || path === '/contact' || path.startsWith('/services/'));
    };

    // Actualizar al montar
    updatePath();

    // Escuchar cambios de ruta (para navegación SPA si se implementa)
    window.addEventListener('popstate', updatePath);

    // Observer para detectar cambios en la URL (útil para Astro)
    const observer = new MutationObserver(updatePath);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('popstate', updatePath);
      observer.disconnect();
    };
  }, []);

  // Header para páginas ABOUT y CONTACT - Icono + Texto separados para mejor UX
  if (isAboutOrContact) {
    return (
      <header 
        className="w-full pb-2 md:pb-6 lg:pb-8"
        style={{ backgroundColor: 'white', paddingTop: '10px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-0">
            {/* Icono home (solo el icono, sin texto) */}
            <a 
              href="/" 
              className="flex items-center justify-center hover:opacity-80 transition-opacity inline-flex"
              aria-label="Go to home"
              style={{
                width: '30px',
                height: '30px'
              }}
            >
              <img
                src="/iconos/icon-home.svg"
                alt=""
                className="object-contain"
                style={{
                  width: '30px',
                  height: '30px'
                }}
              />
            </a>
            
            {/* Texto "HOME" separado - mejor accesibilidad y legibilidad */}
            <a 
              href="/" 
              className="font-bold text-base md:text-lg lg:text-xl transition-colors hover:opacity-80 inline-flex items-center justify-center"
              style={{ 
                color: '#07549b',
                textDecoration: 'none',
                border: '1px solid #07549b',
                height: '30px',
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingTop: '4px',
                paddingBottom: '4px'
              }}
            >
              HOME
            </a>
          </div>
        </div>
      </header>
    );
  }

  // Header para páginas especiales (MAKERS, SOLUTIONS, EXPERIENCES, ARTISTRY)
  if (specialPage) {
    const pageTitle = specialPage.toUpperCase();
    
    return (
      <header 
        className="w-full" 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: '#07549b', 
          borderTop: '1px solid white', 
          borderBottom: '1px solid white'
        }}
      >
        <div className="w-full">
          <div className="flex items-center h-16 md:h-20">
            {/* Icono G a la izquierda en cuadrado */}
            <div className="flex items-center justify-center w-16 md:w-20 h-full border-r border-white">
              <a href="/" className="flex items-center justify-center w-full h-full hover:opacity-80 transition-opacity">
                <IconG className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </a>
            </div>
            
            {/* Título centrado a la derecha */}
            <div className="flex-1 flex items-center justify-center h-full">
              <h1 className="text-white text-xl md:text-2xl font-medium uppercase tracking-wide">
                {pageTitle}
              </h1>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Header tradicional para otras páginas (home y otras)
  const isHomePage = currentPath === '/';
  
  return (
    <header 
      className="w-full"
      style={{ 
        backgroundColor: isHomePage ? '#07549b' : 'white', // Azul en home, blanco en otras páginas
        padding: '0', // Sin padding para que el botón use todo el espacio disponible
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${isHomePage ? 'content-container' : ''}`} style={{ height: '100%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="flex items-center justify-between relative w-full" style={{ height: '100%', maxHeight: '100%', overflow: 'hidden' }}>
          {/* about - mostrar siempre */}
          <div className="flex-1 flex justify-start items-center" style={{ height: '100%', minWidth: 0 }}>
            <a 
              href="/about" 
              className="font-bold transition-colors"
              style={{ 
                color: '#9b4f07',
                backgroundColor: isHomePage ? 'white' : 'transparent',
                fontSize: 'clamp(0.864rem, 1.728vh, 1.296rem)', // Aumentado 20% adicional (total 44% más)
                padding: 'clamp(0.5rem, 1vh, 0.75rem)', // Padding uniforme en los 4 lados
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%', // Usa toda la altura disponible
                minHeight: '100%',
                maxWidth: '100%',
                lineHeight: '1.2',
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
                borderRadius: '0' // Sin esquinas redondeadas
              }}
            >
              about
            </a>
          </div>
          
          {/* Punto central con líneas */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center" style={{ maxHeight: '100%', overflow: 'hidden' }}>
            <div 
              className="rounded-full flex-shrink-0"
              style={{ 
                backgroundColor: isHomePage ? 'white' : '#07549b',
                width: 'clamp(0.2rem, 0.4vh, 0.4rem)',
                height: 'clamp(0.2rem, 0.4vh, 0.4rem)',
                maxHeight: '100%'
              }}
            ></div>
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 h-px -z-10"
              style={{ 
                backgroundColor: isHomePage ? 'white' : '#07549b',
                width: 'clamp(3rem, 6vw, 6rem)',
                maxHeight: '100%'
              }}
            ></div>
          </div>
          
          {/* contact */}
          <div className="flex-1 flex justify-end items-center" style={{ height: '100%', minWidth: 0 }}>
            <a 
              href="/contact" 
              className="font-bold transition-colors"
              style={{ 
                color: '#9b4f07',
                backgroundColor: isHomePage ? 'white' : 'transparent',
                fontSize: 'clamp(0.864rem, 1.728vh, 1.296rem)', // Aumentado 20% adicional (total 44% más)
                padding: 'clamp(0.5rem, 1vh, 0.75rem)', // Padding uniforme en los 4 lados
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%', // Usa toda la altura disponible
                minHeight: '100%',
                maxWidth: '100%',
                lineHeight: '1.2',
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
                borderRadius: '0' // Sin esquinas redondeadas
              }}
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
