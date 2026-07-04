import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowLeft, FaArrowRight, FaSearchPlus } from 'react-icons/fa';

interface GalleryProps {
  limit?: number;
}

const galleryImages = [
  { id: 1, src: '/haveli_1.jpg', alt: 'Jharokha Haveli Heritage Arch & Seating' },
  { id: 2, src: '/haveli_2.jpg', alt: 'Lakeside View from Haveli Window' },
  { id: 3, src: '/haveli_3.jpg', alt: 'Scenic Rooftop Fine Dining Deck' },
  { id: 4, src: '/haveli_4.jpg', alt: 'Traditional Rajasthani Architecture Details' },
  { id: 5, src: '/haveli_5.jpg', alt: 'Luxury Resort Suite Interiors' },
  { id: 6, src: '/haveli_6.jpg', alt: 'Sunset Lakeside View from Jharokha Haveli' },
  { id: 7, src: '/haveli_7.jpg', alt: 'Charming Heritage Corridors & Courtyard' },
  { id: 8, src: '/haveli_8.jpg', alt: 'Fine Table Setting by the Lake' },
  { id: 9, src: '/haveli_9.jpg', alt: 'Jharokha Haveli Exterior Illumination' },
];

export default function Gallery({ limit }: GalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const imagesToShow = limit ? galleryImages.slice(0, limit) : galleryImages;

  // Handle keyboard events for the lightbox
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {imagesToShow.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedIdx(idx)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-beige-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold-300/60 aspect-[4/3]"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Hover Glass Overlay */}
            <div className="absolute inset-0 bg-emerald-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center backdrop-blur-[2px]" />

            {/* Search Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 bg-white/95 p-4 rounded-full text-gold-600 shadow-lg">
              <FaSearchPlus className="w-5 h-5" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-950/80 via-dark-950/45 to-transparent text-white transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-serif text-sm tracking-wide">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 p-4 md:p-12 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              aria-label="Close Lightbox"
              className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50 cursor-pointer"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 z-50 cursor-pointer"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] flex flex-col items-center gap-4"
            >
              <img
                src={galleryImages[selectedIdx].src}
                alt={galleryImages[selectedIdx].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="text-center text-white space-y-1 mt-2">
                <p className="font-serif text-lg md:text-xl tracking-wide">
                  {galleryImages[selectedIdx].alt}
                </p>
                <p className="text-xs text-beige-300/60 font-sans uppercase tracking-widest">
                  Image {selectedIdx + 1} of {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 z-50 cursor-pointer"
            >
              <FaArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
