// Burger Menu //
'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

const MENU_LINKS = [
  { id: 'philosophy', path: '/philosophy', translations: { EL: 'φιλοσοφία', EN: 'philosophy' } },
  { id: 'metamorphosis', path: '/metamorphosis', translations: { EL: 'μεταμόρφωση', EN: 'metamorphosis' } },
  { id: 'products', path: '/products', translations: { EL: 'προϊόντα', EN: 'products' } },
  { id: 'professionals', path: '/professionals', translations: { EL: 'επαγγελματίες', EN: 'professionals' } },
  { id: 'contact', path: '/contact', translations: { EL: 'επικοινωνία', EN: 'contact' } },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1], delay: 0.1 } }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
};

const linkItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
};

export default function NavigationOverlay({ isOpen, onClose }) {
  const { lang } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleNavigation = (path) => {
    onClose();
    router.push(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 w-full h-screen bg-[#141313] text-[#e5e2e1] z-[9999] overflow-hidden flex flex-col justify-center items-center select-none"
        >
          {/* Top Header inside Overlay */}
          <header className="absolute top-0 w-full flex justify-between items-center px-6 md:px-[120px] h-24 max-w-[1440px] mx-auto z-50">
            <span className="font-display font-light text-[24px] md:text-[32px] tracking-tight text-on-surface opacity-50">
              LOGIA GAIA
            </span>
            
            <button onClick={onClose} aria-label="Close menu" className="flex items-center gap-4 group cursor-pointer">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-medium uppercase tracking-[0.15em] text-[#e5e2e1] group-hover:text-[#C5A880] transition-colors duration-300">
                {lang === 'EL' ? 'κλεισιμο' : 'close'}
              </span>
              <span className="text-[#e5e2e1] group-hover:text-[#C5A880] group-hover:rotate-90 group-hover:scale-110 transition-all duration-500 text-2xl font-light">
                ✕
              </span>
            </button>
          </header>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,13,13,0.85)_100%)] pointer-events-none z-0" />

          {/* Main Menu Links */}
          <nav className="relative z-10 w-full max-w-[1440px] px-6 md:px-[120px]">
            <motion.ul variants={listVariants} className="flex flex-col space-y-6 md:space-y-8">
              {MENU_LINKS.map((link) => {
                const label = link.translations[lang] || link.translations['EN'];

                return (
                  <motion.li key={link.id} variants={linkItemVariants}>
                    <span
                      onClick={() => handleNavigation(link.path)}
                      className="relative inline-block font-display font-light text-xl md:text-3xl lowercase cursor-pointer transition-colors duration-500 text-[#7d7a78]"
                    >
                      {label}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>

          {/* Footer inside Burger Menu */}
          <footer className="absolute bottom-12 w-full max-w-[1440px] px-6 md:px-[120px] flex justify-between items-center z-10 font-['Plus_Jakarta_Sans'] text-[11px] tracking-widest uppercase">
            <div className="flex items-center gap-8">
              <a href="https://www.facebook.com/logiagaia" target="_blank" rel="noopener noreferrer" className="text-[#7d7a78] hover:text-[#e5e2e1] transition-colors duration-300">Facebook</a>
              <a href="https://www.instagram.com/logia_gaia" target="_blank" rel="noopener noreferrer" className="text-[#7d7a78] hover:text-[#e5e2e1] transition-colors duration-300">Instagram</a>
            </div>
            <div className="text-[#7d7a78] opacity-60">
              © {new Date().getFullYear()} Logia Gaia
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}