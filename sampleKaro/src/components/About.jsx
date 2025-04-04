import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { 
      title: 'Affordable',
      hasCheckMark: true,
      description: 'Cost-effective business solutions'
    },
    { 
      title: 'Compliance Ensured',
      hasCheckMark: true,
      description: 'Stay compliant with all regulations'
    },
    { 
      title: 'Simplified Process',
      hasCheckMark: true,
      description: 'Easy and streamlined procedures'
    },
    { 
      title: 'On-time Service',
      hasCheckMark: true,
      description: 'Punctual delivery guaranteed'
    },
    { 
      title: 'Instant Response',
      hasCheckMark: true,
      description: 'Quick and efficient communication'
    },
    { 
      title: 'Industry Experts',
      hasCheckMark: true,
      description: 'Guidance from experienced professionals'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Ratings Card */}
          <div
            className={`bg-white p-8 rounded-xl shadow-lg text-center transform 
                       hover:scale-105 transition-all duration-500 ease-in-out
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex justify-center text-yellow-400 mb-4 animate-pulse">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} className="w-7 h-7" />
              ))}
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-3">
              <Counter end={100} />+
            </div>
            <p className="text-lg text-gray-600">Ratings</p>
          </div>

          {/* Trusted Clients Card */}
          <div
            className={`bg-white p-8 rounded-xl shadow-lg text-center transform 
                       hover:scale-105 transition-all duration-500 ease-in-out
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="text-3xl font-bold text-gray-800 mb-3">
              <Counter end={20000} />+
            </div>
            <p className="text-lg text-gray-600">Trusted Clients all over India</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-20">
          <h2 
            className={`text-4xl font-bold text-gray-900 mb-6 
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                       transition-all duration-700 ease-in-out`}
          >
            Why Choose Us
          </h2>
          <p 
            className={`text-xl text-gray-600 max-w-3xl mx-auto mb-16 
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                       transition-all duration-700 ease-in-out`}
            style={{ transitionDelay: '200ms' }}
          >
            Our All-In-One Platform And Team Of Experts will help direct you in the right path 
            and ensure that your business starts the right way in record time.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg 
                           transform hover:scale-105 hover:shadow-xl 
                           transition-all duration-500 ease-in-out
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  {feature.hasCheckMark ? (
                    <FaCheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
                  ) : null}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
