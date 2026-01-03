import React from 'react';
import type { Maker } from '@/data/models/maker';

interface MakerCardProps {
  maker: Maker;
}

/**
 * Componente MakerCard
 * 
 * Muestra la información de un maker con:
 * - Foto circular con fondo uniforme
 * - Nombre
 * - Rol profesional
 * - Tagline personal
 * - Credenciales opcionales
 * - Experiencia/Industria opcionales
 * 
 * Diseño minimalista y profesional
 */
export function MakerCard({ maker }: MakerCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      {/* Foto circular con fondo uniforme */}
      <div 
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 flex items-center justify-center"
        style={{
          backgroundColor: '#eef3f7', // Fondo azul suave uniforme (se verá si la foto no cubre todo)
          border: '3px solid #07549b', // Borde azul para definir el círculo
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Sombra sutil para profundidad
        }}
      >
        <img
          src={maker.photo}
          alt={maker.name}
          className="w-full h-full object-cover object-center rounded-full"
          style={{
            // Asegurar que la imagen cubra todo el círculo
            objectFit: 'cover',
            // Si la imagen tiene fondo distinto, el recorte circular lo ocultará
            // El fondo azul suave (#eef3f7) se verá solo si la imagen no cubre todo
          }}
          onError={(e) => {
            // Fallback si la foto no existe - mostrar iniciales
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && !parent.querySelector('.initials-fallback')) {
              const initials = maker.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2);
              const initialsDiv = document.createElement('div');
              initialsDiv.className = 'initials-fallback w-full h-full flex items-center justify-center text-4xl md:text-5xl font-bold';
              initialsDiv.style.color = '#07549b';
              initialsDiv.textContent = initials;
              parent.appendChild(initialsDiv);
            }
          }}
        />
      </div>

      {/* Nombre */}
      <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#07549b' }}>
        {maker.name}
      </h3>

      {/* Rol */}
      <p className="text-base md:text-lg text-gray-700 mb-2 font-medium">
        {maker.role}
      </p>

      {/* Tagline Personal */}
      <p className="text-sm md:text-base text-gray-600 mb-3 italic" style={{ fontStyle: 'italic' }}>
        "{maker.tagline}"
      </p>

      {/* Credenciales (opcional) */}
      {maker.credentials && maker.credentials.length > 0 && (
        <div className="mb-3">
          {maker.credentials.map((credential, index) => (
            <span
              key={index}
              className="inline-block text-sm text-gray-600 mb-1"
            >
              {credential}
              {index < maker.credentials!.length - 1 && <span className="mx-1">•</span>}
            </span>
          ))}
        </div>
      )}

      {/* Experiencia (opcional) */}
      {maker.experience && (
        <p className="text-sm md:text-base text-gray-600 mb-2">
          {maker.experience}
        </p>
      )}

      {/* Industria (opcional) */}
      {maker.industry && (
        <p className="text-sm text-gray-500 italic mb-2">
          {maker.industry}
        </p>
      )}

      {/* Idiomas (opcional) */}
      {maker.languages && maker.languages.length > 0 && (
        <div className="mt-2 pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-1">Languages</p>
          <p className="text-sm text-gray-600">
            {maker.languages.join(' • ')}
          </p>
        </div>
      )}
    </div>
  );
}

