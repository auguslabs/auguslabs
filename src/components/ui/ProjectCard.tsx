import React, { useState } from 'react';
import {
  SpeakerWaveIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import type { Project } from '@/data/models/project';

interface ProjectCardProps {
  project: Project;
}

/**
 * Componente ProjectCard
 * 
 * Muestra una card de proyecto con:
 * - Logo del cliente
 * - Badges del proceso (Escuchar, Entender, Proponer, Desarrollar)
 * - Imagen del proyecto
 * - Información básica
 * - Botones de acción
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVisitSite = (e: React.MouseEvent) => {
    if (!project.isActive) {
      e.preventDefault();
      return;
    }
    // Abrir en nueva pestaña
    window.open(`https://${project.url}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Header con badges del proceso */}
      <div className="relative p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          {/* Logo del cliente */}
          <div className="flex items-center">
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              style={{ filter: 'grayscale(100%)' }}
              onError={(e) => {
                // Fallback si el logo no existe
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Badges del proceso */}
          <div className="flex items-center gap-1 md:gap-2">
            <div className="flex items-center gap-1">
              <SpeakerWaveIcon
                className="w-4 h-4 md:w-5 md:h-5 opacity-70 text-[#9b4f07]"
                title="We Listen"
              />
              <PuzzlePieceIcon
                className="w-4 h-4 md:w-5 md:h-5 opacity-70 text-[#9b4f07]"
                title="We Understand"
              />
              <LightBulbIcon
                className="w-4 h-4 md:w-5 md:h-5 opacity-70 text-[#9b4f07]"
                title="We Propose"
              />
              <img
                src="/icons/ui/code-bracket-photo.svg"
                alt=""
                className="w-4 h-4 md:w-5 md:h-5 opacity-70"
                title="We Develop"
              />
            </div>
          </div>
        </div>

        {/* Nombre del proyecto */}
        <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#07549b' }}>
          {project.name}
        </h3>
        {/* Descripción breve */}
        <p className="text-xs md:text-sm text-gray-600">
          {project.description}
        </p>
      </div>

      {/* Imagen del proyecto */}
      <div className="relative w-full h-48 md:h-64 bg-gray-100 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Información básica */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.services.slice(0, 3).map((service, index) => (
            <span
              key={index}
              className="text-xs md:text-sm px-2 py-1 bg-gray-100 text-gray-700 rounded"
            >
              {service}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="text-xs md:text-sm px-2 py-1 bg-gray-100 text-gray-700 rounded">
              +{project.services.length - 3} more
            </span>
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 px-4 py-2 text-sm md:text-base font-medium rounded-lg transition-colors"
            style={{
              backgroundColor: '#07549b',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            View Story →
          </button>
          <a
            href={project.isActive ? `https://${project.url}` : '#'}
            onClick={handleVisitSite}
            target={project.isActive ? '_blank' : undefined}
            rel={project.isActive ? 'noopener noreferrer' : undefined}
            className={`flex-1 px-4 py-2 text-sm md:text-base font-medium rounded-lg text-center transition-colors ${
              project.isActive
                ? 'cursor-pointer'
                : 'cursor-not-allowed opacity-50'
            }`}
            style={{
              backgroundColor: project.isActive ? '#9b4f07' : '#cccccc',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              if (project.isActive) {
                e.currentTarget.style.opacity = '0.9';
              }
            }}
            onMouseLeave={(e) => {
              if (project.isActive) {
                e.currentTarget.style.opacity = '1';
              }
            }}
          >
            {project.isActive ? 'Visit Site →' : 'In Development'}
          </a>
        </div>
      </div>

      {/* Contenido expandido */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-4 bg-gray-50 animate-fadeIn">
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-3" style={{ color: '#07549b' }}>
              The Process
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <SpeakerWaveIcon className="w-4 h-4 text-[#9b4f07]" />
                  <span className="font-semibold text-sm" style={{ color: '#07549b' }}>We Listen:</span>
                </div>
                <p className="text-sm text-gray-700 ml-6">{project.process.listen}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <PuzzlePieceIcon className="w-4 h-4 text-[#9b4f07]" />
                  <span className="font-semibold text-sm" style={{ color: '#07549b' }}>We Understand:</span>
                </div>
                <p className="text-sm text-gray-700 ml-6">{project.process.understand}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <LightBulbIcon className="w-4 h-4 text-[#9b4f07]" />
                  <span className="font-semibold text-sm" style={{ color: '#07549b' }}>We Propose:</span>
                </div>
                <p className="text-sm text-gray-700 ml-6">{project.process.propose}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src="/icons/ui/code-bracket-photo.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="font-semibold text-sm" style={{ color: '#07549b' }}>We Develop:</span>
                </div>
                <p className="text-sm text-gray-700 ml-6">{project.process.develop}</p>
              </div>
            </div>
          </div>

          {/* Servicios completos */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2" style={{ color: '#07549b' }}>
              Services Provided
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {project.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Link to view project details (only for eabuencamino, dulcesaladoct, and treesbyjuan) */}
          {(project.id === 'eabuencamino' || project.id === 'dulcesaladoct' || project.id === 'treesbyjuan') && (
            <div className="mb-4">
              <a
                href={`/projects/${project.id}/details`}
                className="block w-full px-4 py-2 text-sm font-medium rounded-lg text-center transition-colors hover:opacity-90"
                style={{
                  backgroundColor: '#9b4f07',
                  color: 'white'
                }}
              >
                View Project Details →
              </a>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors"
            style={{
              backgroundColor: '#07549b',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

