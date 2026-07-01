import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Plate } from "../components/ui/Plate";

const values = [
  { title: "Flavour Without Compromise", body: "Indo-Chinese and continental classics, cooked the way they should be — not cut down to save a rupee." },
  { title: "Atmosphere That Lingers", body: "Every table is lit to be remembered, and to be worth staying at long after the plates are cleared." },
  { title: "Prices That Respect Your Evening", body: "No hidden costs, no surprise bill. Just fair pricing for a good night out." },
];

export function About() {
  return (
    <>
      <section className="plate-dark grain-overlay pt-40 pb-28 md:pt-52 md:pb-36">
        <div className="container-page px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow-light mb-5">About Cafe Elio</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto max-w-3xl text-5xl md:text-7xl text-bg text-balance">
              The Story Behind Cafe Elio.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-md font-light text-bg/70">
              Why we built a room worth staying in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page px-6 py-28 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-2xl md:text-3xl font-serif leading-snug text-balance">
              Cafe Elio began as a simple bet — that a neighbourhood cafe could serve genuinely
              good Chinese, continental, and comfort food without the inflated prices or stiff
              formality of the city's bigger names.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-light text-dark/70 leading-relaxed">
              What started as a small corner spot has become a Jadavpur regular's second living
              room — the kind of place you duck into for one drink and stay for three hours,
              a game of pool, and a second round of momos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-raised">
        <div className="container-page px-6 py-28 md:px-10 md:py-36">
          <SectionHeading eyebrow="What We Believe" title="Mission & Values" align="center" className="mx-auto" />
          <Stagger className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title} className="text-center">
                <h3 className="text-2xl">{v.title}</h3>
                <p className="mt-3 font-light text-dark/60 leading-relaxed">{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="surface-dark grain-overlay">
        <div className="container-page px-6 py-28 md:px-10 md:py-36">
          <SectionHeading
            light
            eyebrow="The Space"
            title="Built to Be Worth a Photo"
            subtitle="We lit every corner to be worth staying in — and worth remembering."
          />
          <Stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
            {["Blue-Lit Interior", "Graffiti Wall", "Pool Table Lounge", "Wooden Communal Tables", "Fairy Lights", "Foil-Wrapped Platters"].map((label) => (
              <StaggerItem key={label}>
                <Plate dark label={label} ratio="aspect-4/5" />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <div className="mt-14 text-center">
              <Button to="/gallery" variant="outline-light">
                See the Full Gallery →
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page flex flex-col items-center gap-8 px-6 py-28 text-center md:px-10">
        <h2 className="text-4xl md:text-5xl">Come Sit With Us.</h2>
        <Button to="/reservation">Reserve a Table</Button>
      </section>
    </>
  );
}
