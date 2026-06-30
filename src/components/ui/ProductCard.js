// Componet for Products Card //

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductCard({ product, lang, mode = 'full', onClick, onMouseEnter, onMouseLeave }) {
  const t = product.translations[lang] || product.translations['EN'];

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="product-target group block w-[280px] md:w-full bg-[#121212] border border-white/5 p-5 md:p-6 lg:p-8 rounded-sm transition-colors duration-500 hover:border-solar-ochre/20 cursor-none flex-shrink-0 select-none"
    >
      {/* Product Image Frame */}
      <div className="relative w-full aspect-[3/4] bg-[#1a1a1a] rounded-sm overflow-hidden flex items-center justify-center mb-6 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full h-full select-none"
        >
          <Image 
            src={product.image} 
            alt={t.title}
            fill
            sizes="(max-width: 768px) 240px, (max-width: 1024px) 25vw, 300px"
            className="object-contain p-4 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Product Metadata */}
      <div className="space-y-2 pointer-events-none">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg md:text-base lg:text-xl uppercase tracking-[0.05em] text-on-surface transition-colors duration-300 group-hover:text-solar-ochre">
            {t.title}
          </h3>
          {/* Εμφάνιση Year στο simple mode */}
          {mode === 'simple' && product.year && (
            <span className="font-body text-xs tracking-wider text-solar-ochre font-medium">
              {product.year}
            </span>
          )}
        </div>
        
        <p className="font-body text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-solar-ochre/80 min-h-[15px]">
          {t.subtitle}
        </p>
        
        {/* Εμφάνιση Quality στο simple mode */}
        {mode === 'simple' && product.quality && (
          <p className="font-body text-[10px] tracking-[0.1em] uppercase text-on-surface/40 pt-1">
            {product.quality}
          </p>
        )}
        
        {/* Εμφάνιση Description ΜΟΝΟ στο full mode */}
        {mode === 'full' && (
          <p className="font-body text-[12px] text-on-surface/60 leading-relaxed pt-2 line-clamp-2 min-h-[36px]">
            {t.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}