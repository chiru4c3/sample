import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setState({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="relative group cursor-pointer">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-500">
              CONTACT US
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:from-blue-600 group-hover:to-blue-400 transform origin-left transition-all duration-500 group-hover:scale-x-110"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-102 active:shadow-lg touch-manipulation">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors duration-300 animate-pulse hover:animate-none">
                  <MapPin className="text-blue-600 w-6 h-6 group-hover:text-yellow-500 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">Main Office</h3>
                  <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                    Safe Ledger Private Limited<br />
                    #101, Oxford Towers, 139, HAL<br />
                    Old Airport Rd, Kodihalli,<br />
                    Bengaluru, Karnataka<br />
                    560008
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-102 active:shadow-lg touch-manipulation group">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <Phone className="text-blue-600 w-6 h-6 group-hover:text-yellow-500 transition-colors duration-300 group-hover:rotate-12 transform" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Make a call</h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    Phone: <a href="tel:+918447746183" className="text-blue-600 hover:text-yellow-500 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">+91 84477 46183</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-102 active:shadow-lg touch-manipulation group">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <Clock className="text-blue-600 w-6 h-6 group-hover:text-yellow-500 transition-colors duration-300 group-hover:animate-spin group-hover:animate-duration-[3000ms]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Working Hours</h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    Monday–Friday: 9:00– 06:00<br />
                    Saturday–Sunday: Holiday
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-102 active:shadow-lg touch-manipulation group">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <Mail className="text-blue-600 w-6 h-6 group-hover:text-yellow-500 transition-colors duration-300 group-hover:translate-x-1 transform" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Send an email</h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    <a href="mailto:support@registerkaro.in" className="text-blue-600 hover:text-yellow-500 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">support@registerkaro.in</a><br />
                    <a href="mailto:admin@registerkaro.in" className="text-blue-600 hover:text-yellow-500 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">admin@registerkaro.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-500 hover:text-blue-600 transition-colors duration-300">Contact Us</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-yellow-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-yellow-400"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-yellow-400"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-yellow-400"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="group bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-blue-600 hover:to-blue-400 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 active:scale-100 touch-manipulation flex items-center"
                >
                  <span>Send Now</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;