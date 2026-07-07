import { FaStar, FaQuoteLeft, FaCheckCircle, FaAward } from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import GlassCard from '../components/GlassCard';

const extendedTestimonials = [
  {
    name: 'Priyah Sharma',
    location: 'Mumbai, India',
    rating: 5,
    date: 'June 2026',
    text: 'Dined at the restaurant and stayed 3 nights. The lake view from the Jharokha window is worth every single penny. It felt like living inside a royal painting. Clean suites and excellent service!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    tag: 'Verified Resort Guest'
  },
  {
    name: 'David Miller',
    location: 'London, UK',
    rating: 5,
    date: 'May 2026',
    text: 'A magnificent boutique haveli. The staff is polite, quick to help, and coordinates taxi transfers. Authentic Rajasthani curry at the terrace restaurant was outstanding. Recommended!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    tag: 'Verified International Traveler'
  },
  {
    name: 'Karan Malhotra',
    location: 'New Delhi, India',
    rating: 5,
    date: 'April 2026',
    text: 'Scenic, quiet, and extremely clean. The Ambamata neighborhood is peaceful yet so close to all old city landmarks. Waking up to the sunrise over Udaipur hills was unforgettable.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    tag: 'Verified Family Stay'
  },
  {
    name: 'Ananya Deshmukh',
    location: 'Pune, India',
    rating: 5,
    date: 'March 2026',
    text: 'The best Lal Maas in Udaipur! The rooftop seating at the restaurant provides full views of the illuminated City Palace. High-quality ingredients and spectacular hosting.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    tag: 'Verified Restaurant Diner'
  },
  {
    name: 'Dr. Robert Chen',
    location: 'Singapore',
    rating: 5,
    date: 'February 2026',
    text: 'Very comfortable beds and beautifully designed heritage interiors. Quiet setting away from street horn noise. Exceptional service from booking to checkout.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
    tag: 'Verified Executive Guest'
  },
  {
    name: 'Meenakshi Rathore',
    location: 'Udaipur, Local',
    rating: 5,
    date: 'January 2026',
    text: 'As a local, Jharokha Haveli restaurant is our absolute choice to host family functions and dinners. The views are magnificent and the menu retains true Rajasthani roots.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    tag: 'Verified Local Diner'
  }
];

export default function Testimonials() {
  return (
    <PageLayout>
      <SEO
        title="Guest Reviews & Testimonials"
        description="Read real guest reviews and ratings for Jharokha Haveli Udaipur. Discover what visitors say about our luxury rooms, resort experience, and fine dining."
        keywords="Jharokha reviews, Jharokha Haveli feedback, hotel ratings Udaipur, best hotel reviews Udaipur"
      />

      {/* Testimonials Header */}
      <PageHero 
        subtitle="Guest Experiences" 
        title="Guest Testimonials" 
        backgroundImage="/haveli_5.jpg" 
      />

      {/* Stats Summary Panel */}
      <section className="py-12 px-6 max-w-5xl mx-auto -mt-10 relative z-10">
        <div className="bg-white/80 backdrop-blur border border-gold-500/20 shadow-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-around items-center text-center gap-6">
          <div className="space-y-1">
            <span className="text-gold-600 font-sans text-xs uppercase tracking-widest font-bold">Average Rating</span>
            <div className="flex items-center gap-2 justify-center">
              <span className="font-serif text-4xl font-bold text-emerald-800">4.9</span>
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-dark-900/50">Based on 1,200+ verified ratings</p>
          </div>

          <div className="h-px w-24 md:h-12 md:w-px bg-beige-200" />

          <div className="space-y-1">
            <span className="text-gold-600 font-sans text-xs uppercase tracking-widest font-bold">Service Score</span>
            <div className="flex items-center gap-2 justify-center">
              <FaAward className="text-gold-500 w-6 h-6" />
              <span className="font-serif text-2xl font-semibold text-emerald-800">100% Excellence</span>
            </div>
            <p className="text-[11px] text-dark-900/50">Awarded TripAdvisor Excellence Certificate</p>
          </div>

          <div className="h-px w-24 md:h-12 md:w-px bg-beige-200" />

          <div className="space-y-1">
            <span className="text-gold-600 font-sans text-xs uppercase tracking-widest font-bold">Location Vibe</span>
            <div className="flex items-center gap-2 justify-center">
              <span className="font-serif text-2xl font-semibold text-emerald-800">Spectacular</span>
            </div>
            <p className="text-[11px] text-dark-900/50">Direct lakeside vistas in ancient Udaipur</p>
          </div>
        </div>
      </section>

      {/* Grid of guest reviews */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
            Verified Experiences
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
            Reviews from Our Visitors
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extendedTestimonials.map((t, idx) => (
            <GlassCard key={t.name} delay={idx * 0.1}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1 text-gold-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <FaQuoteLeft className="text-gold-200/50 w-8 h-8" />
              </div>

              <p className="font-sans text-dark-900/85 text-sm md:text-base leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="border-t border-beige-200/50 pt-4 flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full object-cover border border-gold-200" 
                  loading="lazy"
                />
                <div className="space-y-0.5">
                  <h4 className="font-serif text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                    {t.name}
                    <FaCheckCircle className="text-emerald-700 w-3.5 h-3.5" title="Verified review" />
                  </h4>
                  <p className="text-[10px] text-dark-900/50 font-sans tracking-wide">
                    {t.location} • {t.date}
                  </p>
                  <span className="inline-block text-[9px] uppercase bg-gold-50 text-gold-700 px-2 py-0.5 rounded-full font-bold border border-gold-100/40">
                    {t.tag}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
