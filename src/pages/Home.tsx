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
  FaStar 
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
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide text-white drop-shadow-md"
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

      {/* 3. Some Key Metrics */}
      <section className="bg-emerald-950 text-white py-16 px-6 md:px-12 border-y border-gold-950 relative overflow-hidden">
        {/* Decorative gold vector line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          <div className="text-center space-y-2">
            <p className="text-gold-400 text-3xl md:text-5xl font-bold font-serif flex justify-center items-center">
              <AnimatedCounter end={15000} suffix="+" />
            </p>
            <p className="text-xs md:text-sm text-beige-300/80 uppercase tracking-widest font-semibold font-sans">
              Happy Guests
            </p>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-gold-400 text-3xl md:text-5xl font-bold font-serif flex justify-center items-center">
              <AnimatedCounter end={12} suffix="+" />
            </p>
            <p className="text-xs md:text-sm text-beige-300/80 uppercase tracking-widest font-semibold font-sans">
              Years of Hospitality
            </p>
          </div>

          <div className="text-center space-y-2">
            <p className="text-gold-400 text-3xl md:text-5xl font-bold font-serif flex justify-center items-center">
              <AnimatedCounter end={35} suffix="+" />
            </p>
            <p className="text-xs md:text-sm text-beige-300/80 uppercase tracking-widest font-semibold font-sans">
              Premium Rooms
            </p>
          </div>

          <div className="text-center space-y-2">
            <p className="text-gold-400 text-3xl md:text-5xl font-bold font-serif flex justify-center items-center">
              <AnimatedCounter end={100} suffix="%" />
            </p>
            <p className="text-xs md:text-sm text-beige-300/80 uppercase tracking-widest font-semibold font-sans">
              Fine Dining Rating
            </p>
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="py-24 px-6 md:px-12 bg-beige-100/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
              Exclusive Sanctuary
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
              Our Hospitality Services
            </h2>
            <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Restaurant Card */}
            <GlassCard className="flex flex-col h-full">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 group-hover:shadow-md">
                <img 
                  src="/haveli_3.jpg" 
                  alt="Fine Dining" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-emerald-800 text-white p-3 rounded-full shadow-lg">
                  <FaUtensils className="w-5 h-5 text-gold-300" />
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-950 mb-3">
                1. Scenic Lake-View Restaurant
              </h3>
              <p className="font-sans text-dark-900/80 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                Dine in absolute bliss. Our premium restaurant features outdoor open-air seating overlooking the majestic water vistas of Udaipur. We serve rich, authentic Mewari dishes prepared by heritage chefs, alongside stellar multi-cuisine items that satisfy the most refined palates.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-sans text-xs uppercase tracking-wider font-bold rounded-lg transition-colors"
                >
                  Dining Details
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 border border-emerald-800 text-emerald-800 hover:bg-emerald-50 font-sans text-xs uppercase tracking-wider font-bold rounded-lg transition-colors"
                >
                  Reserve Table
                </Link>
              </div>
            </GlassCard>

            {/* Resort Card */}
            <GlassCard className="flex flex-col h-full">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                <img 
                  src="/haveli_5.jpg" 
                  alt="Premium Suites" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-emerald-800 text-white p-3 rounded-full shadow-lg">
                  <FaBed className="w-5 h-5 text-gold-300" />
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-950 mb-3">
                2. Premium Heritage Resort Stay
              </h3>
              <p className="font-sans text-dark-900/80 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                Relax in traditional royal chambers equipped with modern luxuries. Our suites feature handcrafted arches, gold metallic details, comfortable bedding, and quiet lounge spaces. Wake up to the soothing sound of soft waves and glorious morning sun rays lighting up your room.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-sans text-xs uppercase tracking-wider font-bold rounded-lg transition-colors"
                >
                  Resort Details
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 border border-emerald-800 text-emerald-800 hover:bg-emerald-50 font-sans text-xs uppercase tracking-wider font-bold rounded-lg transition-colors"
                >
                  Book Your Room
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border border-gold-500/20 rounded-2xl bg-white/40 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold-100 rounded-full blur-3xl -z-10" />
          <span className="font-serif text-gold-600 text-lg italic block mb-2">Our Mission</span>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-800 mb-4">
            To preserve heritage and offer pristine hospitality.
          </h3>
          <p className="font-sans text-sm md:text-base text-dark-900/80 leading-relaxed">
            Our goal is to honor the glorious structural and cultural legacy of Rajasthan, presenting travelers and food enthusiasts with an authentic experience. We focus on providing personalized attention, sustainable operations, and maintaining high hospitality standards.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 border border-gold-500/20 rounded-2xl bg-white/40 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-full blur-3xl -z-10" />
          <span className="font-serif text-gold-600 text-lg italic block mb-2">Our Vision</span>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-800 mb-4">
            To be the premier heritage destination in Udaipur.
          </h3>
          <p className="font-sans text-sm md:text-base text-dark-900/80 leading-relaxed">
            We envision Jharokha Haveli as a timeless destination where visitors can reconnect with peace, taste the history of Mewar, and create lifetime memories in luxury, becoming the benchmark for premium boutique stays.
          </p>
        </motion.div>
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
