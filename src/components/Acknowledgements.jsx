import { acknowledgements } from '../data/siteData'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Acknowledgements() {
  const { isMobile } = useBreakpoint()

  return (
    <section
      id="acknowledgements"
      aria-labelledby="acknowledgements-title"
      style={{
        padding: isMobile ? '5rem 1.25rem' : '7rem 2rem',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          display: 'inline-block',
          color: 'var(--color-secondary)',
          backgroundColor: 'var(--color-secondary-light)',
          borderRadius: '100px',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          padding: '0.3rem 0.9rem',
          textTransform: 'uppercase',
        }}>
          Thanks to
        </span>

        <h2
          id="acknowledgements-title"
          style={{
            color: 'var(--color-text)',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.25,
            margin: '1rem 0 0.75rem',
          }}
        >
          함께해 주신 분들께 감사드립니다.
        </h2>

        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, margin: '0 auto 2.5rem', maxWidth: '560px' }}>
          DoRunDoDun의 시작과 성장을 함께한 분들의 기여를 기록합니다.
        </p>

        {acknowledgements.map((acknowledgement) => (
          <article
            key={acknowledgement.github}
            style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow)',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '156px minmax(0, 1fr) auto',
              overflow: 'hidden',
              textAlign: 'left',
            }}
          >
            <div style={{
              backgroundColor: 'var(--color-secondary-light)',
              borderBottom: isMobile ? '1px solid rgba(232, 132, 26, 0.18)' : 'none',
              borderRight: isMobile ? 'none' : '1px solid rgba(232, 132, 26, 0.18)',
              padding: isMobile ? '1.2rem 1.4rem' : '1.75rem 1.35rem',
            }}>
              <p style={{ color: 'var(--color-secondary)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', margin: '0 0 0.45rem', textTransform: 'uppercase' }}>
                {acknowledgement.role}
              </p>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                {acknowledgement.name}
              </h3>
            </div>

            <div style={{ minWidth: 0, padding: isMobile ? '1.35rem 1.4rem 1.5rem' : '1.75rem 1.9rem' }}>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'keep-all' }}>
                {acknowledgement.bio}
              </p>
              <div style={{ alignItems: 'baseline', borderTop: '1px solid var(--color-border)', display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginTop: '1.15rem', paddingTop: '1rem' }}>
                <span style={{ color: 'var(--color-secondary)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  기여
                </span>
                <span style={{ color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 600 }}>
                  {acknowledgement.contribution}
                </span>
              </div>
            </div>

            <div style={{
              alignSelf: isMobile ? 'start' : 'center',
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              flexShrink: 0,
              gap: '0.55rem',
              margin: isMobile ? '0 1.4rem 1.4rem' : '0 1.6rem 0 0',
            }}>
              <a
                href={acknowledgement.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1.5px solid var(--color-accent)',
                  borderRadius: '6px',
                  color: 'var(--color-accent)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '0.45rem 1.1rem',
                  textAlign: 'center',
                }}
              >
                GitHub
              </a>
              <a
                href={`mailto:${acknowledgement.email}`}
                style={{
                  border: '1.5px solid var(--color-border)',
                  borderRadius: '6px',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '0.45rem 1.1rem',
                  textAlign: 'center',
                }}
              >
                Email
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
