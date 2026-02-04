import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { products as initialProducts, categories as initialCategories } from '../data/products';

/**
 * ADMIN CONTEXT
 * 
 * Provides admin panel functionality for managing products and categories.
 * Data is persisted to localStorage.
 */

const AdminContext = createContext(null);

const PRODUCTS_STORAGE_KEY = 'chuwstva_admin_products';
const CATEGORIES_STORAGE_KEY = 'chuwstva_admin_categories';
const ADMIN_AUTH_KEY = 'chuwstva_admin_auth';

export function AdminProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      const savedCategories = localStorage.getItem(CATEGORIES_STORAGE_KEY);
      const savedAuth = localStorage.getItem(ADMIN_AUTH_KEY);

      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      } else {
        setProducts(initialProducts);
      }

      if (savedCategories) {
        setCategories(JSON.parse(savedCategories));
      } else {
        setCategories(initialCategories);
      }

      if (savedAuth) {
        setIsAuthenticated(JSON.parse(savedAuth));
      }
    } catch (error) {
      console.error('Failed to load admin data:', error);
      setProducts(initialProducts);
      setCategories(initialCategories);
    }
    setIsLoaded(true);
  }, []);

  // Save products to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
      } catch (error) {
        console.error('Failed to save products:', error);
      }
    }
  }, [products, isLoaded]);

  // Save categories to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(categories));
      } catch (error) {
        console.error('Failed to save categories:', error);
      }
    }
  }, [categories, isLoaded]);

  // Save auth state
  useEffect(() => {
    try {
      localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(isAuthenticated));
    } catch (error) {
      console.error('Failed to save auth state:', error);
    }
  }, [isAuthenticated]);

  // Product CRUD operations
  const addProduct = useCallback((product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    };
    setProducts(prev => [...prev, newProduct]);
    return newProduct;
  }, []);

  const updateProduct = useCallback((id, updates) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updates } : p))
    );
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  // Category CRUD operations
  const addCategory = useCallback((category) => {
    const newCategory = {
      ...category,
      id: Date.now().toString(),
    };
    setCategories(prev => [...prev, newCategory]);
    return newCategory;
  }, []);

  const updateCategory = useCallback((id, updates) => {
    setCategories(prev =>
      prev.map(c => (c.id === id ? { ...c, ...updates } : c))
    );
  }, []);

  const deleteCategory = useCallback((id) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  }, []);

  // Auth operations
  const login = useCallback((password) => {
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  const value = {
    products,
    categories,
    isLoaded,
    isAuthenticated,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
    updateCategory,
    deleteCategory,
    login,
    logout,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}

export default AdminContext;
