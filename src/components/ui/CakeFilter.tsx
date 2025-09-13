import { useState } from 'react';
import { getAllCategories, getAllFlavors, getAllOccasions } from '../../data/products';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  flavor: string;
  occasion: string;
  search: string;
}

const CakeFilter = ({ onFilterChange }: FilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    flavor: '',
    occasion: '',
    search: ''
  });

  const categories = getAllCategories();
  const flavors = getAllFlavors();
  const occasions = getAllOccasions();

  // Helper to format display names
  const formatName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: '',
      flavor: '',
      occasion: '',
      search: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-text mb-1">
            Search
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search cakes..."
            value={filters.search}
            onChange={handleFilterChange}
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-text mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="input-field"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {formatName(category)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="flavor" className="block text-sm font-medium text-text mb-1">
            Flavor
          </label>
          <select
            id="flavor"
            name="flavor"
            value={filters.flavor}
            onChange={handleFilterChange}
            className="input-field"
          >
            <option value="">All Flavors</option>
            {flavors.map((flavor) => (
              <option key={flavor} value={flavor}>
                {formatName(flavor)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="occasion" className="block text-sm font-medium text-text mb-1">
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            value={filters.occasion}
            onChange={handleFilterChange}
            className="input-field"
          >
            <option value="">All Occasions</option>
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {formatName(occasion)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-text rounded-md transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default CakeFilter;