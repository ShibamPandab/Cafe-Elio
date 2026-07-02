import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { Plate } from "../components/ui/Plate";

type Category = "All" | "Food" | "Ambience" | "Events";

interface GalleryPhoto {
  label: string;
  category: Exclude<Category, "All">;
  src?: string;
  focus?: string;
}

const photos: GalleryPhoto[] = [
  { label: "Foil-Wrapped Appetizer Platter", category: "Food", src: "/images/momos-foil-basket.jpg" },
  { label: "Peri Peri Fries Basket", category: "Food", src: "/images/fries-and-mojito.jpg", focus: "left" },
  { label: "Garlic Noodle Bowl", category: "Food", src: "/images/chicken-garlic-noodles.jpg" },
  { label: "Strawberry Mojito", category: "Food", src: "/images/fries-and-mojito.jpg", focus: "right" },
  { label: "Grilled Sandwich Stack", category: "Food", src: "/images/sandwich.jpg" },
  { label: "Chicken Lollipop Plate", category: "Food", src: "/images/chicken-lollipop.jpg" },
  { label: "Crispy Chicken Tenders", category: "Food", src: "/images/chicken-tenders-sauces.jpg" },
  { label: "KitKat Shake", category: "Food", src: "/images/cold-desserts.jpg" },
  { label: "Brownie with Ice Cream", category: "Food", src: "/images/brownie-ice-cream.jpg" },
  { label: "Cappuccino", category: "Food", src: "/images/cappuccino-cup.jpg" },
  { label: "Blue-Lit Interior", category: "Ambience", src: "/images/mocktails-purple-mood.jpg" },
  { label: "Graffiti Wall Art", category: "Ambience", src: "/images/graffiti-wall-dark.jpg" },
  { label: "Pool Table Lounge", category: "Ambience", src: "/images/pool-table-wide.jpg", focus: "center 40%" },
  { label: "Fairy-Lit Ceiling Detail", category: "Ambience", src: "/images/graffiti-ceiling-bright.jpg", focus: "top" },
  { label: "Wooden Communal Tables", category: "Ambience", src: "/images/mocktail-flatlay.jpg" },
  { label: "The Entrance", category: "Ambience", src: "/images/entrance-fairy-lights.jpg", focus: "top" },
  { label: "Quirky Wall Art", category: "Ambience", src: "/images/quirky-wall-prints.jpg" },
  { label: "Canvas Art Corner", category: "Ambience", src: "/images/big-ben-painting.jpg" },
  { label: "Leather Booth Seating", category: "Ambience", src: "/images/leather-booth-lounge.jpg" },
  { label: "Evening Get-Together", category: "Events", src: "/images/birthday-balloons.jpg" },
];

const filters: Category[] = ["All", "Food", "Ambience", "Events"];

export function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = photos.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <section className="plate-dark grain-overlay pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="container-page px-6 md:px-10">
          <Reveal>
            <p className="eyebrow-light mb-5">Gallery</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl text-bg">The Room, In Full.</h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page px-6 py-16 md:px-10">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`focus-ring rounded-full border hairline px-5 py-2 text-sm transition-colors ${
                filter === f ? "bg-dark text-bg" : "text-dark/70 hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <Stagger className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {visible.map((photo, i) => (
            <StaggerItem key={photo.label}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="focus-ring group block w-full text-left"
                aria-label={`Expand photo: ${photo.label}`}
              >
                <Plate
                  label={photo.label}
                  ratio="aspect-4/5"
                  src={photo.src}
                  alt={photo.label}
                  focus={photo.focus}
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-dark/95 p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="focus-ring absolute top-6 right-6 text-3xl text-bg"
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox - 1 + visible.length) % visible.length);
              }}
              className="focus-ring absolute left-6 text-3xl text-bg/70 hover:text-bg"
            >
              ←
            </button>
            <div className="max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
              <Plate
                dark
                label={visible[lightbox].label}
                ratio="aspect-4/5"
                src={visible[lightbox].src}
                alt={visible[lightbox].label}
                focus={visible[lightbox].focus}
              />
            </div>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % visible.length);
              }}
              className="focus-ring absolute right-6 text-3xl text-bg/70 hover:text-bg"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="surface-dark grain-overlay">
        <div className="container-page flex flex-col items-center gap-8 px-6 py-24 text-center md:px-10">
          <h2 className="text-4xl md:text-5xl text-bg">Seen Enough? Come Feel It.</h2>
          <Button to="/contact">Reserve a Table</Button>
        </div>
      </section>
    </>
  );
}
