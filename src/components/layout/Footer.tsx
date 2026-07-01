import { Link } from "react-router-dom";
import { address, hours } from "../../data/content";

export function Footer() {
  return (
    <footer role="contentinfo" className="surface-dark grain-overlay pt-24 pb-10">
      <div className="container-page px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl text-primary" style={{ fontFamily: "var(--font-script)" }}>
                Cafe
              </span>
              <span className="text-2xl tracking-[0.06em] text-accent" style={{ fontFamily: "var(--font-wordmark)" }}>
                Elio
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm font-light text-bg/60 leading-relaxed">
              A neighbourhood cafe & lounge in Jadavpur — good food, better vibe.
            </p>
            <div className="mt-8 flex gap-5 text-sm tracking-[0.05em] text-bg/70">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Follow Cafe Elio on Instagram" className="focus-ring hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Follow Cafe Elio on Facebook" className="focus-ring hover:text-accent transition-colors">
                Facebook
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" aria-label="Message Cafe Elio on WhatsApp" className="focus-ring hover:text-accent transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          <nav aria-label="Explore">
            <p className="eyebrow-light mb-5">Explore</p>
            <ul className="space-y-3 text-sm font-light text-bg/70">
              <li><Link to="/" className="focus-ring hover:text-bg transition-colors">Home</Link></li>
              <li><Link to="/menu" className="focus-ring hover:text-bg transition-colors">Menu</Link></li>
              <li><Link to="/about" className="focus-ring hover:text-bg transition-colors">About</Link></li>
              <li><Link to="/gallery" className="focus-ring hover:text-bg transition-colors">Gallery</Link></li>
              <li><Link to="/events" className="focus-ring hover:text-bg transition-colors">Events</Link></li>
            </ul>
          </nav>

          <nav aria-label="Support">
            <p className="eyebrow-light mb-5">Support</p>
            <ul className="space-y-3 text-sm font-light text-bg/70">
              <li><Link to="/faq" className="focus-ring hover:text-bg transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="focus-ring hover:text-bg transition-colors">Contact</Link></li>
              <li><Link to="/reservation" className="focus-ring hover:text-bg transition-colors">Reservation</Link></li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow-light mb-5">Visit Us</p>
            <address className="not-italic text-sm font-light text-bg/70 leading-relaxed">
              {address.line1}<br />
              {address.line2}<br />
              {address.phone}<br />
              {hours}
            </address>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-4 inline-block text-sm tracking-[0.05em] text-accent hover:text-bg transition-colors"
            >
              Get Directions →
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t hairline-light pt-8 text-xs font-light text-bg/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Cafe Elio. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
