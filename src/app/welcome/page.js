'use client';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function WelcomePage() {
  const router = useRouter();
  const { lang } = useLanguage();

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/welcome/hero_image_welcome_page.jpg')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 w-full">
        
        {/* Τίτλος  */}
        <h1 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-[0.1em] uppercase">
          {lang === 'EL' ? 'Καλώς ήρθατε στη Logia Gaia' : 'Welcome to Logia Gaia'}
        </h1>
        
        {/* Υπότιτλος */}
        <p className="font-body text-outline-variant text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-10 w-full px-6 md:px-20 leading-relaxed">
          {lang === 'EL' 
            ? 'Εξερευνήστε την ένταση μεταξύ κληρονομιάς και σύγχρονης έκφρασης μέσα από το φακό της premium κρητικής οινοποιίας.' 
            : 'Explore the tension between heritage and contemporary expression through the lens of premium Cretan viticulture.'}
        </p>

        {/* Luxury Button */}
        <button
          onClick={() => router.push('/philosophy')}
          className="px-10 py-4 border-[0.5px] border-solar-ochre text-solar-ochre hover:bg-solar-ochre hover:text-background transition-all duration-300 font-body text-xs tracking-[0.2em] uppercase"
        >
          {lang === 'EL' ? 'ΕΞΕΡΕΥΝΗΣΗ' : 'EXPLORE'}
        </button>
      </div>
    </main>
  );
}