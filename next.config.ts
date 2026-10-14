import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Empresa / Institucional
      { source: '/quienessomos', destination: '/nosotros', permanent: true },
      { source: '/filosofia', destination: '/nosotros', permanent: true },
      { source: '/porquewhitebahamas', destination: '/nosotros', permanent: true },

      // Profesionales
      { source: '/wbparaarquitectos', destination: '/profesionales', permanent: true },
      { source: '/mercadoinmobiliario', destination: '/profesionales', permanent: true },
      { source: '/industriahotelera', destination: '/profesionales', permanent: true },

      // Terapias y Bienestar
      { source: '/terapias', destination: '/bienestar', permanent: true },
      { source: '/hidroterapia', destination: '/bienestar', permanent: true },
      { source: '/hidromasaje-terapia', destination: '/bienestar', permanent: true },
      { source: '/cascadas', destination: '/bienestar', permanent: true },
      { source: '/ozonoterapia', destination: '/bienestar', permanent: true },
      { source: '/cromoterapia', destination: '/bienestar', permanent: true },
      { source: '/aromaterapia', destination: '/bienestar', permanent: true },

      // Soporte y Mantenimiento
      { source: '/mantenimiento', destination: '/soporte', permanent: true },
      { source: '/entrega', destination: '/soporte', permanent: true },
      { source: '/garantias', destination: '/soporte', permanent: true },
      { source: '/preguntasfrecuentes', destination: '/soporte', permanent: true },

      // Accesorios legados
      { source: '/veraccesoriosmobile.php', destination: '/productos', permanent: true },
      { source: '/hidromasajesindividuales/accesorios', destination: '/hidromasajesindividuales', permanent: true },
      { source: '/hidromasajesdobles/accesorios', destination: '/hidromasajesdobles', permanent: true },
      { source: '/hidromasajesesquineros/accesorios', destination: '/hidromasajesesquineros', permanent: true },
      { source: '/minipiscinas/accesorios', destination: '/minipiscinas', permanent: true },

      // Configuraciones profundas detectadas en auditoría
      {
        source: '/hidromasajesindividuales/NassauA165L/FULLSPA22accesorios',
        destination: '/hidromasajesindividuales/NassauA165L',
        permanent: true,
      },
      {
        source: '/hidromasajesindividuales/BigIslandA150/Premium10accesorios',
        destination: '/hidromasajesindividuales/BigIslandA150',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
