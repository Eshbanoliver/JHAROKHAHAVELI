import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUtensils, 
  FaBed, 
  FaAward, 
  FaMapMarkedAlt, 
  FaHistory, 
  FaCrown, 
  FaShieldAlt, 
  FaGlassCheers, 
  FaQuoteLeft, 
  FaStar,
  FaUsers,
  FaCalendarAlt
} from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import Accordion from '../components/Accordion';
import Gallery from '../components/Gallery';
import { useState, useEffect } from 'react';

// Sample testimonials data
const testimonials = [
  {
    name: 'Aishwarya Sen',
    role: 'Luxury Travel Blogger',
    text: 'Jharokha Haveli is an absolute dream. The views of the lake at sunset from the dining deck are unmatched in Udaipur. The staff treated us like royalty.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Vikramaditya Rathore',
    role: 'Guest from Jaipur',
    text: 'The resort rooms are a masterclass in combining traditional architecture with modern-day amenities. Clean, spacious, and extremely peaceful.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Samantha & David',
    role: 'Honeymoon Couple',
    text: 'We spent our anniversary here and were blown away by the level of detail. The private dining experience was incredible and the food was outstanding.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
];

// Sample FAQ items
const faqItems = [
  {
    question: 'Where is Jharokha Haveli located in Udaipur?',
    answer: 'Jharokha Haveli is ideally situated at Naga Nagri, Amrai Ghat ChandPol, near the Leela Staff Gate in Cheerwa, Ambamata, Udaipur. We overlook the historic waters of the lake, providing direct views of the City Palace and lake monuments.',
  },
  {
    question: 'How can I make a booking at the resort or restaurant?',
    answer: 'You can easily request a booking or reserve a table by calling our reservations team directly at +91 76655 83595 or +91 99989 99716. You can also send a message via WhatsApp through the link on the bottom left of our page.',
  },
  {
    question: 'Is the restaurant open to non-resort guests?',
    answer: 'Yes! Our fine dining lake-view restaurant is open to both resort guests and walk-in visitors. We serve authentic Rajasthani (Mewari) cuisine along with standard multi-cuisine selections. Table reservation in advance is highly recommended.',
  },
  {
    question: 'Do you offer airport or railway station transfers?',
    answer: 'Yes, we can arrange premium private transfers from Udaipur Airport (UDR) and Udaipur City Railway Station. Please coordinate with our reception team at least 24 hours prior to your check-in time.',
  },
  {
    question: 'What are the main sightseeing places near the Haveli?',
    answer: 'We are walking distance from Amrai Ghat and Chandpole. The City Palace, Bagore Ki Haveli, and Jagdish Temple are all within a 5-10 minute radius from our location, making it easy to explore the old city.',
  },
];

const heroImages = [
  '/haveli_6.jpg', // Lake sunset view
  '/haveli_1.jpg',
  '/haveli_7.jpg'
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroTimer);
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Luxury Resort & Lakeside Fine Dining"
        description="Experience Jharokha Haveli in Udaipur, Rajasthan. A premium heritage hotel and fine dining restaurant overlooking beautiful lakes and historic palaces."
        keywords="Jharokha Haveli Udaipur, Udaipur heritage resort, lakeside restaurant Udaipur, hotel near Amrai Ghat, luxury stay Udaipur"
      />

      {/* 1. Hero Banner */}
      <section className="relative h-[90vh] -mt-24 overflow-hidden flex items-center justify-center">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 bg-dark-950">
          <AnimatePresence>
            <motion.img 
              key={activeHeroImage}
              src={heroImages[activeHeroImage]} 
              alt="Jharokha Haveli Lakeside Palace" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.65)' }}
            />
          </AnimatePresence>
          {/* Subtle parallax/gradient cover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/75 via-dark-950/30 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold-400 font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-bold block"
          >
            A Heritage Sanctuary of Udaipur
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-wide text-white drop-shadow-md"
          >
            Where Royal Heritage<br />
            Meets Scenic Serenity
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-sm md:text-lg text-beige-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow"
          >
            Experience the magic of Udaipur's legacy, where every window frame (Jharokha) opens to breathtaking lakeside views and timeless royal hospitality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
            >
              Explore Services
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-sans text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll down mouse indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-gold-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
            Jharokha Haveli Heritage
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
            Crafting Unforgettable Lakeside Stories
          </h2>
          <p className="font-sans text-dark-900/80 leading-relaxed">
            Nestled on the shores near Amrai Ghat and overlooking Udaipur's historic water landscape, Jharokha Haveli is a heritage landmark designed for travelers seeking pure elegance. Embodying the rich architectural splendor of historic Rajasthan, our spaces feature intricate arches, luxury carvings, and panoramic frames.
          </p>
          <p className="font-sans text-dark-900/70 leading-relaxed text-sm">
            Whether you are dine-in guests enjoying traditional Mewari recipes cooked with local spices or vacationers relaxing in our suites, we treat every visitor with the legendary Indian philosophy of <em>"Atithi Devo Bhava"</em> (Guest is God).
          </p>
          <div className="pt-4">
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-gold-600 font-sans text-sm uppercase tracking-widest font-bold group border-b-2 border-gold-400 pb-1 hover:text-gold-700 hover:border-gold-600 transition-colors"
            >
              Discover Our Heritage
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Grid Image Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-12 gap-4 h-[400px] md:h-[500px]"
        >
          {/* Main frame border */}
          <div className="absolute inset-4 border-2 border-gold-500/20 rounded-2xl -z-10" />
          
          <div className="col-span-8 row-span-12 relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/haveli_3.jpg" 
              alt="Luxury Dining Set" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="col-span-4 row-span-6 relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="/haveli_5.jpg" 
              alt="Luxury suite" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="col-span-4 row-span-6 bg-emerald-800 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-emerald-700">
            <FaCrown className="w-8 h-8 text-gold-400" />
            <div>
              <p className="font-serif text-2xl font-semibold">100%</p>
              <p className="text-[11px] uppercase tracking-widest text-beige-300">Royal Vibe</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Key Metrics - Creative Section */}
      <section className="relative bg-emerald-950 text-white py-20 px-6 md:px-12 border-y border-gold-950/30 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-gold-900/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-emerald-800/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Decorative gold vector line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { icon: FaUsers, count: 15000, suffix: '+', label: 'Happy Guests', delay: 0 },
              { icon: FaCalendarAlt, count: 12, suffix: '+', label: 'Years of Hospitality', delay: 0.2 },
              { icon: FaBed, count: 35, suffix: '+', label: 'Premium Rooms', delay: 0.4 },
              { icon: FaStar, count: 100, suffix: '%', label: 'Fine Dining Rating', delay: 0.6 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: stat.delay, type: 'spring' }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] flex flex-col items-center text-center"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="w-16 h-16 mb-6 rounded-full bg-emerald-900/50 border border-gold-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-400 transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <stat.icon className="w-7 h-7 text-gold-400 group-hover:text-gold-300 transition-colors" />
                </div>
                
                <p className="text-gold-400 text-3xl md:text-4xl font-bold font-serif flex justify-center items-center mb-3">
                  <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                </p>
                
                <p className="text-xs md:text-sm text-beige-300/90 uppercase tracking-[0.2em] font-semibold font-sans">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Services Overview - Creative Section */}
      <section className="relative py-32 px-6 md:px-12 bg-beige-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-900/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center space-y-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-gold-400" />
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
                Exclusive Sanctuary
              </span>
              <div className="w-12 h-[1px] bg-gold-400" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 leading-tight">
              Our Hospitality <span className="italic font-light text-gold-600">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Restaurant Card (Creative) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-emerald-900/5 rounded-[2rem] blur-xl transition-all duration-700 group-hover:via-gold-500/20 group-hover:blur-2xl" />
              
              <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 flex flex-col overflow-hidden">
                {/* Floating Number */}
                <div className="absolute -top-10 -right-4 text-[180px] font-serif font-black text-gold-900/[0.03] z-0 select-none group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none">
                  1
                </div>

                <div className="relative z-10 rounded-2xl overflow-hidden mb-8 h-72 shadow-lg">
                  <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src="/haveli_3.jpg" 
                    alt="Fine Dining" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <FaUtensils className="text-gold-500 w-4 h-4" />
                    <span className="font-sans text-xs uppercase tracking-widest font-bold text-emerald-950">Fine Dining</span>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-emerald-950 mb-4 group-hover:text-gold-700 transition-colors">
                    Scenic Lake-View Restaurant
                  </h3>
                  <p className="font-sans text-dark-900/70 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    Dine in absolute bliss. Our premium restaurant features outdoor open-air seating overlooking the majestic water vistas of Udaipur. We serve rich, authentic Mewari dishes prepared by heritage chefs, alongside stellar multi-cuisine items that satisfy the most refined palates.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <Link 
                      to="/services" 
                      className="px-8 py-3.5 bg-emerald-900 hover:bg-emerald-800 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(6,78,59,0.5)]"
                    >
                      Dining Details
                    </Link>
                    <Link 
                      to="/contact" 
                      className="px-8 py-3.5 border-2 border-gold-500/30 text-emerald-950 hover:border-gold-500 hover:bg-gold-50 font-sans text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      Reserve Table
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resort Card (Creative) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-l from-gold-500/0 via-emerald-900/5 to-gold-500/5 rounded-[2rem] blur-xl transition-all duration-700 group-hover:via-emerald-900/15 group-hover:blur-2xl" />
              
              <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 flex flex-col overflow-hidden">
                {/* Floating Number */}
                <div className="absolute -top-10 -right-4 text-[180px] font-serif font-black text-gold-900/[0.03] z-0 select-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 pointer-events-none">
                  2
                </div>

                <div className="relative z-10 rounded-2xl overflow-hidden mb-8 h-72 shadow-lg">
                  <div className="absolute inset-0 bg-gold-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src="/haveli_5.jpg" 
                    alt="Premium Suites" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <FaBed className="text-gold-500 w-4 h-4" />
                    <span className="font-sans text-xs uppercase tracking-widest font-bold text-emerald-950">Luxury Stay</span>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-emerald-950 mb-4 group-hover:text-gold-700 transition-colors">
                    Premium Heritage Resort Stay
                  </h3>
                  <p className="font-sans text-dark-900/70 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    Relax in traditional royal chambers equipped with modern luxuries. Our suites feature handcrafted arches, gold metallic details, comfortable bedding, and quiet lounge spaces. Wake up to the soothing sound of soft waves and glorious morning sun rays lighting up your room.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <Link 
                      to="/services" 
                      className="px-8 py-3.5 bg-gold-600 hover:bg-gold-700 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(212,175,55,0.5)]"
                    >
                      Resort Details
                    </Link>
                    <Link 
                      to="/contact" 
                      className="px-8 py-3.5 border-2 border-emerald-900/20 text-emerald-950 hover:border-emerald-900 hover:bg-emerald-50 font-sans text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      Book Your Room
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision - Creative Section */}
      <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-bl-[100%] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900/10 rounded-tr-[100%] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            
            {/* Mission Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative bg-emerald-950 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl hover:shadow-emerald-900/40 transition-shadow duration-500"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl group-hover:bg-gold-500/30 transition-colors duration-700" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald-800/50 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-sans text-gold-400 text-xs uppercase tracking-[0.3em] font-bold border border-gold-500/30 px-4 py-2 rounded-full backdrop-blur-sm bg-emerald-950/50">
                    Our Mission
                  </span>
                  <FaShieldAlt className="text-gold-500/20 w-16 h-16 transform -rotate-12 group-hover:scale-110 group-hover:text-gold-500/40 transition-all duration-500" />
                </div>
                <h3 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight group-hover:text-gold-100 transition-colors">
                  To preserve heritage and offer pristine hospitality.
                </h3>
                <div className="w-16 h-[2px] bg-gold-500/50 mb-6" />
                <p className="font-sans text-sm md:text-lg text-beige-200/80 leading-relaxed font-light mt-auto">
                  Our goal is to honor the glorious structural and cultural legacy of Rajasthan, presenting travelers and food enthusiasts with an authentic experience. We focus on providing personalized attention, sustainable operations, and maintaining high hospitality standards.
                </p>
              </div>
            </motion.div>

            {/* Vision Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="group relative bg-gold-50 rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gold-200/50"
            >
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl group-hover:bg-emerald-900/20 transition-colors duration-700" />
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-sans text-emerald-800 text-xs uppercase tracking-[0.3em] font-bold border border-emerald-900/20 px-4 py-2 rounded-full backdrop-blur-sm bg-white/50">
                    Our Vision
                  </span>
                  <FaAward className="text-emerald-900/10 w-16 h-16 transform rotate-12 group-hover:scale-110 group-hover:text-emerald-900/30 transition-all duration-500" />
                </div>
                <h3 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-950 mb-6 leading-tight">
                  To be the premier heritage destination in Udaipur.
                </h3>
                <div className="w-16 h-[2px] bg-emerald-900/30 mb-6" />
                <p className="font-sans text-sm md:text-lg text-emerald-950/70 leading-relaxed font-light mt-auto">
                  We envision Jharokha Haveli as a timeless destination where visitors can reconnect with peace, taste the history of Mewar, and create lifetime memories in luxury, becoming the benchmark for premium boutique stays.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Core Values */}
      <section className="py-20 px-6 md:px-12 bg-white/40">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
              Our Foundation
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-emerald-800">
              Core Values We Cherish
            </h2>
            <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHistory className="w-6 h-6 text-gold-500" />,
                title: 'Royal Heritage',
                desc: 'Preserving authentic Rajasthani patterns, architectural carvings, and old city customs.'
              },
              {
                icon: <FaAward className="w-6 h-6 text-gold-500" />,
                title: 'Uncompromised Quality',
                desc: 'Delivering fresh culinary ingredients and spotless premium room sanitization.'
              },
              {
                icon: <FaShieldAlt className="w-6 h-6 text-gold-500" />,
                title: 'Guest Centricity',
                desc: 'Anticipating guest requirements and greeting everyone with warmth and care.'
              },
              {
                icon: <FaGlassCheers className="w-6 h-6 text-gold-500" />,
                title: 'Serene Luxury',
                desc: 'Creating an atmosphere of peace and relaxation away from daily noise.'
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/60 backdrop-blur border border-beige-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 bg-beige-100 inline-block p-3 rounded-lg">{value.icon}</div>
                <h4 className="font-serif text-lg font-bold text-emerald-950 mb-2">{value.title}</h4>
                <p className="font-sans text-xs md:text-sm text-dark-900/75 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
            The Haveli Distinction
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
            Why Choose Jharokha Haveli
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMapMarkedAlt className="w-8 h-8 text-gold-500" />,
              title: 'Prime Lakeside Location',
              desc: 'Steps away from Amrai Ghat and Chandpole. Panoramic views of historic city palaces directly from our decks.'
            },
            {
              icon: <FaCrown className="w-8 h-8 text-gold-500" />,
              title: 'Heritage Architectural Beauty',
              desc: 'Authentic stone carvings, traditional archways, and window frame seating that captures Udaipur’s essence.'
            },
            {
              icon: <FaUtensils className="w-8 h-8 text-gold-500" />,
              title: 'Award-Winning Gastronomy',
              desc: 'Savor traditional recipes and modern flavors on our open terrace under the stars, looking at glowing lake waters.'
            }
          ].map((item, idx) => (
            <GlassCard key={item.title} delay={idx * 0.15}>
              <div className="mb-6 bg-gold-50 inline-block p-4 rounded-xl border border-gold-100">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold text-emerald-950 mb-3">{item.title}</h3>
              <p className="font-sans text-dark-900/80 text-sm leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-24 relative overflow-hidden bg-emerald-950 text-white">
        {/* Parallax Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,transparent_60%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-gold-400 font-sans text-xs uppercase tracking-[0.3em] font-bold">
            Unforgettable Memories Await
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
            Ready to Experience Traditional Rajasthani Luxury?
          </h2>
          <p className="font-sans text-sm md:text-base text-beige-200/90 max-w-xl mx-auto">
            Book a romantic dinner table under the stars or plan your luxury family vacation with lake views in our premium heritage suites.
          </p>
          <div className="pt-6">
            <Link 
              to="/contact" 
              className="inline-block px-10 py-4 bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
            >
              Reserve / Inquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Responsive Image Gallery */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16 border-t border-beige-200">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
            Visual Experience
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
            Our Property Photo Gallery
          </h2>
          <p className="text-sm font-sans text-dark-900/60 max-w-lg mx-auto">
            Take a visual tour of Jharokha Haveli—from our carved heritage rooms to the sunset rooftop restaurant overlooking the lake.
          </p>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4" />
        </div>

        <Gallery />
      </section>

      {/* 10. Testimonials Slider */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
            Guest Endorsements
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-emerald-800">
            What Our Guests Say
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto" />
        </div>

        <div className="relative h-[280px] sm:h-[240px] md:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white border border-beige-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-gold-500">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex gap-4 items-start">
                  <FaQuoteLeft className="text-gold-300 w-8 h-8 shrink-0" />
                  <p className="font-sans text-dark-900/80 text-sm md:text-base italic leading-relaxed">
                    {testimonials[activeTestimonial].text}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 border-t border-beige-100 pt-4 mt-4">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name} 
                  className="w-10 h-10 rounded-full object-cover border border-gold-200"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-emerald-950">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-[11px] text-dark-900/50 uppercase tracking-widest font-semibold">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 pt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonial(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTestimonial === idx ? 'w-6 bg-gold-500' : 'w-2 bg-beige-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-beige-100/30 border-t border-beige-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-emerald-800">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-[2px] bg-gold-400 mx-auto" />
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>
    </PageLayout>
  );
}
