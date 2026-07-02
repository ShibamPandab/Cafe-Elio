import type { ReactNode } from "react";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import {
  PhoneIcon,
  WhatsAppIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
} from "../components/ui/Icons";
import { address, hours } from "../data/content";

export function Contact() {
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
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md font-light text-bg/70">
              Call, WhatsApp, or drop by — we'll have a table waiting.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={address.phoneHref}>
                <PhoneIcon className="h-4 w-4" />
                Call Now
              </Button>
              <Button href={address.whatsappHref} variant="outline-light">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {/* Direct contact panel */}
          <Reveal>
            <div className="border hairline p-8 md:p-10 h-full">
              <p className="eyebrow mb-8">Reach Us Directly</p>

              <div className="divide-y divide-dark/10">
                <ContactRow
                  icon={<PhoneIcon className="h-[18px] w-[18px]" />}
                  label="Phone"
                  value={address.phone}
                  href={address.phoneHref}
                />
                <ContactRow
                  icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}
                  label="WhatsApp"
                  value="Message us anytime"
                  href={address.whatsappHref}
                  external
                />
                <ContactRow
                  icon={<MailIcon className="h-[18px] w-[18px]" />}
                  label="Email"
                  value={address.email}
                  href={`mailto:${address.email}`}
                />
              </div>

              <p className="eyebrow mt-10 mb-5">Follow Along</p>
              <div className="flex gap-3">
                <a
                  href={address.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow Cafe Elio on Instagram"
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border hairline text-dark/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={address.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow Cafe Elio on Facebook"
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border hairline text-dark/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <FacebookIcon className="h-[18px] w-[18px]" />
                </a>
              </div>

              <div className="mt-10 border-t hairline pt-10">
                <p className="eyebrow mb-5">Visit Us</p>
                <div className="flex gap-3">
                  <MapPinIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
                  <address className="not-italic font-light text-dark/70 leading-relaxed">
                    {address.line1}<br />
                    {address.line2}
                  </address>
                </div>
                <div className="mt-3 flex gap-3">
                  <ClockIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
                  <p className="font-light text-dark/70">{hours}</p>
                </div>

                <div className="mt-6">
                  <Button href={address.mapsHref} variant="outline">
                    Get Directions
                  </Button>
                </div>

                <div className="mt-8 aspect-4/3 border hairline overflow-hidden">
                  <iframe
                    title="Cafe Elio location on Google Maps"
                    src={address.mapsEmbedSrc}
                    className="h-full w-full grayscale-[20%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Message form panel */}
          <Reveal delay={0.1}>
            <div className="border hairline p-8 md:p-10 h-full">
              <p className="eyebrow mb-2">Send a Message</p>
              <p className="mb-8 text-sm font-light text-dark/50">
                Prefer writing it out? We read every note.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-7">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-sm text-dark/70">
                    Name
                  </label>
                  <input
                    id="c-name"
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4 transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-sm text-dark/70">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4 transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="c-type" className="mb-2 block text-sm text-dark/70">
                    Inquiry Type
                  </label>
                  <select
                    id="c-type"
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4 transition-colors focus:border-primary"
                  >
                    <option>General Inquiry</option>
                    <option>Table Booking</option>
                    <option>Birthday Party</option>
                    <option>Private Event</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="mb-2 block text-sm text-dark/70">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    rows={5}
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4 transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <Button type="submit" disabled className="w-full sm:w-auto">
                    Send Message
                  </Button>
                  <p className="mt-4 text-xs font-light leading-relaxed text-dark/45">
                    Frontend Demo — Contact form integration will be connected when the client
                    provides their preferred email or CRM.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="focus-ring group flex items-center gap-4 py-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border hairline text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-bg">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.12em] text-dark/40">{label}</span>
        <span className="block text-lg transition-colors duration-300 group-hover:text-primary">{value}</span>
      </span>
    </a>
  );
}
