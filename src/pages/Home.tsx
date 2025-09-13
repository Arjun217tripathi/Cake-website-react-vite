import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cake, Heart, Gift, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import SectionHeading from '../components/ui/SectionHeading';
import image1 from '../image/360_F_923577884_VXKlnv2AJ1TXV7hIYM5OkfanmibInRXh.jpg';
// import image2 from '../image/images (1).jpeg';
// import image3 from '../image/images (2).jpeg';
import image4 from '../image/all-celebration-cakes-4-web.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const heroRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: image1,
      title: "Freshly Baked Happiness",
      subtitle: "Delivered to Your Doorstep",
      cta: "Order Now",
      link: "/menu"
    },
    {
      image: image4,
      title: "Custom Wedding Cakes",
      subtitle: "Make Your Special Day Even Sweeter",
      cta: "View Wedding Cakes",
      link: "/menu?category=wedding-cakes"
    },
    {
      image: image1,
      title: "Birthday Celebrations",
      subtitle: "Create Unforgettable Moments",
      cta: "Browse Birthday Cakes",
      link: "/menu?category=birthday-cakes"
    },
    {
      image: image4,
      title: "counte Party",
      subtitle: "Create Unforgettable Moments",
      cta: "Browse Birthday Cakes",
      link: "/menu?category=birthday-cakes"
    }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Categories for the category section
  const categories = [
    {
      id: 'birthday',
      name: 'Birthday Cakes',
      icon: <Cake className="h-8 w-8 mb-4 text-primary" />,
      description: 'Make any birthday special with our custom designed cakes.',
      link: '/menu?category=birthday-cakes'
    },
    {
      id: 'wedding',
      name: 'Wedding Cakes',
      icon: <Heart className="h-8 w-8 mb-4 text-primary" />,
      description: 'Beautiful tiered cakes for your perfect wedding day.',
      link: '/menu?category=wedding-cakes'
    },
    {
      id: 'custom',
      name: 'Custom Cakes',
      icon: <Gift className="h-8 w-8 mb-4 text-primary" />,
      description: 'Design your dream cake for any special occasion.',
      link: '/menu?category=custom-cakes'
    },
    {
      id: 'cupcakes',
      name: 'Cupcakes',
      icon: <Calendar className="h-8 w-8 mb-4 text-primary" />,
      description: 'Delicious bite-sized treats perfect for any event.',
      link: '/menu?category=cupcakes'
    }
  ];

  return (
    <div>
      {/* Hero Section with Swiper */}
      <div className="relative min-h-[80vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          className="h-[80vh]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative h-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container-custom relative z-10 text-center">
                  <div className="max-w-2xl mx-auto slide-enter-from-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8">
                      {slide.subtitle}
                    </p>
                    <Link 
                      to={slide.link}
                      className="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Preview Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 fade-in">
              <img 
                src="https://images.pexels.com/photos/3992386/pexels-photo-3992386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Bakery team" 
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
            </div>
            <div className="w-full md:w-1/2 slide-enter-from-right">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-4">
                Baking Happiness Since 2008
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Ashbin Bakery started with a simple mission: to create delicious, 
                handcrafted cakes that bring joy to every celebration. What began as a small 
                home kitchen has grown into a beloved local bakery, but our commitment to 
                quality and personalized service remains the same.
              </p>
              <p className="text-text leading-relaxed mb-8">
                We use only the finest ingredients, source locally whenever possible, and 
                put our heart into every creation. Each cake tells a story and we're honored 
                to be part of your special moments.
              </p>
              <Link to="/about" className="btn btn-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Explore Our Cakes" 
            subtitle="From birthday celebrations to weddings, we have the perfect cake for every occasion"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={category.link}
                className="bg-background rounded-xl p-6 text-center transition-all duration-300 hover:shadow-cake hover:-translate-y-1"
              >
                <div className="flex flex-col items-center">
                  {category.icon}
                  <h3 className="font-serif text-xl font-semibold text-accent mb-2">{category.name}</h3>
                  <p className="text-text/80 mb-4">{category.description}</p>
                  <span className="inline-block text-primary font-medium hover:text-accent transition-colors">
                    Browse Collection →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Featured Cakes Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Featured Cakes" 
            subtitle="The most loved creations from our bakery, perfect for any occasion"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu" className="btn btn-primary">
              View All Cakes
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.pexels.com/photos/4116564/pexels-photo-4116564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")' }}>
        <div className="absolute inset-0 bg-pink/100"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Make Your Occasion Special
            </h2>
            <p className="text-lg text-white mb-8">
              Whether it's a birthday, wedding, or any celebration, we're here to create
              the perfect cake just for you. Custom orders are our specialty!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-accent hover:bg-primary-light">
                Contact Us
              </Link>
              <Link to="/menu" className="btn btn-outline border-white text-white hover:bg-white/20">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;