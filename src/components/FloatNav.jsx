import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero',     label: 'Home' },
  { id: 'history',  label: '히스토리' },
  { id: 'members',  label: '팀원' },
  { id: 'projects', label: '프로젝트' },
  { id: 'contact',  label: '연락처' },
]

export default function FloatNav() {
  const [active, setActive]     = useState('hero')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= mid && bottom >= mid) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        position: 'fixed',
        right: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 200,
        /* glassmorphism */
        backgroundColor: 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.9)',
        boxShadow: '0 8px 32px rgba(15, 31, 56, 0.1), 0 2px 8px rgba(15, 31, 56, 0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
        borderRadius: '20px',
        /* 확장 애니메이션 */
        width: expanded ? '152px' : '46px',
        padding: expanded ? '0.65rem 0.875rem 0.65rem 0.75rem' : '0.65rem 0.75rem',
        overflow: 'hidden',
        transition: 'width 0.35s cubic-bezier(0.22, 1, 0.36, 1), padding 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
        cursor: 'default',
      }}
    >
      {sections.map(({ id, label }, idx) => {
        const isActive = active === id

        return (
          <a
            key={id}
            href={`#${id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.45rem 0.4rem',
              borderRadius: '10px',
              backgroundColor: isActive
                ? 'rgba(232, 132, 26, 0.1)'
                : 'transparent',
              transition: 'background-color 0.2s',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              minWidth: 0,
            }}
            onMouseEnter={e => {
              if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(29, 63, 110, 0.06)'
            }}
            onMouseLeave={e => {
              if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {/* 도트 */}
            <div style={{
              position: 'relative',
              width: '10px',
              height: '10px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* 글로우 링 (active) */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(232, 132, 26, 0.18)',
                  pointerEvents: 'none',
                }} />
              )}
              <div style={{
                width: isActive ? '10px' : '6px',
                height: isActive ? '10px' : '6px',
                borderRadius: '50%',
                backgroundColor: isActive
                  ? 'var(--color-secondary)'
                  : 'rgba(100, 116, 139, 0.4)',
                border: isActive
                  ? '2px solid var(--color-secondary)'
                  : '1.5px solid rgba(100, 116, 139, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                flexShrink: 0,
              }} />
            </div>

            {/* 라벨 */}
            <span style={{
              fontSize: '0.78rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-secondary)' : 'var(--color-text-muted)',
              opacity: expanded ? 1 : 0,
              transform: expanded ? 'translateX(0)' : 'translateX(-4px)',
              transition: `opacity 0.25s ${0.05 + idx * 0.04}s, transform 0.25s ${0.05 + idx * 0.04}s`,
              letterSpacing: '0.01em',
              overflow: 'hidden',
            }}>
              {label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
