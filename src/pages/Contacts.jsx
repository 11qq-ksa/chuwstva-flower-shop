import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

/**
 * CONTACTS PAGE
 * 
 * Contact information and quick message form.
 */

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    console.log('Message sent:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="section-subtitle">Свяжитесь с нами</span>
          <h1 className="section-title">Контакты</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы всегда рады помочь вам с выбором букета или ответить на любые вопросы
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl mb-10">Как с нами связаться</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Телефон</h3>
                    <a href="tel:+79991234567" className="text-gray-600 hover:text-brand transition-colors">
                      +7 (999) 123-45-67
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Звоните или пишите в WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:hello@chuwstva.ru" className="text-gray-600 hover:text-brand transition-colors">
                      hello@chuwstva.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      г. Северск, ул. Цветочная, 12<br />
                      ТЦ «Ботаника», 2 этаж
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Часы работы</h3>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 — 20:00<br />
                      Сб-Вс: 10:00 — 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 aspect-video rounded-lg overflow-hidden bg-warm-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.0!2d84.9!3d56.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDM2JzAwLjAiTiA4NMKwNTQnMDAuMCJF!5e0!3m2!1sru!2sru!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl mb-10">Напишите нам</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Расскажите о вашем мероприятии или задайте вопрос..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </button>

                {isSubmitted && (
                  <p className="text-green-600 text-center">
                    Спасибо! Мы получили ваше сообщение и скоро ответим.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
