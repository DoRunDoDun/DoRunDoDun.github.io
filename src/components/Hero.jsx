import { teamInfo, members, projects } from '../data/siteData'
import logoSrc from '/logo.png'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Hero() {
  const { isMobile, isTablet } = useBreakpoint()

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: isMobile ? '6rem 1.25rem 5rem' : '7rem 2rem 6rem',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f7f9fc',
        backgroundImage: 'radial-gradient(rgba(29, 63, 110, 0.055) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
      }}
    >
      {/* 오렌지 글로우 - 우측 상단 */}
      <div style={{
        position: 'absolute',
        width: isMobile ? '400px' : '700px',
        height: isMobile ? '400px' : '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232, 132, 26, 0.09) 0%, transparent 65%)',
        top: isMobile ? '-150px' : '-250px',
        right: isMobile ? '-150px' : '-180px',
        pointerEvents: 'none',
      }} />

      {/* 네이비 글로우 - 좌측 하단 */}
      <div style={{
        position: 'absolute',
        width: isMobile ? '300px' : '600px',
        height: isMobile ? '300px' : '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(29, 63, 110, 0.07) 0%, transparent 65%)',
        bottom: isMobile ? '-100px' : '-200px',
        left: isMobile ? '-100px' : '-150px',
        pointerEvents: 'none',
      }} />

      {/* 초대형 워터마크 */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(60px, 17vw, 200px)',
        fontWeight: 900,
        color: 'var(--color-accent)',
        opacity: 0.032,
        letterSpacing: '-0.04em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
      }}>
        DoRunDoDun
      </div>

      {/* 컨텐츠 */}
      <div style={{ maxWidth: '780px', position: 'relative', zIndex: 1, width: '100%' }}>

        {/* 로고 + 동심원 링 */}
        <div className="fade-up fade-up-1" style={{ position: 'relative', display: 'inline-block', marginBottom: isMobile ? '2rem' : '2.75rem' }}>
          {!isMobile && [220, 170, 130].map((size, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              border: `1px solid rgba(29, 63, 110, ${0.07 - i * 0.02})`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }} />
          ))}
          <img
            src={logoSrc}
            alt="DoRunDoDun"
            style={{ height: isMobile ? '72px' : '100px', width: 'auto', position: 'relative', zIndex: 1 }}
          />
        </div>

        {/* 슬로건 - 양쪽 라인 */}
        <div
          className="fade-up fade-up-2"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}
        >
          <div style={{ flex: 1, maxWidth: isMobile ? '40px' : '72px', height: '1.5px', background: 'linear-gradient(to left, var(--color-secondary), transparent)', opacity: 0.7 }} />
          <span style={{
            fontSize: isMobile ? '0.7rem' : '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            color: 'var(--color-secondary)',
            whiteSpace: 'nowrap',
          }}>
            {teamInfo.slogan}
          </span>
          <div style={{ flex: 1, maxWidth: isMobile ? '40px' : '72px', height: '1.5px', background: 'linear-gradient(to right, var(--color-secondary), transparent)', opacity: 0.7 }} />
        </div>

        {/* 설명 */}
        <p
          className="fade-up fade-up-3"
          style={{
            fontSize: isMobile ? '0.95rem' : '1.08rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.9,
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}
        >
          {teamInfo.description.split('\n').map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{line}</span>
          ))}
        </p>

        {/* CTA 버튼 */}
        <div
          className="fade-up fade-up-4"
          style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#members"
            style={{
              padding: isMobile ? '0.8rem 1.75rem' : '0.9rem 2.25rem',
              backgroundColor: 'var(--color-secondary)',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.92rem',
              transition: 'all 0.2s',
              boxShadow: '0 4px 18px rgba(232, 132, 26, 0.4)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-secondary-hover)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(232, 132, 26, 0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-secondary)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(232, 132, 26, 0.4)'
            }}
          >
            팀원 보기
          </a>
          <a
            href={teamInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: isMobile ? '0.8rem 1.75rem' : '0.9rem 2.25rem',
              border: '2px solid var(--color-accent)',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.92rem',
              color: 'var(--color-accent)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(29, 63, 110, 0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-accent)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            GitHub
          </a>
        </div>

        {/* 스탯 카드 */}
        <div
          className="fade-up fade-up-5"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: isMobile ? '3rem' : '4.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: `${members.length}명`, label: 'Team Members' },
            { value: `${projects.length}+`, label: 'Projects' },
          ].map(stat => (
            <div
              key={stat.label}
              style={{
                padding: isMobile ? '1rem 1.75rem' : '1.25rem 2.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                borderRadius: '14px',
                boxShadow: '0 4px 16px rgba(15, 31, 56, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
                textAlign: 'center',
                minWidth: isMobile ? '120px' : '140px',
              }}
            >
              <div style={{
                fontSize: isMobile ? '1.75rem' : '2.1rem',
                fontWeight: 800,
                color: 'var(--color-accent)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '0.4rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          bottom: '2.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: 0.4,
          animation: 'fadeUp 1s ease 1.2s both',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
            Scroll
          </div>
          <div style={{
            width: '1.5px',
            height: '32px',
            background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
            borderRadius: '2px',
            animation: 'scrollPulse 1.8s ease-in-out infinite',
          }} />
        </div>
      )}
    </section>
  )
}
