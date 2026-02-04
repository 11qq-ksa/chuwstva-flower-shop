import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

/**
 * PRODUCT CARD COMPONENT
 * 
 * Displays product image, info, and add-to-cart button.
 * Used in catalog grids and featured sections.
 */

function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <article className="card group">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-warm-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-sm tracking-wider uppercase">Нет в наличии</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-brand transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 font-sans">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-warm-200">
          <span className="font-serif text-xl text-gray-900">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded text-sm font-sans transition-all duration-200 ${
              product.inStock
                ? 'bg-brand text-white hover:bg-brand-hover'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
