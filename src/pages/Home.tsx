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
  FaCalendarAlt,
  FaPhoneAlt
} from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';
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

      {/* 6. Core Values - Creative Section */}
      <section className="relative py-28 px-6 md:px-12 bg-emerald-950 overflow-hidden border-t border-gold-900/30">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-600 rounded-full blur-[120px] mix-blend-overlay animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] mix-blend-overlay animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-2xl mx-auto"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 font-sans text-xs md:text-sm uppercase tracking-widest font-bold backdrop-blur-sm">
              Our Foundation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
              Core Values We Cherish
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: FaHistory,
                title: 'Royal Heritage',
                desc: 'Preserving authentic Rajasthani patterns, architectural carvings, and old city customs.',
                theme: {
                  glow: 'group-hover:from-rose-500/20 group-hover:to-transparent',
                  iconBg: 'from-rose-500/20 to-rose-900/50',
                  iconText: 'text-rose-400 group-hover:text-rose-300',
                  border: 'border-rose-500/30 group-hover:border-rose-400',
                  shadow: 'hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.3)]',
                  titleHover: 'group-hover:text-rose-300',
                  divider: 'bg-rose-500/30 group-hover:bg-rose-400',
                }
              },
              {
                icon: FaAward,
                title: 'Uncompromised Quality',
                desc: 'Delivering fresh culinary ingredients and spotless premium room sanitization.',
                theme: {
                  glow: 'group-hover:from-blue-500/20 group-hover:to-transparent',
                  iconBg: 'from-blue-500/20 to-blue-900/50',
                  iconText: 'text-blue-400 group-hover:text-blue-300',
                  border: 'border-blue-500/30 group-hover:border-blue-400',
                  shadow: 'hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]',
                  titleHover: 'group-hover:text-blue-300',
                  divider: 'bg-blue-500/30 group-hover:bg-blue-400',
                }
              },
              {
                icon: FaShieldAlt,
                title: 'Guest Centricity',
                desc: 'Anticipating guest requirements and greeting everyone with warmth and care.',
                theme: {
                  glow: 'group-hover:from-purple-500/20 group-hover:to-transparent',
                  iconBg: 'from-purple-500/20 to-purple-900/50',
                  iconText: 'text-purple-400 group-hover:text-purple-300',
                  border: 'border-purple-500/30 group-hover:border-purple-400',
                  shadow: 'hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)]',
                  titleHover: 'group-hover:text-purple-300',
                  divider: 'bg-purple-500/30 group-hover:bg-purple-400',
                }
              },
              {
                icon: FaGlassCheers,
                title: 'Serene Luxury',
                desc: 'Creating an atmosphere of peace and relaxation away from daily noise.',
                theme: {
                  glow: 'group-hover:from-teal-500/20 group-hover:to-transparent',
                  iconBg: 'from-teal-500/20 to-teal-900/50',
                  iconText: 'text-teal-400 group-hover:text-teal-300',
                  border: 'border-teal-500/30 group-hover:border-teal-400',
                  shadow: 'hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)]',
                  titleHover: 'group-hover:text-teal-300',
                  divider: 'bg-teal-500/30 group-hover:bg-teal-400',
                }
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, type: 'spring' }}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col ${value.theme.shadow}`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent transition-all duration-500 ${value.theme.glow}`} />
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br border flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner ${value.theme.iconBg} ${value.theme.border}`}>
                    <value.icon className={`w-7 h-7 transition-colors ${value.theme.iconText}`} />
                  </div>
                  
                  <h4 className={`font-serif text-2xl font-bold text-white mb-4 transition-colors ${value.theme.titleHover}`}>
                    {value.title}
                  </h4>
                  <div className={`w-8 h-[2px] mb-5 group-hover:w-16 transition-all duration-500 ${value.theme.divider}`} />
                  
                  <p className="font-sans text-sm text-beige-300/70 leading-relaxed font-light group-hover:text-beige-200/90 transition-colors mt-auto">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us - Creative Section */}
      <section className="relative py-32 px-6 md:px-12 bg-white overflow-hidden">
        {/* Animated fluid shapes in background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-800/20 bg-emerald-50 text-emerald-800 font-sans text-xs uppercase tracking-widest font-bold shadow-sm">
              The Haveli Distinction
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 leading-tight">
              Why Choose <span className="text-gold-600 italic font-light">Jharokha</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: FaMapMarkedAlt,
                title: 'Prime Lakeside Location',
                desc: 'Steps away from Amrai Ghat and Chandpole. Panoramic views of historic city palaces directly from our decks.',
                theme: {
                  bg: 'bg-cyan-500/5 hover:bg-cyan-50',
                  border: 'border-cyan-500/20 hover:border-cyan-400',
                  iconBox: 'bg-gradient-to-br from-cyan-400 to-blue-600',
                  iconColor: 'text-white',
                  title: 'group-hover:text-cyan-700',
                  shadow: 'hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)]',
                }
              },
              {
                icon: FaCrown,
                title: 'Heritage Architecture',
                desc: 'Authentic stone carvings, traditional archways, and window frame seating that captures Udaipur’s royal essence.',
                theme: {
                  bg: 'bg-fuchsia-500/5 hover:bg-fuchsia-50',
                  border: 'border-fuchsia-500/20 hover:border-fuchsia-400',
                  iconBox: 'bg-gradient-to-br from-fuchsia-400 to-purple-600',
                  iconColor: 'text-white',
                  title: 'group-hover:text-fuchsia-700',
                  shadow: 'hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.3)]',
                }
              },
              {
                icon: FaUtensils,
                title: 'Award-Winning Gastronomy',
                desc: 'Savor traditional recipes and modern flavors on our open terrace under the stars, looking at glowing lake waters.',
                theme: {
                  bg: 'bg-amber-500/5 hover:bg-amber-50',
                  border: 'border-amber-500/20 hover:border-amber-400',
                  iconBox: 'bg-gradient-to-br from-amber-400 to-orange-500',
                  iconColor: 'text-white',
                  title: 'group-hover:text-amber-700',
                  shadow: 'hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)]',
                }
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2, type: 'spring' }}
                className={`group relative rounded-[2rem] p-8 md:p-10 border transition-all duration-500 ${item.theme.bg} ${item.theme.border} ${item.theme.shadow} overflow-hidden backdrop-blur-sm flex flex-col`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className={`w-20 h-20 mb-8 rounded-2xl ${item.theme.iconBox} shadow-lg flex items-center justify-center transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <item.icon className={`w-10 h-10 ${item.theme.iconColor} drop-shadow-md`} />
                </div>
                
                <h3 className={`font-serif text-2xl md:text-3xl font-bold text-emerald-950 mb-4 transition-colors duration-300 ${item.theme.title}`}>
                  {item.title}
                </h3>
                
                <p className="font-sans text-dark-900/70 text-base leading-relaxed mt-auto group-hover:text-dark-900 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section - Creative Section */}
      <section className="relative py-32 overflow-hidden bg-emerald-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/haveli_6.jpg" 
            alt="Haveli Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-950/80 to-emerald-950" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl overflow-hidden group hover:border-gold-500/50 transition-colors duration-700"
          >
            {/* Animated shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div className="flex justify-center">
                <span className="inline-block px-6 py-2 rounded-full border border-gold-400/50 bg-gold-400/10 text-gold-300 font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-bold backdrop-blur-md shadow-inner">
                  Unforgettable Memories Await
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
                Ready to Experience Traditional <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-200">Rajasthani Luxury?</span>
              </h2>
              
              <p className="font-sans text-base md:text-lg text-beige-200/80 max-w-2xl mx-auto font-light leading-relaxed">
                Book a romantic dinner table under the stars or plan your luxury family vacation with lake views in our premium heritage suites.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/contact" 
                  className="relative group/btn inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gold-600 to-gold-400 text-emerald-950 font-sans text-sm uppercase tracking-widest font-black rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.5)] overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative">Reserve / Inquire Now</span>
                </Link>
                
                <a 
                  href="tel:+917665583595"
                  className="inline-flex items-center justify-center px-8 py-5 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-sans text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300"
                >
                  <FaPhoneAlt className="mr-3 text-gold-400" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
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
