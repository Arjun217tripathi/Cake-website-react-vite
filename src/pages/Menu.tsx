import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  products, 
  getProductsByCategory, 
  getProductsByFlavor, 
  getProductsByOccasion 
} from '../data/products';
import CakeFilter, { FilterState } from '../components/ui/CakeFilter';
import ProductCard from '../components/ui/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';
import { Product } from '../types/types';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Initial filter state from URL params
  const initialFilters: FilterState = {
    category: searchParams.get('category') || '',
    flavor: searchParams.get('flavor') || '',
    occasion: searchParams.get('occasion') || '',
    search: searchParams.get('search') || ''
  };

  // Apply filters
  const applyFilters = (filters: FilterState) => {
    let filtered = [...products];

    // Apply category filter
    if (filters.category) {
      filtered = getProductsByCategory(filters.category);
    }

    // Apply flavor filter
    if (filters.flavor) {
      filtered = filters.category 
        ? filtered.filter(product => product.flavors.includes(filters.flavor)) 
        : getProductsByFlavor(filters.flavor);
    }

    // Apply occasion filter
    if (filters.occasion) {
      filtered = filters.category || filters.flavor
        ? filtered.filter(product => product.occasion.includes(filters.occasion))
        : getProductsByOccasion(filters.occasion);
    }

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(searchLower) || 
          product.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  };

  // Handle filter changes
  const handleFilterChange = (newFilters: FilterState) => {
    // Update URL params
    const params: Record<string, string> = {};
    
    if (newFilters.category) params.category = newFilters.category;
    if (newFilters.flavor) params.flavor = newFilters.flavor;
    if (newFilters.occasion) params.occasion = newFilters.occasion;
    if (newFilters.search) params.search = newFilters.search;
    
    setSearchParams(params);
    
    // Apply filters to products
    setFilteredProducts(applyFilters(newFilters));
  };

  // Initialize with URL params
  useEffect(() => {
    setFilteredProducts(applyFilters(initialFilters));
  }, []);
  
  // Format category name for display
  const formatCategoryTitle = () => {
    if (initialFilters.category) {
      return initialFilters.category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return 'Our Delicious Cakes';
  };

  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container-custom">
        <SectionHeading 
          title={formatCategoryTitle()}
          subtitle="Browse our collection of handcrafted cakes and treats for every occasion"
        />
        
        <CakeFilter onFilterChange={handleFilterChange} />
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No cakes match your filters</h3>
            <p className="text-text/70 mb-8">Try adjusting your search criteria or browse our categories</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;