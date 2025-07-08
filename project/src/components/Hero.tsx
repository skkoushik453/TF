import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Sparkles, Zap } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
      animate={{
        x: [0, 100 + i * 20, 0],
        y: [0, -100 - i * 15, 0],
        rotate: [0, 360],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 8 + i * 1.5,  // Reduced duration from 12 + i*2
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.4          // Reduced delay from i * 0.8
      }}
      style={{
        left: `${10 + i * 12}%`,
        top: `${20 + i * 8}%`,
      }}
    />
  ));

  const titleVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,       // Reduced from 0.8
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,      // Reduced from 0.6
        ease: "easeOut",
        delay: 0.1          // Reduced from 0.2
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.35,     // Reduced from 0.5
        ease: "easeOut",
        delay: 0.2          // Reduced from 0.4
      }
    },
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: {
        duration: 0.15,    // Reduced from 0.2
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1, ease: "easeInOut" }
    }
  };

  const statsVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,      // Reduced from 0.6
        ease: "easeOut",
        delay: 0.3,         // Reduced from 0.6
        staggerChildren: 0.1 // Reduced from 0.2
      }
    }
  };

  const statItemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,      // Reduced from 0.4
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.15,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {floatingElements}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,          // Reduced from 10
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-10"
          animate={{
            scale: [1, 0.7, 1],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,          // Reduced from 8
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,          // Reduced from 12
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2            // Reduced from 2
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            variants={titleVariants}
            initial="initial"
            animate="animate"
            className="mb-6"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 mb-8 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}  {/* Faster rotation */}
              >
                <Sparkles className="h-5 w-5 text-purple-600" />
              </motion.div>
              <span className="text-sm font-medium text-purple-600">Premium Student Projects</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 1.5,            // Reduced from 2
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.25               // Reduced from 0.5
                }}
              >
                <Zap className="h-5 w-5 text-yellow-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={titleVariants}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Premium Student
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,           // Reduced from 4
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Projects
            </motion.span>
          </motion.h1>

          <motion.p
            variants={subtitleVariants}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Get high-quality, production-ready projects for AI/ML, Web Development, Full-Stack, Mobile Apps, and more. 
            Perfect for students looking to excel in their coursework and build impressive portfolios.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              onClick={() => trackButtonClick('Browse Projects', 'Hero')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 group shadow-xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Browse Projects</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} {/* Faster */}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </motion.a>
            <motion.a
              href="#contact"
              onClick={() => trackButtonClick('Get Custom Project', 'Hero')}
              className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Custom Project
            </motion.a>
          </motion.div>
          
          <motion.div
            variants={statsVariants}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-600"
          >
            {[
              { icon: Star, text: "500+ Projects", color: "text-yellow-500", bgColor: "bg-yellow-100" },
              { icon: Users, text: "1000+ Students", color: "text-green-500", bgColor: "bg-green-100" },
              { icon: Award, text: "100% Success Rate", color: "text-purple-500", bgColor: "bg-purple-100" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-100"
                variants={statItemVariants}
                whileHover="hover"
              >
                <motion.div
                  className={`p-2 rounded-xl ${item.bgColor}`}
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,        // Reduced from 3
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.4 // Reduced from 0.8
                  }}
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </motion.div>
                <span className="font-semibold text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
