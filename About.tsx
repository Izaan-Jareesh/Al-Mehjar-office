import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              About Al Mehjar Office & Stationery Equip.
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1700451761308-ec56f93c82be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwb3JnYW5pemVkJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzY1MzU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Organized Office"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Al Mehjar Office & Stationery Equip. has been serving customers in Sharjah for years 
                with reliable stationery products and outstanding customer service. We are proud to be 
                a trusted shop for students, professionals, and businesses who need high-quality office 
                supplies and quick service.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're preparing for exams, stocking up for your office, or printing important 
                documents, our team is always ready to help.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl text-blue-600 mb-1">✓</div>
                  <div className="text-sm text-gray-700">Quality Products</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl text-blue-600 mb-1">✓</div>
                  <div className="text-sm text-gray-700">Fast Service</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl text-blue-600 mb-1">✓</div>
                  <div className="text-sm text-gray-700">Expert Staff</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl text-blue-600 mb-1">✓</div>
                  <div className="text-sm text-gray-700">Trusted Shop</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
