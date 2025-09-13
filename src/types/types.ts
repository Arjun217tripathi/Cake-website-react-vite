export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  flavors: string[];
  occasion: string[];
  featured?: boolean;
  popular?: boolean;
  options?: {
    sizes?: {
      name: string;
      price: number;
    }[];
    shapes?: string[];
    addons?: {
      name: string;
      price: number;
    }[];
  };
}

export interface CartItem extends Product {
  quantity: number;
  options: Record<string, any>;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface BakerProfile {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}