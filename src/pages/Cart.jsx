import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

/**
 * CART PAGE
 * 
 * Shopping cart with item management and checkout link.
 */

function Cart() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="animate-fade-in py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-warm-300 mb-6" />
          <h1 className="font-serif text-3xl mb-4">Корзина пуста</h1>
          <p className="text-gray-500 mb-8">
            Добавьте товары из каталога
          </p>
          <Link to="/catalog" className="btn-primary">
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-center mb-12">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 bg-white rounded-lg shadow-sm"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.id}`}
                  className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-md overflow-hidden bg-warm-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      to={`/product/${item.id}`}
                      className="font-serif text-lg md:text-xl hover:text-brand transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-brand font-serif text-lg mt-1">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-warm-300 rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-warm-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-sans text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-warm-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Удалить"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-cream p-8 rounded-lg sticky top-24">
              <h2 className="font-serif text-2xl mb-6">Итого</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-warm-200">
                <div className="flex justify-between text-gray-600">
                  <span>Товары</span>
                  <span>{items.reduce((sum, i) => sum + i.quantity, 0)} шт.</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Доставка</span>
                  <span>Уточним</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-serif text-xl">Всего</span>
                <span className="font-serif text-2xl text-brand">
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </span>
              </div>

              <Link
                to="/checkout"
                className="btn-primary w-full flex items-center justify-center"
              >
                Оформить заказ
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                to="/catalog"
                className="block text-center mt-4 text-sm text-gray-500 hover:text-brand transition-colors"
              >
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
