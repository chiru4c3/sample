import React from 'react';
import { motion } from 'framer-motion';

const Grow = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Grow With Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join our community of innovators and entrepreneurs to accelerate your growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Growth Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Innovation Hub</h3>
            <p className="text-gray-400">
              Access cutting-edge resources and tools to bring your ideas to life
            </p>
          </motion.div>

          {/* Growth Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Expert Mentorship</h3>
            <p className="text-gray-400">
              Learn from industry leaders and experienced professionals
            </p>
          </motion.div>

          {/* Growth Card 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
            <p className="text-gray-400">
              Connect with partners and opportunities worldwide
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
            Start Growing Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Grow;
