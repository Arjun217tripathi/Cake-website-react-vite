import { GalleryItem } from '../types/types';

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Chocolate Ganache Wedding Cake",
    category: "wedding-cakes"
  },
  {
    id: "g2",
    image: "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Lemon Berry Celebration Cake",
    category: "birthday-cakes"
  },
  {
    id: "g3",
    image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Unicorn Fantasy Birthday Cake",
    category: "custom-cakes"
  },
  {
    id: "g4",
    image: "https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Assorted Mini Cupcake Tower",
    category: "cupcakes"
  },
  {
    id: "g5",
    image: "https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Elegant Rose Gold Wedding Cake",
    category: "wedding-cakes"
  },
  {
    id: "g6",
    image: "https://images.pexels.com/photos/1346341/pexels-photo-1346341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Strawberry Champagne Celebration",
    category: "birthday-cakes"
  },
  {
    id: "g7",
    image: "https://images.pexels.com/photos/5847090/pexels-photo-5847090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Chocolate Celebration Cupcakes",
    category: "cupcakes"
  },
  {
    id: "g8",
    image: "https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Fruit and Berry Topped Tart",
    category: "pastries"
  },
  {
    id: "g9",
    image: "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Winter Wonderland Cake",
    category: "custom-cakes"
  },
  {
    id: "g10",
    image: "https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Red Velvet Anniversary Cake",
    category: "birthday-cakes"
  },
  {
    id: "g11",
    image: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Custom Floral Wedding Cake",
    category: "wedding-cakes"
  },
  {
    id: "g12",
    image: "https://images.pexels.com/photos/36761/preetzl-donut-chocolate-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Assorted Continental Pastries",
    category: "pastries"
  }
];

export const getGalleryItemsByCategory = (category: string): GalleryItem[] => {
  return category === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === category);
};

export const getAllGalleryCategories = (): string[] => {
  return ['all', ...new Set(galleryItems.map(item => item.category))];
};