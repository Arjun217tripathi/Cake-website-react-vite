import { ChevronRight } from 'lucide-react';
import { bakers } from '../data/bakers';
import SectionHeading from '../components/ui/SectionHeading';

const About = () => {
  // Values section data
  const values = [
    {
      title: "Quality Ingredients",
      description: "We use only the finest ingredients, sourcing locally whenever possible to ensure freshness and flavor in every bite."
    },
    {
      title: "Handcrafted Excellence",
      description: "Every cake is made by hand with meticulous attention to detail, ensuring each creation is as beautiful as it is delicious."
    },
    {
      title: "Personalized Service",
      description: "We believe in creating custom experiences for our customers, working closely with you to bring your vision to life."
    },
    {
      title: "Community Connection",
      description: "We're proud to be a part of our local community, supporting local producers and creating sweet moments for our neighbors."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-background">
      {/* Hero Section */}
      <div className="bg-secondary/40 py-12">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-text/70 mb-6">
            <a href="/" className="hover:text-primary">Home</a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-primary">About Us</span>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-6">
              Our Sweet Story
            </h1>
            <p className="text-lg text-text/80">
              Discover the passion and people behind Sweet Delights Bakery, where every
              cake tells a story and every bite brings joy.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-accent mb-6">
                From Home Kitchen to Beloved Bakery
              </h2>
              <div className="space-y-4">
                <p>
                  Sweet Delights Bakery began in 2015 when founder Emma Richardson started 
                  baking custom cakes from her home kitchen for friends and family. What started 
                  as a passion project quickly gained attention for the exceptional taste and 
                  beautiful designs.
                </p>
                <p>
                  As word spread and demand grew, Emma brought on a small team of talented bakers 
                  and decorators, each bringing their unique skills and creativity. In 2017, we 
                  opened our first brick-and-mortar location, allowing us to serve more customers 
                  and expand our offerings.
                </p>
                <p>
                  Today, Sweet Delights has grown into a beloved local institution, creating 
                  memorable cakes for birthdays, weddings, and special events throughout the 
                  community. While we've grown in size, our commitment to quality, creativity, 
                  and personal service remains at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/6210933/pexels-photo-6210933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Bakery early days" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/6210766/pexels-photo-6210766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Bakery today" 
                className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <SectionHeading 
            title="Our Baking Philosophy" 
            subtitle="The core values that guide everything we create"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl font-semibold text-accent mb-3">
                  {value.title}
                </h3>
                <p className="text-text/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Bakers" 
            subtitle="The talented team behind your favorite cakes and treats"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bakers.map((baker) => (
              <div key={baker.id} className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={baker.image} 
                    alt={baker.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-accent">{baker.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{baker.role}</p>
                  <p className="text-text/80 text-sm">
                    {baker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Highlight */}
      <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")' }}>
        <div className="absolute inset-0 bg-accent/80"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-serif text-3xl font-bold mb-8">
              What Makes Us Different
            </h2>
            <p className="text-xl italic mb-8">
              "At Sweet Delights, we don't just bake cakes – we create edible memories. Each 
              creation is a labor of love, designed to make your special moments even sweeter."
            </p>
            <p className="font-medium">
              — Emma Richardson, Founder
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-light/30">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold text-accent mb-6">
            Ready to Order Your Dream Cake?
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto mb-8">
            Whether you're celebrating a birthday, wedding, or special occasion, we'd love to 
            create something delicious and beautiful just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/menu" className="btn btn-primary">
              Browse Our Cakes
            </a>
            <a href="/contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;