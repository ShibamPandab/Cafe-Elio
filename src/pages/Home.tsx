import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Plate } from "../components/ui/Plate";
import { signaturePicks, pillars, menuPreview, hours, address } from "../data/content";
import { reviews } from "../data/reviews";

export function Home() {
  return (
    <>
      <Hero />
      <SignaturePicks />
      <BrandStory />
      <WhyElio />
      <MenuPreview />
      <Experience />
      <Reviews />
      <ReservationBand />
      <LocationHours />
      <Moments />
      <Newsletter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden grain-overlay">
      <img
        src="/images/graffiti-blue-laser.jpg"
        alt="Cafe Elio's graffiti-wall lounge lit in blue"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />
      <div className="container-page relative z-10 w-full px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow-light mb-6"
        >
          Jadavpur, Kolkata
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-6xl leading-[0.98] text-bg text-balance md:text-8xl"
        >
          Good Food.
          <br />
          Better Vibe.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-lg font-light text-bg/70"
        >
          Chinese, continental & cafe classics in a room built for long evenings — Jadavpur's
          favourite corner for friends, dates, and everything in between.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-col gap-4 sm:flex-row"
        >
          <Button to="/contact">Reserve a Table</Button>
          <Button to="/menu" variant="outline-light">
            View Menu
          </Button>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <span className="h-10 w-px bg-bg/40" />
      </motion.div>
    </section>
  );
}

