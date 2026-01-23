import React, { useEffect, useRef, useState } from 'react';
import type { Technology } from '@/data/models/technology';

interface TechnologyCarouselProps {
  technologies: Technology[];
  category?: string;
  autoScroll?: boolean;
  mobileGrid?: boolean;
}

const ICON_FALLBACK_SRC = '/icon-demo.svg';

const getAlternateIconSrc = (src: string) => {
  if (src.endsWith('.svg')) {
    return src.replace(/\.svg$/i, '.png');
  }
  if (src.endsWith('.png')) {
    return src.replace(/\.png$/i, '.svg');
  }
  return null;
};

function TechnologyIcon({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(src);
  const hasTriedAltRef = useRef(false);

  useEffect(() => {
    setCurrentSrc(src);
    hasTriedAltRef.current = false;
  }, [src]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (img.complete && img.naturalWidth === 0) {
      const altSrc = getAlternateIconSrc(currentSrc);
      if (!hasTriedAltRef.current && altSrc && altSrc !== currentSrc) {
        hasTriedAltRef.current = true;
        setCurrentSrc(altSrc);
        return;
      }

      if (currentSrc !== ICON_FALLBACK_SRC) {
        setCurrentSrc(ICON_FALLBACK_SRC);
      }
    }
  }, [currentSrc]);

  const handleError = () => {
    const altSrc = getAlternateIconSrc(currentSrc);
    if (!hasTriedAltRef.current && altSrc && altSrc !== currentSrc) {
      hasTriedAltRef.current = true;
      setCurrentSrc(altSrc);
      return;
    }

    if (currentSrc !== ICON_FALLBACK_SRC) {
      setCurrentSrc(ICON_FALLBACK_SRC);
    }
  };

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      className={`w-full h-full object-contain block ${className ?? ''}`}
      onError={handleError}
    />
  );
}

export function TechnologyCarousel({ 
  technologies, 
  category,
  autoScroll = false,
  mobileGrid = false
}: TechnologyCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-highlight functionality
  useEffect(() => {
    if (!technologies.length) return;

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const highlightDuration = 2000;
    const cyclePause = 3500;

    const scheduleNext = (delay: number) => {
      timeoutId = setTimeout(() => {
        setActiveIndex(index);
        const isLast = index === technologies.length - 1;
        index = isLast ? 0 : index + 1;
        scheduleNext(isLast ? cyclePause : highlightDuration);
      }, delay);
    };

    scheduleNext(0);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [technologies.length]);

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
        className={`w-full pb-4 technology-carousel-scroll ${mobileGrid ? 'overflow-x-visible md:overflow-x-auto' : 'overflow-x-auto'}`} 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`gap-6 mx-auto ${mobileGrid ? 'grid grid-cols-2 justify-items-center place-content-center w-fit md:flex md:justify-center md:min-w-max' : 'flex justify-center min-w-max'}`}
          style={{
            maxWidth: '100%',
          }}
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`tech-card group flex-shrink-0 w-32 md:w-40 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 border-b-4 hover:shadow-md hover:scale-105 transition-all duration-300 relative overflow-hidden ${mobileGrid ? 'scale-90 md:scale-100' : ''} ${index === activeIndex ? 'is-active shadow-md scale-105' : ''}`}
              style={{
                ['--tech-brand' as string]: tech.brandColor || '#07549b',
              }}
              title={tech.description || tech.name}
            >
              {/* Icono */}
              <div className="mb-3 flex items-center justify-center h-8 w-8 md:h-10 md:w-10">
                <TechnologyIcon
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className={`transition-all duration-300 grayscale group-hover:grayscale-0 ${index === activeIndex ? 'grayscale-0' : ''}`}
                />
              </div>
              
              {/* Nombre */}
              <h4 
                className={`text-sm md:text-base font-semibold text-center text-gray-500 transition-colors duration-300 group-hover:text-[color:var(--tech-brand)] ${index === activeIndex ? 'text-[color:var(--tech-brand)]' : ''}`}
                style={{ whiteSpace: 'pre-line' }}
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
