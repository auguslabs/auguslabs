import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Service } from '@/data/models/service';
import { useSwipe } from '@/hooks/useSwipe';

interface ServiceModalProps {
  services: Service[];
  initialServiceId?: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal estilo Instagram Stories para mostrar servicios
 * Con navegación tipo Stories (swipe izquierda/derecha, teclado, controles)
 * Basado en el patrón del ejemplo TeamMemberModal
 */
export function ServiceModal({ services, initialServiceId, isOpen, onClose }: ServiceModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Asegurar que el componente esté montado antes de usar portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Encontrar índice inicial si hay un servicio específico
  useEffect(() => {
    if (initialServiceId && isOpen) {
      const index = services.findIndex(s => s.id === initialServiceId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [initialServiceId, services, isOpen]);

  // Navegar al siguiente servicio
  const goToNext = () => {
    if (services.length === 0) return;
    const nextIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(nextIndex);
  };

  // Navegar al servicio anterior
  const goToPrevious = () => {
    if (services.length === 0) return;
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  // Swipe handlers
  const swipeHandlers = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
    threshold: 50,
  });

  // Navegación con teclado y bloqueo de scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (services.length === 0) return;
        const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
      } else if (e.key === 'ArrowRight') {
        if (services.length === 0) return;
        const nextIndex = (currentIndex + 1) % services.length;
        setCurrentIndex(nextIndex);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, services.length, onClose]);

  if (!isOpen || !mounted) {
    return null;
  }

  const currentService = services[currentIndex];
  
  if (!currentService) {
    return null;
  }

  const canGoPrevious = services.length > 1;
  const canGoNext = services.length > 1;

  // CTAs personalizados para cada servicio
  const getServiceCTA = (serviceId: string): string => {
    const ctaMap: Record<string, string> = {
      'web-design': 'Let\'s Build Your Website',
      'animations': 'Let\'s Animate Your Ideas',
      'video': 'Let\'s Create Your Video',
      'product-design': 'Let\'s Design Your Product',
      'graphic-design': 'Let\'s Create Your Graphics',
      'web-applications': 'Let\'s Build Your App',
      'ux-ui-design': 'Let\'s Design Your Experience',
      'visual-identity-brand': 'Let\'s Build Your Brand',
      'social-media': 'Let\'s Grow Your Presence',
      'content-creation': 'Let\'s Create Your Content',
      'ai-automation': 'Let\'s Automate Your Business',
    };
    return ctaMap[serviceId] || 'Get Started';
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Contenedor del modal */}
      <div className="relative flex items-center w-full max-w-5xl">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative border-b-4 mx-auto pb-0"
          style={{ borderBottomColor: '#07549b' }}
          onClick={(e) => e.stopPropagation()}
          {...swipeHandlers}
        >
          {/* Barra fija superior con indicadores de posición (puntos tipo Instagram) */}
          {services.length > 1 && (
            <div className="sticky top-0 z-30 px-4 py-3 flex justify-center items-center gap-2 rounded-t-2xl" style={{ backgroundColor: '#07549b' }}>
              {/* Puntos de navegación */}
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8'
                      : 'w-2 hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)'
                  }}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Contenido del modal */}
          <div className="p-6 md:p-8 lg:p-10 overflow-y-auto" style={{ paddingBottom: '80px' }}>
            {/* Fila 1: Imagen grande del servicio */}
            <div className="w-full flex items-center justify-center mb-6" style={{ minHeight: '300px', backgroundColor: '#eef3f7', borderRadius: '12px' }}>
              {currentService.image ? (
                <img
                  src={currentService.image}
                  alt={currentService.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : currentService.icon ? (
                <img
                  src={currentService.icon}
                  alt={currentService.name}
                  className="w-48 h-48 object-contain"
                />
              ) : (
                <div className="text-lg font-medium" style={{ color: '#07549b' }}>
                  Image placeholder
                </div>
              )}
            </div>

            {/* Fila 2: Nombre del servicio y descripción */}
            <div className="w-full px-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#07549b' }}>
                {currentService.name}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  {currentService.description}
                </p>
              </div>
            </div>

            {/* Fila 3: Call to Action */}
            <div className="w-full mt-6">
              {currentService.id === 'web-design' ? (
                <a
                  href={withBase('/services/web-design')}
                  onClick={() => onClose()}
                  className="w-full font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                  style={{
                    backgroundColor: '#9b4f07',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8a4606';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#9b4f07';
                  }}
                >
                  {getServiceCTA(currentService.id)}
                </a>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    window.location.href = '/contact';
                  }}
                  className="w-full font-semibold py-3 px-6 rounded-lg transition-colors"
                  style={{
                    backgroundColor: '#9b4f07',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8a4606';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#9b4f07';
                  }}
                >
                  {getServiceCTA(currentService.id)}
                </button>
              )}
            </div>
          </div>

          {/* Barra de controles fija en la parte inferior */}
          <div className="absolute bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between rounded-b-2xl">
            {/* Botón cerrar a la izquierda */}
            <button
              onClick={onClose}
              className="rounded-full p-2.5 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              style={{ backgroundColor: '#07549b' }}
              aria-label="Close"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:opacity-90 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Flechas de navegación a la derecha */}
            {services.length > 1 && (
              <div className="flex items-center gap-2">
                {/* Flecha izquierda */}
                {canGoPrevious && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevious();
                    }}
                    className="rounded-full p-2.5 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                    style={{ backgroundColor: '#07549b' }}
                    aria-label="Previous service"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:opacity-90 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                )}

                {/* Flecha derecha */}
                {canGoNext && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="rounded-full p-2.5 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                    style={{ backgroundColor: '#07549b' }}
                    aria-label="Next service"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:opacity-90 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Renderizar el modal usando portal para evitar problemas de z-index
  return createPortal(modalContent, document.body);
}
