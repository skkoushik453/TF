import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Sparkles, Zap } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        requirements: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fast, simple animations
  const fadeInVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const staggerVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.25,
        ease: "easeOut"
      }
    })
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <div className="bg-green-100 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
              Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg text-base md:text-lg active:scale-95"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Minimal background for mobile performance */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-purple-200 mb-6 md:mb-8 shadow-lg">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
            <span className="text-xs md:text-sm font-medium text-purple-600">Get Started</span>
            <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Get Your Dream Project
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Fill out the form below and we'll get back to you with a custom quote
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-6 md:space-y-8 bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl border border-white/20">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <motion.div
                  variants={staggerVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={0}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 bg-white/70 backdrop-blur-sm text-base md:text-lg"
                    placeholder="Your full name"
                  />
                </motion.div>
                <motion.div
                  variants={staggerVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={1}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 bg-white/70 backdrop-blur-sm text-base md:text-lg"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <motion.div
                  variants={staggerVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={2}
                  viewport={{ once: true }}
                >
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 bg-white/70 backdrop-blur-sm text-base md:text-lg"
                  >
                    <option value="">Select project type</option>
                    <option value="AI/ML">AI/ML Projects</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Full-Stack">Full-Stack Apps</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="Database">Database Projects</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Custom">Custom Project</option>
                  </select>
                </motion.div>
                <motion.div
                  variants={staggerVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={3}
                  viewport={{ once: true }}
                >
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 bg-white/70 backdrop-blur-sm text-base md:text-lg"
                  >
                    <option value="">Select budget range</option>
                    <option value="₹500-₹1000">₹500 - ₹1000</option>
                    <option value="₹1000-₹1500">₹1000 - ₹1500</option>
                    <option value="₹1500-₹2000">₹1500 - ₹2000</option>
                    <option value="₹2000+">₹2000+</option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                variants={staggerVariants}
                initial="initial"
                whileInView="animate"
                custom={4}
                viewport={{ once: true }}
              >
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 bg-white/70 backdrop-blur-sm text-base md:text-lg"
                >
                  <option value="">Select timeline</option>
                  <option value="1 week">1 week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2+ months">2+ months</option>
                </select>
              </motion.div>

              <motion.div
                variants={staggerVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                viewport={{ once: true }}
              >
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">
                  Project Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 bg-white/70 backdrop-blur-sm text-base md:text-lg resize-none"
                  placeholder="Please describe your project requirements in detail..."
                />
              </motion.div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 shadow-lg hover:shadow-xl text-base md:text-lg active:scale-95"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5 md:h-6 md:w-6" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl border border-white/20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Get in Touch
              </h3>
              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: Mail, title: "Email", info: "techforge81@gmail.com", color: "from-blue-400 to-blue-600" },
                  { icon: MapPin, title: "Location", info: "Available Worldwide", color: "from-purple-400 to-purple-600" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  >
                    <div className={`bg-gradient-to-r ${contact.color} rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg`}>
                      <contact.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                        {contact.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        {contact.info}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 md:mt-10 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl md:rounded-2xl border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-base md:text-lg">
                  Quick Response
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  We typically respond to all inquiries within 24 hours. For urgent projects, 
                  please mention it in your requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
