import { motion } from 'motion/react';
import { MapPin, ShoppingBag } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558478551-be297c7bb253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdGF0aW9uZXJ5JTIwZGVzayUyMHN1cHBsaWVzfGVufDF8fHx8MTc3MzY1MzU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Office Stationery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Your Trusted Stationery & Office Supply Store in Sharjah
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            High-quality stationery, office supplies, and printing services with friendly customer support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('products')}
              className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg font-medium"
            >
              <ShoppingBag className="w-5 h-5" />
              View Products
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-all hover:scale-105 font-medium"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: 'Years of Service', value: '10+' },
            { label: 'Google Rating', value: '4.7★' },
            { label: 'Happy Customers', value: '1000+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center"
            >
              <div className="text-3xl md:text-4xl text-white mb-2">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
