import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash, ChevronLeft, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Calculate additional costs
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 50 ? 0 : 10; // Free shipping over $50
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount if promo applied
  const total = subtotal + tax + shipping - discount;
  
  // Handle promo code submission
  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toLowerCase() === 'sweet10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try SWEET10 for 10% off!');
    }
  };
  
  // Format options for display
  const formatOptions = (options: Record<string, any>) => {
    const displayOptions = [];
    
    if (options.size) {
      displayOptions.push(`Size: ${options.size.name}`);
    }
    
    if (options.shape) {
      displayOptions.push(`Shape: ${options.shape}`);
    }
    
    if (options.addons && options.addons.length > 0) {
      displayOptions.push(`Add-ons: ${options.addons.map((addon: any) => addon.name).join(', ')}`);
    }
    
    return displayOptions.join(' | ');
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-2xl mx-auto">
            <div className="mb-6">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-300" />
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-accent mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-text/70 mb-8">
              Looks like you haven't added any cakes to your cart yet.
              Explore our delicious selection and find something sweet!
            </p>
            <Link to="/menu" className="btn btn-primary">
              Browse Our Cakes
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container-custom">
        <h1 className="font-serif text-3xl font-bold text-accent mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="p-4 border-b border-gray-100 last:border-0 flex flex-col sm:flex-row gap-4"
                >
                  {/* Product image */}
                  <div className="w-full sm:w-32 h-32 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Product info */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-lg font-medium text-accent">{item.name}</h3>
                        {Object.keys(item.options).length > 0 && (
                          <p className="text-sm text-text/70 mt-1">
                            {formatOptions(item.options)}
                          </p>
                        )}
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded border border-gray-300 bg-gray-100 text-text"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded border border-gray-300 bg-gray-100 text-text"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <span className="font-medium text-accent">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              to="/menu" 
              className="inline-flex items-center text-primary hover:text-accent transition-colors"
            >
              <ChevronLeft size={18} />
              <span className="ml-1">Continue Shopping</span>
            </Link>
          </div>
          
          {/* Cart summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="font-serif text-xl font-bold mb-6 pb-4 border-b border-gray-100">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-text/70">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Shipping</span>
                  <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-primary">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
              </div>
              
              {/* Promo code form */}
              <form onSubmit={handlePromoSubmit} className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-grow rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                  />
                  <button
                    type="submit"
                    className={`px-4 py-2 rounded-r-lg font-medium ${
                      promoApplied
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                    disabled={promoApplied}
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-sm text-primary mt-2">
                    Promo code SWEET10 applied!
                  </p>
                )}
              </form>
              
              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="font-serif text-xl font-bold text-accent">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => navigate('/checkout')}
                className="btn btn-primary w-full"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;