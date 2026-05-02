'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  target: number
  suffix: string
  label: string
  isActive: boolean
  duration?: number
}

function Counter({ target, suffix, label, isActive, duration = 1800 }: CounterProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isActive) return
    const startTime = performance.now()
    let raf: number

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isActive, target, duration])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", serif',
          fontWeight: 800,
          fontStyle: 'italic',
          fontSize: '52px',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'var(--bg)',
        }}
      >
        {value}
        <span style={{ fontSize: '0.55em' }}>{suffix}</span>
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono), "DM Mono", monospace',
          fontSize: '9px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'color-mix(in srgb, var(--bg) 65%, transparent)',
          textAlign: 'center',
          lineHeight: 1.5,
        }}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  )
}

function Separator() {
  return (
    <div
      className="band-sep"
      aria-hidden="true"
      style={{
        width: '1px',
        height: '48px',
        background: 'color-mix(in srgb, var(--bg) 20%, transparent)',
        flexShrink: 0,
      }}
    />
  )
}

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div
      ref={ref}
      style={{ background: 'var(--gold)' }}
    >
      <div
        className="band-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '64px',
          padding: '52px 40px',
          overflow: 'hidden',
        }}
      >
        <Counter
          target={500}
          suffix="+"
          label="negocios activos<br/>en Colombia"
          isActive={isInView}
        />
        <Separator />
        <Counter
          target={3}
          suffix="h"
          label="ahorradas al día<br/>en coordinación"
          isActive={isInView}
          duration={1200}
        />
        <Separator />
        <Counter
          target={2}
          suffix=""
          label="planes de pago<br/>precios claros"
          isActive={isInView}
          duration={1400}
        />
      </div>
    </div>
  )
}
