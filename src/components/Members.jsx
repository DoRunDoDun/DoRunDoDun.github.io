import { members } from '../data/siteData'
import SectionHeader from './SectionHeader'
import { useBreakpoint } from '../hooks/useBreakpoint'

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)

  return (
    <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #1d3f6e 0%, #2d5f9e 100%)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.4rem',
      fontWeight: 700,
      margin: '0 auto 1.5rem',
      boxShadow: '0 4px 14px rgba(29, 63, 110, 0.3)',
      flexShrink: 0,
    }}>
      {initials}
    </div>
  )
}

function MemberCard({ member, delay }) {
  return (
    <div
      className={`fade-up fade-up-${delay}`}
      style={{
        borderRadius: 'var(--radius)',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
        boxShadow: 'var(--shadow)',
        textAlign: 'center',
        transition: 'transform 0.25s, box-shadow 0.25s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-md)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = 'var(--shadow)'
      }}
    >
      <div style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, var(--color-secondary) 0%, #f4a44a 100%)' }} />

      <div style={{ padding: '2rem 1.75rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        {member.avatar
          ? <img src={member.avatar} alt={member.name} style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 1.5rem', objectFit: 'cover', boxShadow: '0 4px 14px rgba(0,0,0,0.12)' }} />
          : <Avatar name={member.name} />
        }

        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.4rem' }}>
          {member.name}
        </h3>

        <span style={{
          display: 'inline-block',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          color: 'var(--color-secondary)',
          backgroundColor: 'var(--color-secondary-light)',
          padding: '0.2rem 0.75rem',
          borderRadius: '100px',
          marginBottom: '1rem',
          textTransform: 'uppercase',
        }}>
          {member.role}
        </span>

        <p style={{
          color: 'var(--color-text-muted)',
          fontSize: '0.9rem',
          lineHeight: 1.75,
          marginBottom: '1.75rem',
          flex: 1,
          width: '100%',
          textAlign: 'center',
          wordBreak: 'keep-all',
          overflowWrap: 'break-word',
          whiteSpace: 'normal',
        }}>
          {member.bio}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', width: '100%' }}>
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.45rem 1.1rem',
                border: '1.5px solid var(--color-accent)',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-accent)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--color-accent)'
              }}
            >
              GitHub
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              style={{
                padding: '0.45rem 1.1rem',
                border: '1.5px solid var(--color-border)',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-text-muted)'
                e.currentTarget.style.color = 'var(--color-text)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text-muted)'
              }}
            >
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  const { isMobile } = useBreakpoint()

  return (
    <section id="members" style={{ padding: isMobile ? '5rem 1.25rem' : '7rem 2rem', backgroundColor: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          tag="Our Team"
          title="팀원 소개"
          subtitle="두런두런 모여, 함께 소통하고 실행하는 사람들입니다."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100%' : '240px'}, 1fr))`,
          gap: '1.25rem',
          marginTop: '3.5rem',
        }}>
          {members.map((member, i) => (
            <MemberCard key={i} member={member} delay={Math.min(i + 1, 5)} />
          ))}
        </div>
      </div>
    </section>
  )
}
