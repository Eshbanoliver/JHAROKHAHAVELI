import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] -mt-24 overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 bg-dark-950">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img 
            src={backgroundImage} 
            alt={title} 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6)' }}
          />
        </motion.div>
        
        {/* Gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-transparent to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 font-sans text-xs uppercase tracking-[0.3em] font-bold backdrop-blur-sm mb-4">
            {subtitle}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-8"
        />
      </div>
    </section>
  );
}
