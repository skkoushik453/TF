import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Brain, Globe, Layers, Smartphone, Database, Shield, X, ExternalLink, Code, IndianRupee, Clock, Sparkles } from 'lucide-react';
import { trackProjectView, trackButtonClick } from '../utils/analytics';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  difficulty: string;
  price: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    {
      id: 'ai-ml',
      icon: <Brain className="h-8 w-8 text-pink-500" />,
      title: "AI/ML Projects",
      description: "Machine Learning models, Deep Learning, Computer Vision, NLP projects",
      projects: "150+ Projects",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      id: 'web-development',
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Web Development",
      description: "Frontend, Backend, Full-stack web applications with modern frameworks",
      projects: "200+ Projects",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      id: 'full-stack',
      icon: <Layers className="h-8 w-8 text-purple-500" />,
      title: "Full-Stack Apps",
      description: "Complete web applications with database integration and authentication",
      projects: "120+ Projects",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      id: 'mobile-apps',
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      projects: "80+ Projects",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 'database',
      icon: <Database className="h-8 w-8 text-orange-500" />,
      title: "Database Projects",
      description: "Database design, management systems, and data analytics projects",
      projects: "90+ Projects",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="h-8 w-8 text-indigo-500" />,
      title: "Cybersecurity",
      description: "Security tools, ethical hacking, and cybersecurity applications",
      projects: "60+ Projects",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    }
  ];

  const fetchProjects = async (categoryId: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/projects/${categoryId}`);
      const data = await response.json();
      if (data.success) {
        setProjects(data.projects);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewProjects = (categoryId: string) => {
    setSelectedCategory(categoryId);
    trackProjectView(categoryId);
    fetchProjects(categoryId);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setProjects([]);
  };

  const handleGetProject = () => {
    trackButtonClick('Get Project', 'Projects Modal');
    closeModal();
    
    // Add a small delay to ensure modal is closed before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        // Calculate the offset to account for any fixed headers
        const headerHeight = 80; // Adjust this value based on your header height
        const elementPosition = contactSection.offsetTop - headerHeight;
        
        // Smooth scroll to the contact section
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn('Contact section not found');
        // Fallback: try to find contact section by class or other selectors
        const contactByClass = document.querySelector('.contact-section') || 
                              document.querySelector('[data-section="contact"]') ||
                              document.querySelector('#contact-form');
        
        if (contactByClass) {
          contactByClass.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        } else {
          // Last resort: scroll to a reasonable position (not footer)
          const pageHeight = document.body.scrollHeight;
          const windowHeight = window.innerHeight;
          const scrollPosition = Math.max(0, pageHeight - windowHeight * 1.5);
          
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 300); // 300ms delay to ensure modal closing animation completes
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Simplified animations for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

  // Simplified hover effects for mobile
  const cardHoverVariants = {
    hover: isMobile ? {} : {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: isMobile ? 0.95 : 0.8,
      y: isMobile ? 20 : 100
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.25 : 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: isMobile ? 0.95 : 0.8,
      y: isMobile ? 20 : 100,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Simplified background elements for mobile */}
      {!isMobile && !shouldReduceMotion && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-purple-200 mb-6 md:mb-8 shadow-lg"
            whileHover={!isMobile ? { 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(147, 51, 234, 0.2)"
            } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              animate={!shouldReduceMotion ? { rotate: 360 } : {}}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
            </motion.div>
            <span className="text-xs md:text-sm font-medium text-purple-600">Explore Categories</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
          >
            Project Categories
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Explore our comprehensive collection of projects across different technologies and domains
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <div className={`h-2 md:h-3 bg-gradient-to-r ${category.color}`}></div>
                <div className={`p-6 md:p-8 bg-gradient-to-br ${category.bgColor} relative overflow-hidden`}>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                      <motion.div
                        className="flex-shrink-0 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-lg"
                        whileHover={!isMobile ? { 
                          rotate: 15,
                          scale: 1.05
                        } : {}}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {category.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {category.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 font-medium">
                          {category.projects}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <button 
                      onClick={() => handleViewProjects(category.id)}
                      onMouseEnter={() => trackButtonClick(`View ${category.title}`, 'Projects Category Hover')}
                      className={`w-full bg-gradient-to-r ${category.color} text-white py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-lg active:scale-95`}
                    >
                      View Projects
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            delay: 0.2
          }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-10 border border-purple-200 shadow-xl">
            <p className="text-gray-600 mb-6 md:mb-8 text-lg md:text-xl">
              Can't find what you're looking for? We create custom projects too!
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                trackButtonClick('Request Custom Project', 'Projects');
                
                // Enhanced scroll to contact for the custom project button
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerHeight = 80;
                    const elementPosition = contactSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }, 100);
              }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-base md:text-lg active:scale-95"
            >
              Request Custom Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* Optimized Projects Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl md:rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 md:p-8 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {categories.find(c => c.id === selectedCategory)?.title} Projects
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 md:p-3 hover:bg-gray-100 rounded-xl md:rounded-2xl transition-colors active:scale-95"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                ) : (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-6 md:gap-8"
                  >
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        variants={itemVariants}
                        className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                      >
                        <div className="flex items-start justify-between mb-4 md:mb-6">
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 flex-1 leading-tight pr-2">
                            {project.title}
                          </h4>
                          <span className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                            {project.difficulty}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 md:mb-6 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="mb-4 md:mb-6">
                          <div className="flex items-center space-x-2 mb-2 md:mb-3">
                            <Code className="h-4 w-4 text-gray-500" />
                            <span className="text-xs md:text-sm font-medium text-gray-700">Technologies:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-lg md:rounded-xl text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <IndianRupee className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                            <span className="text-lg md:text-xl font-bold text-green-600">
                              {project.price}
                            </span>
                          </div>
                          <button
                            onClick={handleGetProject}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 shadow-lg active:scale-95"
                          >
                            <span>Get Project</span>
                            <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                
                {!loading && projects.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">No projects found for this category.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
