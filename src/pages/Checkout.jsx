import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

/**
 * CHECKOUT PAGE
 * 
 * Order form with CRM integration.
 * Sends order data to external endpoint.
 */

function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });

  // Redirect if cart is empty
  if (items.length === 0 && !isSuccess) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Корзина пуста</h1>
        <Link to="/catalog" className="btn-primary">
          В каталог
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare order data
    const orderData = {
      order_id: `ORD-${Date.now()}`,
      customer_name: formData.name,
      phone: formData.phone,
      address: formData.address,
      comment: formData.comment,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total_price: totalPrice,
      date: new Date().toISOString(),
    };

    try {
      // ============================================
      // CRM INTEGRATION - Replace with your endpoint
      // ============================================
      // Supported integrations: Airtable, Google Sheets, Supabase, etc.
      
      // Example: Airtable
      // await fetch('https://api.airtable.com/v0/YOUR_BASE/Orders', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': 'Bearer YOUR_API_KEY',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ fields: orderData }),
      // });

      // Example: Google Sheets (via Apps Script)
      // await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
      //   method: 'POST',
      //   body: JSON.stringify(orderData),
      // });

      // Example: Supabase
      // await supabase.from('orders').insert(orderData);

      // Example: Email service (Formspree, EmailJS, etc.)
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(orderData),
      // });

      // Simulate API call for demo
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Order submitted:', orderData);
      
      setIsSuccess(true);
      clearCart();
    } catch (error) {
      console.error('Order submission failed:', error);
      alert('Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSuccess) {
    return (
      <div className="animate-fade-in py-20 md:py-32">
        <div className="max-w-xl mx-auto px-4 text-center">
          <CheckCircle className="w-20 h-20 mx-auto text-green-500 mb-6" />
          <h1 className="font-serif text-4xl mb-4">Заказ принят!</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время для подтверждения.
          </p>
          <Link to="/catalog" className="btn-primary">
            Продолжить покупки
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/cart"
          className="inline-flex items-center text-gray-500 hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-sm">Назад в корзину</span>
        </Link>

        <h1 className="font-serif text-4xl mb-12">Оформление заказа</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Адрес доставки *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  placeholder="г. Северск, ул. Ленина, д. 1, кв. 10"
                />
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий к заказу
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="4"
                  value={formData.comment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Удобное время доставки, пожелания по букету..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Оформляем...
                  </>
                ) : (
                  <>Подтвердить заказ</>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-cream p-8 rounded-lg">
              <h2 className="font-serif text-2xl mb-6">Ваш заказ</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3 border-b border-warm-200">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.quantity} × {item.price.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    <p className="font-serif">
                      {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4">
                <span className="font-serif text-xl">Итого</span>
                <span className="font-serif text-2xl text-brand">
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
