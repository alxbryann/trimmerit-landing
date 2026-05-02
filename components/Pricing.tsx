'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STARTER_FEATURES = [
  { text: 'Agenda digital', strong: 'ilimitada' },
  { text: 'Recordatorios automáticos' },
  { text: 'Hasta ', strong: '50 clientes', after: ' activos' },
  { text: 'Link de reserva público' },
]

const PRO_FEATURES = [
  { strong: 'Puestos y clientes ilimitados' },
  { text: 'Fichas completas por cliente' },
  { strong: 'Programa de sellos', after: ' de fidelización' },
  { text: 'Estadísticas de retención' },
  { text: 'Soporte prioritario por WhatsApp' },
]

interface FeatureItem {
  text?: string
  strong?: string
  after?: string
}

function FeatureList({ items, featured }: { items: FeatureItem[]; featured?: boolean }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '11px',
        marginBottom: '40px',
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            fontSize: '14px',
            lineHeight: 1.5,
            color: featured
              ? 'color-mix(in srgb, var(--bg) 75%, transparent)'
              : 'var(--muted)',
            display: 'flex',
            gap: '10px',
            alignItems: 'baseline',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              color: featured ? 'color-mix(in srgb, var(--bg) 30%, transparent)' : 'var(--gold)',
              fontSize: '12px',
              flexShrink: 0,
              lineHeight: 1.5,
            }}
          >
            —
          </span>
          <span>
            {item.text}
            {item.strong && (
              <strong
                style={{
                  color: featured ? 'var(--bg)' : 'var(--fg)',
                  fontWeight: 500,
                }}
              >
                {item.strong}
              </strong>
            )}
            {item.after}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="pricing"
      style={{
        background: 'var(--bg)',
        padding: '100px 40px',
        transition: 'background 0.3s',
      }}
    >
      <div
        style={{ maxWidth: '800px', margin: '0 auto' }}
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">Planes</div>

          <h2
            style={{
              fontFamily: 'var(--font-playfair), "Playfair Display", serif',
              fontWeight: 800,
              fontStyle: 'italic',
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              lineHeight: 1,
              letterSpacing: '-0.035em',
              color: 'var(--fg)',
              marginBottom: '12px',
            }}
          >
            Claro,
            <br />
            sin malos ratos.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-mono), "DM Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '52px',
            }}
          >
            14 días gratis en cualquier plan · Sin tarjeta de crédito
          </p>
        </motion.div>

        {/* Plans grid */}
        <div
          className="plans-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.45fr',
            border: '1px solid var(--border)',
          }}
        >
          {/* Starter */}
          <motion.div
            className="plan-card"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: '52px 44px',
              borderRight: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono), "DM Mono", monospace',
                fontSize: '9.5px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '28px',
              }}
            >
              Starter
            </div>

            <div
              className="plan-price-val"
              style={{
                fontFamily: 'var(--font-playfair), "Playfair Display", serif',
                fontWeight: 800,
                fontStyle: 'italic',
                fontSize: '72px',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'var(--fg)',
                marginBottom: '4px',
              }}
            >
              Gratis
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono), "DM Mono", monospace',
                fontSize: '9.5px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '36px',
              }}
            >
              Para siempre · 1 puesto
            </div>

            <FeatureList items={STARTER_FEATURES} />

            <a
              href="#"
              style={{
                fontFamily: 'var(--font-mono), "DM Mono", monospace',
                fontSize: '10.5px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '14px 24px',
                textDecoration: 'none',
                background: 'var(--gold)',
                color: 'var(--bg)',
                display: 'inline-block',
                alignSelf: 'flex-start',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.82' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
            >
              Empezar gratis
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            className="plan-card featured plan-shimmer"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: '52px 52px',
              background: 'var(--gold)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono), "DM Mono", monospace',
                fontSize: '9.5px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                opacity: 0.55,
                marginBottom: '28px',
              }}
            >
              Pro
            </div>

            <div
              className="plan-price-val"
              style={{
                fontFamily: 'var(--font-playfair), "Playfair Display", serif',
                fontWeight: 800,
                fontStyle: 'italic',
                fontSize: '88px',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'var(--bg)',
                marginBottom: '4px',
              }}
            >
              $49k
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono), "DM Mono", monospace',
                fontSize: '9.5px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'color-mix(in srgb, var(--bg) 55%, transparent)',
                marginBottom: '36px',
              }}
            >
              COP / mes · Sin límites
            </div>

            <FeatureList items={PRO_FEATURES} featured />

            <a
              href="#"
              style={{
                fontFamily: 'var(--font-mono), "DM Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '14px 24px',
                textDecoration: 'none',
                background: 'var(--bg)',
                color: 'var(--gold)',
                display: 'inline-block',
                alignSelf: 'flex-start',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.82' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
            >
              14 días gratis
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
