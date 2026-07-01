import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { address, hours } from "../data/content";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="plate-dark grain-overlay pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="container-page px-6 md:px-10">
          <Reveal>
            <p className="eyebrow-light mb-5">Contact</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl text-bg">Let's Talk.</h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Direct</p>
            <ul className="space-y-4 font-light text-dark/70">
              <li>Phone — {address.phone}</li>
              <li>Email — hello@cafeelio.in</li>
              <li>WhatsApp — Message us anytime</li>
              <li>Instagram — @cafeelio</li>
            </ul>

            <p className="eyebrow mt-12 mb-6">Visit Us</p>
            <address className="not-italic font-light text-dark/70 leading-relaxed">
              {address.line1}<br />
              {address.line2}<br />
              {hours}
            </address>
            <div className="mt-8 aspect-4/3 border hairline flex items-center justify-center bg-bg-raised">
              <p className="eyebrow">Map Embed — Cafe Elio, Jadavpur</p>
            </div>
          </div>

          <div>
            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-3xl">Message received.</h2>
                <p className="mt-4 font-light text-dark/60">
                  We'll get back to you shortly. Thanks for reaching out.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-sm text-dark/70">
                    Name
                  </label>
                  <input id="c-name" required className="focus-ring w-full border hairline bg-transparent px-5 py-4" />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-sm text-dark/70">
                    Email
                  </label>
                  <input id="c-email" type="email" required className="focus-ring w-full border hairline bg-transparent px-5 py-4" />
                </div>
                <div>
                  <label htmlFor="c-type" className="mb-2 block text-sm text-dark/70">
                    Inquiry Type
                  </label>
                  <select id="c-type" className="focus-ring w-full border hairline bg-transparent px-5 py-4">
                    <option>General</option>
                    <option>Feedback</option>
                    <option>Press</option>
                    <option>Vendor</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="mb-2 block text-sm text-dark/70">
                    Message
                  </label>
                  <textarea id="c-message" rows={5} required className="focus-ring w-full border hairline bg-transparent px-5 py-4" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
