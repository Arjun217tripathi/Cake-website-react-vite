import { Product } from '../types/types';

export const products: Product[] = [
  {
    id: "cake-001",
    name: "Chocolate Fudge Cake",
    description: "Rich, moist chocolate cake with decadent fudge frosting and chocolate shavings. Perfect for chocolate lovers!",
    price: 39.99,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["chocolate", "fudge"],
    occasion: ["birthday", "celebration"],
    featured: true,
    popular: true,
    options: {
      sizes: [
        { name: "6 inch (serves 8)", price: 39.99 },
        { name: "8 inch (serves 12)", price: 49.99 },
        { name: "10 inch (serves 16)", price: 59.99 }
      ],
      shapes: ["round", "square"],
      addons: [
        { name: "Birthday candles", price: 2.99 },
        { name: "Custom message", price: 4.99 },
        { name: "Extra frosting", price: 5.99 }
      ]
    }
  },
  {
    id: "cake-002",
    name: "Vanilla Bean Celebration",
    description: "Light and fluffy vanilla cake with creamy vanilla bean frosting. A classic crowd-pleaser for any occasion.",
    price: 35.99,
    image: "https://images.pexels.com/photos/1027811/pexels-photo-1027811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["vanilla"],
    occasion: ["birthday", "celebration", "party"],
    featured: true,
    options: {
      sizes: [
        { name: "6 inch (serves 8)", price: 35.99 },
        { name: "8 inch (serves 12)", price: 45.99 },
        { name: "10 inch (serves 16)", price: 55.99 }
      ],
      shapes: ["round", "square", "heart"],
      addons: [
        { name: "Birthday candles", price: 2.99 },
        { name: "Custom message", price: 4.99 },
        { name: "Sprinkles", price: 3.99 }
      ]
    }
  },
  {
    id: "cake-003",
    name: "Red Velvet Dream",
    description: "Velvety smooth red cake with a hint of cocoa, topped with cream cheese frosting. A beautiful and elegant choice.",
    price: 42.99,
    image: "https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["red-velvet", "cream-cheese"],
    occasion: ["birthday", "valentine", "anniversary"],
    popular: true,
    options: {
      sizes: [
        { name: "6 inch (serves 8)", price: 42.99 },
        { name: "8 inch (serves 12)", price: 52.99 },
        { name: "10 inch (serves 16)", price: 62.99 }
      ],
      shapes: ["round", "heart"],
      addons: [
        { name: "Rose petals", price: 6.99 },
        { name: "Custom message", price: 4.99 },
        { name: "Chocolate hearts", price: 5.99 }
      ]
    }
  },
  {
    id: "cake-004",
    name: "Elegant Wedding Tiered Cake",
    description: "Stunning three-tiered cake with delicate fondant decoration and edible pearls. The perfect centerpiece for your special day.",
    price: 299.99,
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "wedding-cakes",
    flavors: ["vanilla", "strawberry", "chocolate"],
    occasion: ["wedding"],
    featured: true,
    options: {
      sizes: [
        { name: "3-tier (serves 50)", price: 299.99 },
        { name: "4-tier (serves 75)", price: 399.99 },
        { name: "5-tier (serves 100)", price: 499.99 }
      ],
      shapes: ["round", "square"],
      addons: [
        { name: "Fresh flowers", price: 49.99 },
        { name: "Gold leaf accents", price: 29.99 },
        { name: "Custom cake topper", price: 19.99 }
      ]
    }
  },
  {
    id: "cake-005",
    name: "Festive Cupcake Dozen",
    description: "Assortment of 12 freshly baked cupcakes with colorful frosting. Choose from various flavors and decorations.",
    price: 32.99,
    image: "https://images.pexels.com/photos/853004/pexels-photo-853004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "cupcakes",
    flavors: ["assorted", "chocolate", "vanilla", "strawberry"],
    occasion: ["birthday", "celebration", "party"],
    popular: true,
    options: {
      sizes: [
        { name: "Dozen (12)", price: 32.99 },
        { name: "Two dozen (24)", price: 59.99 },
        { name: "Mini dozen (24)", price: 28.99 }
      ],
      addons: [
        { name: "Special decoration", price: 8.99 },
        { name: "Custom toppers", price: 9.99 },
        { name: "Gift packaging", price: 6.99 }
      ]
    }
  },
  {
    id: "cake-006",
    name: "Custom Theme Birthday Cake",
    description: "Personalized cake designed around your theme of choice. Perfect for kids' birthdays or themed parties.",
    price: 55.99,
    image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "custom-cakes",
    flavors: ["chocolate", "vanilla", "strawberry", "marble"],
    occasion: ["birthday", "children", "theme-party"],
    featured: true,
    options: {
      sizes: [
        { name: "8 inch (serves 12)", price: 55.99 },
        { name: "10 inch (serves 16)", price: 65.99 },
        { name: "12 inch (serves 24)", price: 75.99 }
      ],
      shapes: ["round", "square", "custom"],
      addons: [
        { name: "Character decoration", price: 15.99 },
        { name: "Custom message", price: 4.99 },
        { name: "Special fondant work", price: 25.99 }
      ]
    }
  },
  {
    id: "cake-007",
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake with a graham cracker crust, topped with fresh strawberries and strawberry glaze.",
    price: 45.99,
    image: "https://images.pexels.com/photos/4686833/pexels-photo-4686833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["strawberry", "cheesecake"],
    occasion: ["birthday", "anniversary", "celebration"],
    popular: true,
    options: {
      sizes: [
        { name: "8 inch (serves 10)", price: 45.99 },
        { name: "10 inch (serves 14)", price: 55.99 }
      ],
      addons: [
        { name: "Extra strawberries", price: 7.99 },
        { name: "Chocolate drizzle", price: 4.99 },
        { name: "Gift packaging", price: 6.99 }
      ]
    }
  },
  {
    id: "cake-008",
    name: "Lemon Raspberry Delight",
    description: "Tangy lemon cake with raspberry filling and lemon buttercream frosting. A refreshing and beautiful dessert.",
    price: 41.99,
    image: "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["lemon", "raspberry"],
    occasion: ["birthday", "summer", "celebration"],
    featured: true,
    options: {
      sizes: [
        { name: "6 inch (serves 8)", price: 41.99 },
        { name: "8 inch (serves 12)", price: 51.99 },
        { name: "10 inch (serves 16)", price: 61.99 }
      ],
      shapes: ["round", "square"],
      addons: [
        { name: "Fresh fruit topping", price: 8.99 },
        { name: "Custom message", price: 4.99 },
        { name: "Edible flowers", price: 9.99 }
      ]
    }
  },
  {
    id: "cake-009",
    name: "Cookies & Cream Dream",
    description: "Moist chocolate cake with cookies and cream filling, topped with creamy frosting and crushed cookies.",
    price: 39.99,
    image: "https://images.pexels.com/photos/4197654/pexels-photo-4197654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["chocolate", "cookies-cream"],
    occasion: ["birthday", "celebration"],
    popular: true,
    options: {
      sizes: [
        { name: "6 inch (serves 8)", price: 39.99 },
        { name: "8 inch (serves 12)", price: 49.99 },
        { name: "10 inch (serves 16)", price: 59.99 }
      ],
      shapes: ["round", "square"],
      addons: [
        { name: "Extra cookie crumbles", price: 4.99 },
        { name: "Custom message", price: 4.99 },
        { name: "Chocolate drizzle", price: 3.99 }
      ]
    }
  },
  {
    id: "cake-010",
    name: "Carrot Cake with Cream Cheese",
    description: "Spiced carrot cake with walnuts and raisins, frosted with cream cheese icing. A timeless favorite.",
    price: 38.99,
    image: "https://images.pexels.com/photos/14705140/pexels-photo-14705140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["carrot", "cream-cheese", "spice"],
    occasion: ["birthday", "fall", "thanksgiving"],
    options: {
      sizes: [
        { name: "6 inch (serves 8)", price: 38.99 },
        { name: "8 inch (serves 12)", price: 48.99 },
        { name: "10 inch (serves 16)", price: 58.99 }
      ],
      shapes: ["round", "square"],
      addons: [
        { name: "Extra walnuts", price: 5.99 },
        { name: "Custom message", price: 4.99 },
        { name: "Caramel drizzle", price: 3.99 }
      ]
    }
  },
  {
    id: "cake-011",
    name: "Rainbow Confetti Cake",
    description: "Colorful vanilla cake filled with sprinkles, covered in vanilla buttercream and more rainbow sprinkles.",
    price: 43.99,
    image: "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["vanilla", "funfetti"],
    occasion: ["birthday", "children", "celebration"],
    featured: true,
    options: {
      sizes: [
        { name: "6 inch (serves 8)", price: 43.99 },
        { name: "8 inch (serves 12)", price: 53.99 },
        { name: "10 inch (serves 16)", price: 63.99 }
      ],
      shapes: ["round", "square"],
      addons: [
        { name: "Extra sprinkles", price: 3.99 },
        { name: "Birthday candles", price: 2.99 },
        { name: "Custom message", price: 4.99 }
      ]
    }
  },
  {
    id: "cake-012",
    name: "Rustic Naked Wedding Cake",
    description: "Beautiful minimalist cake with visible layers, decorated with fresh berries and flowers. Modern and elegant.",
    price: 249.99,
    image: "https://images.pexels.com/photos/265801/pexels-photo-265801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "wedding-cakes",
    flavors: ["vanilla", "lemon", "chocolate"],
    occasion: ["wedding", "rustic", "outdoor"],
    options: {
      sizes: [
        { name: "3-tier (serves 40)", price: 249.99 },
        { name: "4-tier (serves 65)", price: 349.99 }
      ],
      addons: [
        { name: "Fresh berries", price: 29.99 },
        { name: "Fresh flowers", price: 49.99 },
        { name: "Greenery", price: 19.99 }
      ]
    }
  },
  {
    id: "cake-013",
    name: "Rustic Naked Wedding Cake",
    description: "Beautiful minimalist cake with visible layers, decorated with fresh berries and flowers. Modern and elegant.",
    price: 249.99,
    image: "https://images.pexels.com/photos/265801/pexels-photo-265801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "wedding-cakes",
    flavors: ["vanilla", "lemon", "chocolate"],
    occasion: ["wedding", "rustic", "outdoor"],
    options: {
      sizes: [
        { name: "3-tier (serves 40)", price: 249.99 },
        { name: "4-tier (serves 65)", price: 349.99 }
      ],
      addons: [
        { name: "Fresh berries", price: 29.99 },
        { name: "Fresh flowers", price: 49.99 },
        { name: "Greenery", price: 19.99 }
      ]
    }
  },
  {
    id: "cake-014",
    name: "Classic Chocolate Birthday Cake",
    description: "Rich and moist chocolate cake layered with fudge frosting. Perfect for any birthday celebration.",
    price: 39.99,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "birthday-cakes",
    flavors: ["chocolate"],
    occasion: ["birthday", "kids", "celebration"],
    options: {
      sizes: [
        { name: "6-inch (serves 8)", price: 39.99 },
        { name: "8-inch (serves 12)", price: 49.99 }
      ],
      addons: [
        { name: "Birthday candles", price: 4.99 },
        { name: "Custom topper", price: 9.99 }
      ]
    }
  },
  {
    id: "cake-015",
    name: "Elegant Red Velvet Anniversary Cake",
    description: "Smooth red velvet cake with cream cheese frosting, topped with edible gold and roses.",
    price: 59.99,
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "anniversary-cakes",
    flavors: ["red velvet"],
    occasion: ["anniversary", "romantic", "valentine"],
    options: {
      sizes: [
        { name: "7-inch (serves 10)", price: 59.99 },
        { name: "9-inch (serves 15)", price: 79.99 }
      ],
      addons: [
        { name: "Edible gold", price: 14.99 },
        { name: "Rose petals", price: 7.99 }
      ]
    }
  },
  {
    id: "cake-016",
    name: "Rainbow Kids Party Cake",
    description: "Colorful sponge cake with rainbow layers, topped with fun sprinkles and lollipops. Loved by kids!",
    price: 44.99,
    image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "kids-cakes",
    flavors: ["vanilla", "strawberry"],
    occasion: ["birthday", "kids", "party"],
    options: {
      sizes: [
        { name: "8-inch (serves 12)", price: 44.99 },
        { name: "10-inch (serves 18)", price: 59.99 }
      ],
      addons: [
        { name: "Rainbow topper", price: 5.99 },
        { name: "Extra sprinkles", price: 2.99 }
      ]
    }
  },
  {
    id: "cake-017",
    name: "Tropical Pineapple Coconut Cake",
    description: "Light and refreshing tropical cake with layers of pineapple and coconut cream, perfect for summer parties.",
    price: 54.99,
    image: "https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "specialty-cakes",
    flavors: ["pineapple", "coconut"],
    occasion: ["summer", "beach", "tropical"],
    options: {
      sizes: [
        { name: "6-inch (serves 8)", price: 54.99 },
        { name: "9-inch (serves 14)", price: 74.99 }
      ],
      addons: [
        { name: "Toasted coconut flakes", price: 3.99 },
        { name: "Pineapple topping", price: 4.99 }
      ]
    }
  },
  {
    id: "cake-018",
    name: "Luxe Gold Drip Cake",
    description: "Decadent chocolate cake with glossy ganache and gold drip effect, topped with macarons and truffles.",
    price: 89.99,
    image: "https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "luxury-cakes",
    flavors: ["chocolate", "hazelnut"],
    occasion: ["birthday", "celebration", "luxury"],
    options: {
      sizes: [
        { name: "6-inch (serves 8)", price: 89.99 },
        { name: "8-inch (serves 12)", price: 109.99 }
      ],
      addons: [
        { name: "Extra macarons", price: 9.99 },
        { name: "Gold leaf", price: 14.99 }
      ]
    }
  },
  {
    id: "cake-019",
    name: "Berry Cheesecake Delight",
    description: "Creamy New York-style cheesecake topped with a mix of fresh berries and a berry glaze.",
    price: 49.99,
    image: "https://images.pexels.com/photos/161887/cheesecake-dessert-cake-sweet-161887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "cheesecakes",
    flavors: ["vanilla", "berry", "cheesecake"],
    occasion: ["dinner party", "holiday", "dessert"],
    options: {
      sizes: [
        { name: "7-inch (serves 10)", price: 49.99 },
        { name: "9-inch (serves 14)", price: 64.99 }
      ],
      addons: [
        { name: "Extra berry glaze", price: 3.99 },
        { name: "Whipped cream topping", price: 2.99 }
      ]
    }
  },
  {
    id: "cake-020",
    name: "Unicorn Fantasy Cake",
    description: "Magical unicorn-themed cake with pastel layers and a sculpted horn, ideal for themed parties.",
    price: 69.99,
    image: "https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "kids-cakes",
    flavors: ["vanilla", "bubblegum", "strawberry"],
    occasion: ["birthday", "kids", "fantasy"],
    options: {
      sizes: [
        { name: "8-inch (serves 12)", price: 69.99 },
        { name: "10-inch (serves 18)", price: 89.99 }
      ],
      addons: [
        { name: "Unicorn horn topper", price: 5.99 },
        { name: "Colorful sprinkles", price: 3.49 }
      ]
    }
  },
  {
    id: "cake-021",
    name: "Mocha Espresso Layer Cake",
    description: "Bold and rich espresso-flavored cake with mocha buttercream, ideal for coffee lovers.",
    price: 64.99,
    image: "https://images.pexels.com/photos/691152/pexels-photo-691152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "coffee-cakes",
    flavors: ["mocha", "espresso", "chocolate"],
    occasion: ["adult birthday", "coffee lovers", "casual event"],
    options: {
      sizes: [
        { name: "6-inch (serves 8)", price: 64.99 },
        { name: "9-inch (serves 14)", price: 84.99 }
      ],
      addons: [
        { name: "Chocolate shavings", price: 4.99 },
        { name: "Coffee beans decor", price: 2.49 }
      ]
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.popular);
};

export const getProductsByFlavor = (flavor: string): Product[] => {
  return products.filter(product => product.flavors.includes(flavor));
};

export const getProductsByOccasion = (occasion: string): Product[] => {
  return products.filter(product => product.occasion.includes(occasion));
};

export const getAllCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

export const getAllFlavors = (): string[] => {
  return [...new Set(products.flatMap(product => product.flavors))];
};

export const getAllOccasions = (): string[] => {
  return [...new Set(products.flatMap(product => product.occasion))];
};