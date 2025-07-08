import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const trackButtonClick = (buttonName, section) => {
    console.log(`Button clicked: ${buttonName} in ${section}`);
  };

  // Minimal floating elements for better performance
  const floatingElements = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 hidden md:block"
      style={{
        left: `${15 + i * 20}%`,
        top: `${25 + i * 15}%`,
        animation: `float-${i} ${8 + i * 2}s ease-in-out infinite`
      }}
    />
  ));

  // Fast, simple animations
  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const staggerVariants = {
    initial: { opacity: 0, y: 15 },
    animate: (delay) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: delay * 0.1
      }
    })
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0">
        {floatingElements}
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-5 hidden md:block" />
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-5 hidden md:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 mb-8 shadow-lg">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Premium Student Projects</span>
              <Zap className="h-5 w-5 text-yellow-500" />
            </div>
          </motion.div>

          <motion.h1
            variants={staggerVariants}
            initial="initial"
            animate="animate"
            custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Premium Student
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Projects
            </span>
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
            <a
              href="#projects"
              onClick={() => trackButtonClick('Browse Projects', 'Hero')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 group shadow-xl active:scale-95"
            >
              <span>Browse Projects</span>
              <ArrowRight className="h-6 w-6" />
            </a>
            <a
              href="#contact"
              onClick={() => trackButtonClick('Get Custom Project', 'Hero')}
              className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
            >
              Get Custom Project
            </a>
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
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className={`p-2 rounded-xl ${item.bgColor}`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <span className="font-semibold text-gray-800">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CSS animations for floating elements */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-8px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(12px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-18px) translateX(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
