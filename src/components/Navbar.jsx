import { useEffect, useState } from 'react'
import InfinityLogo from './InfinityLogo'

const LINKS = [
  ['#zones', 'Zones'],
  ['#pricing', 'Pricing'],
  ['#games', 'Games'],
  ['#book', 'Book'],
  ['#visit', 'Visit'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__brand">
        <InfinityLogo size={44} />
        <span>
          INFINITE <em>GAMING</em>
        </span>
      </a>

      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#book" className="btn btn--small" onClick={() => setOpen(false)}>
          Book a Slot
        </a>
      </nav>
    </header>
  )
}
