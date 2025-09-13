import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronRight } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  deliveryDate: string;
  deliveryTime: string;
  specialInstructions: string;
  paymentMethod: string;
}

const Checkout = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    deliveryDate: '',
    deliveryTime: '',
    specialInstructions: '',
    paymentMethod: 'credit-card'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Calculate additional costs
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 50 ? 0 : 10; // Free shipping over $50
  const total = subtotal + tax + shipping;
  
  // If cart is empty, redirect to menu
  if (cartItems.length === 0) {
    navigate('/menu');
    return null;
  }
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'deliveryDate', 'deliveryTime'];
    requiredFields.forEach(field => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/[()-\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Zip code validation
    if (formData.zipCode && !/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Invalid zip code format';
    }
    
    // Delivery date validation (must be a future date)
    if (formData.deliveryDate) {
      const selectedDate = new Date(formData.deliveryDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.deliveryDate = 'Delivery date must be today or later';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      // Clear cart and redirect to success page
      clearCart();
      navigate('/');
      // Show a success message
      alert('Your order has been placed successfully! Thank you for shopping with Sweet Delights Bakery.');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-text/70 mb-6">
          <a href="/" className="hover:text-primary">Home</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="/cart" className="hover:text-primary">Cart</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-primary">Checkout</span>
        </div>
        
        <h1 className="font-serif text-3xl font-bold text-accent mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
              {/* Customer Information */}
              <h2 className="font-serif text-xl font-bold mb-6">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-text mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-text mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              
              {/* Delivery Address */}
              <h2 className="font-serif text-xl font-bold mb-6">Delivery Address</h2>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-text mb-1">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`input-field ${errors.address ? 'border-red-500' : ''}`}
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500 mt-1">{errors.address}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-text mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                    />
                    {errors.city && (
                      <p className="text-sm text-red-500 mt-1">{errors.city}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-text mb-1">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`input-field ${errors.state ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      {/* Add more states as needed */}
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                    </select>
                    {errors.state && (
                      <p className="text-sm text-red-500 mt-1">{errors.state}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-text mb-1">
                      Zip Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`input-field ${errors.zipCode ? 'border-red-500' : ''}`}
                    />
                    {errors.zipCode && (
                      <p className="text-sm text-red-500 mt-1">{errors.zipCode}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Delivery Details */}
              <h2 className="font-serif text-xl font-bold mb-6">Delivery Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-medium text-text mb-1">
                    Delivery Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`input-field ${errors.deliveryDate ? 'border-red-500' : ''}`}
                  />
                  {errors.deliveryDate && (
                    <p className="text-sm text-red-500 mt-1">{errors.deliveryDate}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="deliveryTime" className="block text-sm font-medium text-text mb-1">
                    Delivery Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="deliveryTime"
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleInputChange}
                    className={`input-field ${errors.deliveryTime ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select Time</option>
                    <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
                    <option value="12:00 PM - 3:00 PM">12:00 PM - 3:00 PM</option>
                    <option value="3:00 PM - 6:00 PM">3:00 PM - 6:00 PM</option>
                  </select>
                  {errors.deliveryTime && (
                    <p className="text-sm text-red-500 mt-1">{errors.deliveryTime}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="specialInstructions" className="block text-sm font-medium text-text mb-1">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    rows={3}
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Any special delivery instructions, cake message, or allergen concerns..."
                    className="input-field"
                  />
                </div>
              </div>
              
              {/* Payment Method */}
              <h2 className="font-serif text-xl font-bold mb-6">Payment Method</h2>
              <div className="mb-6">
                <div className="space-y-4">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer bg-primary-light/20 border-primary">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                      className="mr-3 h-4 w-4 text-primary"
                    />
                    <span className="font-medium">Mock Payment (Demo only)</span>
                  </label>
                  
                  <div className="p-4 border rounded-lg bg-gray-50 text-gray-500">
                    <p className="text-sm">
                      This is a demo checkout. No actual payment will be processed.
                      In a real implementation, we would integrate with a payment 
                      processor like Stripe or PayPal.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="font-serif text-xl font-bold mb-6 pb-4 border-b border-gray-100">
                Order Summary
              </h2>
              
              <div className="max-h-80 overflow-y-auto mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center py-3 border-b border-gray-100 last:border-0">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="font-medium text-text">{item.name}</h4>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm text-text/70">Qty: {item.quantity}</span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
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
              </div>
              
              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="font-serif text-xl font-bold text-accent">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
              
              <p className="text-xs text-text/70 text-center mt-4">
                By placing your order, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;