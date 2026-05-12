'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useDataTheme } from '@/hooks/useDataTheme'

const FEATURES = [
  {
    lightSrc: '/agenda-light-transparent.png',
    darkSrc: '/agenda-dark-transparent.png',
    widthLight: 513,
    heightLight: 1024,
    widthDark: 524,
    heightDark: 1024,
    eyebrow: '01 · Agenda',
    headline: 'Su día, claro\nde un vistazo.',
    sub: 'Citas, horarios e ingresos en tiempo real desde el celular. Sin hojas, sin cuadros de Excel, sin preguntar quién sigue.',
    flip: false,
  },
  {
    lightSrc: '/perfil-light-transparent.png',
    darkSrc: '/perfil-dark-transparent.png',
    widthLight: 482,
    heightLight: 1024,
    widthDark: 447,
    heightDark: 1024,
    eyebrow: '02 · Perfil',
    headline: 'Un link.\nToda su barbería.',
    sub: 'Fotos, servicios, precios y disponibilidad en vivo. Mándelo por WhatsApp o póngalo en el Instagram — sus clientes agendan solos desde donde estén.',
    flip: true,
  },
  {
    lightSrc: '/reserva-light-transparent.png',
    darkSrc: '/reserva-dark-transparent.png',
    widthLight: 487,
    heightLight: 1024,
    widthDark: 475,
    heightDark: 1024,
    eyebrow: '03 · Reservas',
    headline: 'Reserva confirmada.\nA seguir cortando.',
    sub: 'El cliente elige, agenda y recibe confirmación. Usted solo atiende. Sin ir y volver por WhatsApp para cuadrar nada.',
    flip: false,
  },
  {
    lightSrc: '/fideliza-light-transparent.png',
    darkSrc: '/fideliza-dark-transparent.png',
    widthLight: 841,
    heightLight: 1024,
    widthDark: 784,
    heightDark: 1024,
    eyebrow: '04 · Fidelización',
    headline: 'Que siempre\nvuelvan.',
    sub: 'Programe sellos, descuentos y beneficios personalizados. Sus clientes más fieles siempre tienen una razón para regresar — y siempre la recuerdan.',
    flip: true,
  },
]

interface FeatureRowProps {
  feature: (typeof FEATURES)[0]
  theme: 'light' | 'dark'
}

function FeatureRow({ feature, theme }: FeatureRowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isLight = theme === 'light'
  const imgSrc = isLight ? feature.lightSrc : feature.darkSrc
  const imgW = isLight ? feature.widthLight : feature.widthDark
  const imgH = isLight ? feature.heightLight : feature.heightDark
  const isWideMockup = imgW > imgH

  const imgAnim = {
    hidden: { opacity: 0, x: feature.flip ? 48 : -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
  }
  const textAnim = {
    hidden: { opacity: 0, x: feature.flip ? -48 : 48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const } },
  }

  const imageNode = (
    <motion.div
      variants={imgAnim}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ flexShrink: 0 }}
      className="showcase-img-wrap"
    >
      <div
        className={`showcase-mock-frame ${isWideMockup ? 'showcase-wide' : ''}`}
        style={{
          width: isWideMockup ? 'min(440px, 92vw)' : 'min(320px, 42vw)',
        }}
      >
        <Image
          src={imgSrc}
          alt={feature.eyebrow}
          width={imgW}
          height={imgH}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          quality={90}
        />
      </div>
    </motion.div>
  )

  const textNode = (
    <motion.div
      variants={textAnim}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ flex: 1, maxWidth: '440px' }}
      className="showcase-text-wrap"
    >
      <div
        style={{
          fontFamily: 'var(--font-mono), "DM Mono", monospace',
          fontSize: '9.5px',
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '24px',
            height: '1px',
            background: 'var(--gold)',
            flexShrink: 0,
          }}
        />
        {feature.eyebrow}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", serif',
          fontWeight: 800,
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 4vw, 56px)',
          lineHeight: 0.97,
          letterSpacing: '-0.032em',
          color: 'var(--fg)',
          marginBottom: '24px',
          whiteSpace: 'pre-line',
        }}
      >
        {feature.headline}
      </h3>

      <p
        style={{
          fontSize: '16px',
          lineHeight: 1.72,
          color: 'var(--muted)',
          fontWeight: 300,
        }}
      >
        {feature.sub}
      </p>
    </motion.div>
  )

  return (
    <div
      ref={ref}
      className="showcase-row"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '80px',
        padding: '100px 0',
        borderBottom: '1px solid var(--border)',
        flexDirection: feature.flip ? 'row-reverse' : 'row',
      }}
    >
      {imageNode}
      {textNode}
    </div>
  )
}

export default function AppShowcase() {
  const theme = useDataTheme()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 })

  return (
    <section
      style={{
        padding: '0 40px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        style={{
          padding: '100px 0 60px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label" style={{ marginBottom: '28px' }}>La app</div>
        <h2
          style={{
            fontFamily: 'var(--font-playfair), "Playfair Display", serif',
            fontWeight: 800,
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '-0.035em',
            color: 'var(--fg)',
            maxWidth: '680px',
            marginBottom: '20px',
          }}
        >
          Hecha para el{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>oficio.</em>
        </h2>
        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--muted)',
            maxWidth: '480px',
            fontWeight: 300,
          }}
        >
          Cada pantalla diseñada para que usted corra menos y atienda más.
        </p>
      </motion.div>

      {/* Feature rows */}
      {FEATURES.map((feature) => (
        <FeatureRow key={feature.eyebrow} feature={feature} theme={theme} />
      ))}
    </section>
  )
}
