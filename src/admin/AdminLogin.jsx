import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flower2, Lock } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

/**
 * ADMIN LOGIN PAGE
 * 
 * Simple authentication for admin panel.
 */

function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAdmin();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/admin');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const success = login(password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Неверный пароль');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Flower2 className="w-12 h-12 text-brand mx-auto mb-4" />
          <h1 className="font-serif text-2xl text-gray-900">Админ панель</h1>
          <p className="text-gray-500 text-sm mt-1">Чувства в цветах</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Пароль
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                placeholder="Введите пароль"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors font-medium"
          >
            Войти
          </button>
        </form>

        {/* Back to site */}
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-brand transition-colors">
            ← Вернуться на сайт
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
