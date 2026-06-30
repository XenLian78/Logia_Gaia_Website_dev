// Dedicated - Single Product Page //

"use client";

import { use } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCTS } from '@/data/products';
import { notFound } from 'next/navigation';

// Αυτόνομο Premium TasteGraph Component με Motion Effects εισόδου
function TasteGraph({ features, lang, category }) {
  const labels = {
    EL: {
      acidity: 'Οξύτητα',
      body: 'Σώμα',
      tannins: category === 'oil' ? 'Πικάντικο' : 'Τανίνες',
      fruitIntensity: category === 'oil' ? 'Ένταση' : 'Ένταση Φρούτου',
    },
    EN: {
      acidity: 'Acidity',
      body: 'Body',
      tannins: category === 'oil' ? 'Pungency' : 'Tannins',
      fruitIntensity: category === 'oil' ? 'Intensity' : 'Fruit Intensity',
    }
  };

  const currentLabels = labels[lang] || labels['EN'];

  // Μετατροπή του αντικειμένου tasteGraph σε array για σωστό iteration
  const graphData = [
    { key: 'acidity', value: features?.acidity || 50 },
    { key: 'body', value: features?.body || 50 },
    { key: 'tannins', value: features?.tannins || 50 },
    { key: 'fruitIntensity', value: features?.fruitIntensity || 50 },
  ];

  return (
    <div className="space-y-5 max-w-md w-full pt-6">
      {graphData.map((item) => (
        <div key={item.key} className="space-y-2">
          {/* Label & Percentage Row */}
          <div className="flex justify-between items-center text-[11px] tracking-[0.15em] uppercase font-light">
            <span className="text-white/70 font-body">{currentLabels[item.key]}</span>
            <span className="text-[#C5A880] font-medium font-body">{item.value}%</span>
          </div>

          {/* Bar Container */}
          <div className="w-full h-[2px] bg-white/10 relative rounded-full overflow-hidden">
            {/* Animated Fill Bar */}
            <motion.div 
              className="h-full bg-gradient-to-r from-[#C5A880]/50 to-[#C5A880] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ 
                duration: 1.4, 
                ease: [0.25, 1, 0.5, 1], // Luxury smooth cubic-bezier output
                delay: 0.1 
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductPage({ params }) {
  // Ξετύλιγμα των params με το use()
  const { slug } = use(params); 
  const { lang } = useLanguage();

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) return notFound();

  const t = product.translations[lang] || product.translations['EN'];

  return (
    // Το pt-32 έγινε pt-20 και αφαιρέθηκαν οι flex ιδιότητες ευθυγράμμισης (αφήνοντας κλασικό items-start layout) για απόλυτη ταύτιση με την Επικοινωνία
    <main className="min-h-screen pt-20 pb-20 px-6 md:px-[120px] max-w-[1440px] mx-auto flex flex-col md:flex-row items-start gap-16 font-['Plus_Jakarta_Sans'] bg-background text-on-surface select-none">
      
      {/* Left Column: Image Area (Αφαιρέθηκαν οι κλάσεις group και overflow-hidden) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#1A1A1A] rounded-sm p-12 aspect-[3/4] border border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.06)_0%,transparent_70%)] pointer-events-none" />
        {/* Αφαιρέθηκαν οι κλάσεις transition-transform και hover scale */}
        <img 
          src={product.image} 
          alt={t.title} 
          className="w-full h-full max-w-sm mx-auto object-contain" 
        />
      </div>
      
      {/* Right Column: Information & Taste Profile */}
      <div className="w-full md:w-1/2 space-y-8">
        <div>
          <span className="font-body text-[11px] tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
            {product.bottleNo || 'PREMIUM'}
          </span>
          <h1 className="font-['Libre_Caslon_Text'] text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="font-body text-xs tracking-[0.15em] text-[#C5A880] uppercase">
            {t.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-6 border-b border-white/10 pb-6">
          <div>
            <span className="text-[10px] text-white/40 uppercase tracking-wider block">
              {lang === 'EL' ? 'ΕΤΟΣ' : 'YEAR'}
            </span>
            <p className="text-white font-medium tracking-wide mt-1">{product.year}</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-white/80 leading-relaxed font-light text-base">
            {t.description}
          </p>
        </div>

        {/* Taste Profile Section */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <h2 className="font-['Libre_Caslon_Text'] text-lg uppercase tracking-wider text-white">
            {lang === 'EL' ? 'Taste Profile Graph' : 'Taste Profile Graph'}
          </h2>
          
          {/* Κλήση του TasteGraph με τα σωστά props */}
          <TasteGraph 
            features={product.tasteGraph} 
            lang={lang} 
            category={product.category} 
          />
        </div>
      </div>
    </main>
  );
}