import { motion } from 'motion/react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question? We're here to help. Contact us through any of the methods below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Speak directly with our team
                  </p>
                  <a
                    href="tel:065733761"
                    className="text-blue-600 hover:text-blue-700 text-lg font-medium"
                  >
                    065733761
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Quick message or call via WhatsApp
                  </p>
                  <a
                    href="https://wa.me/971552908025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 text-lg font-medium"
                  >
                    +971 55 290 8025
                  </a>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="text-lg mb-3">Visit Us Today</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Our friendly team is ready to assist you with all your stationery and office supply needs. 
                We're conveniently located in Sharjah, behind Mashreq Bank.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
