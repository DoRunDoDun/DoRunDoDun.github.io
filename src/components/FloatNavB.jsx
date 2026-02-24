import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero',     label: 'Home',    num: '01' },
  { id: 'history',  label: '히스토리', num: '02' },
  { id: 'members',  label: '팀원',    num: '03' },
  { id: 'projects', label: '프로젝트', num: '04' },
  { id: 'contact',  label: '연락처',   num: '05' },
]

const HANDLE_W = 40   // 항상 보이는 핸들 너비
const LABEL_W  = 112  // 숨겨진 라벨 영역 너비

export default function FloatNavB() {
  const [active,   setActive]   = useState('hero')
  const [hovering, setHovering] = useState(null)

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
    <nav style={{
      position: 'fixed',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 200,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}>
      {sections.map(({ id, label, num }, idx) => {
        const isActive = active === id
        const isHover  = hovering === id
        const show     = isActive || isHover

        return (
          <a
            key={id}
            href={`#${id}`}
            onMouseEnter={() => setHovering(id)}
            onMouseLeave={() => setHovering(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: `${LABEL_W + HANDLE_W}px`,
              borderRadius: '10px 0 0 10px',
              overflow: 'hidden',
              border: '1px solid',
              borderRight: 'none',
              borderColor: isActive
                ? 'var(--color-accent)'
                : 'rgba(226, 232, 240, 0.9)',
              backgroundColor: isActive
                ? 'var(--color-accent)'
                : 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: isActive
                ? '0 6px 20px rgba(29, 63, 110, 0.28)'
                : isHover
                  ? '0 4px 14px rgba(29, 63, 110, 0.1)'
                  : '0 2px 6px rgba(29, 63, 110, 0.06)',
              /* 슬라이드: 라벨 영역만큼 오른쪽으로 숨김 */
              transform: show
                ? 'translateX(0)'
                : `translateX(${LABEL_W}px)`,
              transition: `transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s, border-color 0.2s, box-shadow 0.2s`,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            {/* 라벨 영역 */}
            <div style={{
              width: `${LABEL_W}px`,
              flexShrink: 0,
              padding: '0 0 0 1.1rem',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: isActive ? '#fff' : 'var(--color-text)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.01em',
                opacity: show ? 1 : 0,
                transition: `opacity 0.2s ${show ? 0.1 : 0}s`,
              }}>
                {label}
              </span>
            </div>

            {/* 핸들 영역 (항상 노출) */}
            <div style={{
              width: `${HANDLE_W}px`,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              padding: '0.7rem 0',
              borderLeft: isActive
                ? '1px solid rgba(255,255,255,0.2)'
                : '1px solid var(--color-border)',
            }}>
              {/* 오렌지 액센트 도트 */}
              <div style={{
                width: isActive ? '6px' : '4px',
                height: isActive ? '6px' : '4px',
                borderRadius: '50%',
                backgroundColor: isActive
                  ? 'var(--color-secondary)'
                  : 'rgba(100, 116, 139, 0.35)',
                boxShadow: isActive
                  ? '0 0 0 3px rgba(232, 132, 26, 0.25)'
                  : 'none',
                transition: 'all 0.25s',
              }} />

              {/* 섹션 번호 */}
              <span style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: isActive
                  ? 'rgba(255,255,255,0.7)'
                  : 'rgba(100, 116, 139, 0.5)',
                lineHeight: 1,
                transition: 'color 0.2s',
              }}>
                {num}
              </span>
            </div>
          </a>
        )
      })}
    </nav>
  )
}
