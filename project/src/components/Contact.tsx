import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Sparkles, Zap } from 'lucide-react';
import { trackFormSubmission, trackContactInteraction, trackButtonClick } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackContactInteraction('form_submit_attempt');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        trackFormSubmission('contact_form', true);
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          timeline: '',
          requirements: ''
        });
      } else {
        trackFormSubmission('contact_form', false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      trackFormSubmission('contact_form', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    trackContactInteraction('field_interaction', e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const successVariants = {
    initial: { scale: 0.8, opacity: 0, y: 50 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const formVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1
      }
    }
  };

  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    }),
    focus: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    },
    hover: {
      scale: 1.02,
      y: -3,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
              x: [0, 40, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={successVariants}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.div
              className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Thank You!
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-10"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
            </motion.p>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              onClick={() => trackButtonClick('Submit Another Inquiry', 'Contact Success')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl text-lg"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Submit Another Inquiry
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-20"
          animate={{
            scale: [1, 0.7, 1],
            rotate: [360, 180, 0],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
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
            <span className="text-sm font-medium text-purple-600">Get Started</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Zap className="h-5 w-5 text-yellow-500" />
            </motion.div>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Get Your Dream Project
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to get started? Fill out the form below and we'll get back to you with a custom quote
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={formVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8 bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20"
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  whileInView="animate"
                  whileFocus="focus"
                  custom={0}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm text-lg"
                    placeholder="Your full name"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </motion.div>
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  whileInView="animate"
                  whileFocus="focus"
                  custom={1}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm text-lg"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={2}
                  viewport={{ once: true }}
                >
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-3">
                    Project Type *
                  </label>
                  <motion.select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm text-lg"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <option value="">Select project type</option>
                    <option value="AI/ML">AI/ML Projects</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Full-Stack">Full-Stack Apps</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="Database">Database Projects</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Custom">Custom Project</option>
                  </motion.select>
                </motion.div>
                <motion.div
                  variants={inputVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={3}
                  viewport={{ once: true }}
                >
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-3">
                    Budget Range
                  </label>
                  <motion.select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm text-lg"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <option value="">Select budget range</option>
                    <option value="₹500-₹1000">₹500 - ₹1000</option>
                    <option value="₹1000-₹1500">₹1000 - ₹1500</option>
                    <option value="₹1500-₹2000">₹1500 - ₹2000</option>
                    <option value="₹2000+">₹2000+</option>
                  </motion.select>
                </motion.div>
              </div>

              <motion.div
                variants={inputVariants}
                initial="initial"
                whileInView="animate"
                custom={4}
                viewport={{ once: true }}
              >
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-3">
                  Project Timeline
                </label>
                <motion.select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm text-lg"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <option value="">Select timeline</option>
                  <option value="1 week">1 week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2+ months">2+ months</option>
                </motion.select>
              </motion.div>

              <motion.div
                variants={inputVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                viewport={{ once: true }}
              >
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-3">
                  Project Requirements *
                </label>
                <motion.textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm text-lg resize-none"
                  placeholder="Please describe your project requirements in detail..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 shadow-xl hover:shadow-2xl text-lg"
                variants={buttonVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="h-6 w-6" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1
            }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20"
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get in Touch
              </motion.h3>
              <div className="space-y-8">
                {[
                  { icon: Mail, title: "Email", info: "techforge81@gmail.com", color: "from-blue-400 to-blue-600" },
                  { icon: MapPin, title: "Location", info: "Available Worldwide", color: "from-purple-400 to-purple-600" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 25
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5
                    }}
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${contact.color} rounded-2xl p-4 shadow-xl`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-semibold text-gray-900 text-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {contact.title}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-600"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {contact.info}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.h4 
                  className="font-semibold text-gray-900 mb-3 text-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Quick Response
                </motion.h4>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  We typically respond to all inquiries within 24 hours. For urgent projects, 
                  please mention it in your requirements.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;