import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-beige-100 border-t border-gold-950 pt-16 pb-8 px-6 md:px-12 font-sans relative overflow-hidden">
      {/* Decorative Gold Glow in Footer */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Jharokha Haveli Logo" 
              className="w-10 h-10 rounded-full border border-gold-500/20 object-cover"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest text-white leading-tight">
                JHAROKHA
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-500 font-bold leading-none">
                HAVELI
              </span>
            </div>
          </div>
          <p className="text-beige-300/80 text-sm leading-relaxed">
            Nestled in the heart of Udaipur's historic landscape, Jharokha Haveli offers a magical blend of royal Rajasthani heritage, premium resort stays, and exquisite fine dining overlooking scenic views.
          </p>
          <div className="space-y-3 text-sm text-beige-300/90">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-gold-500 mt-1 shrink-0" />
              <span>
                Naga Nagri, Amrai Ghat ChandPol,<br />
                Near Leela Staff Gate,<br />
                Cheerwa, Ambamata, Udaipur,<br />
                Rajasthan 313004
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-gold-500 shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+917665583595" className="hover:text-gold-400 transition-colors">+91 76655 83595</a>
                <a href="tel:+919998999716" className="hover:text-gold-400 transition-colors">+91 99989 99716</a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-semibold text-white tracking-wide border-b border-gold-900 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-beige-300/80">
            <li>
              <Link to="/" className="hover:text-gold-400 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-400 transition-colors duration-300">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-400 transition-colors duration-300">Services</Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-gold-400 transition-colors duration-300">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-400 transition-colors duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-semibold text-white tracking-wide border-b border-gold-900 pb-2">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm text-beige-300/80">
            <li>
              <Link to="/services" className="hover:text-gold-400 transition-colors duration-300 font-medium text-gold-500">1. Hotel Rooms & Resort</Link>
              <p className="text-[12px] text-beige-400/70 mt-1 pl-4">Premium luxury suites, quiet courtyards, and warm Mewari hospitality.</p>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-400 transition-colors duration-300 font-medium text-gold-500">2. Dining Hall</Link>
              <p className="text-[12px] text-beige-400/70 mt-1 pl-4">Scenic lakeside dining decks, local Mewari spices, and gourmet multi-cuisine.</p>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-400 transition-colors duration-300 font-medium text-gold-500">3. Pool & Heritage Place</Link>
              <p className="text-[12px] text-beige-400/70 mt-1 pl-4">Lakeside swimming pool, historic stone carvings, and traditional architecture.</p>
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-semibold text-white tracking-wide border-b border-gold-900 pb-2">
            Find Us
          </h3>
          <div className="rounded-xl overflow-hidden border border-gold-900 shadow-lg h-44">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.221941953648!2d73.67793497536196!3d24.581535578112387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5cbf3359c2f%3A0x6ecdc26b949e271f!2sJharokha%20-%20by%20Karohi%20Haveli%20Restaurant!5e0!3m2!1sen!2sin!4v1783145861370!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Map location of Jharokha Haveli"
            />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-beige-900/30 pt-8 text-center text-xs text-beige-400/70 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          ©️ Copyright 2026 | JHAROKHA HAVELI | All Rights Reserved | Powered by{' '}
          <a 
            href="https://www.futurexdigitalmarketing.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#28a745' }}
            className="font-semibold hover:underline"
          >
            Future X Digital Marketing
          </a>
        </p>
        <p className="text-[10px] text-beige-500/50">
          Udaipur Lakes & Heritage Hotels
        </p>
      </div>
    </footer>
  );
}
