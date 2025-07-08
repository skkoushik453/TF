import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -20,
      scale: 1.03,
      rotateY: 5,
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-10"
          animate={{
            scale: [1, 0.5, 1],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-purple-600" />
            </motion.div>
            <span className="text-sm font-medium text-purple-600">Explore Categories</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Project Categories
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <div className={`h-3 bg-gradient-to-r ${category.color}`}></div>
                <div className={`p-8 bg-gradient-to-br ${category.bgColor} relative overflow-hidden`}>
                  {/* Enhanced Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      backgroundPosition: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    }}
                    style={{
                      backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <motion.div
                        className="flex-shrink-0 p-4 bg-white rounded-2xl shadow-xl"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        {category.icon}
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-xl font-bold text-gray-900"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {category.title}
                        </motion.h3>
                        <motion.p 
                          className="text-sm text-gray-500 font-medium"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {category.projects}
                        </motion.p>
                      </div>
                    </div>
                    <motion.p 
                      className="text-gray-600 mb-8 leading-relaxed"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {category.description}
                    </motion.p>
                    <motion.button 
                      onClick={() => handleViewProjects(category.id)}
                     onMouseEnter={() => trackButtonClick(`View ${category.title}`, 'Projects Category Hover')}
                      className={`w-full bg-gradient-to-r ${category.color} text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl text-lg`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      View Projects
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4,
            duration: 1
          }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-purple-200 shadow-xl"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(147, 51, 234, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.p 
              className="text-gray-600 mb-8 text-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Can't find what you're looking for? We create custom projects too!
            </motion.p>
            <motion.a
              href="#contact"
             onClick={() => trackButtonClick('Request Custom Project', 'Projects')}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Request Custom Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Projects Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-8 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {categories.find(c => c.id === selectedCategory)?.title} Projects
                </motion.h3>
                <motion.button
                  onClick={closeModal}
                  className="p-3 hover:bg-gray-100 rounded-2xl transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <motion.div
                      className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                ) : (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-8"
                  >
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        variants={itemVariants}
                        className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-200"
                        whileHover={{ 
                          scale: 1.02,
                          y: -5,
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="flex items-start justify-between mb-6">
                          <motion.h4 
                            className="text-lg font-semibold text-gray-900 flex-1 leading-tight"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {project.title}
                          </motion.h4>
                          <motion.span 
                            className={`px-4 py-2 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)} ml-3`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {project.difficulty}
                          </motion.span>
                        </div>
                        
                        <motion.p 
                          className="text-gray-600 mb-6 text-sm leading-relaxed"
                          whileHover={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <div className="mb-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Code className="h-4 w-4 text-gray-500" />
                            </motion.div>
                            <span className="text-sm font-medium text-gray-700">Technologies:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <motion.span
                                key={index}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-xl text-xs font-medium"
                                whileHover={{ 
                                  scale: 1.05,
                                  backgroundColor: "rgba(59, 130, 246, 0.2)"
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <IndianRupee className="h-5 w-5 text-green-600" />
                            </motion.div>
                            <motion.span 
                              className="text-xl font-bold text-green-600"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              {project.price}
                            </motion.span>
                          </div>
                          <motion.button
                            onClick={handleGetProject}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                            whileHover={{ 
                              scale: 1.05,
                              y: -2,
                              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <span>Get Project</span>
                            <motion.div
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.div>
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                
                {!loading && projects.length === 0 && (
                  <motion.div 
                    className="text-center py-20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-gray-500 text-lg">No projects found for this category.</p>
                  </motion.div>
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