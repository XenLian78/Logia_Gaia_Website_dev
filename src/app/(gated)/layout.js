// Ρυθμίσεις μονο για τις GATED σελίδες//
'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cursor from "@/components/layout/Cursor";
import { useRouter, usePathname } from 'next/navigation';

export default function GatedLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  // Έλεγχος αν ο χρήστης βρίσκεται ήδη στην κεντρική σελίδα (Philosophy)
  const isPhilosophyHome = pathname === '/philosophy';

  return (
    <div className="flex flex-col min-h-screen">
      <Cursor />
      <Navbar />
      <main className="flex-grow pt-24">{children}</main>
      <Footer />

      {/* Floating Navigation Controls - Στρατηγική Toποθέτηση στα Δεξιά (Όπως laoudis.gr) */}
      {/* Αν ο χρήστης είναι στη Philosophy, ολόκληρο το container κρύβεται τελείως */}
      {!isPhilosophyHome && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
          
          {/* Back Button (Κυρτό βέλος) με Luxury Fill Effect */}
          <button
            onClick={() => router.back()}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-solar-ochre text-solar-ochre overflow-hidden bg-transparent backdrop-blur-sm active:scale-95 transition-all duration-300"
            aria-label="Go Back"
          >
            {/* Layer για το Luxury Fill Animation που ανεβαίνει από κάτω προς τα πάνω */}
            <span className="absolute inset-0 w-full h-full bg-solar-ochre translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            
            {/* SVG Icon - z-10 για να στέκεται πάνω από το fill και group-hover:text-black για το contrast */}
            <svg 
              className="w-4 h-4 relative z-10 group-hover:text-black transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </button>

          {/* Home/Philosophy Button (Σπιτάκι) με Luxury Fill Effect */}
          <button
            onClick={() => router.push('/philosophy')}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-solar-ochre text-solar-ochre overflow-hidden bg-transparent backdrop-blur-sm active:scale-95 transition-all duration-300"
            aria-label="Go to Philosophy Home"
          >
            {/* Layer για το Luxury Fill Animation που ανεβαίνει από κάτω προς τα πάνω */}
            <span className="absolute inset-0 w-full h-full bg-solar-ochre translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            
            {/* SVG Icon */}
            <svg 
              className="w-4 h-4 relative z-10 group-hover:text-black transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>

        </div>
      )}
    </div>
  );
}