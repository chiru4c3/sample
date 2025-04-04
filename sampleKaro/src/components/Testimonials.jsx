import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ritesh Kumar",
      avatar: "/api/placeholder/80/80",
      platform: "Google",
      platformLogo: "G",
      content: "There was a bit of to and fro but the RegisterKaro team kept me updated on the whole process. Special shout out to Joel for being so helpful!. Overall, I'm very pleased with the service and would definitely recommend it to anyone who's looking for an easy way to register a business.Onwards and upwards!"
    },
    {
      id: 2,
      name: "Priya Sharma",
      avatar: "/api/placeholder/80/80",
      platform: "Trustpilot",
      platformLogo: "T",
      content: "RegisterKaro made the complicated process of company registration surprisingly smooth. Their team was responsive and guided me through every step. Would definitely use their services again!"
    },
    {
      id: 3,
      name: "Amar Singh",
      avatar: "/api/placeholder/80/80",
      platform: "LinkedIn",
      platformLogo: "in",
      content: "As a first-time entrepreneur, I was overwhelmed by the compliance requirements. RegisterKaro simplified everything and helped me get my startup registered quickly. Excellent service!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hear What Our Customers Have To Say</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side content */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-blue-800">Register</span>
                <span className="text-amber-500">Karo</span>
                <span className="text-gray-700"> is used by tens of thousands of founders to start, manage, and grow their business</span>
              </h3>
              
              <div className="mt-6">
                <div className="text-amber-500 text-3xl font-bold">20,000+</div>
                <div className="text-2xl font-semibold text-blue-800">Happy Customers</div>
              </div>
              
              <p className="mt-6 text-gray-600">
                We are one of India's highest rated service provider, we are know for completing Business incorporations and other compliance services in record time, don't have to believe us, read it by yourselves
              </p>
              
              <p className="mt-4 text-sm text-gray-500">
                RegisterKaro is a startup India registered company
              </p>
            </div>
          </motion.div>
          
          {/* Right side testimonial */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Testimonial card */}
            <motion.div 
              key={testimonials[currentTestimonial].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl p-6 relative z-10"
            >
              <div className="mb-6">
                <p className="text-gray-600">Posted on</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {testimonials[currentTestimonial].platformLogo}
                  </div>
                  <span className="text-xl text-blue-500">{testimonials[currentTestimonial].platform}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {testimonials[currentTestimonial].content}
              </p>
              
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-full border-2 border-amber-400 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
                  <div className="flex text-amber-500 mt-1">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Avatar decorations */}
            <div className="absolute top-0 right-0 -mr-8 -mt-4 hidden md:block">
              <motion.div 
                className="w-16 h-16 rounded-full border-2 border-amber-400 overflow-hidden"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <img src="/api/placeholder/80/80" alt="Customer" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            
            <div className="absolute bottom-1/3 right-0 -mr-12 hidden md:block">
              <motion.div 
                className="w-20 h-20 rounded-full border-2 border-amber-400 overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <img src="/api/placeholder/80/80" alt="Customer" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            
            <div className="absolute bottom-0 left-0 -ml-16 hidden md:block">
              <motion.div 
                className="w-24 h-24 rounded-full border-2 border-amber-400 overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <img src="/api/placeholder/80/80" alt="Customer" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 gap-4">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;