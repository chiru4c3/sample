import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaBuilding, FaFileContract } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Small Business & Startup Accounts",
      description: "Perfect for businesses with 0-10 employees. We ensure your business meets all statutory requirements with personalized support.",
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      features: [
        "Statutory compliance",
        "Basic bookkeeping",
        "Tax planning",
        "Annual accounts",
        "Personal support"
      ]
    },
    {
      title: "Growing Business Package",
      description: "Tailored for businesses with 11-50 employees. Additional support to help you reach your business goals.",
      icon: <FaChartLine className="text-4xl text-primary mb-4" />,
      features: [
        "Advanced reporting",
        "Business advisory",
        "Growth planning",
        "Cash flow management",
        "Performance tracking"
      ]
    },
    {
      title: "Scale-Up Company Offer",
      description: "Comprehensive solution for businesses with 50+ employees. Focus on compliance, reporting & performance analysis.",
      icon: <FaBuilding className="text-4xl text-primary mb-4" />,
      features: [
        "Strategic planning",
        "Risk management",
        "Financial analysis",
        "Corporate governance",
        "Investment planning"
      ]
    },
    {
      title: "Company Formation Services",
      description: "Complete guidance and support for setting up your new business entity.",
      icon: <FaFileContract className="text-4xl text-primary mb-4" />,
      features: [
        "Company registration",
        "Legal documentation",
        "Bank account setup",
        "Compliance setup",
        "Initial guidance"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your business needs. From startups to established companies,
            we have tailored solutions to support your growth journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-left w-full">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-primary mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

