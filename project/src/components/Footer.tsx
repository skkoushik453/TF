import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI/ML Projects", href: "#projects" },
        { name: "Web Development", href: "#projects" },
        { name: "Mobile Apps", href: "#projects" },
        { name: "Custom Projects", href: "#contact" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, text: "techforge81@gmail.com" },
    { icon: MapPin, text: "Available Worldwide" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.02,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      x: 8,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    initial: { width: 0, opacity: 0 },
    hover: { 
      width: "100%", 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full"
          animate={{
            scale: [1, 0.7, 1],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
            x: [0, 50, 0],
            y: [0, -35, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-10"
        >
          <motion.div
            className="col-span-1"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-3 rounded-2xl"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #2563eb, #7c3aed, #ec4899)",
                      "linear-gradient(45deg, #7c3aed, #ec4899, #2563eb)",
                      "linear-gradient(45deg, #ec4899, #2563eb, #7c3aed)",
                      "linear-gradient(45deg, #2563eb, #7c3aed, #ec4899)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="h-7 w-7 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                </motion.div>
              </div>
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                TechForge
              </motion.span>
            </motion.div>
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Empowering students with premium projects across AI/ML, Web Development, 
              Mobile Apps, and more. Your success is our mission.
            </motion.p>
          </motion.div>
          
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
            >
              <motion.h3 
                className="text-lg font-semibold mb-6 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    variants={linkVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    custom={linkIndex}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors relative inline-block"
                    >
                      {link.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                        variants={underlineVariants}
                        initial="initial"
                        whileHover="hover"
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            variants={itemVariants}
          >
            <motion.h3 
              className="text-lg font-semibold mb-6 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Info
            </motion.h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-sm text-gray-300"
                  variants={linkVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="p-2 bg-blue-600/20 rounded-xl"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <contact.icon className="h-4 w-4 text-blue-400" />
                  </motion.div>
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-gray-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            &copy; 2024 TechForge. All rights reserved. Crafted with{' '}
            <motion.span
              className="text-red-400"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ❤️
            </motion.span>
            {' '}for student success.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;