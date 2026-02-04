import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

/**
 * PRODUCT PAGE
 * 
 * Detailed product view with add to cart functionality.
 */

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Товар не найден</h1>
        <Link to="/catalog" className="btn-primary">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  // Get related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="animate-fade-in py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/catalog"
          className="inline-flex items-center text-gray-500 hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-sm">Назад в каталог</span>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-warm-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-sm tracking-widest uppercase text-gray-500 mb-4">
              {products.find((p) => p.category === product.category)?.category || 'Цветы'}
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              {product.name}
            </h1>
            
            <p className="text-3xl font-serif text-brand mb-8">
              {product.price.toLocaleString('ru-RU')} ₽
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-10 font-sans">
              {product.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Quantity Selector */}
              <div className="flex items-center border border-warm-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-warm-100 transition-colors"
                  aria-label="Уменьшить"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-warm-100 transition-colors"
                  aria-label="Увеличить"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`flex items-center justify-center space-x-3 px-8 py-4 rounded font-sans text-sm tracking-wider uppercase transition-all duration-300 flex-1 sm:flex-none ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-brand text-white hover:bg-brand-hover'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Добавлено</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>В корзину</span>
                  </>
                )}
              </button>
            </div>

            {/* Features */}
            <div className="mt-10 pt-10 border-t border-warm-200 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="block text-2xl mb-2">🌿</span>
                <span className="text-xs text-gray-500">Свежие цветы</span>
              </div>
              <div>
                <span className="block text-2xl mb-2">🚚</span>
                <span className="text-xs text-gray-500">Быстрая доставка</span>
              </div>
              <div>
                <span className="block text-2xl mb-2">💝</span>
                <span className="text-xs text-gray-500">С любовью</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-20 border-t border-warm-200">
            <h2 className="font-serif text-3xl text-center mb-12">
              Похожие товары
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group"
                >
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-warm-100 mb-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-lg group-hover:text-brand transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-brand font-serif">
                    {p.price.toLocaleString('ru-RU')} ₽
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
