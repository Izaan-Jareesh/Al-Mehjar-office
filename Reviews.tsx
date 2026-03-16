import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function Reviews() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const reviews = [
    {
      text: "I went just before 8am panicking because I needed a calculator for my exam and they were open. Amazing service!",
      author: "Student",
      rating: 5,
    },
    {
      text: "I am a regular customer. The customer service I receive here is outstanding.",
      author: "Regular Customer",
      rating: 5,
    },
    {
      text: "Very helpful and prompt service whenever needed.",
      author: "Business Client",
      rating: 5,
    },
    {
      text: "Great service and professional staff.",
      author: "Local Resident",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-left">
              <div className="text-2xl text-gray-900">4.7</div>
              <div className="text-xs text-gray-600">Google Rating</div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-600 opacity-50" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">- {review.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm">
            Trusted by students, professionals, and businesses across Sharjah
          </p>
        </motion.div>
      </div>
    </section>
  );
}
