/**
 * Datos mock de servicios
 * Orden específico intercalando izquierda-derecha
 * Todo en inglés
 * Descripciones cortas para el modal
 */

import type { Service } from '../models/service';

export const services: Service[] = [
  // Intercalando izquierda-derecha
  {
    id: 'web-design',
    name: 'Web Design',
    icon: '/icons/solutions/diseno-web.svg',
    description: 'Mobile-first websites with responsive design and optimized UX/UI that convert visitors into customers.',
    category: 'primary',
    order: 1,
    position: 'left',
  },
  {
    id: 'animations',
    name: 'Animations',
    icon: '/icons/solutions/animaciones.svg',
    description: 'Simple motion graphics and short animations that capture attention on social media and landing pages.',
    category: 'primary',
    order: 2,
    position: 'right',
  },
  {
    id: 'video',
    name: 'Video',
    icon: '/icons/solutions/video.svg',
    description: 'Explanatory videos and motion graphics for social media that tell your brand story effectively.',
    category: 'primary',
    order: 3,
    position: 'left',
  },
  {
    id: 'product-design',
    name: 'Product Design',
    icon: '/icons/solutions/product-design.svg',
    description: 'User-centered digital product design that focuses on results and exceptional user experiences.',
    category: 'primary',
    order: 4,
    position: 'right',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    icon: '/icons/solutions/diseno-grafico.svg',
    description: 'Attractive graphics and visual content that effectively communicate your message and enhance your brand.',
    category: 'secondary',
    order: 5,
    position: 'left',
  },
  {
    id: 'web-applications',
    name: 'Web Applications',
    icon: '/icons/solutions/aplicaciones-web.svg',
    description: 'Functional and scalable web applications built to grow with your business and meet your specific needs.',
    category: 'secondary',
    order: 6,
    position: 'right',
  },
  {
    id: 'ux-ui-design',
    name: 'UX/UI Design',
    icon: '/icons/solutions/ux-ui.svg',
    description: 'Optimized user experience and intuitive interfaces that convert visitors into loyal customers.',
    category: 'secondary',
    order: 7,
    position: 'left',
  },
  {
    id: 'visual-identity-brand',
    name: 'Visual Identity & Brand',
    icon: '/icons/solutions/identidad-visual.svg',
    description: 'Complete brand identity development: logos, color palettes, and style guides that reflect your essence.',
    category: 'secondary',
    order: 8,
    position: 'right',
  },
  {
    id: 'social-media',
    name: 'Social Media',
    icon: '/icons/solutions/redes-sociales.svg',
    description: 'Strategic content and social media management that connects with your audience and builds engagement.',
    category: 'secondary',
    order: 9,
    position: 'left',
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    icon: '/icons/solutions/creacion-contenido.svg',
    description: 'Strategic content that connects with specific audiences, generates engagement, and drives conversions.',
    category: 'secondary',
    order: 10,
    position: 'right',
  },
  {
    id: 'ai-automation',
    name: 'AI & Intelligent Automation',
    icon: '/icons/solutions/ia-automatizacion.svg',
    description: 'AI integration and intelligent automation that streamline processes and improve business efficiency.',
    category: 'secondary',
    order: 11,
    position: 'left',
  },
];
