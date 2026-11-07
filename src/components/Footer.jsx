import InfinityLogo from './InfinityLogo'
import { CAFE } from '../data'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <InfinityLogo size={56} />
        <span>{CAFE.name}</span>
      </div>
      <p>{CAFE.tagline}</p>
      <div className="footer__links">
        <a href={CAFE.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={`https://wa.me/${CAFE.phone}`} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="#visit">Location</a>
      </div>
      <small>© {YEAR} {CAFE.name}. All rights reserved.</small>
    </footer>
  )
}
