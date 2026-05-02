'use client'

import { useState, useEffect } from 'react'

const Logo = () => (
  <svg width="20" height="20" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <line x1="8" y1="8" x2="48" y2="48" stroke="var(--fg)" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="48" y1="8" x2="8" y2="48" stroke="var(--fg)" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="10" cy="10" r="6" stroke="var(--fg)" strokeWidth="2.5" fill="none" />
    <circle cx="46" cy="10" r="6" stroke="var(--fg)" strokeWidth="2.5" fill="none" />
    <circle cx="28" cy="28" r="4.5" fill="var(--gold)" />
  </svg>
)

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export default function Nav() {
  const [theme, setTheme] = useState('dark')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('trimmerit.theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('trimmerit.theme', next)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '60px',
        borderBottom: `1px solid ${scrolled ? 'var(--border2)' : 'var(--border)'}`,
        background: 'color-mix(in srgb, var(--bg) 85%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s, background 0.3s',
      }}
    >
      <div
        className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-[clamp(1.25rem,5vw,3rem)]"
        style={{
          maxWidth: '1280px',
          paddingInline: 'clamp(1.5rem, 5vw, 3rem)',
        }}
      >
      <a
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          textDecoration: 'none',
        }}
      >
        <Logo />
        <span
          style={{
            fontFamily: 'var(--font-playfair), "Playfair Display", serif',
            fontWeight: 800,
            fontStyle: 'italic',
            fontSize: '19px',
            letterSpacing: '-0.04em',
            color: 'var(--fg)',
          }}
        >
          trimmerit<span style={{ color: 'var(--gold)' }}>.</span>
        </span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1px solid var(--border2)',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--muted)',
            cursor: 'pointer',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.color = 'var(--gold)'
            el.style.borderColor = 'var(--gold)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.color = 'var(--muted)'
            el.style.borderColor = 'var(--border2)'
          }}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <a
          href="#pricing"
          style={{
            fontFamily: 'var(--font-mono), "DM Mono", monospace',
            fontSize: '10.5px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            background: 'var(--gold)',
            color: 'var(--bg)',
            padding: '9px 18px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.82' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
        >
          Ver planes
        </a>
      </div>
      </div>
    </nav>
  )
}
