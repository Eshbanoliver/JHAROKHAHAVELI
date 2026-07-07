import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCheckCircle, 
  FaArrowRight 
} from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import GlassCard from '../components/GlassCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Simulate submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Us & Direct Reservations"
        description="Contact Jharokha Haveli in Udaipur, Rajasthan. Submit an inquiry, reserve hotel rooms, book restaurant tables, or call our team directly."
        keywords="contact Jharokha Haveli, Udaipur hotel phone number, book Jharokha restaurant, Jharokha address"
      />

      {/* Contact Header */}
      <PageHero 
        subtitle="Connect With Our Team" 
        title="Contact Jharokha Haveli" 
        backgroundImage="/haveli_1.jpg" 
      />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Contact Information & Cards */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
              Reservation Channels
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-emerald-800 leading-tight">
              Get in Touch Directly
            </h2>
            <div className="w-12 h-[2px] bg-gold-400" />
          </div>

          <p className="font-sans text-dark-900/80 leading-relaxed text-sm md:text-base">
            Have questions about room availability, private dinner tables, corporate gatherings, or local tours? Call our resort managers directly, initiate a text conversation via WhatsApp, or submit the contact form.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Phone Card */}
            <div className="p-6 bg-white border border-beige-200 rounded-2xl shadow-sm space-y-4">
              <div className="bg-gold-50 inline-block p-3.5 rounded-xl border border-gold-100 text-gold-600">
                <FaPhoneAlt className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-emerald-950">Call Reservations</h3>
              <div className="flex flex-col gap-2">
                <a 
                  href="tel:+917665583595" 
                  className="font-sans text-sm font-semibold text-emerald-800 hover:text-gold-600 transition-colors flex items-center gap-2"
                >
                  +91 76655 83595 <FaArrowRight className="w-3 h-3 opacity-60" />
                </a>
                <a 
                  href="tel:+919998999716" 
                  className="font-sans text-sm font-semibold text-emerald-800 hover:text-gold-600 transition-colors flex items-center gap-2"
                >
                  +91 99989 99716 <FaArrowRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-white border border-beige-200 rounded-2xl shadow-sm space-y-4">
              <div className="bg-[#25d366]/10 inline-block p-3.5 rounded-xl border border-[#25d366]/20 text-[#25d366]">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-emerald-950">WhatsApp Message</h3>
              <p className="text-xs text-dark-900/60 font-sans leading-relaxed">
                Connect instantly with reception regarding checking in or quick queries.
              </p>
              <a 
                href="https://wa.me/917665583595" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25d366] hover:bg-[#20ba56] text-white text-xs font-bold font-sans uppercase tracking-wider rounded-lg transition-colors shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Address Card */}
            <div className="p-6 bg-white border border-beige-200 rounded-2xl shadow-sm space-y-4 sm:col-span-2 flex flex-col md:flex-row items-start gap-6">
              <div className="bg-gold-50 p-4 rounded-xl border border-gold-100 text-gold-600 shrink-0">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-emerald-950">Haveli Address</h3>
                <p className="font-sans text-xs md:text-sm text-dark-900/75 leading-relaxed">
                  Naga Nagri, Amrai Ghat ChandPol, Near Leela Staff Gate, Cheerwa, Ambamata, Udaipur, Rajasthan 313004
                </p>
                <div className="flex items-center gap-2 text-gold-600 text-xs font-sans font-semibold pt-1">
                  <FaClock className="w-3.5 h-3.5" />
                  <span>Resort Desk: 24/7 Operations</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="relative">
          <GlassCard className="relative overflow-hidden h-full flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-serif text-2xl font-bold text-emerald-950 border-b border-beige-200 pb-3">
                    Send Inquiries
                  </h3>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-sans font-bold text-dark-900/70">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      aria-label="Your Name"
                      placeholder="e.g. Yash Vardhan"
                      className={`w-full px-4 py-3 rounded-lg bg-white/70 border text-sm font-sans focus:outline-none transition-all duration-300 focus:bg-white ${
                        errors.name ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-beige-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-300'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 font-sans font-semibold">{errors.name}</p>}
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs uppercase tracking-wider font-sans font-bold text-dark-900/70">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      aria-label="Phone Number"
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded-lg bg-white/70 border text-sm font-sans focus:outline-none transition-all duration-300 focus:bg-white ${
                        errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-beige-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 font-sans font-semibold">{errors.phone}</p>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider font-sans font-bold text-dark-900/70">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-label="Email Address"
                      placeholder="e.g. yash@example.com"
                      className={`w-full px-4 py-3 rounded-lg bg-white/70 border text-sm font-sans focus:outline-none transition-all duration-300 focus:bg-white ${
                        errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-beige-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-300'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 font-sans font-semibold">{errors.email}</p>}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider font-sans font-bold text-dark-900/70">
                      Message Details
                    </label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      aria-label="Message Details"
                      placeholder="Detail your reservations requests or general queries here..."
                      className={`w-full px-4 py-3 rounded-lg bg-white/70 border text-sm font-sans focus:outline-none transition-all duration-300 focus:bg-white resize-none ${
                        errors.message ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-beige-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-300'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500 font-sans font-semibold">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-emerald-800 hover:bg-emerald-950 disabled:bg-emerald-900/70 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 shadow-md flex justify-center items-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Send Message'}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  className="flex flex-col items-center justify-center text-center space-y-6 py-12 px-4 h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="bg-emerald-50 text-emerald-800 p-5 rounded-full border border-emerald-100 shadow-md">
                    <FaCheckCircle className="w-16 h-16 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-bold text-emerald-950">Inquiry Sent Successfully!</h3>
                    <p className="font-sans text-sm text-dark-900/75 leading-relaxed max-w-sm">
                      Thank you for contacting Jharokha Haveli. Our resort reservations desk will review your details and call you back shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 border border-emerald-850 text-emerald-850 hover:bg-emerald-50 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors font-sans"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </section>

      {/* Map & Directions Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          {/* Directions column (1/3 width) */}
          <div className="lg:col-span-1 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-gold-600 font-sans text-xs md:text-sm uppercase tracking-widest font-bold block">
                Location & Access
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-800">
                Interactive Map & Directions
              </h3>
              <p className="font-sans text-dark-900/75 text-sm leading-relaxed">
                Jharokha Haveli is located in the historic old city of Udaipur near Amrai Ghat. Here are the easiest ways to reach our location:
              </p>
            </div>

            <div className="space-y-4">
              {/* Airport / Train info */}
              <div className="flex gap-4 items-start">
                <div className="bg-gold-50 p-2.5 rounded-lg text-gold-600 border border-gold-100 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-emerald-950 font-sans">From Airport / Railway</h4>
                  <p className="font-sans text-xs text-dark-900/60 mt-0.5">Udaipur Airport is 24 km (approx 45 mins) and the City Railway Station is 4 km away.</p>
                </div>
              </div>

              {/* Old City Warning */}
              <div className="flex gap-4 items-start">
                <div className="bg-amber-50 p-2.5 rounded-lg text-amber-600 border border-amber-100 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-amber-850 font-sans">Old City Vehicle Access</h4>
                  <p className="font-sans text-xs text-dark-900/60 mt-0.5">Lanes near Amrai Ghat can be narrow. For large vehicles, we suggest parking nearby or requesting our Chandpole gate shuttle.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Jharokha+Haveli+Udaipur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-800 hover:bg-emerald-950 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Map Column (2/3 width) */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-500/10 to-emerald-800/10 rounded-[2.5rem] blur-lg pointer-events-none" />
            <div className="relative rounded-[2rem] overflow-hidden border border-gold-200 shadow-2xl h-[400px] lg:h-full min-h-[400px]">
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
      </section>
    </PageLayout>
  );
}
