/**
 * Datos Mock de Makers (Integrantes del equipo)
 * 
 * 4 integrantes con información básica
 * Las fotos deben estar en public/resources/makers/
 */

import type { Maker } from '@/data/models/maker';

export const makers: Maker[] = [
  {
    id: 'maker-1',
    name: 'Cesar T. Sierra',
    role: 'Interactive Designer',
    tagline: 'The guy who connects ideas',
    photo: '/resources/makers/maker-1.webp',
    credentials: [
      'Interactive Designer and Digital Arts',
      'Systems Engineer',
      'Business Administrator',
      '4+ years developing technology solutions'
    ],
    bio: 'Interactive Designer with a background in Systems Engineering and Business Administration. With 4+ years of experience in web development and interface design, always seeking technological solutions that empower teams and projects. Currently advancing skills through continuous education in California, combining technical expertise with business acumen. Leading AugusLabs to create digital experiences that connect ideas with results.',
    experience: '4+ years developing technology solutions | Process automation & workflow optimization | Multiple web projects delivered | Continuous education in California',
    industry: 'Interface Design • Frontend Development • Animations',
    languages: ['English', 'Spanish'],
    order: 1
  },
  {
    id: 'maker-2',
    name: 'Team Member 2',
    role: 'Primary Role',
    tagline: 'Personal tagline for maker 2',
    photo: '/resources/makers/maker-2.webp',
    credentials: ['Credential 1', 'Credential 2'],
    experience: 'Brief experience description',
    industry: 'Industry or specialization',
    order: 2
  },
  {
    id: 'maker-3',
    name: 'Team Member 3',
    role: 'Primary Role',
    tagline: 'Personal tagline for maker 3',
    photo: '/resources/makers/maker-3.webp',
    credentials: ['Credential 1', 'Credential 2'],
    experience: 'Brief experience description',
    industry: 'Industry or specialization',
    order: 3
  },
  {
    id: 'maker-4',
    name: 'Team Member 4',
    role: 'Primary Role',
    tagline: 'Personal tagline for maker 4',
    photo: '/resources/makers/maker-4.webp',
    credentials: ['Credential 1', 'Credential 2'],
    experience: 'Brief experience description',
    industry: 'Industry or specialization',
    order: 4
  }
];

