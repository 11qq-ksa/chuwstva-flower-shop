/**
 * CATEGORY FILTER COMPONENT
 * 
 * Horizontal category tabs for filtering products.
 */

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 text-sm tracking-wider uppercase rounded transition-all duration-200 font-sans ${
            activeCategory === category.id
              ? 'bg-brand text-white'
              : 'bg-white border border-warm-300 text-gray-600 hover:border-brand hover:text-brand'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
