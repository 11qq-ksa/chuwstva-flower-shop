import { Heart, Award, Truck, Users } from 'lucide-react';

/**
 * ABOUT PAGE
 * 
 * Story, values, and team information.
 */

function About() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1920&h=800&fit=crop"
            alt="Flowers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="block text-sm tracking-[0.3em] uppercase mb-4">О нас</span>
          <h1 className="font-serif text-5xl md:text-6xl">Наша история</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8">
            «Мы верим, что цветы — это не просто подарок, 
            а способ передать самые искренние чувства»
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Мастерская «Чувства в цветах» открылась в Северске в 2019 году. 
            За это время мы собрали тысячи букетов для самых разных поводов — 
            от романтических свиданий до корпоративных мероприятий.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Каждый букет мы собираем вручную, тщательно подбирая цветы и зелень. 
            Работаем только с проверенными поставщиками, чтобы гарантировать свежесть 
            и долговечность каждой композиции.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-16">Наши ценности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                <Heart className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-serif text-xl mb-3">С любовью</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Каждый букет собираем так, как будто для самых близких
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-serif text-xl mb-3">Качество</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Используем только свежие цветы от надёжных поставщиков
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                <Truck className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-serif text-xl mb-3">Забота</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Доставляем бережно и всегда в срок
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-serif text-xl mb-3">Индивидуальность</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Создаём уникальные композиции под ваш запрос
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-16">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-warm-100">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                  alt="Анна"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">Анна</h3>
              <p className="text-gray-500 text-sm">Основатель и флорист</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-warm-100">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                  alt="Мария"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">Мария</h3>
              <p className="text-gray-500 text-sm">Главный флорист</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-warm-100">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Дмитрий"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">Дмитрий</h3>
              <p className="text-gray-500 text-sm">Логистика и доставка</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
