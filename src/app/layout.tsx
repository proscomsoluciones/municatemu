import type { Metadata } from 'next';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { AccessibilityProvider } from '@/context/AccessibilityContext';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { TopBannerAlert } from '@/components/ui/TopBannerAlert';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { Analytics } from '@vercel/analytics/next';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'I. Municipalidad de Catemu | Portal Oficial - Región de Valparaíso',
  description: 'Sitio oficial accesible de la I. Municipalidad de Catemu. Encuentra trámites, noticias, decretos, solicitudes y transparencia activa en menos de 3 clics.',
  metadataBase: new URL('https://www.municatemu.cl'),
  keywords: ['Catemu', 'Municipalidad de Catemu', 'I. Municipalidad de Catemu', 'Valle del Aconcagua', 'Permiso de circulación Catemu', 'Patentes Catemu', 'DIDECO', 'Transparencia Catemu'],
  openGraph: {
    title: 'I. Municipalidad de Catemu | Sitio Web Oficial',
    description: 'Trámites, noticias y servicios para las vecinas y vecinos de Catemu.',
    url: 'https://www.municatemu.cl',
    siteName: 'I. Municipalidad de Catemu',
    locale: 'es_CL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className={`${bricolage.variable} ${instrument.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1F5A43" />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-sol selection:text-tinta">
        <AccessibilityProvider>
          {/* Scroll Progress Bar at very top */}
          <ScrollProgress />

          {/* Skip link for WCAG 2.1 AA Keyboard Navigation */}
          <a href="#contenido-principal" className="skip-link">
            Saltar al contenido principal
          </a>

          {/* Global Emergency Alert Banner */}
          <TopBannerAlert />

          {/* Header Bar */}
          <Header />

          {/* Main Landmark */}
          <main id="contenido-principal" className="flex-1 focus:outline-none" tabIndex={-1}>
            {children}
          </main>

          {/* Floating Back to Top Button */}
          <ScrollToTop />

          {/* Footer Landmark */}
          <Footer />

          {/* Vercel Web Analytics */}
          <Analytics />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
