
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const About = () => {
  const { state } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemCount={state.items.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-ask-blue">About ASK</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4 text-gray-700">
                ABC Sales Korea (ASK) was founded in 2015 with a simple mission: to provide high-quality electronic components and manufacturing parts to businesses and hobbyists across South Korea. What started as a small shop in Seoul has grown into a trusted supplier for companies, educational institutions, and electronics enthusiasts nationwide.
              </p>
              <p className="mb-4 text-gray-700">
                Our team consists of experienced engineers and electronics experts who are passionate about technology and committed to helping our customers find the perfect components for their projects. We carefully select and test all our products to ensure they meet our high standards of quality and reliability.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong>Quality:</strong> We never compromise on the quality of our products.</li>
                <li><strong>Customer Service:</strong> We're dedicated to providing exceptional service and support.</li>
                <li><strong>Knowledge:</strong> We share our expertise to help customers make informed decisions.</li>
                <li><strong>Innovation:</strong> We stay at the forefront of electronic component technology.</li>
                <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
              <p className="text-gray-700">
                At ASK, we're committed to supporting the growing electronics and maker community in South Korea. We regularly host workshops, sponsor robotics competitions, and collaborate with educational institutions to inspire the next generation of engineers and innovators.
              </p>
            </div>
          </div>
          
          <div className="bg-ask-blue/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-ask-blue">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">Min-joon Kim</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                    alt="CTO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">Ji-woo Park</h3>
                <p className="text-gray-600">CTO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                    alt="Operations Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">Seo-yeon Lee</h3>
                <p className="text-gray-600">Operations Manager</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