function SignaturePicks() {
  return (
    <section className="container-page px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="Fan Favourites" title="What Everyone Orders" subtitle="The four dishes that keep people coming back." />
      <Stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {signaturePicks.map((pick) => (
          <StaggerItem key={pick.name}>
            <a href={pick.anchor} className="focus-ring group block">
              <Plate
                label={pick.name}
                ratio="aspect-3/4"
                src={pick.image}
                alt={pick.name}
                focus={pick.focus}
                className="transition-transform duration-500 group-hover:-translate-y-2"
              />
              <h3 className="mt-5 text-2xl">{pick.name}</h3>
              <p className="mt-2 text-sm font-light text-dark/60">{pick.description}</p>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.2}>
        <div className="mt-14 text-center">
          <Button to="/menu" variant="ghost">
            See Full Menu →
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="surface-dark grain-overlay">
      <div className="container-page grid grid-cols-1 items-center gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-36">
        <Reveal>
          <Plate
            dark
            label="Cafe Elio — the room"
            ratio="aspect-square"
            src="/images/leather-booth-lounge.jpg"
            alt="Leather booth seating and wall art at Cafe Elio"
            focus="center 30%"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow-light mb-6">About Cafe Elio</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl md:text-5xl text-bg leading-[1.05]">
              A neighbourhood cafe built for long conversations.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg font-light text-bg/60 leading-relaxed">
              Cafe Elio started with one idea: good food and a room worth staying in shouldn't
              cost a fortune. We mix Chinese, continental, and cafe classics with warm lighting,
              music people actually notice, and a pool table for when dinner turns into the whole
              evening.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9">
              <Button to="/about" variant="outline-light">
                Our Story →
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyElio() {
  return (
    <section className="container-page px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="The Difference" title="Why People Keep Coming Back" align="center" className="mx-auto" />
      <Stagger className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title} className="text-center">
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border hairline text-accent">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <h3 className="text-xl">{pillar.title}</h3>
            <p className="mt-3 text-sm font-light text-dark/60 leading-relaxed">{pillar.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function MenuPreview() {
  return (
    <section className="bg-bg-raised">
      <div className="container-page px-6 py-28 md:px-10 md:py-36">
        <SectionHeading eyebrow="The Menu" title="Something for Every Craving" subtitle="Appetizers to dessert, all under one roof." />
        <Stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuPreview.map((item) => (
            <StaggerItem key={item.label}>
              <a href={item.anchor} className="focus-ring group block border hairline p-8 transition-colors duration-300 hover:border-primary">
                <h3 className="text-2xl">{item.label}</h3>
                <p className="mt-2 text-sm font-light text-dark/60">{item.note}</p>
                <span className="mt-6 inline-block text-xs tracking-[0.1em] uppercase text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore →
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <Button to="/menu">Explore Full Menu →</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="surface-dark grain-overlay">
      <div className="container-page px-6 py-28 md:px-10 md:py-36">
        <SectionHeading
          light
          eyebrow="The Experience"
          title="More Than Just a Meal"
          subtitle="Blue-lit corners, a wall that tells its own story, and a pool table for the nights that run long."
        />
        <Stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Mood Lighting", src: "/images/booth-mural-nook.jpg", focus: "center" },
            { label: "Graffiti Wall", src: "/images/graffiti-wall-dark.jpg", focus: "center" },
            { label: "Pool Table", src: "/images/pool-table-wide.jpg", focus: "center 40%" },
            { label: "Fairy-Lit Ceiling", src: "/images/graffiti-ceiling-bright.jpg", focus: "top" },
          ].map((tile, i) => (
            <StaggerItem key={tile.label} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <Plate
                dark
                label={tile.label}
                ratio={i === 0 ? "aspect-square" : "aspect-4/5"}
                src={tile.src}
                alt={tile.label + " at Cafe Elio"}
                focus={tile.focus}
              />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <Button to="/gallery" variant="outline-light">
              See the Space →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Reviews() {
  const [active, setActive] = useState(0);
  return (
    <section className="container-page px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="Word on the Street" title="Don't Just Take Our Word For It" subtitle="Real reviews from Google." align="center" className="mx-auto" />
      <div className="mx-auto mt-16 max-w-3xl">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="mb-6 flex justify-center gap-1 text-accent" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-serif leading-snug text-balance">
            "{reviews[active].quote}"
          </p>
          <p className="mt-8 text-sm tracking-[0.05em] text-dark/50">
            {reviews[active].name} · {reviews[active].role}
          </p>
        </motion.div>
        <div className="mt-10 flex justify-center gap-3">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show review from ${r.name}`}
              aria-current={active === i}
              className={`focus-ring h-1.5 w-8 transition-colors ${active === i ? "bg-primary" : "bg-dark/15"}`}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="ghost" href="https://google.com/maps">
            Read More Reviews on Google →
          </Button>
        </div>
      </div>
    </section>
  );
}

function ReservationBand() {
  return (
    <section className="plate-dark grain-overlay">
      <div className="container-page px-6 py-28 text-center md:px-10 md:py-32">
        <Reveal>
          <h2 className="text-5xl md:text-6xl text-bg">Reserve Your Evening</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md font-light text-bg/70">
            Evenings fill up fast — especially with the pool table in play. Call ahead, or
            reach out and we'll have a table waiting.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact">Reserve a Table</Button>
            <Button href={address.phoneHref} variant="outline-light">
              Call Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LocationHours() {
  return (
    <section className="container-page px-6 py-28 md:px-10 md:py-36">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="aspect-4/3 border hairline overflow-hidden">
            <iframe
              title="Cafe Elio location on Google Maps"
              src={address.mapsEmbedSrc}
              className="h-full w-full grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Find Us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl md:text-5xl">Jadavpur, Kolkata.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 space-y-5 font-light text-dark/70">
              <p>{address.line1}, {address.line2}</p>
              <p>{hours}</p>
              <p>{address.phone}</p>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={address.mapsHref}>Get Directions</Button>
              <Button href={address.phoneHref} variant="outline">
                Call Now
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const moments = [
  { src: "/images/mocktails-purple-mood.jpg", alt: "Mocktails under blue mood lighting" },
  { src: "/images/cappuccino-cup.jpg", alt: "Cappuccino at Cafe Elio" },
  { src: "/images/quirky-wall-prints.jpg", alt: "Quirky framed wall art at Cafe Elio" },
  { src: "/images/big-ben-painting.jpg", alt: "Colourful canvas art on the wall" },
  { src: "/images/crispy-chicken-card.jpg", alt: "Crispy chicken platter with the Cafe Elio card" },
  { src: "/images/pool-table-dark.jpg", alt: "Pool table in moody lighting" },
  { src: "/images/leather-booth-lounge.jpg", alt: "Leather booth seating nook" },
  { src: "/images/birthday-balloons.jpg", alt: "A birthday celebration at Cafe Elio" },
];

function Moments() {
  return (
    <section className="bg-bg-raised">
      <div className="container-page px-6 py-28 md:px-10 md:py-32">
        <SectionHeading eyebrow="Moments" title="Moments at Café Elio" subtitle="New dishes, evenings, and behind-the-counter moments — no filter required." align="center" className="mx-auto" />
        <Stagger className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {moments.map((moment) => (
            <StaggerItem key={moment.src}>
              <Plate
                ratio="aspect-square"
                src={moment.src}
                alt={moment.alt}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-12 text-center">
          <Button href={address.instagram} variant="ghost">
            Follow on Instagram →
          </Button>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  return (
    <section className="surface-dark">
      <div className="container-page px-6 py-24 md:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl md:text-4xl text-bg">Stay in the Loop</h2>
          <p className="mt-4 font-light text-bg/60">
            New dishes, evenings, and the occasional offer. No spam.
          </p>
          {status === "idle" ? (
            <form
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("success");
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@email.com"
                className="focus-ring flex-1 border border-bg/25 bg-transparent px-5 py-4 text-bg placeholder:text-bg/40"
              />
              <button
                type="submit"
                className="focus-ring bg-accent px-8 py-4 text-sm uppercase tracking-[0.08em] text-dark hover:bg-bg transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              aria-live="polite"
              className="mt-9 text-accent"
            >
              You're in. Welcome to Cafe Elio.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
