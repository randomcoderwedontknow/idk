import React, { useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Play, 
  Code, 
  Gamepad2, 
  Palette, 
  Zap, 
  Users, 
  Star, 
  Check, 
  ArrowRight, 
  Menu, 
  X,
  Download,
  Globe,
  Smartphone,
  Monitor,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text">PlayCratez</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#showcase" className="text-gray-300 hover:text-white transition-colors">Showcase</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <button className="cta-button px-6 py-2 rounded-full text-white font-semibold">
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-morphism border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#showcase" className="block text-gray-300 hover:text-white transition-colors">Showcase</a>
            <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
            <button className="w-full cta-button px-6 py-3 rounded-full text-white font-semibold">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.8)), url('https://images.unsplash.com/photo-1502810190503-8303352d0dd1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="space-y-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Create Amazing Games
            <span className="gradient-text block">Without Limits</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Build incredible games with or without code. From simple mini-games to full adventures. 
            Join thousands of creators bringing their ideas to life.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="cta-button px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 animate-glow">
              <Play className="w-5 h-5" />
              Start 1-Month Free Trial
            </button>
            <button className="glass-morphism px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 hover:bg-white/20 transition-all">
              <Gamepad2 className="w-5 h-5" />
              View Game Examples
            </button>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center items-center gap-8 text-gray-400 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm">Games Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm">Templates</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Features Section
  const FeaturesSection = () => {
    const features = [
      {
        icon: <Code className="w-8 h-8" />,
        title: "Code or No-Code",
        description: "Create games your way - with powerful coding tools or intuitive drag-and-drop builders.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
      },
      {
        icon: <Palette className="w-8 h-8" />,
        title: "Rich Asset Library",
        description: "Access thousands of sprites, sounds, and animations to bring your games to life.",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Multi-Platform Publishing",
        description: "Deploy to web, mobile, desktop, and gaming platforms with one click.",
        image: "https://images.unsplash.com/photo-1556438064-2d7646166914"
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Lightning Fast",
        description: "Optimized engine for smooth gameplay across all devices and platforms.",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
      }
    ];

    return (
      <section id="features" className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Everything You Need to
              <span className="gradient-text block">Create & Publish</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              From concept to creation, we provide all the tools and resources you need to build amazing games.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="feature-card rounded-2xl p-6 text-center group"
              >
                <div 
                  className="w-full h-48 rounded-xl mb-6 bg-cover bg-center"
                  style={{ backgroundImage: `url('${feature.image}')` }}
                />
                <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LandingPage;