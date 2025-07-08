import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Sparkles, Zap } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  // Optimized floating elements with beautiful animations
  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
      style={{
        left: `${10 + i * 15}%`,
        top: `${20 + i * 12}%`,
        animation: `float-${i} ${6 + i * 1.5}s ease-in-out infinite`
      }}
    />
  ));

  // Enhanced but fast animations
  const fadeInVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const staggerVariants = {
    initial: { opacity: 0, y: 25, scale: 0.9 },
    animate: (delay) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: delay * 0.15
      }
    })
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0 15px 35px rgba(59, 130, 246, 0.25)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
      {/* Enhanced floating background */}
      <div className="absolute inset-0">
        {floatingElements}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-10"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            className="mb-6"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 mb-8 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(147, 51, 234, 0.15)"
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
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
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              >
                <Zap className="h-5 w-5 text-yellow-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={staggerVariants}
            initial="initial"
            animate="animate"
            custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Premium Student
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Projects
            </motion.span>
          </motion.h1>

          <motion.p
            variants={staggerVariants}
            initial="initial"
            animate="animate"
            custom={2}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Get high-quality, production-ready projects for AI/ML, Web Development, Full-Stack, Mobile Apps, and more. 
            Perfect for students looking to excel in their coursework and build impressive portfolios.
          </motion.p>

          <motion.div
            variants={staggerVariants}
            initial="initial"
            animate="animate"
            custom={3}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              onClick={() => trackButtonClick('Browse Projects', 'Hero')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 group shadow-xl"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Browse Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </motion.a>
            <motion.a
              href="#contact"
              onClick={() => trackButtonClick('Get Custom Project', 'Hero')}
              className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Custom Project
            </motion.a>
          </motion.div>
          
          <motion.div
            variants={staggerVariants}
            initial="initial"
            animate="animate"
            custom={4}
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
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`p-2 rounded-xl ${item.bgColor}`}
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
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

      {/* CSS animations for floating elements */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-25px) translateX(15px) scale(1.2); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-20px) translateX(-12px) scale(1.1); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-30px) translateX(18px) scale(1.3); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-22px) translateX(-15px) scale(1.15); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-28px) translateX(20px) scale(1.25); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-18px) translateX(-8px) scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
