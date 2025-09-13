import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id || '');
  
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, any>>({
    size: product?.options?.sizes?.[0] || null,
    shape: product?.options?.shapes?.[0] || null,
    addons: []
  });
  
  // If product not found, redirect to menu
  if (!product) {
    navigate('/menu');
    return null;
  }
  
  // Get related products based on same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);
  
  // Calculate total price based on selected options
  const calculateTotalPrice = () => {
    let total = product.price * quantity;
    
    // Add size price difference if applicable
    if (selectedOptions.size && selectedOptions.size.price !== product.price) {
      total = selectedOptions.size.price * quantity;
    }
    
    // Add price of addons
    if (selectedOptions.addons && selectedOptions.addons.length > 0) {
      const addonsTotal = selectedOptions.addons.reduce(
        (sum: number, addon: any) => sum + addon.price, 
        0
      );
      total += addonsTotal * quantity;
    }
    
    return total;
  };
  
  // Handle quantity changes
  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };
  
  // Handle size selection
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sizeIndex = parseInt(e.target.value);
    if (product.options?.sizes) {
      setSelectedOptions({
        ...selectedOptions,
        size: product.options.sizes[sizeIndex]
      });
    }
  };
  
  // Handle shape selection
  const handleShapeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      shape: e.target.value
    });
  };
  
  // Handle addon selection
  const handleAddonToggle = (addon: any) => {
    const addonIndex = selectedOptions.addons.findIndex(
      (item: any) => item.name === addon.name
    );
    
    if (addonIndex > -1) {
      // Remove addon
      const newAddons = [...selectedOptions.addons];
      newAddons.splice(addonIndex, 1);
      setSelectedOptions({
        ...selectedOptions,
        addons: newAddons
      });
    } else {
      // Add addon
      setSelectedOptions({
        ...selectedOptions,
        addons: [...selectedOptions.addons, addon]
      });
    }
  };
  
  // Add to cart with selected options
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOptions);
    // Show a success message or navigate to cart
    navigate('/cart');
  };
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-text/70 mb-6">
          <a href="/" className="hover:text-primary">Home</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="/menu" className="hover:text-primary">Menu</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-primary">{product.name}</span>
        </div>
        
        {/* Product details card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product image */}
            <div className="overflow-hidden h-[300px] md:h-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product info */}
            <div className="p-6 md:p-8">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-accent mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <span className="text-primary text-xl font-bold">
                  ${calculateTotalPrice().toFixed(2)}
                </span>
                {selectedOptions.size && (
                  <span className="ml-2 text-sm text-text/70">
                    ({selectedOptions.size.name})
                  </span>
                )}
              </div>
              
              <p className="text-text mb-6">
                {product.description}
              </p>
              
              <div className="space-y-6">
                {/* Size options */}
                {product.options?.sizes && product.options.sizes.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-3">Size</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.options.sizes.map((size, index) => (
                        <label 
                          key={size.name} 
                          className={`flex items-center border rounded-lg p-3 cursor-pointer transition-colors ${
                            selectedOptions.size === size 
                              ? 'border-primary bg-primary-light/30' 
                              : 'border-gray-200 hover:border-primary'
                          }`}
                        >
                          <input
                            type="radio"
                            name="size"
                            value={index}
                            checked={selectedOptions.size === size}
                            onChange={handleSizeChange}
                            className="sr-only"
                          />
                          <span className="text-sm">
                            {size.name} - ${size.price.toFixed(2)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Shape options */}
                {product.options?.shapes && product.options.shapes.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-3">Shape</h3>
                    <select
                      value={selectedOptions.shape}
                      onChange={handleShapeChange}
                      className="input-field"
                    >
                      {product.options.shapes.map((shape) => (
                        <option key={shape} value={shape}>
                          {shape.charAt(0).toUpperCase() + shape.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                
                {/* Add-ons */}
                {product.options?.addons && product.options.addons.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-3">Add-ons</h3>
                    <div className="space-y-2">
                      {product.options.addons.map((addon) => {
                        const isSelected = selectedOptions.addons.some(
                          (item: any) => item.name === addon.name
                        );
                        
                        return (
                          <label 
                            key={addon.name} 
                            className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer transition-colors ${
                              isSelected 
                                ? 'border-primary bg-primary-light/30' 
                                : 'border-gray-200 hover:border-primary'
                            }`}
                          >
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleAddonToggle(addon)}
                                className="mr-3 h-4 w-4 text-primary"
                              />
                              <span>{addon.name}</span>
                            </div>
                            <span className="text-sm text-text/70">+${addon.price.toFixed(2)}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {/* Quantity selector */}
                <div>
                  <h3 className="font-medium mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="p-2 rounded-l-md border border-gray-300 bg-gray-100 text-text"
                      disabled={quantity <= 1}
                    >
                      <Minus size={18} />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      className="w-16 text-center border-t border-b border-gray-300 py-2"
                    />
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="p-2 rounded-r-md border border-gray-300 bg-gray-100 text-text"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleAddToCart}
                    className="btn btn-primary flex-1 flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  <button className="btn btn-outline flex items-center justify-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Save
                  </button>
                </div>
                
                {/* Meta information */}
                <div className="pt-4 border-t border-gray-200 space-y-2 text-sm text-text/70">
                  <p>
                    <span className="font-medium">Category: </span>
                    {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </p>
                  {product.flavors.length > 0 && (
                    <p>
                      <span className="font-medium">Flavors: </span>
                      {product.flavors.map(flavor => flavor.charAt(0).toUpperCase() + flavor.slice(1).replace('-', ' ')).join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <SectionHeading
              title="You May Also Like"
              alignment="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;