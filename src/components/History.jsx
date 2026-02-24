import { history } from '../data/siteData'
import SectionHeader from './SectionHeader'

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0

  return (
    <div
      className={`fade-up fade-up-${Math.min(index + 1, 5)}`}
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        paddingLeft: isLeft ? '0' : 'calc(50% + 2rem)',
        paddingRight: isLeft ? 'calc(50% + 2rem)' : '0',
        marginBottom: '2.5rem',
        position: 'relative',
      }}
    >
      {/* 카드 */}
      <div
        style={{
          width: '100%',
          maxWidth: '340px',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg)',
          boxShadow: 'var(--shadow)',
          overflow: 'hidden',
          transition: 'transform 0.25s, box-shadow 0.25s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = 'var(--shadow-md)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = 'var(--shadow)'
        }}
      >
        {/* 상단 컬러 보더 */}
        <div style={{
          height: '4px',
          background: item.isCurrent
            ? 'linear-gradient(90deg, var(--color-secondary), #f4a44a)'
            : 'linear-gradient(90deg, var(--color-accent), #2d5f9e)',
        }} />

        <div style={{ padding: '1.5rem 1.75rem' }}>
          {/* 날짜 */}
          <span style={{
            display: 'inline-block',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: item.isCurrent ? 'var(--color-secondary)' : 'var(--color-accent)',
            backgroundColor: item.isCurrent ? 'var(--color-secondary-light)' : 'var(--color-accent-light)',
            padding: '0.2rem 0.65rem',
            borderRadius: '100px',
            marginBottom: '0.85rem',
          }}>
            {item.date}
          </span>

          <h3 style={{
            fontWeight: 800,
            fontSize: '1.05rem',
            color: 'var(--color-text)',
            marginBottom: '0.6rem',
            letterSpacing: '-0.01em',
          }}>
            {item.title}
          </h3>

          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.875rem',
            lineHeight: 1.75,
          }}>
            {item.description}
          </p>
        </div>
      </div>

      {/* 중앙 도트 */}
      <div style={{
        position: 'absolute',
        left: 'calc(50% - 10px)',
        top: '1.75rem',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: item.isCurrent ? 'var(--color-secondary)' : 'var(--color-accent)',
        border: `3px solid ${item.isCurrent ? 'var(--color-secondary-light)' : 'var(--color-accent-light)'}`,
        boxShadow: item.isCurrent
          ? '0 0 0 4px rgba(232, 132, 26, 0.2)'
          : '0 0 0 4px rgba(29, 63, 110, 0.12)',
        zIndex: 1,
      }} />
    </div>
  )
}

export default function History() {
  return (
    <section id="history" style={{ padding: '7rem 2rem', backgroundColor: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          tag="Our Journey"
          title="팀 히스토리"
          subtitle="함께 이야기하고, 함께 실행해온 발자취입니다."
        />

        {/* 타임라인 */}
        <div style={{ position: 'relative', marginTop: '4rem' }}>
          {/* 중앙 세로선 */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '1.5px',
            background: 'linear-gradient(to bottom, var(--color-accent-light), var(--color-border), var(--color-secondary-light))',
            transform: 'translateX(-50%)',
          }} />

          {history.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
