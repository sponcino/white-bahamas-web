import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { QuoteProvider } from '@/context/QuoteContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteDrawer from '@/components/QuoteDrawer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://whitebahamas.com.ar'),
  title: {
    default: 'White Bahamas Argentina | Hidromasajes, Minipiscinas y SPA',
    template: '%s | White Bahamas Argentina',
  },
  description:
    'Fabricación y venta de hidromasajes individuales, dobles y esquineros, minipiscinas y equipos SPA a medida en Argentina. Asesoramiento técnico y cotización oficial.',
  keywords: [
    'hidromasajes',
    'minipiscinas',
    'jacuzzi argentina',
    'spa',
    'hidroterapia',
    'sauna',
    'baño de vapor',
    'white bahamas',
  ],
  authors: [{ name: 'White Bahamas Argentina' }],
  creator: 'White Bahamas Argentina',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://whitebahamas.com.ar',
    siteName: 'White Bahamas Argentina',
    title: 'White Bahamas Argentina | Hidromasajes y Soluciones SPA',
    description:
      'Fabricación personalizada de hidromasajes y minipiscinas para residencias, arquitectura y hotelería en Argentina.',
    images: [
      {
        url: '/images/redes_sociales.jpg',
        width: 1200,
        height: 630,
        alt: 'White Bahamas Argentina - Experiencia SPA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Bahamas Argentina | Hidromasajes y Minipiscinas',
    description: 'Arquitectura de bienestar y fabricación a medida en Argentina.',
    images: ['/images/redes_sociales.jpg'],
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${jakarta.variable} font-sans-ui h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased selection:bg-[#0099ff]/20">
        <QuoteProvider>
          {/* Skip to main content link for WCAG AA keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-slate-900 text-white rounded-md text-xs uppercase tracking-wider font-semibold focus:ring-2 focus:ring-[#0099ff]"
          >
            Saltar al contenido principal
          </a>

          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />

          <QuoteDrawer />
        </QuoteProvider>
      </body>
    </html>
  );
}
