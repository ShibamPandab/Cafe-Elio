import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";

const offers = [
  { title: "Weekday Combo Deal", note: "Any combo platter + a shake. Valid Monday through Thursday." },
  { title: "Pool Table Happy Hour", note: "Extended table time on weekday evenings, 6–8 PM." },
  { title: "Group Booking Discount", note: "Ask us about parties of 8 or more." },
];

export function Events() {
  return (
    <>
      <section className="plate-dark grain-overlay pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="container-page px-6 md:px-10">
          <Reveal>
            <p className="eyebrow-light mb-5">Events & Offers</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl text-bg">This Week at Cafe Elio.</h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="Current" title="Offers Running Now" />
        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {offers.map((offer) => (
            <StaggerItem key={offer.title}>
              <div className="border hairline p-8 h-full transition-colors hover:border-primary">
                <h3 className="text-xl">{offer.title}</h3>
                <p className="mt-3 font-light text-dark/60">{offer.note}</p>
                <div className="mt-6">
                  <Button to="/reservation" variant="ghost">
                    Reserve for This →
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="surface-dark grain-overlay">
        <div className="container-page flex flex-col items-center gap-6 px-6 py-24 text-center md:px-10">
          <h2 className="text-3xl md:text-4xl text-bg">Nothing scheduled beyond this? The pool table's always open.</h2>
          <Button to="/reservation" variant="outline-light">
            Reserve a Table
          </Button>
        </div>
      </section>
    </>
  );
}
