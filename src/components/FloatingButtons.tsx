import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

export default function FloatingButtons() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      
      setIsVisible(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circle calculations for Scroll-to-Top
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Left Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917665583595"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="animate-pulse-whatsapp flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <FaWhatsapp className="h-6 w-6 md:h-7 md:w-7" />
        </a>

        {/* Direct Call Button */}
        <a
          href="tel:+917665583595"
          aria-label="Call Jharokha Haveli"
          className="animate-pulse-call flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gold-500 text-white shadow-xl transition-all duration-300 hover:bg-gold-600 hover:scale-110 active:scale-95"
        >
          <FaPhoneAlt className="h-4 w-4 md:h-5 md:w-5" />
        </a>
      </div>

      {/* Right Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white text-gold-600 shadow-xl transition-all duration-500 border border-gold-100 hover:border-gold-400 hover:scale-110 active:scale-95 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
      >
        <svg className="absolute h-full w-full -rotate-90">
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-beige-200 fill-none"
            strokeWidth="3"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-gold-500 fill-none transition-all duration-100"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <FaArrowUp className="z-10 h-5 w-5" />
      </button>
    </>
  );
}
