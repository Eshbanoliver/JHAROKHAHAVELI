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
            {/* Custom SVG Jharokha Arch Logo */}
            <svg 
              className="w-10 h-10 text-gold-500 fill-current group-hover:scale-105 transition-transform duration-500" 
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              {/* Outer Rajasthani Arch Profile */}
              <path d="M20,2 C23.5,6.5 25,9.5 28.5,12 C32,14.5 35,16 35,21 L35,36 C35,37 34,38 33,38 L7,38 C6,38 5,37 5,36 L5,21 C5,16 8,14.5 11.5,12 C15,9.5 16.5,6.5 20,2 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              {/* Inner Arch Scallops */}
              <path d="M20,7 C21.5,10 22.5,12 25,13.5 C27.5,15 29,16.5 29,20 L29,34 L11,34 L11,20 C11,16.5 12.5,15 15,13.5 C17.5,12 18.5,10 20,7 Z" fill="currentColor" opacity="0.15" />
              <path d="M20,7 C21.5,10 22.5,12 25,13.5 C27.5,15 29,16.5 29,20 L29,34 M11,34 L11,20 C11,16.5 12.5,15 15,13.5 C17.5,12 18.5,10 20,7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Center Jharokha Window Panes */}
              <rect x="17" y="18" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <line x1="20" y1="18" x2="20" y2="26" stroke="currentColor" strokeWidth="1" />
              <line x1="17" y1="22" x2="23" y2="22" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-emerald-800 leading-tight">
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
                    isActive ? 'text-gold-600' : 'text-emerald-950 hover:text-gold-500'
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
            className="md:hidden text-emerald-950 hover:text-gold-500 transition-colors"
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
                    <span className="font-serif text-lg font-bold tracking-widest text-emerald-800">
                      JHAROKHA
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold-600 font-bold">
                      HAVELI
                    </span>
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
