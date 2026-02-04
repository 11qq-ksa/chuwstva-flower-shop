import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import Logo from './Logo';

/**
 * FOOTER COMPONENT
 * 
 * Elegant footer with contact info and navigation links.
 */

function Footer() {
  return (
    <footer className="bg-cream border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <Logo showTagline />
            <p className="mt-6 text-gray-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Создаём букеты, которые передают ваши чувства. 
              Свежие цветы и бережная доставка в Северске.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-serif text-lg mb-6">Разделы</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 hover:text-brand transition-colors text-sm">
                Главная
              </Link>
              <Link to="/catalog" className="text-gray-600 hover:text-brand transition-colors text-sm">
                Каталог
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-brand transition-colors text-sm">
                О нас
              </Link>
              <Link to="/contacts" className="text-gray-600 hover:text-brand transition-colors text-sm">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg mb-6">Контакты</h4>
            <div className="space-y-4">
              <a 
                href="tel:+79991234567" 
                className="flex items-center justify-center md:justify-end text-gray-600 hover:text-brand transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+7 (999) 123-45-67</span>
              </a>
              <a 
                href="mailto:hello@chuwstva.ru" 
                className="flex items-center justify-center md:justify-end text-gray-600 hover:text-brand transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">hello@chuwstva.ru</span>
              </a>
              <div className="flex items-center justify-center md:justify-end text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Северск, ул. Цветочная, 12</span>
              </div>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end text-gray-600 hover:text-brand transition-colors"
              >
                <Instagram className="w-4 h-4 mr-2" />
                <span className="text-sm">@chuwstva_cvetah</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-warm-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Чувства в цветах. Северск.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
