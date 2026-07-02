import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { Plate } from "../components/ui/Plate";
import { menu } from "../data/menu";

export function Menu() {
  return (
    <>
      <MenuHero />
      <CategoryFilterBar />
      {menu.map((category) => (
        <CategorySection key={category.id} category={menu.find((c) => c.id === category.id)!} />
      ))}
      <ReservationStrip />
    </>
  );
}

function MenuHero() {
  return (
    <section className="plate-dark grain-overlay pt-40 pb-24 md:pt-48 md:pb-28">
      <div className="container-page px-6 md:px-10">
        <Reveal>
          <p className="eyebrow-light mb-5">Cafe Elio</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-5xl md:text-7xl text-bg">Our Menu</h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-md font-light text-bg/70">
            Chinese, continental & cafe favourites — something for every table.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CategoryFilterBar() {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-0 z-30 overflow-x-auto border-b hairline bg-bg/95 backdrop-blur-md"
    >
      <ul className="container-page flex gap-2 whitespace-nowrap px-6 py-4 md:px-10">
        {menu.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.id}`}
              className="focus-ring inline-block rounded-full border hairline px-5 py-2 text-sm tracking-[0.03em] text-dark/70 transition-colors hover:border-primary hover:text-primary"
            >
              {category.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const categoryImages: Record<string, { src: string; focus?: string }> = {
  appetizers: { src: "/images/chicken-tenders-sauces.jpg" },
  sides: { src: "/images/chicken-lollipop.jpg" },
  "momos-pasta": { src: "/images/momos-foil-basket.jpg" },
  combos: { src: "/images/crispy-chicken-card.jpg" },
  beverages: { src: "/images/mocktail-flatlay.jpg" },
  // "sandwiches-burgers" and "dessert" have no matching photo yet — placeholder stays.
};

function CategorySection({ category }: { category: (typeof menu)[number] }) {
  const image = categoryImages[category.id];
  return (
    <section id={category.id} className="scroll-mt-20 border-b hairline">
      <div className="container-page px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
          <div>
            <Reveal>
              <Plate
                label={category.label}
                ratio="aspect-square"
                src={image?.src}
                alt={category.label + " at Cafe Elio"}
                focus={image?.focus}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl">{category.label}</h2>
              <p className="mt-2 font-light text-dark/60">{category.tagline}</p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {category.items.map((item) => (
              <StaggerItem key={item.name}>
                <div className="flex items-start justify-between gap-4 border-b hairline pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block h-2 w-2 rounded-full ${item.diet === "veg" ? "bg-green-700" : "bg-primary"}`}
                        aria-hidden="true"
                      />
                      <span className="text-xs uppercase tracking-[0.08em] text-dark/40">
                        {item.diet === "veg" ? "Veg" : "Non-Veg"}
                        {item.spicy ? " · Spicy" : ""}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-lg">{item.name}</h3>
                    <p className="mt-1 text-sm font-light text-dark/55 leading-snug">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 pt-1 font-serif text-lg text-primary">
                    {item.price > 0 ? `₹${item.price}` : "MP"}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function ReservationStrip() {
  return (
    <section className="surface-dark grain-overlay">
      <div className="container-page flex flex-col items-center gap-8 px-6 py-24 text-center md:px-10">
        <h2 className="text-4xl md:text-5xl text-bg">Craving Something Already?</h2>
        <Button to="/reservation">Reserve a Table</Button>
      </div>
    </section>
  );
}
