import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from './constants';
import { SectionId } from './types';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Review } from './components/Review';
import { VaccineSchedule } from './components/VaccineSchedule';
import { ChatWidget } from './components/ChatWidget';
import { News } from './components/News';
import { Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto">
              <img src="/images/logo.png" alt="Logo SDV" className="h-full w-auto object-contain" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium hover:text-[#EF4444] transition-colors text-[#1A1A1A]`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[#1A1A1A] font-medium hover:text-[#EF4444]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <Hero />
      <About />
      <Review />
      <VaccineSchedule />
      <News />

      {/* Contact Section */}
      <section id={SectionId.CONTACT} className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                ¿Tienes preguntas sobre afiliación, eventos o información general? Estamos aquí para servir a la comunidad médica y a la población en general.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Dirección</h4>
                    <p className="text-gray-300">Av. 27 de Febrero, Santo Domingo, República Dominicana.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Teléfono</h4>
                    <p className="text-gray-300">+1 (809) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-300">contacto@sdv.do</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="https://www.facebook.com/vacudom.rd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="bg-white text-[#1A1A1A] p-8 rounded-xl shadow-2xl">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EF4444] focus:border-[#EF4444] outline-none" placeholder="Dr. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                  <input type="email" className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EF4444] focus:border-[#EF4444] outline-none" placeholder="juan@ejemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                  <textarea rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EF4444] focus:border-[#EF4444] outline-none" placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>
                <button className="w-full bg-[#EF4444] text-white font-bold py-3 rounded-lg hover:bg-red-600 transition duration-300">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 py-8 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sociedad Dominicana de Vacunología. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;