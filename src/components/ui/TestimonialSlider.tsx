import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-secondary/30 py-12 px-4 rounded-xl">
      <div className="container-custom relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-4">What Our Customers Say</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their Sweet Delights experience.
          </p>
        </div>
        
        <div className="relative h-[320px] md:h-[280px] w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full transition-all duration-700 transform ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0' 
                  : index < activeIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-primary fill-primary' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-center italic text-text mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mb-3"
                  />
                  <p className="font-medium text-accent">{testimonial.name}</p>
                  <p className="text-sm text-text/70">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;