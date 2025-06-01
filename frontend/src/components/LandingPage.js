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

  // Game Showcase Section
  const GameShowcaseSection = () => {
    const games = [
      {
        title: "Space Adventure",
        genre: "Action",
        image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42",
        description: "Epic space exploration game created by a 14-year-old creator",
        creator: "Alex M."
      },
      {
        title: "Puzzle Master",
        genre: "Puzzle",
        image: "https://images.unsplash.com/photo-1534134368327-3d2bd764f1ac",
        description: "Mind-bending puzzle game with over 100 levels",
        creator: "Sarah K."
      },
      {
        title: "Racing Legends",
        genre: "Racing",
        image: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2",
        description: "High-speed racing game with custom tracks",
        creator: "Mike R."
      }
    ];

    return (
      <section id="showcase" className="section-padding bg-dark-900">
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
              Made with
              <span className="gradient-text"> PlayCratez</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              See what our amazing community has created. From beginners to professionals, everyone can build incredible games.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {games.map((game, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="feature-card rounded-2xl overflow-hidden group"
              >
                <div 
                  className="w-full h-64 bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ backgroundImage: `url('${game.image}')` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{game.title}</h3>
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">{game.genre}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">by {game.creator}</span>
                    <button className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
                      <Play className="w-4 h-4" />
                      Play Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  // Pricing Section
  const PricingSection = () => (
    <section id="pricing" className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
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
            Simple, Transparent
            <span className="gradient-text block">Pricing</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Start creating for free. Upgrade when you're ready to publish your masterpieces.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {/* Free Trial */}
          <motion.div variants={fadeInUp} className="pricing-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Free Trial</h3>
            <div className="text-4xl font-bold mb-6 gradient-text">1 Month</div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                All creation features
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                Unlimited projects
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                Asset library access
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <X className="w-5 h-5 text-red-400" />
                Publishing disabled
              </li>
            </ul>
            <button className="w-full glass-morphism py-3 rounded-full text-white font-semibold hover:bg-white/20 transition-all">
              Start Free Trial
            </button>
          </motion.div>

          {/* Monthly */}
          <motion.div variants={fadeInUp} className="pricing-card rounded-2xl p-8 text-center border-primary-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-primary-500 to-gaming-500 px-6 py-2 rounded-full text-white font-semibold text-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Monthly</h3>
            <div className="text-4xl font-bold mb-6 gradient-text">£9<span className="text-lg text-gray-400">/month</span></div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                Everything in Free
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                Publish anywhere
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                Priority support
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                Analytics dashboard
              </li>
            </ul>
            <button className="w-full cta-button py-3 rounded-full text-white font-semibold">
              Get Started
            </button>
          </motion.div>

          {/* Yearly */}
          <motion.div variants={fadeInUp} className="pricing-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Yearly</h3>
            <div className="text-4xl font-bold mb-2 gradient-text">£108<span className="text-lg text-gray-400">/year</span></div>
            <div className="text-green-400 font-semibold mb-4">Save £40!</div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                Everything in Monthly
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                2 months free
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                Advanced features
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                White-label options
              </li>
            </ul>
            <button className="w-full glass-morphism py-3 rounded-full text-white font-semibold hover:bg-white/20 transition-all">
              Choose Yearly
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => {
    const testimonials = [
      {
        name: "Emma Thompson",
        age: "Age 16",
        text: "I made my first game in just 2 days! The templates made it so easy to get started.",
        rating: 5
      },
      {
        name: "David Chen",
        age: "Indie Developer",
        text: "PlayCratez helped me prototype and publish 3 games this year. Amazing platform!",
        rating: 5
      },
      {
        name: "Sophie Miller",
        age: "Age 12",
        text: "My friends love the puzzle game I created. Can't wait to make more!",
        rating: 5
      }
    ];

    return (
      <section className="section-padding bg-dark-900">
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
              Loved by
              <span className="gradient-text"> Creators</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Join thousands of happy creators who have brought their game ideas to life with PlayCratez.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="testimonial-card rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.age}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  // FAQ Section
  const FAQSection = () => {
    const faqs = [
      {
        question: "What can I do during the free trial?",
        answer: "During your 1-month free trial, you get access to all creation features, templates, assets, and tools. The only limitation is that you can't publish your games until you upgrade to a paid plan."
      },
      {
        question: "Do I need coding experience?",
        answer: "Not at all! PlayCratez offers both no-code drag-and-drop tools for beginners and advanced coding options for experienced developers. You can start simple and grow your skills over time."
      },
      {
        question: "What platforms can I publish to?",
        answer: "With a paid subscription, you can publish to web browsers, iOS, Android, Windows, Mac, Linux, and various gaming platforms like Steam and itch.io."
      },
      {
        question: "Is there a community or support?",
        answer: "Yes! We have an active community forum, tutorial library, and priority support for paid subscribers. Our community loves helping new creators get started."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Absolutely! You can cancel your subscription at any time. Your games and projects remain accessible, but publishing will be disabled until you resubscribe."
      }
    ];

    return (
      <section id="faq" className="section-padding bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Frequently Asked
              <span className="gradient-text block">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="faq-item rounded-xl"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="font-semibold text-white text-lg">{faq.question}</span>
                  {activeAccordion === index ? 
                    <ChevronUp className="w-5 h-5 text-primary-400" /> : 
                    <ChevronDown className="w-5 h-5 text-primary-400" />
                  }
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  // Final CTA Section
  const FinalCTASection = () => (
    <section className="section-padding relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.8), rgba(217, 70, 239, 0.8)), url('https://images.unsplash.com/photo-1617575521317-d2974f3b56d2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Ready to Create Your
            <span className="block">Game Masterpiece?</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of creators and start building your dream game today. 
            No credit card required for your free trial.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all shadow-2xl">
              <Play className="w-5 h-5" />
              Start Creating Now - Free!
            </button>
            <button className="glass-morphism px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 hover:bg-white/20 transition-all">
              <Users className="w-5 h-5" />
              Join Community
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-dark-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">PlayCratez</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering creators to build amazing games without barriers.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publishing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PlayCratez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <GameShowcaseSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;