import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
        {/* Inner static luxury logo */}
        <img 
          src="/logo.png" 
          alt="Jharokha Haveli Logo" 
          className="absolute w-10 h-10 rounded-full object-cover border border-gold-500/25 shadow-md"
        />
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
        <Route path="/testimonails" element={<Navigate to="/testimonials" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Page layout wrapper */}
      <div className="flex flex-col min-h-screen overflow-x-hidden">
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
