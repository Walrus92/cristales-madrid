import { site } from "./config";

const nextConfig = {
  output: "export",

  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [];
  },

  async rewrites() {
    return [];
  },

  // Inyectamos los valores dinámicos al exportar el sitio
  experimental: {
    typedRoutes: false,
  },

};

export default nextConfig;
