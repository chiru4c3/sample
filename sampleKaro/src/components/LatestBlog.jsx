import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Compliance for Private Limited Companies in India",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      date: "March 29, 2025",
      time: "08:26 AM",
      author: "Muskaan Hiran",
      excerpt: "Learn about the essential compliance requirements for private limited companies operating in India."
    },
    {
      id: 2,
      title: "Government Schemes for Startups in India",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&h=400&fit=crop",
      date: "March 29, 2025",
      time: "07:41 AM",
      author: "Komal Sharma",
      excerpt: "Discover various government schemes and benefits available for startups in India."
    },
    {
      id: 3,
      title: "Mandatory OPC Compliance Requirements: Full Guide",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
      date: "March 29, 2025",
      time: "07:05 AM",
      author: "Om Adesh Ghai",
      excerpt: "A comprehensive guide to understanding One Person Company compliance requirements in India."
    },
    {
      id: 4,
      title: "How to Register a Trademark for Your Business in India",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop",
      date: "March 28, 2025",
      time: "02:15 PM",
      author: "Ananya Patel",
      excerpt: "Step-by-step process to register and protect your business trademark in India."
    },
    {
      id: 5,
      title: "GST Registration Process Simplified for Businesses",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
      date: "March 28, 2025",
      time: "11:30 AM",
      author: "Vikram Mehta",
      excerpt: "Simplifying the GST registration process for new and existing businesses in India."
    }
  ];
  
  const blogsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const displayedBlogs = blogPosts.slice(
    currentPage * blogsPerPage, 
    (currentPage + 1) * blogsPerPage
  );

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-amber-100 px-4 py-2 rounded-full text-amber-600 font-semibold mb-4">
            LATEST BLOG
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 hidden">Latest Blog Posts</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              onHoverStart={() => setHoveredBlog(blog.id)}
              onHoverEnd={() => setHoveredBlog(null)}
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-50"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: hoveredBlog === blog.id ? 0.7 : 0.3 }}
                  />
                  
                  {/* Logo overlay */}
                  <div className="absolute top-4 right-4 bg-white p-1 rounded">
                    <div className="text-xs font-bold">
                      <span className="text-blue-800">Register</span>
                      <span className="text-amber-500">Karo</span>
                    </div>
                  </div>
                  
                  {/* Title overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 text-white ${hoveredBlog === blog.id ? 'bg-gradient-to-t from-blue-900 to-transparent' : ''}`}>
                    <div className={`bg-${index === 1 ? 'blue' : index === 2 ? 'amber' : 'orange'}-500 inline-block px-3 py-1 rounded-lg text-white text-sm mb-2`}>
                      READ MORE
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-700 transition-colors">
                  {blog.title}
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Clock size={14} className="mr-1" />
                  <span>{blog.date} at {blog.time}</span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <User size={14} className="mr-1" />
                  <span>Written by {blog.author}</span>
                </div>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredBlog === blog.id ? "auto" : 0,
                    opacity: hoveredBlog === blog.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3"
                >
                  <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                  <motion.button
                    className="text-blue-600 flex items-center gap-1 text-sm mt-2 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Read full article
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-amber-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentPage(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile navigation arrows */}
        <div className="flex justify-center mt-6 gap-4 md:hidden">
          <motion.button
            onClick={prevPage}
            className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white"
            whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            onClick={nextPage}
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white"
            whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;