import { Package, Tags, TrendingUp } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

/**
 * ADMIN DASHBOARD
 * 
 * Overview page with key metrics and quick actions.
 */

function AdminDashboard() {
  const { products, categories } = useAdmin();

  const stats = [
    {
      title: 'Всего товаров',
      value: products.length,
      icon: Package,
      color: 'bg-blue-500',
    },
    {
      title: 'Категорий',
      value: categories.length - 1, // Exclude 'all'
      icon: Tags,
      color: 'bg-green-500',
    },
    {
      title: 'В наличии',
      value: products.filter(p => p.inStock).length,
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-serif text-gray-900 mb-8">Обзор</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Products */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Последние товары</h2>
        </div>
        <div className="p-6">
          {products.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Нет товаров</p>
          ) : (
            <div className="space-y-4">
              {products.slice(-5).reverse().map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-500">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.inStock
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {product.inStock ? 'В наличии' : 'Нет в наличии'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
