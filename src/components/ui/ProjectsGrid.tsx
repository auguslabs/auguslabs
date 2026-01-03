import React from 'react';
import type { Project } from '@/data/models/project';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
}

/**
 * Componente ProjectsGrid
 * 
 * Muestra los proyectos en un grid responsive
 */
export function ProjectsGrid({ projects }: ProjectsGridProps) {
  // Ordenar proyectos por order (más reciente primero)
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

