/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https:;"
        }
      ]
    }
  ],
  redirects: async () => [
    {
      source: '/index.php/alcalde',
      destination: '/municipio',
      permanent: true,
    },
    {
      source: '/index.php/concejo',
      destination: '/municipio',
      permanent: true,
    },
    {
      source: '/index.php/tramites',
      destination: '/tramites',
      permanent: true,
    },
    {
      source: '/index.php/noticias',
      destination: '/noticias',
      permanent: true,
    },
    {
      source: '/index.php/transparencia',
      destination: '/transparencia',
      permanent: true,
    }
  ]
};

export default nextConfig;
