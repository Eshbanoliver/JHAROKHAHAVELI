import { motion } from 'framer-motion';
import { 
  FaUtensils, 
  FaUsers, 
  FaMountain, 
  FaBed, 
  FaGem, 
  FaSpa, 
  FaTree, 
  FaGift,
  FaSwimmingPool,
  FaHotel,
  FaHistory
} from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <PageLayout>
      <SEO
        title="Premium Services - Hotel Rooms, Pool, Resort & Dining"
        description="Experience the top-tier services at Jharokha Haveli Udaipur. Discover our luxury hotel rooms, lakeside swimming pool, heritage resort amenities, dining hall, and historic environment."
        keywords="Udaipur hotel rooms, lakeside pool Udaipur, heritage resort Udaipur, Jharokha dining hall, Udaipur historical palace, Rajasthani hospitality"
      />

      {/* Services Header */}
      <PageHero 
        subtitle="Uncompromising Excellence" 
        title="Our Premium Services" 
        backgroundImage="/haveli_3.jpg" 
      />

      {/* 1. HOTEL ROOMS SECTION */}
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
              src="/haveli_5.jpg" 
              alt="Luxury Hotel Room" 
              className="w-full h-full object-cover" 
            />
            {/* Absolute badge */}
            <div className="absolute bottom-6 left-6 bg-emerald-950/90 text-white backdrop-blur border border-gold-500/30 p-6 rounded-2xl max-w-xs space-y-1">
              <p className="font-serif text-lg font-bold text-gold-400">Heritage Comfort</p>
              <p className="text-xs text-beige-200">Wake up to lake wave ripples right outside your royal window frame.</p>
            </div>
          </motion.div>

          {/* Details block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
                Exclusive Accommodations
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
                Luxury Hotel Rooms
              </h2>
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
              Sleep inside handcrafted royal chambers, decorated with traditional Rajasthani structures and premium fixtures. Every room features direct views of Udaipur's historic lakes, private sitting balconies, and top-tier hospitality catering to your comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaBed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Comfortable Stay</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Super king mattresses, high-thread premium sheets, and plush pillows.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaGem className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Premium Interiors</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Carved sandstones, marble flooring, and gold leaf murals.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaMountain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Lake Views</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Scenic private balconies (Jharokhas) looking directly over Udaipur waters.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaSpa className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Relaxing Ambience</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Soundproof rooms with peaceful layouts and soothing natural lighting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><hr className="border-beige-200" /></div>

      {/* 2. POOL SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Details block */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-3">
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
                Refresh & Rejuvenate
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
                Lakeside Swimming Pool
              </h2>
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
              Immerse yourself in our beautiful outdoor swimming pool. Take a refreshing dip or sit back on our comfortable loungers while enjoying the stunning panorama of Udaipur’s lakes, historic buildings, and sunset vistas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaSwimmingPool className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Crystal Clear Water</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Regularly cleaned, temperature-regulated pool for perfect swims.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaTree className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Scenic Deck</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Poolside loungers and umbrellas looking directly at the lake view.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaMountain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Sunset Swims</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Witness gorgeous sunset colors mirroring on the water surface.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaGift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Towels & Drinks</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Freshly laundered towels and custom poolside drinks at your service.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-beige-200 lg:order-1"
          >
            <img 
              src="/haveli_2.jpg" 
              alt="Lakeside Swimming Pool" 
              className="w-full h-full object-cover" 
            />
            {/* Absolute badge */}
            <div className="absolute bottom-6 right-6 bg-emerald-950/90 text-white backdrop-blur border border-gold-500/30 p-6 rounded-2xl max-w-xs space-y-1">
              <p className="font-serif text-lg font-bold text-gold-400">Lakeside Oasis</p>
              <p className="text-xs text-beige-200">Swim in serenity under the skies, overlooking the historic skyline.</p>
            </div>
          </motion.div>
        </div>

        {/* Mid CTA Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-emerald-950 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl relative overflow-hidden border border-gold-900">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-900/10 rounded-full blur-3xl" />
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold">Experience Heritage Hospitality</h3>
            <p className="font-sans text-xs md:text-sm text-beige-200/80">Make your booking today to secure premium room options and lakeside amenities.</p>
          </div>
          <Link 
            to="/contact" 
            className="shrink-0 px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-lg transition-colors shadow-lg active:scale-95"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><hr className="border-beige-200" /></div>

      {/* 3. RESORT SECTION */}
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
              src="/haveli_1.jpg" 
              alt="Heritage Resort Exterior" 
              className="w-full h-full object-cover" 
            />
            {/* Absolute badge */}
            <div className="absolute bottom-6 left-6 bg-emerald-950/90 text-white backdrop-blur border border-gold-500/30 p-6 rounded-2xl max-w-xs space-y-1">
              <p className="font-serif text-lg font-bold text-gold-400">Royal Mewari Sanctuary</p>
              <p className="text-xs text-beige-200">Bespoke hospitality honoring the traditions of ancient Rajasthan.</p>
            </div>
          </motion.div>

          {/* Details block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
                Heritage Sanctuary
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
                Premium Heritage Resort
              </h2>
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
              Jharokha Haveli is a complete boutique resort offering a sanctuary of peace. Integrating classical structures, stone-carved courtyards, and lush sitting areas, we deliver the warm hospitality of Rajasthan to make your stay magical.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaHotel className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Heritage Courtyard</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Peaceful open-air central lounge with beautiful stone fountains.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaUsers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Royal Welcomes</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Traditional Rajasthani tikka welcomes and custom welcome drinks.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaGift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">24/7 Concierge</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Personalized itinerary, luggage care, and local sightseeing setups.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaTree className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Gardened Spaces</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Quiet sitting corners, stone walkways, and natural green environments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><hr className="border-beige-200" /></div>

      {/* 4. DINING HALL SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Details block */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-3">
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
                Heritage Gastronomy
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
                Lakeside Dining Hall
              </h2>
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
              At Jharokha Haveli, dining is an unforgettable art. Savor authentic local Mewari dishes and stellar multi-cuisine gourmet options in our lakeside dining hall or open terrace decks. Enjoy the candle glow, palace view, and fresh lake air.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaUtensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Mewari Cuisine</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Authentic regional recipes prepared using handground local spices.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaMountain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Open Lake Decks</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Scenic open seating with direct look-outs onto the glowing city lights.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaGem className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Fine Dining Hall</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Classic indoor hall decorated with old mirrors and gold-leaf patterns.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaUsers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Group Dining</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Spacious table layouts suitable for romantic dates or group feasts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-beige-200 lg:order-1"
          >
            <img 
              src="/haveli_3.jpg" 
              alt="Lakeside Fine Dining" 
              className="w-full h-full object-cover" 
            />
            {/* Absolute badge */}
            <div className="absolute bottom-6 right-6 bg-emerald-950/90 text-white backdrop-blur border border-gold-500/30 p-6 rounded-2xl max-w-xs space-y-1">
              <p className="font-serif text-lg font-bold text-gold-400">Scenic Gastronomy</p>
              <p className="text-xs text-beige-200">Dine under the starry sky, with view of historic city lights.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><hr className="border-beige-200" /></div>

      {/* 5. HERITAGE PLACE SECTION */}
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
              src="/haveli_7.jpg" 
              alt="Historic Jharokha Haveli Architecture" 
              className="w-full h-full object-cover" 
            />
            {/* Absolute badge */}
            <div className="absolute bottom-6 left-6 bg-emerald-950/90 text-white backdrop-blur border border-gold-500/30 p-6 rounded-2xl max-w-xs space-y-1">
              <p className="font-serif text-lg font-bold text-gold-400">Living History</p>
              <p className="text-xs text-beige-200">Preserved 19th-century structural arches in old city Udaipur.</p>
            </div>
          </motion.div>

          {/* Details block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
                Mewari Architecture
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
                Historic Heritage Place
              </h2>
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
              Step into a living museum. Jharokha Haveli is built with traditional stones, arches, and overhanging balconies (Jharokhas), preserving the unique Mewar architecture. Enjoy the historical atmosphere that connects you with Udaipur's royal heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaHistory className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Historic Legacy</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Preservation of traditional Mewar structural shapes and patterns.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaGem className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Aesthetic Carvings</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Classic stone pillars, stained glass work, and local materials.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaMountain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Old City Location</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Steps away from Amrai Ghat, Chandpole, and Lake Pichola.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-3 rounded-xl text-gold-600 border border-gold-100 shrink-0">
                  <FaUsers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Heritage Tours</h4>
                  <p className="font-sans text-xs text-dark-900/70 mt-1">Guided walks around the property detailing its historical architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-emerald-950 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl relative overflow-hidden border border-gold-900">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold-900/10 rounded-full blur-3xl" />
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold">Reserve Your Heritage Experience</h3>
            <p className="font-sans text-xs md:text-sm text-beige-200/80">Plan your luxury family vacation or romantic dinner over Lake Pichola today.</p>
          </div>
          <Link 
            to="/contact" 
            className="shrink-0 px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-lg transition-colors shadow-lg active:scale-95"
          >
            Book Your Experience
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
