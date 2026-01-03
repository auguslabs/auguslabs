/**
 * Capa de Servicios - API
 * 
 * Aquí se manejan todas las llamadas a APIs externas.
 * Centraliza la lógica de comunicación con servicios externos.
 */

// Configuración base de la API
const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'https://api.example.com';

/**
 * Cliente HTTP genérico para hacer peticiones
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// Agrega aquí tus servicios cuando los necesites
