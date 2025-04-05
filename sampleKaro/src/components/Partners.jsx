import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const partnerLogos = [
  { 
    name: 'Google', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png', 
    link: '#' 
  },
  { 
    name: 'Microsoft', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png', 
    link: '#' 
  },
  { 
    name: 'Apple', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png', 
    link: '#' 
  },
  { 
    name: 'Amazon', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png', 
    link: '#' 
  },
  { 
    name: 'Meta', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png', 
    link: '#' 
  },
  { 
    name: 'IBM', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2048px-IBM_logo.svg.png', 
    link: '#' 
  },
  { 
    name: 'Netflix', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png', 
    link: '#' 
  },
  { 
    name: 'Tesla', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/600px-Tesla_logo.png', 
    link: '#' 
  },
  { 
    name: 'Adobe', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_logo.png/484px-Adobe_Corporate_logo.png', 
    link: '#' 
  },
  { 
    name: 'Salesforce', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png', 
    link: '#' 
  },
  { 
    name: 'Oracle', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png', 
    link: '#' 
  },
  { 
    name: 'Intel', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png', 
    link: '#' 
  },
];

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('partners-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();
    };
  }, []);
  
  // Logo animation variants
  const logoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const logoVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  // Floating animation for logos
  const floatingAnimation = (index) => ({
    y: [0, -8, 0],
    transition: {
      duration: 3 + (index % 3) * 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: index * 0.1 % 1
    }
  });

  return (
    <section id="partners-section" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We partner with the best
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your business needs numerous expertise and that's why we are providing you the best services with the best
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={logoContainerVariants}
        >
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              variants={logoVariants}
            >
              <motion.div
                className="w-20 h-20 flex items-center justify-center bg-white p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  scale: 1.25, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ 
                  scale: 0.95,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
                animate={isVisible ? floatingAnimation(index) : {}}
              >
                <motion.img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-10 max-w-full object-contain filter grayscale"
                  whileHover={{ 
                    grayscale: 0,
                    rotate: index % 2 === 0 ? [0, -5, 5, -3, 0] : [0, 5, -5, 3, 0],
                    transition: {
                      grayscale: { duration: 0.2 },
                      rotate: { duration: 0.5, ease: "easeInOut" }
                    }
                  }}
                />
              </motion.div>
              <motion.span 
                className="mt-3 text-sm font-medium text-gray-600"
                whileHover={{ 
                  scale: 1.05, 
                  color: "#2563EB",
                  transition: { duration: 0.2 }
                }}
              >
                {partner.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1E40AF",
              boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium">Become a partner</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;