import { ZONES } from '../data'

export default function Zones() {
  return (
    <section className="section" id="zones">
      <div className="section__head">
        <p className="eyebrow">Different Thrills</p>
        <h2>Our Gaming Zones</h2>
        <p>Same passion, different thrills. Pick your battlefield.</p>
      </div>

      <div className="zones">
        {ZONES.map((z, i) => (
          <article key={z.id} className={`zone zone--${z.color}`}>
            <span className="zone__num">0{i + 1}</span>
            <div className="zone__icon">{z.icon}</div>
            <h3>{z.title}</h3>
            <p>{z.text}</p>
            <ul className="zone__tags">
              {z.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
