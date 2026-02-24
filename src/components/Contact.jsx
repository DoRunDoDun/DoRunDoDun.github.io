import { teamInfo } from '../data/siteData'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '7rem 2rem',
        backgroundColor: 'var(--color-accent)',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 장식 원 */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.07)',
        top: '-200px',
        right: '-100px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.07)',
        bottom: '-100px',
        left: '-50px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-secondary)',
          backgroundColor: 'rgba(232, 132, 26, 0.15)',
          padding: '0.3rem 0.9rem',
          borderRadius: '100px',
          marginBottom: '1.25rem',
        }}>
          Connect
        </span>

        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '1rem',
        }}>
          두런두런, 같이 이야기해요.
        </h2>

        <p style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontSize: '1rem',
          lineHeight: 1.8,
          marginBottom: '3rem',
        }}>
          협업 제안, 피드백, 그 어떤 이야기도 환영합니다.<br />
          먼저 말 걸어주세요, 저희가 실행합니다.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {teamInfo.email && (
            <a
              href={`mailto:${teamInfo.email}`}
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: '#ffffff',
                color: 'var(--color-accent)',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                transition: 'transform 0.15s, box-shadow 0.2s',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.2)'
              }}
            >
              이메일 보내기
            </a>
          )}
          {teamInfo.github && (
            <a
              href={teamInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.9rem 2rem',
                border: '2px solid rgba(255,255,255,0.4)',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#ffffff',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
