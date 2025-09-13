import { Link } from 'react-router-dom';
import { Cake, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-400 text-text-light pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Cake className="h-6 w-6 text-primary-light mr-2" />
              <h3 className="font-serif text-xl font-bold text-white">Ashbin Bakery</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Crafting delicious moments of joy with our handmade cakes and treats since 2015. 
              Every creation is made with love, premium ingredients, and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-light transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-light transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-primary-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Birthday Cakes', 'Wedding Cakes', 'Cupcakes', 'Custom Cakes', 'Pastries'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/menu?category=${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-gray-300 hover:text-primary-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-light mr-2 mt-0.5" />
                <span className="text-sm">New Delhi, Tilak Nagar</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-light mr-2" />
                <span className="text-sm">981036781</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-light mr-2" />
                <span className="text-sm">ashbin7@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary-light mr-2 mt-0.5" />
                <div className="text-sm">
                  <p>Mon-Fri: 8am - 6pm</p>
                  <p>Sat-Sun: 9am - 5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-sm text-center text-gray-100">
            © {currentYear} Ashbin cakes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;