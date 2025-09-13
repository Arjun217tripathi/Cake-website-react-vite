import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Contact info
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      content: "(123) 456-7890"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "hello@sweetdelights.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      content: "123 Bakery Lane, Sweet City, SC 12345"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Hours",
      content: "Mon-Fri: 8am - 6pm\nSat-Sun: 9am - 5pm"
    }
  ];
  
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
  
  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container-custom">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Have questions, special requests, or ready to place an order? We'd love to hear from you!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              {submitSuccess ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-medium mb-2">Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name}</p>
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
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select a subject</option>
                        <option value="Order Inquiry">Order Inquiry</option>
                        <option value="Custom Cake Request">Custom Cake Request</option>
                        <option value="Catering Question">Catering Question</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="font-serif text-xl font-bold text-accent mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-text">{info.title}</h3>
                      <p className="text-text/70 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-text mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-text/70 hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  </a>
                  <a href="#" className="text-text/70 hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772 4.9 4.9 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.772-1.153 4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772A4.9 4.9 0 0 0 18.55 2.525c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.975.044 1.504.207 1.857.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.054.058 1.37.058 4.04s-.01 2.986-.058 4.04c-.044.975-.207 1.504-.344 1.857-.182.467-.399.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058s-2.986-.01-4.04-.058c-.975-.044-1.504-.207-1.857-.344-.467-.182-.8-.399-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.04s.01-2.986.058-4.04c.044-.975.207-1.504.344-1.857.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.04-.058zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1.802a2.198 2.198 0 1 0 0-4.396 2.198 2.198 0 0 0 0 4.396zM16.5 7.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/></svg>
                  </a>
                  <a href="#" className="text-text/70 hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175903047375!2d-73.99089492439!3d40.73773437138287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4119ce269%3A0x9dec0c979b575972!2sUnion%20Square%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1698951925690!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bakery Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;