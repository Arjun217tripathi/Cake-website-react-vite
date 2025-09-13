import { useState } from 'react';
import { galleryItems, getAllGalleryCategories } from '../data/gallery';
import SectionHeading from '../components/ui/SectionHeading';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxTitle, setLightboxTitle] = useState('');
  
  const categories = getAllGalleryCategories();
  
  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);
  
  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category === 'all'
      ? 'All'
      : category
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
  };
  
  // Open lightbox with selected image
  const openLightbox = (image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    setLightboxOpen(true);
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container-custom">
        <SectionHeading 
          title="Our Cake Gallery" 
          subtitle="Browse our past creations for inspiration for your next celebration"
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-text hover:bg-primary-light/50'
              }`}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer transform transition-transform hover:-translate-y-1"
              onClick={() => openLightbox(item.image, item.title)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-white/80 text-sm">
                      {formatCategoryName(item.category)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img 
                src={lightboxImage} 
                alt={lightboxTitle} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-serif font-medium">{lightboxTitle}</h3>
              </div>
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-accent mb-4">
            Ready to Create Your Own Sweet Memory?
          </h2>
          <p className="text-text/80 max-w-2xl mx-auto mb-8">
            Let us design a custom cake for your next celebration. From birthdays to weddings, 
            we'll make your occasion unforgettable.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us For Custom Orders
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;