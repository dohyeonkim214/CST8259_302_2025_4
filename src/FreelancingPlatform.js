import React, { useState } from 'react';
import { Search, Star, Users, Briefcase, MessageCircle, Phone, Mail, MapPin, Menu, X, CheckCircle, ArrowRight, Zap, Shield, Clock } from 'lucide-react';

const FreelancingPlatform = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'services', label: 'Services', icon: null },
    { id: 'profiles', label: 'Profiles', icon: null },
    { id: 'about', label: 'About', icon: null },
    { id: 'contact', label: 'Contact', icon: null }
  ];

  const services = [
    { title: 'Web Development', icon: '💻', price: '$50-200/hr', rating: 4.9, jobs: '2.1k' },
    { title: 'Graphic Design', icon: '🎨', price: '$30-150/hr', rating: 4.8, jobs: '1.8k' },
    { title: 'Digital Marketing', icon: '📱', price: '$40-180/hr', rating: 4.7, jobs: '1.5k' },
    { title: 'Content Writing', icon: '✍️', price: '$25-100/hr', rating: 4.9, jobs: '2.3k' },
    { title: 'Video Editing', icon: '🎬', price: '$35-120/hr', rating: 4.6, jobs: '980' },
    { title: 'Mobile Apps', icon: '📲', price: '$60-250/hr', rating: 4.8, jobs: '1.2k' }
  ];

  const profiles = [
    { name: 'Sarah Chen', skill: 'Full Stack Developer', rating: 4.9, jobs: 147, avatar: '👩‍💻', location: 'San Francisco', hourly: '$85/hr' },
    { name: 'Marcus Johnson', skill: 'UI/UX Designer', rating: 4.8, jobs: 203, avatar: '👨‍🎨', location: 'New York', hourly: '$70/hr' },
    { name: 'Elena Rodriguez', skill: 'Content Strategist', rating: 4.9, jobs: 89, avatar: '👩‍📝', location: 'Barcelona', hourly: '$55/hr' },
    { name: 'David Kim', skill: 'Mobile Developer', rating: 4.7, jobs: 156, avatar: '👨‍💻', location: 'Seoul', hourly: '$90/hr' },
    { name: 'Aisha Patel', skill: 'Digital Marketer', rating: 4.8, jobs: 124, avatar: '👩‍💼', location: 'Mumbai', hourly: '$45/hr' },
    { name: 'Tom Wilson', skill: 'Video Producer', rating: 4.6, jobs: 78, avatar: '👨‍🎬', location: 'London', hourly: '$65/hr' }
  ];

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Find Your Perfect <span className="text-yellow-300">Freelancer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Connect with top talent worldwide. Get your projects done faster, better, and smarter.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for any service..."
                className="w-full pl-10 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              />
            </div>
            <button className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
              Search Projects
            </button>
          </div>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Active Freelancers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">120K+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Our Platform?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Lightning Fast</h3>
              <p className="text-gray-600">Get matched with qualified freelancers in minutes, not days.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">100% Secure</h3>
              <p className="text-gray-600">Your payments and data are protected with enterprise-grade security.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support whenever you need help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied clients who found their perfect freelancer.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Post a Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all transform hover:scale-105">
              Browse Freelancers
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Services</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Discover top-quality freelance services across all industries</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{service.rating}</span>
                <span className="ml-2 text-sm text-gray-500">({service.jobs} jobs)</span>
              </div>
              <p className="text-2xl font-bold text-purple-600 mb-4">{service.price}</p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Browse {service.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfilesPage = () => (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Top Freelancers</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Connect with skilled professionals ready to bring your vision to life</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{profile.avatar}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
                  <p className="text-gray-600">{profile.skill}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{profile.location}</span>
              </div>
              <div className="flex items-center mb-3">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{profile.rating}</span>
                <span className="ml-2 text-sm text-gray-500">({profile.jobs} jobs completed)</span>
              </div>
              <p className="text-2xl font-bold text-green-600 mb-4">{profile.hourly}</p>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About FreelanceHub</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We're revolutionizing the way businesses connect with talented freelancers worldwide. 
            Our platform bridges the gap between skilled professionals and companies looking for 
            exceptional talent, creating opportunities for growth and success.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Quality Assurance</h3>
                <p className="text-gray-600">Every freelancer is thoroughly vetted and verified</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Secure Payments</h3>
                <p className="text-gray-600">Safe and protected payment processing</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Global Reach</h3>
                <p className="text-gray-600">Access to talent from around the world</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer assistance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-6 opacity-90">
            Be part of a thriving ecosystem of creators, innovators, and problem solvers.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Get in touch with our team. We're here to help!</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your message..."
                />
              </div>
              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105">
                Send Message
              </button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">hello@freelancehub.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Innovation Street<br />Tech District, CA 90210</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
              <h3 className="font-semibold mb-2">Need immediate help?</h3>
              <p className="text-sm opacity-90 mb-4">Our support team is available 24/7 to assist you</p>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'services': return <ServicesPage />;
      case 'profiles': return <ProfilesPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                FreelanceHub
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                FreelanceHub
              </h3>
              <p className="text-gray-400">
                Connecting businesses with top freelance talent worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Writing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FreelanceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreelancingPlatform;