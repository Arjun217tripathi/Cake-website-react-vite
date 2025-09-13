import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Cake, Menu as MenuIcon, ShoppingCart, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    // <header 
    //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    //   }`}
    // >
    <header 
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
    isScrolled ? 'shadow-md py-2' : 'py-4'
  }`}
>

      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Cake className="h-8 w-8 text-primary mr-2" />
          <span className="font-serif text-xl md:text-2x1 font-bold text-white-217,text-red-500">
          Ashbin Bakery
          </span>
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : isScrolled
                    ? 'text-text hover:text-primary hover:bg-primary-light/30'
                    : 'text-text hover:text-primary hover:bg-white/30'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav> */}
        <nav className="hidden md:flex items-center space-x-1">
  {navLinks.map((link) => (
    <NavLink
      key={link.path}
      to={link.path}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'text-pink-500'
            : isScrolled
            ? 'text-white-300 hover:text-pink-500 hover:bg-pink-500/30'
            : 'text-white-300 hover:text-pink-500 hover:bg-white/30'
        }`
      }
    >
      {link.label}
    </NavLink>
  ))}
</nav>


        {/* Cart & Mobile Menu Toggle */}
        <div className="flex items-center">
          <Link 
            to="/cart" 
            className="relative p-2 rounded-full hover:bg-primary-light/30 transition-colors mr-1"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-accent'}`} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button
            className="p-2 rounded-md md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-accent'}`} />
            ) : (
              <MenuIcon className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-accent'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-2 fade-in">
          <nav className="container-custom flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-primary-light/30'
                      : 'text-text hover:text-primary hover:bg-primary-light/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;