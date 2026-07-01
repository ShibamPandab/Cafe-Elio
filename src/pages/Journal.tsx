import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { Plate } from "../components/ui/Plate";

const posts = [
  { title: "A Perfect Evening in Jadavpur: Where to Start and End Your Night", category: "Neighbourhood Guides" },
  { title: "Why Our Garlic Noodles Keep Selling Out", category: "Food Stories" },
  { title: "The Story Behind Cafe Elio's Blue-Lit Room", category: "Behind the Counter" },
];

export function Journal() {
  return (
    <>
      <section className="plate-dark grain-overlay pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="container-page px-6 md:px-10">
          <Reveal>
            <p className="eyebrow-light mb-5">Journal</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl text-bg">Notes from the Cafe.</h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page px-6 py-24 md:px-10 md:py-32">
        <Stagger className="grid grid-cols-1 gap-14 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <Plate label={post.category} ratio="aspect-4/5" />
              <p className="mt-5 eyebrow">{post.category}</p>
              <h2 className="mt-2 text-2xl leading-snug">{post.title}</h2>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
