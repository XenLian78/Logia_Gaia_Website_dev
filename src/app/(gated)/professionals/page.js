// B2B & Data Sheets Download //
// Professionals & Partners Page //
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCTS } from '@/data/products';

export default function ProfessionalsPage() {
  const { lang } = useLanguage();

  // Μεταφράσεις Περιεχομένου με δυναμικό κεντρικό τίτλο
  const content = {
    EL: {
      subtitle: 'ΕΤΙΚΕΤΕΣ ΠΡΟΪΟΝΤΩΝ - ΤΕΧΝΙΚΑ ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ',
      mainTitle: <>ΓΙΑ SOMMELIERS <br />& ΣΥΝΕΡΓΑΤΕΣ</>,
      description: 'Αποκτήστε πρόσβαση στις ετικέτες και τα Data Sheets των προϊόντων μας.',
      editionText: 'LABEL - DATA SHEET',
      downloadText: 'DOWNLOAD DATA SHEET',
      addressTitle: 'ΔΙΕΥΘΥΝΣΗ',
      addressVal: 'Άγιος Θωμάς, Ηράκλειο Κρήτης',
      phoneTitle: 'ΤΗΛΕΦΩΝΟ',
      emailTitle: 'E-MAIL'
    },
    EN: {
      subtitle: 'FOR SOMMELIERS & PARTNERS',
      mainTitle: <>FOR SOMMELIERS <br />& PARTNERS</>,
      description: 'Gain access to our digital Press Kit, international GTBB certifications, and the Technical Sheets of our wines.',
      editionText: 'SOLAR OCHRE EDITION',
      downloadText: 'DOWNLOAD SHEET',
      addressTitle: 'ADDRESS',
      addressVal: 'Agios Thomas, Heraklion, Crete',
      phoneTitle: 'PHONE',
      emailTitle: 'E-MAIL'
    }
  };

  const t = content[lang] || content['EN'];

  return (
    // Αφαιρέθηκε το flex/items-center και ορίστηκε pt-20 για απόλυτη ευθυγράμμιση με την Επικοινωνία
    <main className="min-h-screen bg-background pt-20 pb-12 px-6 md:px-[120px] text-on-surface">
      <div className="max-w-[1440px] w-full mx-auto">
        
        {/* Grid 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Left Column: Premium Products & Technical Sheets List */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Συμπυκνωμένο header block */}
            <div className="space-y-2 max-w-xl">
              <span className="font-body text-[10px] tracking-[0.3em] text-solar-ochre uppercase block">
                {t.subtitle}
              </span>
              <h1 className="font-display font-light text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider text-on-surface leading-tight">
                {t.mainTitle}
              </h1>
              <p className="font-body text-xs md:text-sm text-on-surface/60 font-light tracking-wide leading-relaxed pt-1">
                {t.description}
              </p>
            </div>

            {/* List of Products Data Sheets */}
            <div className="pt-2 space-y-1">
              {PRODUCTS.map((product) => {
                const prodTrans = product.translations[lang] || product.translations['EN'];
                return (
                  <motion.a
                    key={product.id}
                    href={`/docs/${product.slug}-tech-sheet.pdf`}
                    download
                    className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-solar-ochre/40 transition-colors duration-500 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      {/* Product Thumbnail Frame */}
                      <div className="relative w-10 h-14 bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden flex items-center justify-center p-1">
                        <Image
                          src={product.image}
                          alt={prodTrans.title}
                          fill
                          sizes="40px"
                          className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Product Titles */}
                      <div>
                        <h3 className="font-display text-base md:text-lg tracking-wide uppercase group-hover:text-solar-ochre transition-colors duration-300">
                          {prodTrans.title}
                        </h3>
                        <span className="font-body text-[9px] tracking-[0.2em] text-outline-variant/60 block mt-0.5">
                          {t.editionText}
                        </span>
                      </div>
                    </div>

                    {/* Download Indicator & Link text on hover */}
                    <div className="flex items-center gap-3 pr-2 text-right">
                      <span className="font-body text-[10px] tracking-[0.15em] text-solar-ochre opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                        {t.downloadText}
                      </span>
                      <svg 
                        className="w-4 h-4 text-on-surface/40 group-hover:text-solar-ochre group-hover:translate-y-0.5 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Structured Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6 border-l-[0.5px] border-outline-variant/30 pl-6 md:pl-8 lg:mt-4"
          >
            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] text-outline-variant uppercase mb-1">
                {t.addressTitle}
              </h3>
              <p className="font-body text-xs md:text-sm text-on-surface/90 font-light tracking-wide">
                {t.addressVal}
              </p>
            </div>

            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] text-outline-variant uppercase mb-1">
                {t.phoneTitle}
              </h3>
              <a 
                href="tel:+306932733135" 
                className="font-body text-xs md:text-sm text-on-surface/90 font-light tracking-wide hover:text-solar-ochre transition-colors duration-300"
              >
                +30 6932 733 135
              </a>
            </div>

            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] text-outline-variant uppercase mb-1">
                {t.emailTitle}
              </h3>
              <a 
                href="mailto:info@logiagaia.gr" 
                className="font-body text-xs md:text-sm text-on-surface/90 font-light tracking-wide hover:text-solar-ochre transition-colors duration-300 lowercase"
              >
                info@logiagaia.gr
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}