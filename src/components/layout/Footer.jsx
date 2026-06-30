'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  
  return (
    <footer className="w-full bg-background border-t-[0.5px] border-outline-variant py-16 px-6 md:px-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-outline-variant">

        {/* Column 1: Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-lg text-on-surface uppercase tracking-widest">Logia Gaia</h4>
          <p className="font-body text-[10px] tracking-[0.2em] leading-relaxed">
            {lang === 'EL' ? 'Premium Κρητική Οινοποιία' : 'Premium Cretan Viticulture'}
          </p>
        </div>

        {/* Column 2: Legal & Business */}
        <div className="flex flex-col gap-4 font-body text-[10px] uppercase tracking-[0.3em]">
          <a href="/terms" className="hover:text-solar-ochre transition-colors">
            {lang === 'EL' ? 'Νομικές Πληροφορίες' : 'Legal Notice'}
          </a>
          <span className="text-outline-variant/60 cursor-default">
            {lang === 'EL' ? 'ΑΡ. Γ.Ε.ΜΗ.: ' : 'REG. NO.: '} 000000000000
          </span>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col gap-4 font-body text-[10px] uppercase tracking-[0.3em]">
          <a href="/contact" className="hover:text-solar-ochre transition-colors">
            {lang === 'EL' ? 'Επικοινωνία' : 'Contact'}
          </a>
        </div>

        {/* Column 4: Social Media */}
        <div className="flex flex-col gap-4 font-body text-[10px] uppercase tracking-[0.3em]">
          <div className="flex gap-6">
            <a href="https://www.instagram.com/logia_gaia" target="_blank" rel="noreferrer" className="hover:text-solar-ochre transition-colors">
              INSTAGRAM
            </a>
            <a href="https://www.facebook.com/logiagaia" target="_blank" rel="noreferrer" className="hover:text-solar-ochre transition-colors">
              FACEBOOK
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t-[0.5px] border-outline-variant/30 text-center font-body text-[9px] tracking-[0.2em] text-outline-variant/60">
        © {new Date().getFullYear()} LOGIA GAIA. {lang === 'EL' ? 'Copyright 2026. Με επιφύλαξη παντός δικαιώματος.' : 'Copyright 2026. All rights reserved.'}
      </div>
    </footer>
  );
}