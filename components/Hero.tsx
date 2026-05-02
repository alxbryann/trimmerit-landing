'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold radial glow — purely atmospheric */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: '700px',
          height: '550px',
          background:
            'radial-gradient(ellipse, rgba(196,154,85,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          padding: '100px 40px 80px',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          style={{
            fontFamily: 'var(--font-mono), "DM Mono", monospace',
            fontSize: '10px',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '28px',
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
          Barberías · Salones · Spas
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={item}
          style={{
            fontFamily: 'var(--font-playfair), "Playfair Display", serif',
            fontWeight: 800,
            fontStyle: 'italic',
            fontSize: 'clamp(54px, 8.5vw, 120px)',
            lineHeight: 0.95,
            letterSpacing: '-0.035em',
            color: 'var(--fg)',
            marginBottom: '32px',
          }}
        >
          Su espacio,
          <br />
          siempre
          <br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>agendado.</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'var(--muted)',
            maxWidth: '520px',
            marginBottom: '44px',
            fontWeight: 300,
          }}
        >
          Trimmerit es la plataforma de reservas para barberías, salones y centros de belleza.
          Sus clientes agendan solos y usted atiende sin afanes ni interrupciones.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
        >
          <a
            href="#pricing"
            style={{
              fontFamily: 'var(--font-mono), "DM Mono", monospace',
              fontSize: '10.5px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: 'var(--gold)',
              color: 'var(--bg)',
              padding: '14px 28px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.82' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
          >
            Empezar gratis
          </a>

          <a
            href="#steps"
            style={{
              fontFamily: 'var(--font-mono), "DM Mono", monospace',
              fontSize: '10.5px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)' }}
          >
            Cómo funciona
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
