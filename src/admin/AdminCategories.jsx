import { useState } from 'react';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

/**
 * ADMIN CATEGORIES PAGE
 * 
 * CRUD operations for categories.
 */

function AdminCategories() {
  const { categories, addCategory, updateCategory, deleteCategory } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
  });

  // Filter out 'all' category as it shouldn't be edited
  const editableCategories = categories.filter(c => c.id !== 'all');

  const openModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        slug: category.slug,
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        slug: '',
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingCategory) {
      updateCategory(editingCategory.id, formData);
    } else {
      addCategory(formData);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (confirm('Вы уверены, что хотите удалить эту категорию?')) {
      deleteCategory(id);
    }
  };

  // Auto-generate slug from name
  const handleNameChange = (value) => {
    setFormData(prev => ({
      ...prev,
      name: value,
      slug: editingCategory ? prev.slug : value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    }));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-4 md:mb-0">Категории</h1>
        <button
          onClick={() => openModal()}
          className="inline-flex items-center px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Добавить категорию
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {editableCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-gray-900 text-lg">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-1">/{category.slug}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => openModal(category)}
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editableCategories.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Нет категорий. Создайте первую категорию!
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-medium text-gray-900">
                {editingCategory ? 'Редактировать категорию' : 'Добавить категорию'}
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Название *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug (URL) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                  pattern="[a-z0-9-]+"
                  title="Только строчные буквы, цифры и дефисы"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Используется в URL: /catalog?category={formData.slug}
                </p>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors"
                >
                  {editingCategory ? 'Сохранить' : 'Добавить'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCategories;
