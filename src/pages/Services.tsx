import { motion } from 'framer-motion';
import { 
  FaUtensils, 
  FaUsers, 
  FaMountain, 
  FaBed, 
  FaGem, 
  FaSpa, 
  FaTree, 
  FaGift 
} from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <PageLayout>
      <SEO
        title="Restaurant & Resort Services"
        description="Explore the services at Jharokha Haveli Udaipur. Dine at our lakeside restaurant serving authentic Mewari food, or stay in our luxury resort suites."
        keywords="Udaipur dining, lake view restaurant Udaipur, luxury resort Udaipur, Jharokha rooms, Rajasthani food"
      />

      {/* Services Header */}
      <PageHero 
        subtitle="Uncompromising Excellence" 
        title="Our Premium Services" 
        backgroundImage="/haveli_3.jpg" 
      />

      {/* 1. RESTAURANT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-beige-200"
          >
            <img 
              src="/haveli_3.jpg" 
              alt="Lakeside Fine Dining Restaurant" 
              className="w-full h-full object-cover" 
            />
            {/* Absolute badge */}
            <div className="absolute bottom-6 left-6 bg-emerald-950/90 text-white backdrop-blur border border-gold-500/30 p-6 rounded-2xl max-w-xs space-y-1">
              <p className="font-serif text-lg font-bold text-gold-400">Scenic Gastronomy</p>
              <p className="text-xs text-beige-200">Open-deck table layouts looking over historic Udaipur waters.</p>
            </div>
          </motion.div>

          {/* Details block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
                Heritage Fine Dining
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
                Lakeside Restaurant Experience
              </h2>
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
              At Jharokha Haveli, food is an art form. Enjoy local Indian and Mewari dishes cooked using original recipe parameters on our scenic decks. The soft breeze of the lake, romantic candle glows, and views of city palace create the perfect evening.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaUtensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Fine Dining</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Multi-course gourmet plates, custom reservations, and dedicated hosts.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaGem className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Authentic Cuisine</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Local Mewari recipes made with handground spices and traditional clay pots.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaUsers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Family Dining</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Large open group seating, children’s menus, and friendly staff care.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaMountain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Scenic Ambience</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Panoramic lakeside seating providing sunset vistas and palace views.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner after Restaurant */}
        <div className="p-8 md:p-12 rounded-3xl bg-emerald-950 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl relative overflow-hidden border border-gold-900">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-900/10 rounded-full blur-3xl" />
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold">Reserve Your Table Under The Stars</h3>
            <p className="font-sans text-xs md:text-sm text-beige-200/80">Secure the best lake-facing tables in advance. Perfect for romantic dates or special family dinners.</p>
          </div>
          <Link 
            to="/contact" 
            className="shrink-0 px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-lg transition-colors shadow-lg active:scale-95"
          >
            Book Dining Table
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><hr className="border-beige-200" /></div>

      {/* 2. RESORT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Details block - Ordering reversed for aesthetics on wide screens */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-3">
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
                Exclusive Heritage Living
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
                Premium Rooms & Resort Stays
              </h2>
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
              Sleep inside handcrafted royal chambers, decorated with traditional Rajasthani structures and premium fixtures. Wake up to direct lake views, soft waves, and customized hospitality that caters to every need.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaBed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Comfortable Stay</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Super king mattresses, high-thread linen sheets, and luxury pillows.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaGem className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Premium Rooms</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Carved sandstones, marble flooring, private balconies, and gold leaf murals.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaSpa className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Relaxing Environment</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Quiet hotel courtyards, peaceful sitting corners, and relaxing vibes.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaTree className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Nature Experience</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Breathtaking sunrises, soft lake breeze, and views of city hills.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4 items-start sm:col-span-2">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaGift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Family Vacations</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Interconnecting family suites, customized sightseeing tours, and children's activity help.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-beige-200 lg:order-2"
          >
            <img 
              src="/haveli_5.jpg" 
              alt="Premium Resort Suite Room" 
              className="w-full h-full object-cover" 
            />
            {/* Absolute badge */}
            <div className="absolute bottom-6 right-6 bg-emerald-950/90 text-white backdrop-blur border border-gold-500/30 p-6 rounded-2xl max-w-xs space-y-1">
              <p className="font-serif text-lg font-bold text-gold-400">Heritage Living</p>
              <p className="text-xs text-beige-200">Individually decorated chambers reflecting Mewar’s royal history.</p>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner after Resort */}
        <div className="p-8 md:p-12 rounded-3xl bg-emerald-950 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl relative overflow-hidden border border-gold-900">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold-900/10 rounded-full blur-3xl" />
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold">Reserve Your Heritage Suite Today</h3>
            <p className="font-sans text-xs md:text-sm text-beige-200/80">Wake up to the golden sunrise over Udaipur’s waters. Book early to secure premium lake views.</p>
          </div>
          <Link 
            to="/contact" 
            className="shrink-0 px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-lg transition-colors shadow-lg active:scale-95"
          >
            Book Resort Room
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
