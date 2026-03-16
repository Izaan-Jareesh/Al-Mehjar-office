import { motion } from 'motion/react';
import { BookOpen, Briefcase, Printer, FileText, Calculator, FolderOpen } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function Products() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const products = [
    {
      icon: BookOpen,
      title: 'Stationery Supplies',
      items: ['Notebooks', 'Pens & Pencils', 'Files & Folders', 'School Supplies', 'Calculators'],
      image: 'https://images.unsplash.com/photo-1722929309984-c6b3e55dd6e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9va3MlMjBwZW5zJTIwc2Nob29sJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzczNjUzNTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Briefcase,
      title: 'Office Supplies',
      items: ['Paper & Printing Materials', 'Office Organizers', 'Business Stationery', 'Desk Accessories'],
      image: 'https://images.unsplash.com/photo-1622258416857-d7cf6939560c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBmb2xkZXJzJTIwb3JnYW5pemVyc3xlbnwxfHx8fDE3NzM2NTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Printer,
      title: 'Printing Services',
      items: ['Document Printing', 'Photocopying', 'Quick Print Services', 'Professional Quality'],
      image: 'https://images.unsplash.com/photo-1650094980833-7373de26feb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVyJTIwcHJpbnRpbmclMjBkb2N1bWVudHMlMjBvZmZpY2V8ZW58MXx8fHwxNzczNjUzNTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const quickItems = [
    { icon: FileText, label: 'Files & Folders' },
    { icon: Calculator, label: 'Calculators' },
    { icon: FolderOpen, label: 'Organizers' },
    { icon: BookOpen, label: 'Notebooks' },
  ];

  return (
    <section id="products" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Products & Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wide selection of everyday stationery and office essentials available in-store
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl text-white">{product.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {product.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Access Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {quickItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors"
              >
                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-700">{item.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
