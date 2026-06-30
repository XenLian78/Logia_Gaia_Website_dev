// Terms, Privacy, GDPR//

'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function TermsPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen pt-20 pb-24 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto bg-background text-on-surface select-none font-['Plus_Jakarta_Sans']">
      
      {/* Header Section */}
      <header className="mb-16 max-w-2xl">
        <span className="font-body text-[11px] font-medium tracking-[0.15em] text-[#C5A880] mb-4 block uppercase">
          {lang === 'EL' ? 'ΝΟΜΙΚΟ ΠΛΑΙΣΙΟ' : 'LEGAL FRAMEWORK'}
        </span>
        <h1 className="font-['Libre_Caslon_Text'] text-4xl md:text-5xl font-light tracking-tight text-white uppercase">
          {lang === 'EL' ? 'Νομικές Πληροφορίες' : 'Legal Information'}
        </h1>
        <p className="font-body text-sm md:text-base mt-6 text-on-surface-variant/80 font-light leading-relaxed">
          {lang === 'EL'
            ? 'Η προστασία των δεδομένων σας και η διαφάνεια των όρων μας αποτελούν θεμέλιο της premium εμπειρίας Logia Gaia. Παρακάτω θα βρείτε μια σύντομη ανασκόπηση των πολιτικών μας.'
            : 'Data protection and transparency are fundamental to the premium Logia Gaia experience. Below you will find a brief overview of our policies.'}
        </p>
      </header>

      {/* Grid Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-white/10 pt-12">
        
        {/* GDPR & Privacy Section */}
        <div className="space-y-4">
          <h2 className="font-['Libre_Caslon_Text'] text-xl text-white uppercase tracking-wider">
            {lang === 'EL' ? 'Polιτική Απορρήτου & GDPR' : 'Privacy Policy & GDPR'}
          </h2>
          <p className="text-sm text-on-surface-variant/80 leading-relaxed font-light">
            {lang === 'EL'
              ? 'Στη Logia Gaia σεβόμαστε απόλυτα τα προσωπικά σας δεδομένα. Η συλλογή στοιχείων περιορίζεται αποκλειστικά στα δεδομένα που εσείς καταχωρείτε στη Φόρμα Επικοινωνίας, με μοναδικό σκοπό την απάντηση στα αιτήματά σας. Τα μηνύματά σας μεταφέρονται κρυπτογραφημένα μέσω ασφαλούς πρωτοκόλλου (TLS/SSL) απευθείας στο ηλεκτρονικό μας ταχυδρομείο, χωρίς να αποθηκεύονται σε μόνιμες βάσεις δεδομένων του ιστοτόπου.'
              : 'At Logia Gaia, we strictly respect your privacy. Data collection is exclusively limited to the information you submit via our Contact Form, solely used to respond to your inquiries. Your messages are encrypted via secure protocols (TLS/SSL) and delivered directly to our inbox, without being stored on any permanent website databases.'}
          </p>
        </div>

        {/* Cookies Section */}
        <div className="space-y-4">
          <h2 className="font-['Libre_Caslon_Text'] text-xl text-white uppercase tracking-wider">
            {lang === 'EL' ? 'Πολιτική Cookies' : 'Cookies Policy'}
          </h2>
          <p className="text-sm text-on-surface-variant/80 leading-relaxed font-light">
            {lang === 'EL'
              ? 'Χρησιμοποιούμε μόνο τα απαραίτητα τεχνικά cookies για τη σωστή λειτουργία του ιστοτόπου και ανώνυμα cookies στατιστικών (Google Analytics) για τη βελτίωση της εμπειρίας πλοήγησης. Μπορείτε ανά πάσα στιγμή να απενεργοποιήσετε τα cookies μέσα από τις ρυθμίσεις του προγράμματος περιήγησής σας.'
              : 'We only use essential technical cookies for the website\'s proper function and anonymous analytics cookies (Google Analytics) to optimize your browsing experience. You can disable cookies at any time through your browser settings.'}
          </p>
        </div>

      </div>

      {/* PDF Download Actions & Contact */}
      <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* PDF Call to Action */}
        <div className="space-y-2">
          <p className="text-xs text-white/50 tracking-wide">
            {lang === 'EL' ? 'Για το πλήρες νομικό έγγραφο συμμόρφωσης:' : 'For the complete legal compliance document:'}
          </p>
          <a 
            href="/legal/LOGIA_GAIA_Privacy_Policy_and_GDPR_Compliance_GR_ENG.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-wider text-[#C5A880] uppercase border-b border-[#C5A880]/30 pb-1 hover:text-white hover:border-white transition-colors duration-300"
          >
            <span>{lang === 'EL' ? 'ΠΡΟΒΟΛΗ ΠΛΗΡΟΥΣ ΕΓΓΡΑΦΟΥ (PDF)' : 'VIEW FULL DOCUMENT (PDF)'}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Short Legal Contact Info */}
        <div className="text-left md:text-right text-[11px] tracking-wider text-outline-variant space-y-1">
          <p>LOGIA GAIA PRODUCTION</p>
          <p>{lang === 'EL' ? 'Άγιος Θωμάς, Ηράκλειο Κρήτης' : 'Agios Thomas, Heraklion, Crete'}</p>
          <p>Email: info@logiagaia.gr</p>
        </div>

      </div>
    </main>
  );
}