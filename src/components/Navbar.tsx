import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-md' 
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Jharokha Haveli Logo" 
              className="w-12 h-12 rounded-full border border-gold-500/35 group-hover:scale-105 transition-transform duration-500 object-cover shadow-[0_2px_10px_rgba(212,175,55,0.15)]"
            />
            <div className="flex flex-col">
              <span className={`font-serif text-xl md:text-2xl font-bold tracking-widest leading-tight transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
                JHAROKHA
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-600 font-bold leading-none">
                HAVELI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-sans text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${
                    isActive 
                      ? 'text-gold-500' 
                      : isScrolled 
                        ? 'text-emerald-950 hover:text-gold-600' 
                        : 'text-beige-100 hover:text-gold-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={`md:hidden transition-colors ${isScrolled ? 'text-emerald-950 hover:text-gold-600' : 'text-white hover:text-gold-400'}`}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-dark-950/60 backdrop-blur-sm z-45 md:hidden"
            />

            {/* Menu Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 md:hidden p-8 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/logo.png" 
                      alt="Jharokha Haveli Logo" 
                      className="w-8 h-8 rounded-full border border-gold-500/20 object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-serif text-sm font-bold tracking-widest text-emerald-800 leading-tight">
                        JHAROKHA
                      </span>
                      <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-gold-600 font-bold leading-none">
                        HAVELI
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="text-emerald-950 hover:text-gold-500 transition-colors"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={link.name}
                      >
                        <Link
                          to={link.path}
                          className={`font-serif text-2xl font-medium tracking-wide block py-2 ${
                            isActive ? 'text-gold-600 pl-4 border-l-2 border-gold-500' : 'text-emerald-950 hover:text-gold-500'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer footer details */}
              <div className="border-t border-beige-200 pt-6 text-sm text-dark-900/60 font-sans space-y-2">
                <p>Naga Nagri, Amrai Ghat ChandPol,</p>
                <p>Udaipur, Rajasthan 313004</p>
                <p className="font-semibold text-gold-600 mt-4">+91 76655 83595</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
