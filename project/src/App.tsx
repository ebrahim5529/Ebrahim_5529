import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-2xl font-bold text-gray-800">إبراهيم حمزة</h1>
                </div>
                <div className="hidden md:flex items-center space-x-8 space-x-reverse">
                  <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md flex items-center gap-2">
                    <Home size={20} />
                    الرئيسية
                  </Link>
                  <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md flex items-center gap-2">
                    <User size={20} />
                    حول
                  </Link>
                  <Link to="/services" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md flex items-center gap-2">
                    <Briefcase size={20} />
                    الخدمات
                  </Link>
                  <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md flex items-center gap-2">
                    <Mail size={20} />
                    اتصل بنا
                  </Link>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md">الرئيسية</Link>
                <Link to="/about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md">حول</Link>
                <Link to="/services" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md">الخدمات</Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md">اتصل بنا</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;