import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, UserCircle, BarChart3, ChevronRight } from 'lucide-react';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const businessTypes = [
    { 
      icon: <UserCircle className="text-white w-8 h-8" />, 
      title: "Sole Trader", 
      color: "bg-blue-800",
      hoverColor: "bg-blue-700",
      description: "Perfect for individuals starting their business journey"
    },
    { 
      icon: <Users className="text-white w-8 h-8" />, 
      title: "Limited Company", 
      color: "bg-amber-400",
      hoverColor: "bg-amber-300",
      description: "Ideal for businesses ready to formalize their structure"
    },
    { 
      icon: <BarChart3 className="text-white w-8 h-8" />, 
      title: "Growing Business",
      color: "bg-blue-800",
      hoverColor: "bg-blue-700",
      description: "Supporting your business as it scales to new heights"
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <motion.p 
              className="text-blue-600 font-semibold mb-3 text-center"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              WHAT WE DO
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Receive support at every stage of business development.
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8 text-center"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Launch, grow and scale with ease. Each of our clients has a dedicated team that is committed to answering all queries within 24 hours, so you can rely on our helpful and professional support throughout your business journey.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <motion.button 
                className="px-6 py-3 bg-amber-400 text-gray-800 font-medium rounded-full shadow-md relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative z-10">Popular Services</span>
                <motion.span 
                  className="absolute inset-0 bg-amber-300 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween", duration: 0.3 }}
                ></motion.span>
              </motion.button>
              
              <motion.button 
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-full flex items-center gap-2 border border-blue-200 shadow-md group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>Get Started</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:text-blue-800 transition-colors" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="relative h-32 mt-12 hidden md:block">
            <motion.div 
              className="absolute top-0 right-1/4 w-16 h-16 rounded-full bg-blue-200 opacity-50"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.5 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-0 left-1/3 w-24 h-24 rounded-full bg-blue-400 opacity-30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.3 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            ></motion.div>
            <motion.div 
              className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-amber-300 opacity-40"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.4 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            ></motion.div>
          </div>
        </motion.div>
        
        {/* Business Types Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8 relative py-8 max-w-4xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {businessTypes.map((type, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 w-full md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + (index * 0.2) }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div 
                className={`${type.color} p-6 rounded-lg shadow-md w-24 h-24 flex items-center justify-center cursor-pointer`}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  backgroundColor: type.hoverColor,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {type.icon}
              </motion.div>
              <div className="text-center">
                <p className="font-semibold text-gray-800">{type.title}</p>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredIndex === index ? "auto" : 0,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 text-sm mt-2">{type.description}</p>
                  <motion.button
                    className="text-blue-600 flex items-center gap-1 text-sm mt-2 mx-auto"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
          
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 w-1/4 h-0.5 bg-gray-200">
            <motion.div 
              className="h-full bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
            ></motion.div>
          </div>
          <div className="hidden md:block absolute top-1/2 right-1/4 w-1/4 h-0.5 bg-gray-200">
            <motion.div 
              className="h-full bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.8, duration: 1 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;