//All products page//

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import Cursor from '@/components/layout/Cursor';
import { PRODUCTS } from '@/data/products';

export default function ProductsPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <Cursor />

      {/* Το pt-40 άλλαξε σε pt-20 για ίδια απόσταση από το Navbar με την Επικοινωνία */}
      <main className="bg-background text-on-surface min-h-screen pt-20 pb-48 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto select-none">
        
        {/* Header Section */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-body text-[11px] font-medium tracking-[0.15em] text-[#C5A880] mb-4 block uppercase">
              {lang === 'EL' ? 'ΟΡΙΣΜΟΣ ΤΗΣ ΑΠΟΚΛΕΙΣΤΙΚΟΤΗΤΑΣ' : 'EXCLUSIVITY DEFINED'}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-light tracking-tight text-white">
              {lang === 'EL' ? 'Μονάκριβη Σειρά' : 'Monakrivo Series'}
            </h1>
            <p className="font-body text-base md:text-lg mt-6 text-on-surface-variant/80 font-light leading-relaxed">
              {lang === 'EL' 
                ? 'Μια περιορισμένη συλλογή μοναδικών εκφράσεων από τη γη μας. Κάθε φιάλη αποτελεί μια αριθμημένη μαρτυρία ποιότητας, που δεν θα επαναληφθεί ποτέ.' 
                : 'A limited collection of singular expressions from our land. Each bottle is a hand-numbered testament to premium quality, never to be repeated.'}
            </p>
          </div>
          <div className="hidden md:block pb-4">
            <p className="font-body text-[11px] font-semibold tracking-[0.15em] text-outline-variant uppercase">
              {lang === 'EL' ? 'ΕΚΛΕΚΤΗ ΠΑΡΑΓΩΓΗ LOGIA GAIA' : 'EXQUISITE LOGIA GAIA PRODUCTION'}
            </p>
          </div>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-36">
          {PRODUCTS.map((wine, index) => {
            const t = wine.translations[lang] || wine.translations['EN'];
            
            return (
              <div
                key={wine.id}
                className={`group relative flex flex-col justify-between ${
                  wine.translateY ? 'md:translate-y-16' : ''
                }`}
              >
                {/* Product Image Card */}
                <motion.div 
                  className="product-target relative w-full aspect-[3/4] bg-[#1A1A1A] rounded-sm overflow-hidden mb-6 flex items-center justify-center cursor-none"
                  onClick={() => router.push(`/products/${wine.slug}`)}
                  onMouseEnter={() => document.dispatchEvent(new CustomEvent('cursor-view'))}
                  onMouseLeave={() => document.dispatchEvent(new CustomEvent('cursor-default'))}
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.12)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

                  <motion.div 
                    className="relative w-full h-full p-12 flex items-center justify-center pointer-events-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={wine.image}
                      alt={t.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-12"
                      priority={index === 0}
                    />
                  </motion.div>

                  <div className="absolute bottom-6 left-6 flex items-center gap-2 z-20">
                    <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                    <span className="font-body text-[10px] font-medium tracking-wider text-white uppercase">
                      {wine.quality}
                    </span>
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="space-y-4">
                  <h3 
                    className="product-target font-display text-2xl md:text-3xl font-light text-white transition-colors duration-300 group-hover:text-[#C5A880] cursor-pointer"
                    onClick={() => router.push(`/products/${wine.slug}`)}
                    onMouseEnter={() => document.dispatchEvent(new CustomEvent('cursor-view'))}
                    onMouseLeave={() => document.dispatchEvent(new CustomEvent('cursor-default'))}
                  >
                    {t.title}
                  </h3>
                  
                  <p className="font-body text-[11px] font-semibold tracking-[0.15em] text-[#C5A880]/70 uppercase">
                    {t.subtitle}
                  </p>
                  
                  <p className="font-body text-sm text-on-surface-variant/80 pt-4 border-t border-outline-variant/30 leading-relaxed font-light min-h-[64px]">
                    {t.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}