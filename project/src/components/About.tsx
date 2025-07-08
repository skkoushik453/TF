import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

const About = () => {
  // Optimized floating particles - fewer elements, smoother animations
  const floatingParticles = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
      animate={{
        x: [0, 40 + i * 10, 0],
        y: [0, -30 - i * 8, 0],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      }}
      style={{
        left: `${10 + i * 15}%`,
        top: `${20 + i * 12}%`,
      }}
    />
  ));

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Quality Assured",
      description: "Every project is thoroughly tested and comes with complete documentation",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Industry Standard",
      description: "Built using latest technologies and following best practices",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Student Focused",
      description: "Designed specifically for academic requirements and learning",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Fast Delivery",
      description: "Quick turnaround time with instant download links",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  // Simplified animations for better mobile performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced floating background with optimized particles */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {floatingParticles}
        
        {/* Larger floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 25, 0],
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-15"
          animate={{
            scale: [1, 0.7, 1],
            x: [0, -20, 0],
            y: [0, 10, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-12"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 35, 0],
            y: [0, -25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose TechForge?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating high-quality projects that help students excel in their academic journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full relative overflow-hidden">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} shadow-xl`}>
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.2
          }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Join thousands of students who have already boosted their grades with our premium projects
              </p>
              <a
                href="#contact"
                onClick={() => trackButtonClick('Get Started Today', 'About')}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg active:scale-95"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
