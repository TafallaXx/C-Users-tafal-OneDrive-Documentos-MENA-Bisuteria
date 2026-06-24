import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: 'MENA | Bisuteria Moderna',
  description: 'Joyas modernas en acero inoxidable. Diseños minimalistas y elegantes desde Costa Rica.',
  generator: 'v0.app',
  keywords: ['bisuteria', 'joyas', 'costa rica', 'acero inoxidable', 'collares', 'aretes', 'pulseras'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Metaetiqueta de verificación de AdSense */}
        <meta name="google-adsense-account" content="ca-pub-1268315421410022" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {/* Script de carga de anuncios de AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1268315421410022"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
