export type DietType = "veg" | "nonveg";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  diet: DietType;
  spicy?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  tagline: string;
  items: MenuItem[];
}

export interface Review {
  name: string;
  role: string;
  quote: string;
}

export interface SignaturePick {
  name: string;
  description: string;
  price: string;
  anchor: string;
}
