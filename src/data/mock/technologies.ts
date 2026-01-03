/**
 * Datos mock para las tecnologías que usa AugusLabs
 * 
 * Nota: Los iconos se pueden obtener de:
 * - Simple Icons: https://simpleicons.org/
 * - DevIcons: https://devicon.dev/
 * - Logos oficiales de cada tecnología
 * 
 * Por ahora usamos icon-demo.svg como placeholder, pero deberían
 * reemplazarse con los iconos reales de cada tecnología.
 */

import type { Technology } from '@/data/models/technology';

export const technologies: Technology[] = [
  // Desarrollo Web - Frontend
  {
    id: 'react',
    name: 'React',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de React
    category: 'web',
    description: 'Biblioteca de JavaScript para construir interfaces de usuario',
    brandColor: '#61DAFB' // Azul claro característico de React
  },
  {
    id: 'astro',
    name: 'Astro',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Astro
    category: 'web',
    description: 'Framework web moderno para sitios estáticos y dinámicos',
    brandColor: '#FF5D01' // Naranja característico de Astro
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de TailwindCSS
    category: 'web',
    description: 'Framework CSS utility-first para diseño rápido',
    brandColor: '#38BDF8' // Azul cielo característico de TailwindCSS
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de TypeScript
    category: 'web',
    description: 'Superset de JavaScript con tipado estático',
    brandColor: '#3178C6' // Azul característico de TypeScript
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de JavaScript
    category: 'web',
    description: 'Lenguaje de programación para desarrollo web',
    brandColor: '#F7DF1E' // Amarillo característico de JavaScript
  },
  
  // Desarrollo Web - Backend y Base de Datos
  {
    id: 'firebase',
    name: 'Firebase',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Firebase
    category: 'web',
    description: 'Plataforma de Google para backend, base de datos y autenticación',
    brandColor: '#FFCA28' // Amarillo característico de Firebase
  },
  {
    id: 'firestore',
    name: 'Firestore',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Firestore
    category: 'web',
    description: 'Base de datos NoSQL en tiempo real de Firebase',
    brandColor: '#039BE5' // Azul característico de Firebase/Firestore
  },
  
  // Desarrollo Web - Herramientas
  {
    id: 'git',
    name: 'Git',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Git
    category: 'tools',
    description: 'Sistema de control de versiones',
    brandColor: '#F1502F' // Naranja característico de Git
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de GitHub
    category: 'tools',
    description: 'Plataforma de desarrollo colaborativo',
    brandColor: '#181717' // Gris oscuro/negro característico de GitHub
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Vite
    category: 'tools',
    description: 'Herramienta de build rápida para desarrollo frontend',
    brandColor: '#646CFF' // Morado/azul característico de Vite
  },
  
  // Diseño y Audiovisual - Adobe
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Illustrator
    category: 'audiovisual',
    description: 'Software de diseño vectorial e ilustración',
    brandColor: '#FF9A00' // Naranja característico de Illustrator
  },
  {
    id: 'after-effects',
    name: 'After Effects',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de After Effects
    category: 'audiovisual',
    description: 'Software de composición y animación de video',
    brandColor: '#CF96FD' // Violeta pálido característico de After Effects
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Photoshop
    category: 'audiovisual',
    description: 'Software de edición de imágenes y diseño gráfico',
    brandColor: '#31A8FF' // Azul característico de Photoshop
  },
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Premiere
    category: 'audiovisual',
    description: 'Software de edición de video profesional',
    brandColor: '#DB76FA' // Heliotrope/violeta característico de Premiere Pro
  },
  
  // Herramientas de Google
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Google Analytics
    category: 'tools',
    description: 'Plataforma de análisis web y tracking',
    brandColor: '#E37400' // Naranja característico de Google Analytics
  },
  {
    id: 'search-console',
    name: 'Google Search Console',
    icon: '/icon-demo.svg', // TODO: Reemplazar con icono real de Search Console
    category: 'tools',
    description: 'Herramienta de Google para monitoreo SEO',
    brandColor: '#4285F4' // Azul característico de Google
  }
];

// Funciones helper para filtrar por categoría
export const getWebTechnologies = (): Technology[] => {
  return technologies.filter(tech => tech.category === 'web');
};

export const getAudiovisualTechnologies = (): Technology[] => {
  return technologies.filter(tech => tech.category === 'audiovisual');
};

export const getToolTechnologies = (): Technology[] => {
  return technologies.filter(tech => tech.category === 'tools');
};
