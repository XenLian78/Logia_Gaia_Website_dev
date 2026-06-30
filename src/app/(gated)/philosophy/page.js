// Philosophy - Home page //

'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import { PRODUCTS } from '@/data/products'; // Single Source of Truth
import ProductCard from '@/components/ui/ProductCard';

export default function PhilosophyPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const carouselRef = useRef(null);
  const videoSectionRef = useRef(null); 
  const videoRef = useRef(null);
  
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });
  const [isMuted, setIsMuted] = useState(true);

  // Global scroll positions για το Hero section
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 850], [1, 0]);

  // Section-targeted scroll tracking για το Cinematic Video
  const { scrollYProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth cinematic transforms 
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1.0]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.85, 0.35]);

  // Υπολογισμός των ορίων κύλισης για mobile/tablet
  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      const maxScroll = scrollWidth - offsetWidth;
      setDragConstraints({ right: 0, left: maxScroll > 0 ? -maxScroll : 0 });
    }
  }, [lang]);

  // Έλεγχος του ήχου στο Video Element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const cardWidthWithGap = 304; 
      const offset = direction === 'left' ? -cardWidthWithGap : cardWidthWithGap;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Handlers για τον Custom Cursor 
  const handleMouseEnter = () => {
    const event = new CustomEvent('UPDATE_CURSOR', { detail: 'view' });
    window.dispatchEvent(event);
    document.documentElement.setAttribute('data-cursor', 'view');
  };

  const handleMouseLeave = () => {
    const event = new CustomEvent('UPDATE_CURSOR', { detail: 'default' });
    window.dispatchEvent(event);
    document.documentElement.removeAttribute('data-cursor');
  };

  return (
    <main className="relative w-full bg-background text-on-surface select-none">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/philosophy/hero_image_philosophy.jpg')" }} 
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent z-15 pointer-events-none" />

        <div className="relative z-20 text-white">
          <h1 className="font-display text-4xl md:text-7xl uppercase tracking-[0.1em] mb-4">
            Logia Gaia
          </h1>
          <p className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
            {lang === 'EL' ? 'Η ΜΕΤΑΜΟΡΦΩΣΗ ΤΟΥ TERROIR' : 'THE METAMORPHOSIS OF TERROIR'}
          </p>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-28 md:bottom-[14vh] left-0 w-full flex justify-center z-25"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 font-body text-[10px] tracking-[0.4em] uppercase text-white cursor-default select-none"
          >
            <span>{lang === 'EL' ? 'ΕΞΕΡΕΥΝΗΣΗ' : 'DISCOVER'}</span>
            <svg className="w-4 h-4 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Carousel / Desktop Grid Section */}
      <section className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 mb-16">
          <div>
            <h2 className="font-display text-2xl md:text-4xl uppercase tracking-[0.05em] text-solar-ochre mb-2">
              {lang === 'EL' ? 'Η Συλλογή Μας' : 'OUR COLLECTION'}
            </h2>
            <div className="w-12 h-[1px] bg-solar-ochre/40" />
          </div>
        </div>

        {/* Viewport Wrapper Container */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-center">
          
          {/* Mobile Left Arrow Button */}
          <button 
            onClick={() => scrollCarousel('left')}
            className="absolute left-6 z-40 p-2.5 bg-black/60 border border-white/10 text-on-surface active:scale-95 transition-all rounded-full md:hidden"
            aria-label="Previous Product"
          >
            <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {/* Mobile Right Arrow Button */}
          <button 
            onClick={() => scrollCarousel('right')}
            className="absolute right-6 z-40 p-2.5 bg-black/60 border border-white/10 text-on-surface active:scale-95 transition-all rounded-full md:hidden"
            aria-label="Next Product"
          >
            <svg className="w-4 h-4 transform -rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <div 
            ref={carouselRef}
            className="w-full overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth pointer-events-auto touch-pan-x md:grid md:grid-cols-4 md:gap-6 lg:gap-8 flex gap-6 px-8 md:px-0"
          >
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                mode="simple"
                onClick={() => router.push(`/products/${product.slug}`)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                drag={typeof window !== 'undefined' && window.innerWidth < 768 ? "x" : false}
                dragConstraints={dragConstraints}
                dragElastic={0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Agios Thomas: Cinematic Scroll-Driven Section */}
      <section 
        ref={videoSectionRef}
        className="relative w-full h-screen bg-black overflow-hidden z-20 flex items-center justify-center"
      >
        {/* Dynamic Zoom Video Wrapper */}
        <motion.div 
          style={{ scale: videoScale }}
          className="absolute inset-0 w-full h-full origin-center"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover filter brightness-[0.85]"
          >
            <source src="/videos/agios-thomas.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Dynamic Cinematic Shadows */}
        <motion.div 
          style={{ opacity: shadowOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-22"
        />

        {/* Content Overlay inside Video */}
        <div className="relative z-25 text-center px-4">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/40 block mb-2">
            {lang === 'EL' ? 'ΚΤΗΜΑ ΑΓΙΟΣ ΘΩΜΑΣ' : 'AGIOS THOMAS ESTATE'}
          </span>
          <div className="w-8 h-[1px] bg-white/20 mx-auto" />
        </div>

        {/* Minimal Audio Control Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-30 flex items-center justify-center p-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:border-solar-ochre/50 transition-all duration-300"
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
        </button>
      </section>
    </main>
  );
}