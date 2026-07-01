import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Accordion } from "../components/ui/Accordion";
import { Button } from "../components/ui/Button";

const categories = [
  {
    label: "General",
    items: [
      { question: "What are your opening hours?", answer: "12:00 PM – 10:00 PM, daily." },
      { question: "Is Cafe Elio family-friendly?", answer: "Yes — the space works for families, friends, and couples alike." },
      { question: "Is there a pool table?", answer: "Yes, available on a first-come basis. Ask staff about availability." },
    ],
  },
  {
    label: "Reservations",
    items: [
      { question: "Do I need a reservation?", answer: "Recommended for evenings and groups of 6 or more." },
      { question: "Can I modify or cancel my reservation?", answer: "Yes, via the confirmation link or by calling us directly." },
    ],
  },
  {
    label: "Menu & Dietary",
    items: [
      { question: "Do you have vegetarian options?", answer: "Yes — clearly marked veg dishes across appetizers, mains, and combos." },
      { question: "Can I see the full menu before arriving?", answer: "Yes, the full menu is available on the Menu page." },
    ],
  },
  {
    label: "Groups & Payment",
    items: [
      { question: "Can you accommodate large groups?", answer: "Yes, please call ahead for parties of 12 or more." },
      { question: "What payment methods do you accept?", answer: "Cash and major cards." },
    ],
  },
];

export function FAQ() {
  return (
    <>
      <section className="plate-dark grain-overlay pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="container-page px-6 md:px-10">
          <Reveal>
            <p className="eyebrow-light mb-5">FAQ</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl text-bg">Questions, Answered.</h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page px-6 py-20 md:px-10 md:py-28">
        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.label}>
              <SectionHeading title={cat.label} className="mb-8" />
              <Accordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="surface-dark grain-overlay">
        <div className="container-page flex flex-col items-center gap-6 px-6 py-24 text-center md:px-10">
          <h2 className="text-3xl md:text-4xl text-bg">Still have questions?</h2>
          <Button to="/contact" variant="outline-light">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
