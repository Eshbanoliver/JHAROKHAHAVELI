import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium Luxury Loader
function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-beige-100">
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-beige-300 border-t-gold-500" />
        {/* Inner static luxury arch icon */}
        <svg 
          className="absolute w-6 h-6 text-gold-500 fill-current" 
          viewBox="0 0 40 40"
        >
          <path d="M20,2 C23.5,6.5 25,9.5 28.5,12 C32,14.5 35,16 35,21 L35,36 C35,37 34,38 33,38 L7,38 C6,38 5,37 5,36 L5,21 C5,16 8,14.5 11.5,12 C15,9.5 16.5,6.5 20,2 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>
      <span className="mt-4 font-serif text-sm uppercase tracking-[0.25em] text-emerald-950 font-bold animate-pulse">
        Jharokha Haveli
      </span>
    </div>
  );
}

// Router content wrapper to enable AnimatePresence location matching
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Page layout wrapper */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Dynamic page routes with code splitting */}
        <div className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </div>

        {/* Global floating action buttons */}
        <FloatingButtons />
        
        <Footer />
      </div>
    </Router>
  );
}
