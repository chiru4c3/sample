import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>One Person Company</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>Section 8 Company Registration</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>Nidhi Company Registration</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>Producer Company Registration</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>MSME Registration</span>
              </a>
            </div>
          </div>
          
          {/* Middle Column */}
          <div className="space-y-4">
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>Trademark Registration</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>DSC Registration</span>
              </a>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>GST Registration</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>BIS CRS Certification</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>ISI Mark Certification</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>CDSCO Registration</span>
              </a>
            </div>
            <div className="group cursor-pointer transform hover:translate-x-2 transition-all duration-300 active:translate-x-1 touch-manipulation">
              <a href="#" className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center">
                <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 text-yellow-400" />
                <span>Medical Device Registration</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="group bg-blue-600 hover:bg-yellow-500 text-white py-2 px-6 rounded-md transition-all duration-500 transform hover:scale-110 active:scale-105 touch-manipulation flex items-center relative overflow-hidden">
            <span className="relative z-10">See all the services</span>
            <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-2 relative z-10" />
            <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
        
        <hr className="border-gray-700 my-10" />
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="bg-gray-800 p-3 rounded-full transform transition-all duration-500 hover:scale-125 hover:bg-blue-600 hover:rotate-6 active:scale-110 touch-manipulation">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full transform transition-all duration-500 hover:scale-125 hover:bg-yellow-500 hover:rotate-6 active:scale-110 touch-manipulation">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full transform transition-all duration-500 hover:scale-125 hover:bg-blue-400 hover:rotate-6 active:scale-110 touch-manipulation">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full transform transition-all duration-500 hover:scale-125 hover:bg-blue-700 hover:rotate-6 active:scale-110 touch-manipulation">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full transform transition-all duration-500 hover:scale-125 hover:bg-red-600 hover:rotate-6 active:scale-110 touch-manipulation">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
        
        {/* Company Description */}
        <div className="mb-12 space-y-8">
          <div className="group cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 group-hover:text-blue-400 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 group-hover:after:w-full after:transition-all after:duration-500">Elevate Your Business with RegisterKaro</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              As a leading technology-driven legal services and advisory firm, we empower SMEs and entrepreneurs on their business journey. Our expert team covers business registration, legal compliance, tax filing, IPR registration, and more. With over 200 professionals, we've served 50,000+ satisfied customers, ensuring startup compliance with our country's legal and regulatory systems.
            </p>
          </div>
          
          <div className="group cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 group-hover:text-blue-400 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 group-hover:after:w-full after:transition-all after:duration-500">Navigating Regulatory Affairs</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              In India, regulatory bodies like BIS, CDSCO, RBI, SEBI, and IRDAI hold the keys to licenses and registrations for banks, financial institutions, and insurance businesses. We simplify this process by connecting you with our legal professionals. We understand your needs, handle license or registration applications, liaise with authorities, and deliver the licenses you require.
            </p>
          </div>
          
          <div className="group cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 group-hover:text-blue-400 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 group-hover:after:w-full after:transition-all after:duration-500">Environmental Solutions</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              RegisterKaro offers a comprehensive range of services to address environmental challenges in business. Our seasoned environmental experts, with over a decade of experience, provide comprehensive solutions for environmental compliance and advisory, including battery waste management, plastic waste management, and e-waste management.
            </p>
          </div>
          
          <div className="group cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 group-hover:text-blue-400 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 group-hover:after:w-full after:transition-all after:duration-500">Business Registration Expertise</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              We are renowned for facilitating business registration, whether it's as a private limited company, one-person company, Section 8 company, LLP, public company, or Nidhi company. Our consultancy services extend from business setup from scratch to ongoing compliance.
            </p>
          </div>
          
          <div className="group cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 group-hover:text-blue-400 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 group-hover:after:w-full after:transition-all after:duration-500">Safeguarding Intellectual Property</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Intellectual property protection is vital for modern businesses. Our team excels in IP registration services such as trademark registration, handling objections, managing assignments, copyright registration, and patent registration.
            </p>
          </div>
          
          <div className="group cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 group-hover:text-blue-400 transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 group-hover:after:w-full after:transition-all after:duration-500">Simplifying Taxation</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              RegisterKaro is your all-in-one solution for tax-related needs. Our dedicated professionals assist with GST registration, professional tax registration, GST return filing, TDS return filing, income tax return filing, and secretarial audits. Your tax matters are in capable hands with RegisterKaro.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-700 my-10" />
        
        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-4">
            By continuing this page, you agree to our 
            <a href="#" className="text-blue-400 hover:text-yellow-400 ml-1 transition-colors duration-300 relative inline-block hover:transform hover:translate-y-[-2px]">Terms & Conditions</a>, 
            <a href="#" className="text-blue-400 hover:text-yellow-400 mx-1 transition-colors duration-300 relative inline-block hover:transform hover:translate-y-[-2px]">Privacy Policy</a> 
            and 
            <a href="#" className="text-blue-400 hover:text-yellow-400 ml-1 transition-colors duration-300 relative inline-block hover:transform hover:translate-y-[-2px]">Refund Policy</a>.
          </p>
          
          <p className="mb-4 hover:text-white transition-colors duration-300">© 2024 - Safe Ledger Private Limited. All rights reserved.</p>
          
          <p className="text-xs max-w-3xl mx-auto hover:text-gray-300 transition-colors duration-300">
            Please note that we are a facilitating platform enabling access to reliable professionals. We are not a law firm and do not provide legal services ourselves. The information on this website is for the purpose of knowledge only and should not be relied upon as legal advice or opinion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;