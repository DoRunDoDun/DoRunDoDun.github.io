import { useState, useEffect } from 'react'
import logoSrc from '/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      transition: 'all 0.3s',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <a href="#hero">
          <img src={logoSrc} alt="DoRunDoDun" style={{ height: '34px', width: 'auto' }} />
        </a>
      </div>
    </nav>
  )
}
