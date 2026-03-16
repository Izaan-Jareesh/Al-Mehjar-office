import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
