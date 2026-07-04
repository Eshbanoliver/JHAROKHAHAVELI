import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`glass-card rounded-2xl p-8 relative overflow-hidden group ${className}`}
    >
      {/* Decorative Radial Shine Highlight on Hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
      
      {/* Glow Backing Accent */}
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-gold-200/10 blur-3xl group-hover:bg-gold-300/20 transition-colors duration-500 pointer-events-none" />
      
      {children}
    </motion.div>
  );
}
