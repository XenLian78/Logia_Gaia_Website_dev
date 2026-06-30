// Γενικές ρυθμίσεις για όλες τις σελίδες//

'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function AgeGatePage() {
  const [year, setYear] = useState(['', '', '', '']);
  const { lang, setLang } = useLanguage();
  const inputRefs = useRef([]);
  const router = useRouter();

  const handleInput = (e, index) => {
    const val = e.target.value;
    const lastChar = val.substring(val.length - 1);
    if (/^\d$/.test(lastChar)) {
      const newYear = [...year];
      newYear[index] = lastChar;
      setYear(newYear);
      if (index < 3) inputRefs.current[index + 1].focus();
    } else if (val === '') {
      const newYear = [...year];
      newYear[index] = '';
      setYear(newYear);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (year[index] === '' && index > 0) {
        const newYear = [...year];
        newYear[index - 1] = '';
        setYear(newYear);
        inputRefs.current[index - 1].focus();
      } else {
        const newYear = [...year];
        newYear[index] = '';
        setYear(newYear);
      }
    }
  };

  const handleExplore = () => {
    const birthYear = parseInt(year.join(''));
    const age = new Date().getFullYear() - birthYear;
    if (age >= 18) {
      sessionStorage.setItem('ageVerified', 'true');
      router.push('/welcome');
    } else {
      alert(lang === 'EL' ? 'Πρέπει να είστε άνω των 18 ετών.' : 'You must be over 18 years old.');
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-background p-6 select-none overflow-hidden">
      
      {/* Luxury Language Switcher */}
      <div className="fixed top-8 right-8 z-50 flex items-center gap-4 font-body text-[10px] tracking-[0.2em]">
        <button onClick={() => setLang('EL')} className={`transition-colors ${lang === 'EL' ? 'text-solar-ochre' : 'text-outline-variant hover:text-on-surface'}`}>EL</button>
        <span className="text-outline-variant/30">|</span>
        <button onClick={() => setLang('EN')} className={`transition-colors ${lang === 'EN' ? 'text-solar-ochre' : 'text-outline-variant hover:text-on-surface'}`}>EN</button>
      </div>

      <div className="flex flex-col items-center text-center w-full max-w-2xl py-8">
        
        {/* Λογότυπο */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8">
          <Image src="/logo.svg" alt="LOGIA GAIA" fill className="object-contain" priority />
        </div>

        <div className="w-20 h-[0.5px] bg-solar-ochre/60 mb-8" />

        {/* Τίτλος */}
        <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-4 tracking-[0.1em] uppercase">
          LOGIA GAIA
        </h1>
        
        {/* Υπότιτλος - Responsive πλάτος για να μη σπάει */}
        <p className="font-body text-outline-variant tracking-[0.3em] uppercase text-[10px] md:text-[11px] mb-10 w-full px-6">
          {lang === 'EL' ? 'Η ΜΕΤΑΜΟΡΦΩΣΗ ΤΟΥ TERROIR' : 'THE METAMORPHOSIS OF TERROIR'}
        </p>

        {/* Disclaimer - Ελεύθερο πλάτος για οριζόντια έκταση */}
        <p className="text-on-surface/80 text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-10 w-full px-8 md:px-12 leading-relaxed font-body">
          {lang === 'EL' 
            ? 'Για να επισκεφθείτε τον ιστότοπο της Logia Gaia, πρέπει να έχετε τη νόμιμη ηλικία κατανάλωσης αλκοόλ στη χώρα σας.' 
            : 'To visit the Logia Gaia site, you must be of legal drinking age in your location of residence.'}
        </p>

        <div className="w-20 h-[0.5px] bg-solar-ochre/60 mb-10" />

        {/* 4-Digit Input - Καθαρό χωρίς spinners */}
        <div className="flex gap-4 mb-10">
          {year.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="number"
              value={digit}
              placeholder="Y"
              onChange={(e) => handleInput(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-16 bg-transparent border-[0.5px] border-outline-variant/50 text-center text-xl font-display text-on-surface focus:border-solar-ochre outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-outline-variant/20"
            />
          ))}
        </div>

        <button
          onClick={handleExplore}
          className="w-full max-w-[200px] py-3 border-[0.5px] border-solar-ochre text-solar-ochre hover:bg-solar-ochre hover:text-background transition-all duration-300 font-body text-[10px] tracking-[0.3em] uppercase"
        >
          {lang === 'EL' ? 'ΕΞΕΡΕΥΝΗΣΗ' : 'EXPLORE'}
        </button>
      </div>
    </main>

  );
}