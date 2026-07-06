import { motion } from 'framer-motion';
import { FaCrown, FaHistory, FaAward, FaHeart, FaStar, FaEye, FaGem, FaLeaf } from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';



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
      <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-white text-emerald-950">
        {/* Vibrant animated background elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-amber-200/50 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
              The Jharokha Standard
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold text-emerald-950 leading-tight">
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
                glowColor: "from-rose-500/10 to-pink-600/10",
                hoverGlow: "group-hover:from-rose-500/20 group-hover:to-pink-600/20",
                borderColor: "border-beige-200",
                hoverBorder: "group-hover:border-rose-300",
                iconColor: "text-rose-500 group-hover:text-rose-600",
                shadow: "shadow-lg group-hover:shadow-[0_20px_40px_rgba(244,63,94,0.15)]"
              },
              {
                icon: FaCrown,
                title: "Mewari Royal Cuisine",
                desc: "Our culinary team preserves original Royal Mewari recipes, keeping traditional flavors alive using local spices.",
                glowColor: "from-amber-500/10 to-orange-600/10",
                hoverGlow: "group-hover:from-amber-500/20 group-hover:to-orange-600/20",
                borderColor: "border-beige-200",
                hoverBorder: "group-hover:border-amber-300",
                iconColor: "text-amber-500 group-hover:text-amber-600",
                shadow: "shadow-lg group-hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)]"
              },
              {
                icon: FaAward,
                title: "Bespoke Hospitality",
                desc: "Every detail of your stay is customized—from private lake transfers to special requests, keeping you comfortable.",
                glowColor: "from-purple-500/10 to-indigo-600/10",
                hoverGlow: "group-hover:from-purple-500/20 group-hover:to-indigo-600/20",
                borderColor: "border-beige-200",
                hoverBorder: "group-hover:border-purple-300",
                iconColor: "text-purple-500 group-hover:text-purple-600",
                shadow: "shadow-lg group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-white p-8 md:p-10 rounded-[2rem] border ${item.borderColor} ${item.hoverBorder} transition-all duration-500 ${item.shadow} overflow-hidden flex flex-col items-center text-center space-y-6`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.glowColor} ${item.hoverGlow} transition-colors duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto bg-beige-50 rounded-full border border-beige-200 flex items-center justify-center transition-all duration-500`}>
                    <item.icon className={`w-8 h-8 ${item.iconColor} transition-colors`} />
                  </div>
                </div>
                
                <div className="relative z-10 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-emerald-950 transition-colors">{item.title}</h3>
                  <p className="font-sans text-sm text-dark-900/70 leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Mission, Vision & Core Values Redux */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-emerald-950 via-[#064e3b] to-emerald-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-24">
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-white/10 hover:border-gold-500/30 transition-colors shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold-500/20 rounded-full blur-[50px] group-hover:bg-gold-500/40 transition-colors" />
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-amber-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform">
                <FaStar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-gold-300 transition-colors">The Mission</h3>
              <p className="font-sans text-base md:text-lg text-beige-200/80 leading-relaxed">
                To create a sanctuary that preserves, represents, and shares the traditional craftsmanship and lifestyle of royal Mewar, ensuring sustainable tourism while delivering high-quality hospitality.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-white/10 hover:border-teal-400/30 transition-colors shadow-2xl relative overflow-hidden group mt-0 md:mt-12"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-teal-400/20 rounded-full blur-[50px] group-hover:bg-teal-400/40 transition-colors" />
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform">
                <FaEye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-teal-300 transition-colors">The Vision</h3>
              <p className="font-sans text-base md:text-lg text-beige-200/80 leading-relaxed">
                To be universally recognized as the prime boutique heritage resort in Udaipur, where traditional structure, authentic lakeside fine dining, and customized hospitality merge to offer lifetime experiences.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <span className="text-gold-400 font-sans text-sm uppercase tracking-widest font-bold">Our Pillars</span>
              <h4 className="font-serif text-3xl md:text-5xl font-bold text-white">
                Hospitality Core Values
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { 
                  title: 'Authenticity First', 
                  desc: 'True Rajasthani recipes, handcarved arches, and local stories.', 
                  icon: FaHistory, 
                  color: 'from-amber-400 to-orange-500',
                  staticBg: 'bg-amber-500/10',
                  hoverBg: 'group-hover:bg-amber-500/20',
                  staticBorder: 'border-amber-400/40',
                  hoverBorder: 'hover:border-amber-400/70',
                  iconColor: 'text-amber-400',
                  hoverIconColor: 'group-hover:text-amber-300',
                  titleColor: 'text-amber-300',
                  hoverTitleColor: 'group-hover:text-amber-200'
                },
                { 
                  title: 'Exquisite Quality', 
                  desc: 'Fresh ingredients, high-grade linen, spotless room sanitization.', 
                  icon: FaGem, 
                  color: 'from-purple-400 to-indigo-500',
                  staticBg: 'bg-purple-500/10',
                  hoverBg: 'group-hover:bg-purple-500/20',
                  staticBorder: 'border-purple-400/40',
                  hoverBorder: 'hover:border-purple-400/70',
                  iconColor: 'text-purple-400',
                  hoverIconColor: 'group-hover:text-purple-300',
                  titleColor: 'text-purple-300',
                  hoverTitleColor: 'group-hover:text-purple-200'
                },
                { 
                  title: 'Heartfelt Care', 
                  desc: 'Attending to every guest with personal care, smiling service.', 
                  icon: FaHeart, 
                  color: 'from-rose-400 to-red-500',
                  staticBg: 'bg-rose-500/10',
                  hoverBg: 'group-hover:bg-rose-500/20',
                  staticBorder: 'border-rose-400/40',
                  hoverBorder: 'hover:border-rose-400/70',
                  iconColor: 'text-rose-400',
                  hoverIconColor: 'group-hover:text-rose-300',
                  titleColor: 'text-rose-300',
                  hoverTitleColor: 'group-hover:text-rose-200'
                },
                { 
                  title: 'Nature Serenity', 
                  desc: 'Minimizing local waste, respecting lake ecosystems, promoting silence.', 
                  icon: FaLeaf, 
                  color: 'from-emerald-400 to-teal-500',
                  staticBg: 'bg-emerald-500/10',
                  hoverBg: 'group-hover:bg-emerald-500/20',
                  staticBorder: 'border-emerald-400/40',
                  hoverBorder: 'hover:border-emerald-400/70',
                  iconColor: 'text-emerald-400',
                  hoverIconColor: 'group-hover:text-emerald-300',
                  titleColor: 'text-emerald-300',
                  hoverTitleColor: 'group-hover:text-emerald-200'
                }
              ].map((val, idx) => (
                <motion.div 
                  key={val.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`group relative backdrop-blur-md p-8 rounded-3xl border ${val.staticBorder} ${val.hoverBorder} ${val.staticBg} ${val.hoverBg} transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl`}
                >
                  {/* Glowing background blob static + hover */}
                  <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${val.color} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none`} />
                  
                  {/* Top line static + hover */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${val.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon Container */}
                  <div className={`relative z-10 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500 shadow-inner`}>
                    <val.icon className={`w-7 h-7 ${val.iconColor} ${val.hoverIconColor} transition-colors duration-500`} />
                  </div>
                  
                  {/* Title */}
                  <h5 className={`relative z-10 font-serif text-xl font-bold mb-3 ${val.titleColor} ${val.hoverTitleColor} transition-colors duration-500`}>
                    {val.title}
                  </h5>
                  
                  {/* Description */}
                  <p className="relative z-10 font-sans text-sm text-beige-200/80 leading-relaxed group-hover:text-white transition-colors duration-500">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
