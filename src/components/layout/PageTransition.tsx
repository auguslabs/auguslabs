import React, { useEffect, useState } from 'react';

/**
 * Componente PageTransition - Animaciones de entrada según la página
 * 
 * Direcciones de animación:
 * - solutions: de arriba hacia abajo
 * - makers: de izquierda a derecha
 * - artistry: de derecha a izquierda (fan)
 * - experiences: de abajo hacia arriba
 */

type TransitionDirection = 'top' | 'right' | 'left' | 'bottom';

interface PageTransitionProps {
  children: React.ReactNode;
  direction?: TransitionDirection;
}

export function PageTransition({ children, direction = 'top' }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeño delay para asegurar que el componente esté montado
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Clases CSS según la dirección
  const getAnimationClasses = () => {
    // Duración más lenta (1000ms) y ease-in-out para un efecto más natural y sutil
    const baseClasses = 'transition-all duration-[1000ms] ease-in-out w-full';
    
    if (!isVisible) {
      switch (direction) {
        case 'top':
          // Todo el bloque viene de arriba (fuera de la pantalla) - efecto suave
          return `${baseClasses} opacity-0 -translate-y-[100vh]`;
        case 'right':
          // Todo el bloque viene de la izquierda (fuera de la pantalla)
          return `${baseClasses} opacity-0 -translate-x-[100vw]`;
        case 'left':
          // Todo el bloque viene de la derecha (fuera de la pantalla) con efecto fan
          return `${baseClasses} opacity-0 translate-x-[100vw] rotate-3`;
        case 'bottom':
          // Todo el bloque viene de abajo (fuera de la pantalla)
          return `${baseClasses} opacity-0 translate-y-[100vh]`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 rotate-0`;
  };

  return (
    <div className={getAnimationClasses()} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
}

