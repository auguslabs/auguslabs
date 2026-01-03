/**
 * Modelo de Proyecto (Experience)
 */

export interface Project {
  id: string;
  name: string;
  description: string; // Descripción breve: tipo de empresa • ubicación
  order: number; // 1 = más reciente, 4 = más antiguo
  url: string; // Link al sitio web (ej: "wholeselfnm.com")
  isActive: boolean; // false si está en construcción
  thumbnail: string; // Imagen thumbnail del proyecto
  mainImage: string; // Imagen principal del proyecto
  logo: string; // Ruta al logo del cliente (en public/resources/)
  services: string[]; // Lista de servicios realizados
  process: {
    listen: string; // Qué escuchamos
    understand: string; // Qué entendimos
    propose: string; // Qué propusimos
    develop: string; // Qué desarrollamos
  };
  story?: string; // Historia única del proyecto (opcional, texto más largo)
  additionalContent?: {
    type: 'before-after' | 'gallery' | 'testimonial';
    data: {
      before?: string;
      after?: string;
      images?: string[];
      text?: string;
    };
  };
}

