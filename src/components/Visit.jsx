import { CAFE } from '../data'

export default function Visit() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${CAFE.lat},${CAFE.lng}`
  const embed = `https://maps.google.com/maps?q=${CAFE.lat},${CAFE.lng}&z=17&output=embed`

  return (
    <section className="section" id="visit">
      <div className="section__head">
        <p className="eyebrow">Come Play</p>
        <h2>Visit Us</h2>
      </div>

      <div className="visit">
        <div className="visit__info">
          <div>
            <h4>📍 Address</h4>
            <p>{CAFE.address}</p>
          </div>
          <div>
            <h4>🕒 Hours</h4>
            <p>{CAFE.hours}</p>
          </div>
          <div>
            <h4>📞 Call / WhatsApp</h4>
            <p>
              <a href={`tel:+${CAFE.phone}`}>{CAFE.phoneDisplay}</a>
            </p>
          </div>
          <a href={mapsLink} target="_blank" rel="noreferrer" className="btn">
            Get Directions
          </a>
        </div>

        <iframe
          className="visit__map"
          title="Infinite Gaming Cafe location"
          src={embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
