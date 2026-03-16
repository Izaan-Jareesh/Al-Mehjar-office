import { motion } from 'motion/react';
import { Heart, Zap, Award, Users } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function WhyChooseUs() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const reasons = [
    {
      icon: Heart,
      title: 'Excellent Customer Service',
      description: 'Customers regularly praise the friendly and helpful staff.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Reliable & Prompt Service',
      description: 'Many customers highlight quick assistance when they urgently need items.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'A wide range of trusted stationery brands.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Trusted by the Local Community',
      description: 'Long-time customers continue to shop here for years.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Why Customers Choose Us
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
