import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import './index.css';

/**
 * CHUVSTVA FLOWER SHOP - MAIN APP
 * 
 * React application with client-side routing.
 * Includes loading screen animation on initial load.
 * 
 * Routes:
 * - /           Home page with hero and featured products
 * - /catalog    Product catalog with category filtering
 * - /product/:id Individual product page
 * - /cart       Shopping cart management
 * - /checkout   Order form with CRM integration
 * - /about      About us page
 * - /contacts   Contact information and form
 */

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      <Router>
        {/* Loading Screen */}
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        
        <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App
