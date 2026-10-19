'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-gradient-to-br from-[#5E1757] to-[#A82245] hover:to-[#F07D26] text-white shadow-hero hover:shadow-card-hover border border-white/20 focus:outline-none focus:ring-4 focus:ring-[#F07D26]/40 flex items-center justify-center group"
          aria-label="Volver arriba de la página"
          title="Volver arriba"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="sr-only">Volver arriba</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
