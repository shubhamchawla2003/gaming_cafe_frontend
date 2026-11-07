import InfinityLogo from './InfinityLogo'
import { CAFE } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__ceiling" aria-hidden="true">
        <span className="neon-line neon-line--1" />
        <span className="neon-line neon-line--2" />
        <span className="neon-line neon-line--3" />
      </div>

      <div className="hero__content">
        <div className="hero__sign">
          <InfinityLogo size={140} className="hero__logo" />
          <h1>
            INFINITE
            <span>GAMING CAFE</span>
          </h1>
        </div>

        <p className="hero__tagline">{CAFE.tagline}</p>
        <p className="hero__sub">
          PS5 · PC Gaming · RC Racing · Dumping Zone · Off-Road Track
        </p>

        <div className="hero__cta">
          <a href="#book" className="btn">Book Your Slot</a>
          <a href="#zones" className="btn btn--ghost">Explore Zones</a>
        </div>

        <ul className="hero__stats">
          <li><strong>5</strong> Gaming Zones</li>
          <li><strong>PS5</strong> + PC</li>
          <li><strong>7</strong> Days a Week</li>
        </ul>
      </div>
    </section>
  )
}
