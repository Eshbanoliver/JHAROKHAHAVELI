import { motion } from 'framer-motion';
import { FaCrown, FaHistory, FaAward, FaHeart } from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';

const timelineEvents = [
  {
    year: '1998',
    title: 'Architectural Vision',
    description: 'Our founders partnered with heritage architects to design a structure honoring the classical arches (Jharokhas) and stone designs of the Mewar era.'
  },
  {
    year: '2008',
    title: 'Laying the Foundation',
    description: 'We secured our prime location at Amrai Ghat, Chandpole in Udaipur, beginning the careful stone-by-stone carving process.'
  },
  {
    year: '2014',
    title: 'Opening of the Jharokha Restaurant',
    description: 'Opened our lakeside dining decks to guests, offering authentic Rajasthani recipes that quickly became a favorite of national and international travelers.'
  },
  {
    year: '2020',
    title: 'Expansion into Luxury Suites',
    description: 'Expanded our layout to build premium luxury hotel resort suites, allowing guests to sleep in heritage chambers right next to the lake.'
  },
  {
    year: '2026',
    title: 'A Modern Legacy',
    description: 'Upgraded our entire resort with modern premium amenities, smart integrations, and high-end services, keeping Udaipur heritage alive.'
  }
];

export default function About() {
  return (
    <PageLayout>
      <SEO
        title="Our Story & Heritage"
        description="Learn about the history and heritage of Jharokha Haveli in Udaipur. Discover our story, mission, and legacy of luxury Rajasthani hospitality."
        keywords="Jharokha Haveli story, Udaipur heritage hotel history, Rajasthani hospitality history, Jharokha history"
      />

      {/* About Header */}
      <section className="bg-emerald-950 text-white py-20 px-6 md:px-12 text-center relative overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0,transparent_55%)]" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 pt-10">
          <span className="text-gold-400 font-sans text-xs uppercase tracking-[0.3em] font-bold">
            The Heritage & The Legacy
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Our Story & Heritage
          </h1>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4" />
        </div>
      </section>

      {/* Narrative Section: Luxury Story */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
            Lakeside Romance
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
            The History Behind Jharokha Haveli
          </h2>
          <p className="font-sans text-dark-900/80 leading-relaxed">
            In Udaipur, the <em>"City of Lakes"</em>, windows represent more than ventilation; they are viewpoints to beauty. Historically, a "Jharokha" is a stone window projecting from the wall of a palace, where royals sat to watch lake views. Jharokha Haveli was conceived to give every modern guest that exact royal viewpoint.
          </p>
          <p className="font-sans text-dark-900/75 leading-relaxed text-sm">
            Located near the Leela Staff Gate along Amrai Ghat ChandPol, we are surrounded by historical architecture, narrow streets filled with tales, and the soothing currents of the lake. Every stone, arch, and corner of our property has been hand-selected and hand-finished by master stonemasons whose families have carved palaces for centuries.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-beige-200">
            <div>
              <h4 className="font-serif text-lg font-bold text-emerald-950 flex items-center gap-2">
                <FaCrown className="text-gold-500" /> Royal Vibe
              </h4>
              <p className="font-sans text-xs text-dark-900/70 mt-1">Carved sandstones, gold leaf details, and luxury chandeliers.</p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-emerald-950 flex items-center gap-2">
                <FaHeart className="text-gold-500" /> Warm Service
              </h4>
              <p className="font-sans text-xs text-dark-900/70 mt-1">Traditional Indian greetings, personalized hosting, and local guides.</p>
            </div>
          </div>
        </motion.div>

        {/* Beautiful Image Layout */}
        <motion.div 
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-12 gap-4 h-[450px]"
        >
          <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-xl border border-beige-200">
            <img 
              src="/haveli_6.jpg" 
              alt="Lakeside Palace" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="col-span-5 grid grid-rows-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-beige-200">
              <img 
                src="/haveli_5.jpg" 
                alt="Room Arches" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-beige-200">
              <img 
                src="/haveli_3.jpg" 
                alt="Lakeside Dinner Table" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Heritage & Hospitality */}
      <section className="bg-beige-100/50 py-20 px-6 md:px-12 border-y border-beige-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="bg-white inline-block p-4 rounded-full shadow-sm text-gold-500 border border-beige-100">
              <FaHistory className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-emerald-950">Intricate Preservation</h3>
            <p className="font-sans text-sm text-dark-900/70 leading-relaxed">
              We focus on keeping old architectural designs safe. We avoid steel structures, keeping structural carvings intact.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white inline-block p-4 rounded-full shadow-sm text-gold-500 border border-beige-100">
              <FaCrown className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-emerald-950">Mewari Royal Cuisine</h3>
            <p className="font-sans text-sm text-dark-900/70 leading-relaxed">
              Our culinary team preserves original Royal Mewari recipes, keeping traditional flavors alive using local spices.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white inline-block p-4 rounded-full shadow-sm text-gold-500 border border-beige-100">
              <FaAward className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-emerald-950">Bespoke Hospitality</h3>
            <p className="font-sans text-sm text-dark-900/70 leading-relaxed">
              Every detail of your stay is customized—from private lake transfers to special requests, keeping you comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
            How We Evolved
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800">
            Our Historical Timeline
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
        </div>

        <div className="relative border-l-2 border-gold-300 ml-4 md:ml-32 space-y-12 py-4">
          {timelineEvents.map((event, idx) => (
            <motion.div 
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Year Bubble */}
              <div className="absolute -left-[17px] top-1.5 bg-gold-500 text-white font-serif text-xs px-2.5 py-1 rounded-full border-4 border-beige-100 shadow-md">
                {event.year}
              </div>

              {/* Event Content */}
              <div className="bg-white border border-beige-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-serif text-lg md:text-xl font-bold text-emerald-950 mb-2">
                  {event.title}
                </h4>
                <p className="font-sans text-sm text-dark-900/75 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission, Vision & Core Values Redux */}
      <section className="py-20 px-6 md:px-12 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_60%)]" />
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10 pb-16">
            <div className="space-y-4">
              <span className="text-gold-400 font-sans text-xs uppercase tracking-widest font-bold">The Mission</span>
              <h3 className="font-serif text-2xl md:text-4xl font-semibold">Preserving Udaipur Legacy</h3>
              <p className="font-sans text-sm md:text-base text-beige-200/80 leading-relaxed">
                To create a sanctuary that preserves, represents, and shares the traditional craftsmanship and lifestyle of royal Mewar, ensuring sustainable tourism while delivering high-quality hospitality.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-gold-400 font-sans text-xs uppercase tracking-widest font-bold">The Vision</span>
              <h3 className="font-serif text-2xl md:text-4xl font-semibold">Exemplifying Cultural Stays</h3>
              <p className="font-sans text-sm md:text-base text-beige-200/80 leading-relaxed">
                To be universally recognized as the prime boutique heritage resort in Udaipur, where traditional structure, authentic lakeside fine dining, and customized hospitality merge to offer lifetime experiences.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-center font-serif text-2xl font-bold text-gold-400 tracking-wide">
              Our Hospitality Core Values
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Authenticity First', desc: 'True Rajasthani recipes, actual handcarved sandstone arches, and local stories.' },
                { title: 'Exquisite Quality', desc: 'Only fresh ingredients, high-grade linen, spotless room sanitization.' },
                { title: 'Heartfelt Care', desc: 'Attending to every guest with personal care, smiling service, and warmth.' },
                { title: 'Nature Serenity', desc: 'Minimizing local waste, respecting lake ecosystems, and promoting silence.' }
              ].map((val) => (
                <div key={val.title} className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <h5 className="font-serif text-lg font-bold text-gold-300 mb-2">{val.title}</h5>
                  <p className="font-sans text-xs md:text-sm text-beige-200/70 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
