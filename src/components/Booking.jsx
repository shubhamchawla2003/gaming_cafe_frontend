import { useState } from 'react'
import { CAFE, ZONES } from '../data'

const today = () => new Date().toLocaleDateString('en-CA')

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    zone: ZONES[0].title,
    date: today(),
    time: '16:00',
    players: 2,
    duration: 1,
  })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const msg =
      `Hi ${CAFE.name}! I'd like to book a slot.\n` +
      `Name: ${form.name}\n` +
      `Zone: ${form.zone}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}\n` +
      `Players: ${form.players}\n` +
      `Duration: ${form.duration} hr`
    window.open(`https://wa.me/${CAFE.phone}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section className="section section--alt" id="book">
      <div className="section__head">
        <p className="eyebrow">Skip the Wait</p>
        <h2>Book a Slot</h2>
        <p>Fill in the details and confirm instantly on WhatsApp.</p>
      </div>

      <form className="booking" onSubmit={submit}>
        <label>
          Your Name
          <input name="name" required value={form.name} onChange={update} placeholder="Player One" />
        </label>

        <label>
          Zone
          <select name="zone" value={form.zone} onChange={update}>
            {ZONES.map((z) => (
              <option key={z.id}>{z.title}</option>
            ))}
          </select>
        </label>

        <label>
          Date
          <input type="date" name="date" min={today()} required value={form.date} onChange={update} />
        </label>

        <label>
          Time
          <input type="time" name="time" required value={form.time} onChange={update} />
        </label>

        <label>
          Players
          <input type="number" name="players" min="1" max="10" value={form.players} onChange={update} />
        </label>

        <label>
          Duration (hours)
          <select name="duration" value={form.duration} onChange={update}>
            {[1, 2, 3, 4].map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="btn booking__submit">
          Confirm on WhatsApp
        </button>
      </form>
    </section>
  )
}
