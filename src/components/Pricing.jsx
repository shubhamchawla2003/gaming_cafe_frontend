import { PRICING } from '../data'

export default function Pricing() {
  return (
    <section className="section section--alt" id="pricing">
      <div className="section__head">
        <p className="eyebrow">No Hidden Charges</p>
        <h2>Pricing</h2>
        <p>Ask about group packages and birthday parties.</p>
      </div>

      <div className="pricing">
        {PRICING.map((p) => (
          <div key={p.name} className={`price ${p.featured ? 'price--featured' : ''}`}>
            {p.featured && <span className="price__badge">Most Popular</span>}
            <h3>{p.name}</h3>
            <p className="price__amount">
              ₹{p.price}
              <span>{p.unit}</span>
            </p>
            <ul>
              {p.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <a href="#book" className={`btn ${p.featured ? '' : 'btn--ghost'}`}>
              Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
