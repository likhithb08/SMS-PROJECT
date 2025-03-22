import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import heroImage from '../assets/images/hero.jpg';
import teamManagementImage from '../assets/images/team-management.jpg';
import analyticsImage from '../assets/images/analytics.jpg';
import schedulingImage from '../assets/images/scheduling.jpg';
import statsBgImage from '../assets/images/stats-bg.jpg';
import ctaBgImage from '../assets/images/cta-bg.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-400 to-purple-600">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-transparent bg-clip-text text-white">
              Sports Management System
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-white hover:text-blue-500 transition-colors">About</Link>
              <Link to="/features" className="text-white hover:text-blue-500 transition-colors">Features</Link>
              <Link to="/login" className="text-white hover:text-blue-500 transition-colors">Login</Link>
              <Link to="/register" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
                Transform Your Sports <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Management Experience
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl">
                Streamline team operations, track performance, and achieve excellence with our comprehensive sports management platform
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Get Started Now
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src={heroImage}
                alt="Sports Management" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <img 
                src={teamManagementImage}
                alt="Team Management" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">Team Management</h3>
              <p className="text-gray-300">Efficiently manage teams, schedules, and player rosters all in one place. Keep track of performance and progress.</p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <img 
                src={analyticsImage}
                alt="Performance Analytics" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">Performance Analytics</h3>
              <p className="text-gray-300">Track and analyze player performance with advanced statistics and real-time insights.</p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <img 
                src={schedulingImage}
                alt="Event Scheduling" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">Event Scheduling</h3>
              <p className="text-gray-300">Organize matches, training sessions, and events with our intuitive calendar system.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section with Background Image */}
      <div className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={statsBgImage}
            alt="Statistics Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl"
            >
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Active Teams</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl"
            >
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-300">Athletes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl"
            >
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section with Image */}
      <div className="py-20 bg-black/20 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ctaBgImage}
            alt="Call to Action Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Sports Management?
            </h2>
            <Link
              to="/register"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Start Your Free Trial
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
