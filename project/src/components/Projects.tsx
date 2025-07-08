import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Globe, Layers, Smartphone, Database, Shield, X, ExternalLink, Code, IndianRupee, Sparkles } from 'lucide-react';
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
        staggerChildren: 0.08,
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
        duration: 0.5,
        ease: "easeOut"
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
        duration: 0.3,
        ease: "easeOut"
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
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
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
        {/* You can keep the rest of the code as-is until the modal section */}
        {/* ... Skipping identical blocks for brevity ... */}

        {/* Modal Projects Display */}
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
                          {/* ... Title, Difficulty, Description ... */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <motion.span
                                key={index}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-xl text-xs font-medium"
                                whileHover={{
                                  scale: 1.05,
                                  backgroundColor: "rgba(59, 130, 246, 0.2)"
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02, duration: 0.3, ease: "easeOut" }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
