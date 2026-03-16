import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function Location() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const hours = [
    { day: 'Monday', time: '8 AM–1 PM, 4–10:30 PM' },
    { day: 'Tuesday', time: '8 AM–1 PM, 4–10:30 PM' },
    { day: 'Wednesday', time: '8 AM–1 PM, 4–10:30 PM' },
    { day: 'Thursday', time: '8 AM–1 PM, 4–10:30 PM' },
    { day: 'Friday', time: '8–11:30 AM, 4–10 PM' },
    { day: 'Saturday', time: '8 AM–1 PM, 4–10 PM' },
    { day: 'Sunday', time: '9 AM–1 PM, 4–10:30 PM' },
  ];

  return (
    <section id="location" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Visit Our Store
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8267447089785!2d55.38898931500642!3d25.33168098383524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sAl%20Nad%2C%20Sharjah!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Mehjar Office Location"
              className="w-full h-full"
            ></iframe>
          </motion.div>

          {/* Store Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">
                    Behind Mashreq Bank - Al Nad<br />
                    Hay Al Qasimiah - Sharjah
                  </p>
                  <a
                    href="https://maps.app.goo.gl/fp9MwF3ddSrGQ2vU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Phone</h3>
                  <a href="tel:065733761" className="text-gray-700 hover:text-green-600 text-lg">
                    065733761
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-3">Store Hours</h3>
                  <div className="space-y-2">
                    {hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
