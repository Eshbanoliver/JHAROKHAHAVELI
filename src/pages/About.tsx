import { motion } from 'framer-motion';
import { FaCrown, FaHistory, FaAward, FaHeart } from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

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
      <PageHero 
        subtitle="The Heritage & The Legacy" 
        title="Our Story & Heritage" 
        backgroundImage="/haveli_6.jpg" 
      />

      {/* Narrative Section: Luxury Story */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 relative z-10"
          >
            <div className="space-y-4">
              <span className="inline-block py-1.5 px-4 rounded-full border border-gold-500/30 bg-gold-50 text-gold-600 font-sans text-xs uppercase tracking-widest font-bold shadow-sm">
                Lakeside Romance
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-emerald-950 leading-[1.1]">
                The History Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Jharokha Haveli</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl font-serif italic text-emerald-800/90 border-l-4 border-gold-400 pl-4 py-1">
                In Udaipur, the "City of Lakes", windows represent more than ventilation; they are viewpoints to beauty.
              </p>
              <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
                Historically, a "Jharokha" is a stone window projecting from the wall of a palace, where royals sat to watch lake views. Jharokha Haveli was conceived to give every modern guest that exact royal viewpoint.
              </p>
              <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
                Located near the Leela Staff Gate along Amrai Ghat ChandPol, we are surrounded by historical architecture, narrow streets filled with tales, and the soothing currents of the lake. Every stone, arch, and corner of our property has been hand-selected and hand-finished by master stonemasons whose families have carved palaces for centuries.
              </p>
            </div>
          </motion.div>

          {/* Dynamic Image Collage */}
          <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center mt-10 lg:mt-0">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold-400/20 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="absolute z-10 w-[70%] h-[80%] right-0 top-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-beige-100"
            >
              <img src="/haveli_6.jpg" alt="Lakeside Palace" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>

            {/* Overlapping Image 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
              className="absolute z-20 w-[45%] h-[45%] left-0 bottom-[20%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white/90 bg-beige-100"
            >
              <img src="/haveli_5.jpg" alt="Room Arches" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>

            {/* Overlapping Image 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: 15 }}
              whileInView={{ opacity: 1, y: 0, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
              className="absolute z-30 w-[40%] h-[40%] right-[10%] bottom-0 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/90 bg-beige-100"
            >
              <img src="/haveli_3.jpg" alt="Lakeside Dinner Table" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>

            {/* Floating Glass Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              className="absolute z-40 left-[-5%] top-[10%] bg-white/80 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3 w-48 md:w-56"
            >
              <div className="bg-gold-50 p-2 rounded-full text-gold-600 shrink-0">
                <FaCrown className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-emerald-950">Royal Vibe</h4>
                <p className="font-sans text-[10px] text-dark-900/70 leading-tight mt-0.5">Handcarved stone & gold details.</p>
              </div>
            </motion.div>

            {/* Floating Glass Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              className="absolute z-40 right-[-5%] top-[45%] bg-emerald-950/80 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-emerald-800 flex items-center gap-3 w-48 md:w-56"
            >
              <div className="bg-emerald-900 p-2 rounded-full text-gold-400 shrink-0">
                <FaHeart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-white">Warm Service</h4>
                <p className="font-sans text-[10px] text-beige-200/70 leading-tight mt-0.5">Personalized hosting & guides.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Heritage & Hospitality */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-slate-950 text-white">
        {/* Vibrant animated background elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-amber-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
              The Jharokha Standard
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-beige-100 to-white/70 leading-tight">
              Our Heritage & Hospitality
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: FaHistory,
                title: "Intricate Preservation",
                desc: "We focus on keeping old architectural designs safe. We avoid steel structures, keeping structural carvings intact.",
                glowColor: "from-rose-500/20 to-pink-600/20",
                hoverGlow: "group-hover:from-rose-500/40 group-hover:to-pink-600/40",
                borderColor: "border-rose-500/20",
                hoverBorder: "group-hover:border-rose-400/60",
                iconColor: "text-rose-400 group-hover:text-rose-300",
                shadow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.4)]"
              },
              {
                icon: FaCrown,
                title: "Mewari Royal Cuisine",
                desc: "Our culinary team preserves original Royal Mewari recipes, keeping traditional flavors alive using local spices.",
                glowColor: "from-amber-500/20 to-orange-600/20",
                hoverGlow: "group-hover:from-amber-500/40 group-hover:to-orange-600/40",
                borderColor: "border-amber-500/20",
                hoverBorder: "group-hover:border-amber-400/60",
                iconColor: "text-amber-400 group-hover:text-amber-300",
                shadow: "group-hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]"
              },
              {
                icon: FaAward,
                title: "Bespoke Hospitality",
                desc: "Every detail of your stay is customized—from private lake transfers to special requests, keeping you comfortable.",
                glowColor: "from-purple-500/20 to-indigo-600/20",
                hoverGlow: "group-hover:from-purple-500/40 group-hover:to-indigo-600/40",
                borderColor: "border-purple-500/20",
                hoverBorder: "group-hover:border-purple-400/60",
                iconColor: "text-purple-400 group-hover:text-purple-300",
                shadow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border ${item.borderColor} ${item.hoverBorder} transition-all duration-500 shadow-2xl overflow-hidden flex flex-col items-center text-center space-y-6`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.glowColor} ${item.hoverGlow} transition-colors duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto bg-black/30 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${item.shadow}`}>
                    <item.icon className={`w-8 h-8 ${item.iconColor} transition-colors`} />
                  </div>
                </div>
                
                <div className="relative z-10 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-beige-50">
        {/* Background Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-200/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto space-y-24 relative z-10">
          <div className="text-center space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block py-1.5 px-4 rounded-full border border-gold-300 bg-gold-50 text-gold-700 font-sans text-xs uppercase tracking-widest font-bold shadow-sm"
            >
              How We Evolved
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl font-semibold text-emerald-950"
            >
              Our Historical Timeline
            </motion.h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center glowing line for desktop */}
            <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold-400 to-transparent opacity-50" />
            
            <div className="space-y-16 md:space-y-24">
              {timelineEvents.map((event, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={event.year}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Empty half for spacing on desktop */}
                    <div className="hidden md:block w-[45%]" />

                    {/* Center Node / Year Bubble */}
                    <div className="absolute md:relative left-0 md:left-auto top-0 md:top-auto flex items-center justify-center w-20 h-20 md:w-auto md:h-auto z-10">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gold-400 via-amber-500 to-amber-600 rounded-full flex items-center justify-center border-4 border-white shadow-[0_0_30px_rgba(212,175,55,0.4)] cursor-default"
                      >
                        <span className="text-white font-serif font-bold text-xl md:text-2xl drop-shadow-md">{event.year}</span>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-[45%] pl-28 md:pl-0">
                      <motion.div 
                        whileHover={{ y: -10 }}
                        className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-xl border border-white/60 hover:border-gold-300 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10"
                      >
                        {/* Decorative corner blur */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gold-300 to-amber-200 rounded-full opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none" />
                        
                        <h4 className="font-serif text-2xl md:text-3xl font-bold text-emerald-950 mb-4 relative z-10">
                          {event.title}
                        </h4>
                        <p className="font-sans text-base text-dark-900/80 leading-relaxed relative z-10">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
