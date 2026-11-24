import { defineConfig } from 'astro/config';

export default defineConfig({
  // Usuario y repositorio: https://jose-luis-pereira-ferreras.github.io/Plantilla-Astro/
  site: 'https://jose-luis-pereira-ferreras.github.io/Plantilla-Astro/',
  // El repositorio no es USUARIO.github.io, así que la ruta base es /Plantilla-Astro:
  base: '/Plantilla-Astro',
  trailingSlash: 'always',
});
