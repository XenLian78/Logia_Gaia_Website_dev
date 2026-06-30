'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export default function AgeGate() {

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const isVerified = sessionStorage.getItem('ageVerified');
    if (!isVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem('ageVerified', 'true');
    setIsOpen(false);
  };

  if (!isMounted) return null; // Αποφυγή hydration mismatch
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background p-6"
        >
          <div className="text-center max-w-md">
            <h1 className="font-display text-5xl text-solar-ochre mb-8 tracking-widest">LOGIA GAIA</h1>
            <p className="font-body text-sm text-outline-variant mb-10 tracking-widest uppercase">
              Επιβεβαιώστε ότι είστε άνω των 18 ετών για να συνεχίσετε.
            </p>
            <button
              onClick={handleVerify}
              className="px-10 py-4 border-[0.5px] border-solar-ochre text-solar-ochre hover:bg-solar-ochre hover:text-background transition-all duration-300 font-body text-xs tracking-[0.2em] uppercase"
            >
              Είμαι άνω των 18
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 

