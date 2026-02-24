import Navbar from './components/Navbar'
import FloatNav from './components/FloatNavB'
import Hero from './components/Hero'
import Members from './components/Members'
import Projects from './components/Projects'
import History from './components/History'
import Contact from './components/Contact'
import logoSrc from '/logo.png'

export default function App() {
  return (
    <>
      <FloatNav />
      <main>
        <Hero />
        <History />
        <Members />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        backgroundColor: '#0a1929',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '2.5rem 2rem',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <img src={logoSrc} alt="DoRunDoDun" style={{ height: '28px', width: 'auto', opacity: 0.85 }} />
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} DoRunDoDun. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
