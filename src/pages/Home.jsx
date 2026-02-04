import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ScrollReveal } from '../hooks/useScrollReveal.jsx';
import { useAdmin } from '../context/AdminContext';

/**
 * HOME PAGE
 * 
 * Hero section with featured products.
 * Includes scroll reveal animations.
 */

function Home() {
  const { products } = useAdmin();
  
  // Get 4 featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=1920&h=1080&fit=crop"
            alt="Flowers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <span className="block text-sm tracking-[0.4em] uppercase mb-6 animate-slide-up">
            Цветочный бутик в Северске
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight animate-slide-up animation-delay-100">
            Чувства в цветах
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto font-light animate-slide-up animation-delay-200">
            Создаём букеты, которые говорят за вас. Свежие цветы с доставкой в день заказа.
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded font-sans text-sm tracking-wider uppercase hover:bg-gray-100 transition-colors animate-slide-up animation-delay-200"
          >
            Смотреть каталог
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-subtitle">Наши бестселлеры</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section-title">Популярные букеты</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={150 + index * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="text-center mt-12">
              <Link
                to="/catalog"
                className="btn-secondary inline-flex items-center"
              >
                Весь каталог
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <ScrollReveal delay={0}>
              <div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-serif text-xl mb-3">Свежие цветы</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Прямые поставки от лучших производителей. Цветы стоят дольше.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-serif text-xl mb-3">Доставка в день заказа</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Привезём букет в течение 3 часов по Северску и ближайшим районам.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="font-serif text-xl mb-3">С любовью</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Каждый букет собираем вручную с вниманием к деталям.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Нужен уникальный букет?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-white/80 mb-10 text-lg">
              Создадим композицию по вашему желанию. Расскажите о поводе — мы предложим варианты.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link
              to="/contacts"
              className="inline-flex items-center px-8 py-4 bg-white text-brand rounded font-sans text-sm tracking-wider uppercase hover:bg-gray-100 transition-colors"
            >
              Связаться с нами
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Home;
