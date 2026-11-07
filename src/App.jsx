import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Zones from './components/Zones'
import Pricing from './components/Pricing'
import Games from './components/Games'
import Booking from './components/Booking'
import Visit from './components/Visit'
import Footer from './components/Footer'
import { CAFE } from './data'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Zones />
        <Pricing />
        <Games />
        <Booking />
        <Visit />
      </main>
      <Footer />
      <a
        className="wa-float"
        href={`https://wa.me/${CAFE.phone}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  )
}
