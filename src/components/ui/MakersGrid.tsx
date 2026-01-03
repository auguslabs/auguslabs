import React from 'react';
import { MakerCard } from './MakerCard';
import type { Maker } from '@/data/models/maker';

interface MakersGridProps {
  makers: Maker[];
}

/**
 * Componente MakersGrid
 * 
 * Muestra una grilla de makers con diseño responsive:
 * - Desktop: 2 columnas
 * - Tablet: 2 columnas
 * - Mobile: 1 columna
 */
export function MakersGrid({ makers }: MakersGridProps) {
  // Ordenar makers por el campo order
  const sortedMakers = [...makers].sort((a, b) => a.order - b.order);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {sortedMakers.map((maker) => (
          <MakerCard key={maker.id} maker={maker} />
        ))}
      </div>
    </div>
  );
}

