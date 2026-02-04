import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { products, categories } from '../data/products';

/**
 * CATALOG PAGE
 * 
 * Product grid with category filtering.
 */

function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="animate-fade-in py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-subtitle">Магазин</span>
          <h1 className="section-title">Каталог</h1>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              В этой категории пока нет товаров
            </p>
          </div>
        )}

        {/* Results Count */}
        <p className="text-center mt-12 text-gray-500 text-sm">
          Показано {filteredProducts.length} из {products.length} товаров
        </p>
      </div>
    </div>
  );
}

export default Catalog;
