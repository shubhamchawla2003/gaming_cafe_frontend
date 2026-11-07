import { GAMES } from '../data'

export default function Games() {
  const loop = [...GAMES, ...GAMES]

  return (
    <section className="section" id="games">
      <div className="section__head">
        <p className="eyebrow">Latest Titles</p>
        <h2>Games Library</h2>
        <p>From Los Santos to the football pitch. New titles added regularly.</p>
      </div>

      <div className="marquee" aria-label="Available games">
        <div className="marquee__track">
          {loop.map((g, i) => (
            <span key={i} className="game-chip" aria-hidden={i >= GAMES.length}>
              {g}
            </span>
          ))}
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <span>❄️</span>
          <h4>Fully Air-Conditioned</h4>
          <p>Stay cool through long sessions.</p>
        </div>
        <div className="feature">
          <span>🥤</span>
          <h4>Snacks & Drinks</h4>
          <p>Chips, cold drinks and quick bites.</p>
        </div>
        <div className="feature">
          <span>🎂</span>
          <h4>Birthday Parties</h4>
          <p>Private bookings for your squad.</p>
        </div>
        <div className="feature">
          <span>🏆</span>
          <h4>Tournaments</h4>
          <p>Regular FC, Tekken & COD events.</p>
        </div>
      </div>
    </section>
  )
}
