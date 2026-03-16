import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Al Mehjar</h3>
                <p className="text-xs text-gray-400">Office & Stationery Equip.</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner for quality stationery, office supplies, and printing services in Sharjah.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  Behind Mashreq Bank - Al Nad<br />
                  Hay Al Qasimiah - Sharjah
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:065733761" className="text-sm hover:text-white transition-colors">
                  065733761
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-sm">info@almehjar.ae</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About Us', 'Products & Services', 'Customer Reviews', 'Location', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const id = link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                    const element = document.getElementById(id === 'about-us' ? 'about' : id === 'products-services' ? 'products' : id === 'customer-reviews' ? 'reviews' : id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Al Mehjar Office & Stationery Equip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
