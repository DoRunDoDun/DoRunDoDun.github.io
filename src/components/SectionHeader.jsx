export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center' }}>
      {tag && (
        <span style={{
          display: 'inline-block',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-secondary)',
          backgroundColor: 'var(--color-secondary-light)',
          padding: '0.3rem 0.9rem',
          borderRadius: '100px',
          marginBottom: '1rem',
        }}>
          {tag}
        </span>
      )}
      <h2 style={{
        fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        color: 'var(--color-accent)',
        marginBottom: '0.75rem',
        lineHeight: 1.15,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          color: 'var(--color-text-muted)',
          fontSize: '1rem',
          maxWidth: '480px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
