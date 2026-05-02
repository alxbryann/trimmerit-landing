import type { Metadata } from 'next'
import { Playfair_Display, DM_Mono, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'trimmerit — agenda para barberías y salones',
  description:
    'La plataforma de reservas para barberías, salones y centros de belleza. Sus clientes agendan solos y usted atiende sin afanes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmMono.variable} ${inter.variable}`}
    >
      <body>
        {/* Animated grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
