import type { Metadata, Viewport } from 'next'
import { SITE } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Familia — Street Culture · Cape Town',
  description:
    'La Familia Street Culture. Limited release sneakers and apparel out of Cape Town. Protect the family.',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&family=UnifrakturMaguntia&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body>
        <span className="sr-only">{SITE.tagline}</span>
        {children}
      </body>
    </html>
  )
}
