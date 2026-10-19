import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        papel: 'var(--color-papel)',
        tinta: 'var(--color-tinta)',
        'texto-secundario': 'var(--color-texto-secundario)',
        lineas: 'var(--color-lineas)',
        
        // Catemu Official Logo Palette
        'catemu-violeta': '#5E1757',
        'catemu-crimson': '#A82245',
        'catemu-naranja': '#F07D26',
        'catemu-amarillo': '#F6A623',
        'catemu-suave': '#F4EAF5',

        // Standard references mapping to logo colors
        'verde-valle': 'var(--color-verde-valle)',
        'verde-claro': 'var(--color-verde-claro)',
        'verde-suave': 'var(--color-verde-suave)',
        sol: 'var(--color-sol)',
        tierra: 'var(--color-tierra)',

        // Functional state colors
        exito: '#15803d',
        alerta: '#F07D26',
        error: '#b91c1c',
      },
      fontFamily: {
        heading: ['var(--font-bricolage)', 'sans-serif'],
        body: ['var(--font-instrument)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(94, 23, 87, 0.06), 0 2px 6px -1px rgba(94, 23, 87, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(94, 23, 87, 0.15), 0 4px 12px -2px rgba(240, 125, 38, 0.12)',
        'hero': '0 20px 40px -15px rgba(94, 23, 87, 0.2)',
      },
      animation: {
        'sun-rise': 'sunRise 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        sunRise: {
          '0%': { transform: 'translateY(24px) scale(0.85)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
