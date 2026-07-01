import type { SignaturePick } from "../types";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Events", to: "/events" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export const signaturePicks: SignaturePick[] = [
  {
    name: "Chicken Lollipop",
    description: "Marinated wings, dressed lollipop-style, deep fried to order.",
    price: "₹250",
    anchor: "/menu#appetizers",
  },
  {
    name: "Peri Peri French Fries",
    description: "The side dish every review mentions first.",
    price: "₹—",
    anchor: "/menu#sides",
  },
  {
    name: "Garlic Noodles",
    description: "Wok-tossed hakka noodles, heavy on the garlic.",
    price: "₹—",
    anchor: "/menu#momos-pasta",
  },
  {
    name: "Strawberry Mojito",
    description: "The mocktail that starts every conversation about this place.",
    price: "₹—",
    anchor: "/menu#beverages",
  },
];

export const pillars = [
  {
    title: "Ambience That Photographs Itself",
    body: "Blue-lit interiors, fairy lights, and wall art guests keep tagging on Instagram.",
  },
  {
    title: "Reasonable Pricing, No Hidden Cost",
    body: "Reviewers say it plainly — good food, fair bills, every time.",
  },
  {
    title: "A Playlist People Actually Notice",
    body: "Background music curated well enough that guests mention it unprompted.",
  },
  {
    title: "More Than a Meal",
    body: "A pool table and lounge seating mean the night doesn't have to end when the food does.",
  },
];

export const menuPreview = [
  { label: "Appetizers", note: "Chicken, fish, prawns & veg starters", anchor: "/menu#appetizers" },
  { label: "Momos & Pasta", note: "Steamed, fried, pan-tossed, or Italian-style", anchor: "/menu#momos-pasta" },
  { label: "Sandwiches & Burgers", note: "Grilled, cheesy, loaded", anchor: "/menu#sandwiches-burgers" },
  { label: "Combo & Sharing Platters", note: "Built for the whole table", anchor: "/menu#combos" },
  { label: "Shakes & Beverages", note: "Mojitos, shakes, cafe frappes", anchor: "/menu#beverages" },
  { label: "Dessert", note: "A short, sweet finish", anchor: "/menu#dessert" },
];

export const hours = "12:00 PM – 10:00 PM, daily";

export const address = {
  line1: "Cafe Elio",
  line2: "Jadavpur, Kolkata, West Bengal",
  phone: "+91 00000 00000",
};
