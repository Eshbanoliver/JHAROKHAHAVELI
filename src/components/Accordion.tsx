import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const number = (index + 1).toString().padStart(2, '0');
        
        return (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 border ${
              isOpen 
                ? 'bg-white shadow-[0_20px_40px_-15px_rgba(6,78,59,0.1)] border-gold-400/50' 
                : 'bg-white/50 border-beige-200 hover:bg-white hover:border-gold-300 hover:shadow-lg'
            }`}
          >
            {/* Subtle glow for active item */}
            {isOpen && (
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-transparent pointer-events-none" />
            )}

            <button
              onClick={() => toggleItem(index)}
              className="relative z-10 flex w-full items-center p-6 md:p-8 text-left transition-all duration-300"
            >
              {/* Number indicator */}
              <span className={`font-sans text-sm md:text-base font-bold mr-6 transition-colors duration-300 ${
                isOpen ? 'text-gold-600' : 'text-beige-400 group-hover:text-gold-400'
              }`}>
                {number}
              </span>

              {/* Question Text */}
              <span className={`font-serif text-lg md:text-xl font-medium flex-1 pr-8 transition-colors duration-300 ${
                isOpen ? 'text-emerald-950' : 'text-emerald-900/80 group-hover:text-emerald-900'
              }`}>
                {item.question}
              </span>

              {/* Modern Plus/Minus Animated Icon */}
              <div className={`relative w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${
                isOpen ? 'border-gold-500 bg-gold-50' : 'border-beige-300 bg-transparent group-hover:border-gold-300 group-hover:bg-gold-50/50'
              }`}>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-3 h-3"
                >
                  <span className={`absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 rounded-full transition-colors duration-300 ${
                    isOpen ? 'bg-gold-600' : 'bg-emerald-800'
                  }`} />
                  <span className={`absolute top-0 left-1/2 w-[1.5px] h-full -translate-x-1/2 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-gold-600 rotate-90 opacity-0' : 'bg-emerald-800 rotate-0 opacity-100'
                  }`} />
                </motion.div>
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative z-10 px-6 md:px-8 pb-6 md:pb-8 pt-0 ml-11 md:ml-12 text-dark-900/70 leading-relaxed font-sans text-sm md:text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
