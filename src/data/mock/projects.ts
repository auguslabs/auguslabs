/**
 * Datos Mock de Proyectos
 * 
 * Proyectos en orden cronológico (más reciente a más antiguo)
 */

import type { Project } from '@/data/models/project';

export const projects: Project[] = [
  {
    id: 'wholeselfnm',
    name: 'WholeselfNM',
    description: 'Counseling • Albuquerque, New México',
    order: 1, // Más reciente
    url: 'wholeselfnm.com',
    isActive: false, // En construcción
    thumbnail: '/resources/wholeselfnm-thumbnail.webp', // Imagen grande del proyecto (agregar en public/resources/)
    mainImage: '/resources/wholeselfnm-thumbnail.webp', // Misma imagen para la vista expandida
    logo: '/resources/wholeselfnm-logo.webp', // Logo del cliente
    services: [
      'Web Redesign',
      'UX Reorganization',
      'Industry Research',
      'New Content',
      'Information Restructuring'
    ],
    process: {
      listen: 'Need to restructure their existing website. They already had a site, color palette, and logos, but needed to improve information organization and add important new elements.',
      understand: 'They needed a more robust digital presence. After researching their industry, we identified key missing elements and opportunities to improve how they present their information.',
      propose: 'A complete redesign of all site sections, reorganizing information more effectively and adding new elements based on industry research.',
      develop: 'A collaborative restructuring process where we worked with existing information, generated new content, and organized everything to strengthen their digital presence.'
    },
    story: 'Current complete redesign project. We worked on reorganizing all site sections, improving how information is displayed. After deep industry research, we added important new elements to make the brand\'s digital presence more robust. A collaborative creation process.'
  },
  {
    id: 'eabuencamino',
    name: 'EaBuenCamino',
    description: 'Counseling Services • Albuquerque, New México',
    order: 2,
    url: 'eabuencamino.com',
    isActive: true,
    thumbnail: '/resources/eabuencamino-thumbnail.webp', // Imagen grande del proyecto (agregar en public/resources/)
    mainImage: '/resources/eabuencamino-thumbnail.webp', // Misma imagen para la vista expandida
    logo: '/resources/eabuencamino-logo.webp', // Logo del cliente
    services: [
      'Complete Logo Redesign',
      'Web Design from Scratch',
      'Branding',
      'Business Cards'
    ],
    process: {
      listen: 'Their need to completely redesign their logo from the first version and build a website from scratch that reflected their new identity.',
      understand: 'They sought a co-creation process where they could actively participate in every decision, from color palette to final details.',
      propose: 'A collaborative process with multiple meetings to refine ideas, pivot when necessary, and land concepts until achieving exactly what they were looking for.',
      develop: 'An incredible co-creation process where we chose the color palette together, refined the logo through several iterations, and built the site from scratch. We also created new business cards that reflect their renewed identity.'
    },
    story: 'Complete logo redesign from its first version. We built the site from scratch in a collaborative process where we listened to their needs, understood their vision, and proposed solutions that reflected their identity.'
  },
  {
    id: 'dulcesaladoct',
    name: 'DulceSaladoCT',
    description: 'Counseling Services • Albuquerque, New México',
    order: 3,
    url: 'dulcesaladoct.com',
    isActive: true,
    thumbnail: '/resources/dulcesaladoct-thumbnail.webp', // Imagen grande del proyecto (agregar en public/resources/)
    mainImage: '/resources/dulcesaladoct-thumbnail.webp', // Misma imagen para la vista expandida
    logo: '/resources/dulcesaladoct-logo.webp', // Logo del cliente
    services: [
      'Web Design',
      'Logo',
      'Complete Branding',
      'Brochure',
      'Graphic Pieces',
      'Digital Content'
    ],
    process: {
      listen: 'Their ideas and proposals as clients. They had knowledge of branding and a fairly clear idea of what they wanted from each graphic piece.',
      understand: 'They sought a cooperation process where every detail reflected what they wanted to convey with their brand and what they were delivering. It was important to work with attention to detail in every element.',
      propose: 'A comprehensive project covering everything from the logo to the complete website, including brochure, graphic pieces, and digital content, all worked with the level of detail they sought.',
      develop: 'A beautiful cooperation process where each graphic piece was worked with such attention to detail that in the end it reflected exactly what they wanted. From the website to the brochures, everything was done with attention to the details they sought.'
    },
    story: 'Comprehensive visual identity and digital presence project. We developed everything from the logo to the complete website, including brochure, graphic pieces, and digital content. A complete branding work that strengthened their market presence.'
  },
  {
    id: 'treesbyjuan',
    name: 'TreesbyJuan',
    description: 'Tree treatment and care experts • Albuquerque, New México',
    order: 4, // Más antiguo
    url: 'treesbyjuan.com',
    isActive: true,
    thumbnail: '/resources/treesbyjuan-thumbnail.webp', // Imagen grande del proyecto (agregar en public/resources/)
    mainImage: '/resources/treesbyjuan-thumbnail.webp', // Misma imagen para la vista expandida
    logo: '/resources/treesbyjuan-logo.webp', // Logo del cliente
    services: [
      'Web Design',
      'Information Organization',
      'Custom Iconography',
      'Content'
    ],
    process: {
      listen: 'His simple but important need: he wanted a website to have presence for his company. He didn\'t have much knowledge of how the web worked, but he knew he needed to be present.',
      understand: 'We needed to build everything from scratch, from information organization to iconography. He provided the images he wanted, and we developed the rest.',
      propose: 'A complete website where we organized his information clearly, created custom iconography with his brand colors, and developed content in a way that was easy to understand and navigate.',
      develop: 'The website from scratch. We built the content with text, used the images he provided, and developed all the custom iconography with the brand colors. It was our first experience building a site from scratch, a mutual learning process.'
    },
    story: 'Our first experience building a site from scratch. We worked on the complete design of the web page, organizing information clearly and effectively. A mutual learning process where we applied our approach: listen, understand, propose, and develop.'
  }
];

