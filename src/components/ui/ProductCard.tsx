import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types/types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { id, name, price, image, category } = product;

  // Format category for display
  const formatCategory = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="card group hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Link to={`/menu/${id}`}>
          <img 
            src={image}
            alt={name}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <span className="bg-primary-light text-primary text-xs px-3 py-1 rounded-full font-medium">
            {formatCategory(category)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/menu/${id}`} className="block mb-2">
          <h3 className="font-serif text-lg font-medium text-text hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-3">
          <span className="text-accent font-medium">${price.toFixed(2)}</span>
          
          <div className="flex items-center space-x-2">
            <Link 
              to={`/menu/${id}`}
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Details
            </Link>
            
            <button
              onClick={() => addToCart(product, 1, {})}
              className="p-2 bg-primary-light text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label={`Add ${name} to cart`}
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;