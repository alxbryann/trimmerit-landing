export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '48px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--border)',
      }}
      className="footer-inner"
    >
      <span
        style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", serif',
          fontWeight: 800,
          fontStyle: 'italic',
          fontSize: '18px',
          letterSpacing: '-0.04em',
          color: 'var(--fg)',
        }}
      >
        trimmerit<span style={{ color: 'var(--gold)' }}>.</span>
      </span>

      <span
        style={{
          fontFamily: 'var(--font-mono), "DM Mono", monospace',
          fontSize: '9.5px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--dim)',
        }}
      >
        © 2026 · Bogotá, Colombia
      </span>
    </footer>
  )
}
