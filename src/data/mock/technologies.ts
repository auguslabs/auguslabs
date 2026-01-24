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
    icon: '/icons/tech/react.svg',
    category: 'web',
    description: 'Biblioteca de JavaScript para construir interfaces de usuario',
    brandColor: '#61DAFB' // Azul claro característico de React
  },
  {
    id: 'astro',
    name: 'Astro',
    icon: '/icons/tech/astro.svg',
    category: 'web',
    description: 'Framework web moderno para sitios estáticos y dinámicos',
    brandColor: '#FF5D01' // Naranja característico de Astro
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    icon: '/icons/tech/tailwindcss.svg',
    category: 'web',
    description: 'Framework CSS utility-first para diseño rápido',
    brandColor: '#38BDF8' // Azul cielo característico de TailwindCSS
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '/icons/tech/typescript.svg',
    category: 'web',
    description: 'Superset de JavaScript con tipado estático',
    brandColor: '#3178C6' // Azul característico de TypeScript
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '/icons/tech/javascript.svg',
    category: 'web',
    description: 'Lenguaje de programación para desarrollo web',
    brandColor: '#F7DF1E' // Amarillo característico de JavaScript
  },
  
  // Desarrollo Web - Backend y Base de Datos
  {
    id: 'firebase',
    name: 'Firebase',
    icon: '/icons/tech/firebase.svg',
    category: 'web',
    description: 'Plataforma de Google para backend, base de datos y autenticación',
    brandColor: '#FFCA28' // Amarillo característico de Firebase
  },
  
  // Desarrollo Web - Herramientas
  {
    id: 'git',
    name: 'Git',
    icon: '/icons/tech/git.svg',
    category: 'tools',
    description: 'Sistema de control de versiones',
    brandColor: '#F1502F' // Naranja característico de Git
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: '/icons/tech/github.svg',
    category: 'tools',
    description: 'Plataforma de desarrollo colaborativo',
    brandColor: '#181717' // Gris oscuro/negro característico de GitHub
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: '/icons/tech/vite.svg',
    category: 'tools',
    description: 'Herramienta de build rápida para desarrollo frontend',
    brandColor: '#646CFF' // Morado/azul característico de Vite
  },
  
  // Diseño y Audiovisual - Adobe
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    icon: '/icons/tech/illustrator.svg',
    category: 'audiovisual',
    description: 'Software de diseño vectorial e ilustración',
    brandColor: '#FF9A00' // Naranja característico de Illustrator
  },
  {
    id: 'after-effects',
    name: 'After\nEffects',
    icon: '/icons/tech/after-effects.svg',
    category: 'audiovisual',
    description: 'Software de composición y animación de video',
    brandColor: '#CF96FD' // Violeta pálido característico de After Effects
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    icon: '/icons/tech/photoshop.svg',
    category: 'audiovisual',
    description: 'Software de edición de imágenes y diseño gráfico',
    brandColor: '#31A8FF' // Azul característico de Photoshop
  },
  {
    id: 'creative-cloud',
    name: 'Adobe Creative Cloud',
    icon: '/icons/tech/creative-cloud.svg',
    category: 'audiovisual',
    description: 'Suite de aplicaciones creativas de Adobe',
    brandColor: '#DA1F26' // Rojo característico de Adobe
  },
  
  // Herramientas de Google
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    icon: '/icons/tech/google-analytics.svg',
    category: 'tools',
    description: 'Plataforma de análisis web y tracking',
    brandColor: '#E37400' // Naranja característico de Google Analytics
  },
  {
    id: 'search-console',
    name: 'Google Search Console',
    icon: '/icons/tech/search-console.svg',
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
