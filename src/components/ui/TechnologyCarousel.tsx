import React, { useEffect, useRef, useState } from 'react';
import type { Technology } from '@/data/models/technology';

interface TechnologyCarouselProps {
  technologies: Technology[];
  category?: string;
  autoScroll?: boolean;
}

export function TechnologyCarousel({ 
  technologies, 
  category,
  autoScroll = false 
}: TechnologyCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll || isPaused || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const maxScroll = container.scrollWidth - container.clientWidth;

    const scroll = () => {
      if (isPaused) return;
      
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0; // Reset to start for infinite scroll
      }
      
      container.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, [autoScroll, isPaused]);

  const handleMouseEnter = () => {
    if (autoScroll) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (autoScroll) setIsPaused(false);
  };

  return (
    <div className="w-full">
      {category && (
        <h3 
          className="text-xl md:text-2xl font-semibold mb-6 text-center"
          style={{ color: '#07549b' }}
        >
          {category}
        </h3>
      )}
      
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto pb-4 technology-carousel-scroll" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex gap-6 justify-center min-w-max mx-auto"
          style={{
            maxWidth: '100%',
          }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex-shrink-0 w-32 md:w-40 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 relative overflow-hidden"
              style={{
                borderBottom: tech.brandColor ? `4px solid ${tech.brandColor}` : undefined,
              }}
              title={tech.description || tech.name}
            >
              {/* Icono */}
              <div className="mb-3 flex items-center justify-center h-16 w-16 md:h-20 md:w-20">
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback a icono genérico si la imagen no carga
                    (e.target as HTMLImageElement).src = '/icon-demo.svg';
                  }}
                />
              </div>
              
              {/* Nombre */}
              <h4 
                className="text-sm md:text-base font-semibold text-center"
                style={{ color: tech.brandColor || '#07549b' }}
              >
                {tech.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
