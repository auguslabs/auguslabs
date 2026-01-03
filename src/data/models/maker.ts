/**
 * Modelo de Maker (Integrante del equipo)
 */

export interface Maker {
  id: string;
  name: string;
  role: string; // Rol principal (ej: "Designer", "Developer", "Co-founder")
  tagline: string; // Frase personal/natural (ej: "The guy of the ideas")
  photo: string; // Ruta a la foto (en public/resources/makers/)
  credentials?: string[]; // Credenciales opcionales (ej: ["BFA in Design", "10+ years experience"])
  experience?: string; // Experiencia opcional (texto breve)
  industry?: string; // Industria o especialización opcional
  bio?: string; // Biografía breve opcional (2-3 líneas)
  languages?: string[]; // Idiomas opcionales (ej: ["English", "Spanish"])
  order: number; // Orden de visualización
}

