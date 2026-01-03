import React, { useState, useRef, useEffect } from 'react';
import type { Service } from '@/data/models/service';
import { ServiceModal } from './ServiceModal';
import { withBase } from '@/utils';

interface ServiceTimelineProps {
  services: Service[];
}

/**
 * Timeline vertical de servicios
 * Icono arriba, texto abajo. Sin cajas azules.
 * Intercalado izquierda-derecha
 */
export function ServiceTimeline({ services }: ServiceTimelineProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timelineEndRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Ordenar servicios según el orden especificado
  const sortedServices = [...services].sort((a, b) => (a.order || 0) - (b.order || 0));

  // Calcular altura de la línea cuando los servicios se rendericen
  useEffect(() => {
    const calculateLineHeight = () => {
      if (timelineEndRef.current) {
        const rect = timelineEndRef.current.getBoundingClientRect();
        const container = document.querySelector('.timeline-container');
        if (container) {
          const containerRect = container.getBoundingClientRect();
          setLineHeight(rect.top - containerRect.top);
        }
      }
    };

    // Calcular después de que se renderice
    setTimeout(calculateLineHeight, 100);
    window.addEventListener('resize', calculateLineHeight);
    
    return () => window.removeEventListener('resize', calculateLineHeight);
  }, [sortedServices]);

  const handleServiceClick = (serviceId: string) => {
    console.log('Service clicked:', serviceId); // Debug
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
    console.log('Modal should be open:', true); // Debug
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedServiceId(null);
  };

  return (
    <>
      <div className="relative max-w-4xl mx-auto py-12 px-4 timeline-container">
        {/* Línea vertical central - azul primario - termina donde terminan los servicios */}
        <div 
          className="absolute left-1/2 top-0 w-0.5 transform -translate-x-1/2"
          style={{ 
            height: lineHeight > 0 ? `${lineHeight}px` : 'auto',
            backgroundColor: '#07549b' // Azul primario
          }}
        />

        {/* Contenedor de servicios */}
        <div className="relative space-y-16">
          {sortedServices.map((service, index) => {
            // Usar position del servicio, o alternar si no está definido
            const isLeft = service.position === 'left' || (service.position !== 'right' && index % 2 === 0);

            return (
              <div
                key={service.id}
                className="relative flex items-center min-h-[100px]"
              >
                {/* Nodo en la línea central - azul primario */}
                <div 
                  className="absolute left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 z-10"
                  style={{ backgroundColor: '#07549b' }} // Azul primario
                />
                
                {/* Línea horizontal al servicio - hasta el centro - azul primario */}
                <div
                  className={`absolute top-1/2 h-0.5 ${
                    isLeft ? 'left-1/2' : 'right-1/2'
                  }`}
                  style={{ 
                    width: 'calc(50% - 1.5rem)',
                    backgroundColor: '#07549b' // Azul primario
                  }}
                />

                {/* Card del servicio - icono arriba, texto abajo */}
                <button
                  onClick={() => handleServiceClick(service.id)}
                  className={`relative ${
                    isLeft ? 'mr-auto' : 'ml-auto'
                  } w-[calc(50%-2rem)] flex flex-col items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer`}
                >
                  {service.icon && (
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-16 h-16 object-contain"
                    />
                  )}
                  <span 
                    className="font-semibold text-center"
                    style={{ color: '#07549b' }} // Azul primario
                  >
                    {service.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Referencia para calcular el final de la línea */}
        <div ref={timelineEndRef} className="relative">
          {/* Call to Action al final */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-lg font-medium" style={{ color: '#07549b' }}>
              Do you have an idea in mind?
            </p>
            <p className="text-xl font-bold" style={{ color: '#07549b' }}>
              Let's Make It Real
            </p>
            <a
              href={withBase('/contact')}
              className="inline-block font-semibold py-3 px-8 rounded-lg transition-colors"
              style={{ 
                backgroundColor: '#9b4f07', // Color complementario (naranja)
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8a4606';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#9b4f07';
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Modal de servicios */}
      <ServiceModal
        services={sortedServices}
        initialServiceId={selectedServiceId || undefined}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
