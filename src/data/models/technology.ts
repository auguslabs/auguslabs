/**
 * Modelo de datos para Tecnologías
 * Define la estructura de las tecnologías que usa AugusLabs
 */

export type TechnologyCategory = 'web' | 'audiovisual' | 'tools';

export interface Technology {
  id: string;
  name: string;
  icon: string; // Path a la imagen del icono
  category: TechnologyCategory;
  description?: string; // Descripción opcional para tooltip o hover
  brandColor?: string; // Color de marca de la herramienta (hex) para borde y acentos
}
