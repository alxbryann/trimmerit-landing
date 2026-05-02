'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Abra la app.',
    text: 'Cree su perfil en 5 minutos: nombre, servicios y horarios. Sin tutoriales ni vueltas. Así de chimba.',
  },
  {
    num: '02',
    title: 'Comparta su link.',
    text: 'Un solo link para todo. Mándelo por WhatsApp o póngalo en el Instagram. Sus clientes ven disponibilidad en vivo y agendan solos, sin llamarle.',
  },
  {
    num: '03',
    title: 'Agenda llena.',
    text: 'Usted recibe la notificación y su cliente el recordatorio 24 horas antes. Cero rajados, cero llamadas, cero WhatsApps para cuadrar.',
  },
]

export default function Steps() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="steps"
      style={{
        padding: '100px 40px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">Cómo funciona</div>
      </motion.div>

      <div
        ref={ref}
        className="steps-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--border)',
        }}
      >
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            className="step-card"
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: i * 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              padding: '48px 36px',
              borderRight: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono), "DM Mono", monospace',
                fontSize: '9.5px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              {step.num}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-playfair), "Playfair Display", serif',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '26px',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--fg)',
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--muted)',
              }}
            >
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
