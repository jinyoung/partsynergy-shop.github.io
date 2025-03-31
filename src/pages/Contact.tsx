
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Contact = () => {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Your message has been sent. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemCount={state.items.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-ask-blue">Contact Us</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-sm p-8 h-full">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <p className="mb-6 text-gray-700">
                  Have questions about our products or need technical assistance? Fill out the form and our team will get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <address className="not-italic text-gray-600">
                      123 Electronics Street<br />
                      Gangnam District<br />
                      Seoul, South Korea
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">info@abcsaleskorea.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+82-2-123-4567</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ask-blue/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ask-blue/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ask-blue/50"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Returns">Returns</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ask-blue/50"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-ask-blue text-white py-2 rounded-lg hover:bg-ask-blue/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
