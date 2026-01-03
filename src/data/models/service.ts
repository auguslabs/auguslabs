/**
 * Modelo de Servicio
 */

export interface Service {
  id: string;
  name: string;
  icon?: string; // Ruta al icono en public/iconos
  description: string;
  image?: string; // Ruta a imagen del servicio
  category: 'primary' | 'secondary'; // Para diferenciar servicios principales de secundarios
  order?: number; // Orden de visualización
  position?: 'left' | 'right'; // Posición en el timeline
}

