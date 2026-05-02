'use client'

import Image from 'next/image'
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

/** Must match public/hero.png so layout aspect and `sizes` stay correct. */
const HERO_IMG = { w: 2540, h: 2988 } as const

/** Stagger copy blocks inside the left column (not a direct child of the root grid container). */
const textStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
}

const proofItems = ['Agenda 24/7', 'Desde $29.900', 'Sin llamadas perdidas']

export default function Hero() {
  return (
    <section
      className="hero-shell"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: 'clamp(1.5rem, 4vh, 3.5rem)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 75% 18%, rgba(196,154,85,0.18), transparent 30%), radial-gradient(circle at 12% 32%, rgba(196,154,85,0.09), transparent 34%), linear-gradient(135deg, color-mix(in srgb, var(--bg2) 58%, transparent), transparent 48%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        className="hero-grid-glow"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 px-[clamp(1.25rem,5vw,3rem)] pt-[calc(4.75rem+env(safe-area-inset-top))] sm:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:gap-x-10 lg:pt-[calc(5rem+env(safe-area-inset-top))] xl:gap-x-16"
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingInline: 'clamp(1.5rem, 5vw, 3rem)',
          paddingTop: 'calc(5.25rem + env(safe-area-inset-top))',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={item}
          className="flex min-w-0 flex-col justify-center lg:pr-0"
        >
        <motion.div
          variants={textStagger}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '680px', minWidth: 0 }}
        >
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

        <motion.h1
          variants={item}
          style={{
            fontFamily: 'var(--font-playfair), "Playfair Display", serif',
            fontWeight: 800,
            fontStyle: 'italic',
            fontSize: 'clamp(52px, 8vw, 108px)',
            lineHeight: 0.9,
            letterSpacing: '-0.045em',
            color: 'var(--fg)',
            marginBottom: '28px',
            maxWidth: '760px',
          }}
        >
          Tu agenda,
          <br />
          siempre
          <br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>llena.</em>
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontSize: 'clamp(16px, 1.55vw, 19px)',
            lineHeight: 1.7,
            color: 'var(--muted)',
            maxWidth: '560px',
            marginBottom: '34px',
            fontWeight: 300,
          }}
        >
          Reservas, equipo y agenda en una experiencia hecha para negocios de belleza
          que quieren verse premium desde el primer contacto.
        </motion.p>

        <motion.div
          variants={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            flexWrap: 'wrap',
            marginBottom: '30px',
          }}
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
              padding: '15px 30px',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
              display: 'inline-block',
              boxShadow: '0 18px 42px -24px var(--gold)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.opacity = '0.9'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }}
          >
            Ver planes
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

        <motion.div
          variants={item}
          className="hero-proof-row"
          aria-label="Beneficios principales"
        >
          {proofItems.map((proof) => (
            <span key={proof}>{proof}</span>
          ))}
        </motion.div>
        </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="hero-visual flex min-h-0 w-full min-w-0 items-center justify-center lg:justify-end"
        >
          <figure
            className="hero-device-stage m-0 w-full max-w-[min(100%,500px)] lg:max-w-[min(100%,min(560px,46vw))]"
            style={{
              position: 'relative',
            }}
          >
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-card hero-card-top" aria-hidden="true">
              <span>Reservas hoy</span>
              <strong>32</strong>
            </div>
            <div className="hero-card hero-card-bottom" aria-hidden="true">
              <span>Próximo turno</span>
              <strong>5:30 PM</strong>
            </div>
            <Image
              src="/hero.png"
              alt="Vistas de la app Trimmerit en el móvil"
              width={HERO_IMG.w}
              height={HERO_IMG.h}
              priority
              sizes="(max-width: 1023px) min(92vw, 460px), (max-width: 1280px) 46vw, 560px"
              className="hero-device-img mx-auto block h-auto w-full"
            />
          </figure>
        </motion.div>
      </motion.div>
    </section>
  )
}
