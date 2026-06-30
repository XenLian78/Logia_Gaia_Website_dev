'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import NavigationOverlay from './NavigationOverlay';

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // Απόλυτη ευθυγράμμιση με τη δομή των φακέλων (slugs)
  const navLinks = {
    EL: { 
      philosophy: { label: 'φιλοσοφία', path: '/philosophy' },
      metamorphosis: { label: 'μεταμόρφωση', path: '/metamorphosis' },
      products: { label: 'προϊόντα', path: '/products' },
      professionals: { label: 'επαγγελματίες', path: '/professionals' },
      contact: { label: 'επικοινωνία', path: '/contact' }
    },
    EN: { 
      philosophy: { label: 'philosophy', path: '/philosophy' },
      metamorphosis: { label: 'metamorphosis', path: '/metamorphosis' },
      products: { label: 'products', path: '/products' },
      professionals: { label: 'professionals', path: '/professionals' },
      contact: { label: 'contact', path: '/contact' }
    }
  };

  const currentLinks = navLinks[lang] || navLinks['EN'];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background border-b-[0.5px] border-outline-variant h-24">
        <div className="flex justify-between items-center h-full w-full mx-auto max-w-[1440px] px-6 md:px-[120px]">

          {/* Logo & Brand Name */}
          <Link href="/philosophy" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10">
              <Image src="/logo.svg" alt="LOGIA GAIA Logo" fill className="object-contain" priority />
            </div>

            <span className="font-display font-light text-[24px] md:text-[32px] tracking-tight text-on-surface">
              LOGIA GAIA
            </span>
          </Link>

          {/* Δεξί Μέρος: Links + Language + Burger */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {Object.entries(currentLinks).map(([key, item]) => {
                const isActive = pathname === item.path || (pathname === '/' && key === 'philosophy');
                return (
                  <Link 
                    key={key} 
                    href={item.path} 
                    className={`relative font-body text-sm tracking-widest lowercase transition-colors duration-300 ${
                      isActive ? 'text-on-surface' : 'text-outline-variant hover:text-on-surface'
                    }`}
                  >
                    {item.label}
                    {isActive && <span className="absolute -bottom-[8px] left-0 w-full h-[1px] bg-solar-ochre" />}
                  </Link>
                );
              })}
            </div>

            {/* Premium Language Switcher */}
            <div className="flex items-center font-['Plus_Jakarta_Sans'] text-[11px] font-medium tracking-[0.2em] border-l border-outline-variant/30 pl-6 md:pl-8 h-4 space-x-2 select-none">
              <button
                onClick={() => setLang('EL')}
                className={`transition-colors duration-300 cursor-pointer ${
                  lang === 'EL' ? 'text-solar-ochre font-semibold' : 'text-outline-variant hover:text-on-surface'
                }`}
              >
                EL
              </button>
              <span className="text-outline-variant/20 text-[9px] pointer-events-none">|</span>
              <button
                onClick={() => setLang('EN')}
                className={`transition-colors duration-300 cursor-pointer ${
                  lang === 'EN' ? 'text-solar-ochre font-semibold' : 'text-outline-variant hover:text-on-surface'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex md:hidden items-center gap-2 group cursor-pointer focus:outline-none"
              aria-label="Open menu"
            >
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-medium uppercase tracking-[0.15em] text-on-surface group-hover:text-[#C5A880] transition-colors duration-300">
                {lang === 'EL' ? 'μενου' : 'menu'}
              </span>
              <div className="flex flex-col gap-1 w-5 justify-center items-end">
                <span className="w-5 h-[1px] bg-on-surface group-hover:bg-[#C5A880] transition-colors duration-300" />
                <span className="w-3 h-[1px] bg-on-surface group-hover:bg-[#C5A880] transition-colors duration-300 group-hover:w-5 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* Full Screen Overlay */}
      <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}