import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Configuración de Tailwind
      applyBaseStyles: false, // Usaremos nuestro propio global.css
    }),
  ],
  output: 'static', // SSG por defecto, cambiar a 'server' para SSR
  // Para habilitar SSR, descomentar:
  // output: 'server',
  // adapter: node(),
  // Configuración para GitHub Pages
  // Si tu repositorio es username.github.io, deja base: '/'
  // Si tu repositorio es otro nombre (ej: username/auguslabs), descomenta y ajusta:
  base: '/auguslabs/',
  server: {
    host: true, // Escucha en todas las interfaces de red (0.0.0.0)
    port: 4321, // Puerto por defecto de Astro
  },
});

