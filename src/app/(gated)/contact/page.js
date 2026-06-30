// Contac Form//
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    role: 'SOMMELIER',
    message: '', 
    gdpr: false 
  });
  const [status, setStatus] = useState({ success: false, error: null, loading: false });

  // Μεταφράσεις Περιεχομένου
  const content = {
    EL: {
      title: 'επικοινωνία',
      subtitle: 'ΕΛΑΤΕ ΣΕ ΕΠΑΦΗ ΜΑΖΙ ΜΑΣ',
      nameLabel: 'ΟΝΟΜΑ ΣΥΝΕΡΓΑΤΗ',
      namePlaceholder: 'Ονοματεπώνυμο',
      emailLabel: 'ΕΤΑΙΡΙΚΟ EMAIL',
      emailPlaceholder: 'corporate@domain.com',
      roleLabel: 'ΙΔΙΟΤΗΤΑ (SOMMELIER / IMPORTER / JOURNALIST)',
      messageLabel: 'ΜΗΝΥΜΑ',
      messagePlaceholder: 'γράψτε το μήνυμά σας εδώ ...',
      gdprLabel: 'Έχω διαβάσει και αποδέχομαι την Πολιτική Απορρήτου & GDPR.',
      submitBtn: 'ΑΠΟΣΤΟΛΗ',
      loadingBtn: 'ΑΠΟΣΤΟΛΗ...',
      successMsg: 'Το μήνυμά σας εστάλη με επιτυχία.',
      errorMsg: 'Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία και αποδεχτείτε το GDPR.',
      addressTitle: 'ΔΙΕΥΘΥΝΣΗ',
      addressVal: 'Άγιος Θωμάς, Ηράκλειο Κρήτης',
      phoneTitle: 'ΤΗΛΕΦΩΝΟ',
      emailTitle: 'E-MAIL'
    },
    EN: {
      title: 'contact',
      subtitle: 'GET IN TOUCH WITH US',
      nameLabel: 'PARTNER NAME',
      namePlaceholder: 'Full Name',
      emailLabel: 'CORPORATE EMAIL',
      emailPlaceholder: 'corporate@domain.com',
      roleLabel: 'ROLE (SOMMELIER / IMPORTER / JOURNALIST)',
      messageLabel: 'MESSAGE',
      messagePlaceholder: 'type your message here ...',
      gdprLabel: 'I have read and accept the Privacy Policy & GDPR statements.',
      submitBtn: 'SEND MESSAGE',
      loadingBtn: 'SENDING...',
      successMsg: 'Your message has been sent successfully.',
      errorMsg: 'Please fill in all required fields and accept the GDPR checkbox.',
      addressTitle: 'ADDRESS',
      addressVal: 'Agios Thomas, Heraklion, Crete',
      phoneTitle: 'PHONE',
      emailTitle: 'E-MAIL'
    }
  };

  const t = content[lang] || content['EN'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRoleChange = (selectedRole) => {
    setFormData(prev => ({ ...prev, role: selectedRole }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.gdpr) {
      setStatus({ success: false, error: t.errorMsg, loading: false });
      return;
    }

    setStatus({ success: false, error: null, loading: true });

    setTimeout(() => {
      setStatus({ success: true, error: null, loading: false });
      setFormData({ name: '', email: '', role: 'SOMMELIER', message: '', gdpr: false });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background pt-20 pb-12 px-6 md:px-[120px] text-on-surface">
      <div className="max-w-[1440px] w-full mx-auto">
        
        {/* Page Header Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10 text-center md:text-left"
        >
          <span className="font-body text-[11px] tracking-[0.3em] text-solar-ochre uppercase block mb-2">
            {t.subtitle}
          </span>
          <h1 className="font-display font-light text-4xl md:text-6xl lowercase tracking-tight">
            {t.title}
          </h1>
        </motion.div>

        {/* Grid 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Left Column: Premium Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 space-y-8 border-l-[0.5px] border-outline-variant/30 pl-6 md:pl-8"
          >
            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] text-outline-variant uppercase mb-1">{t.addressTitle}</h3>
              <p className="font-body text-sm text-on-surface/90 font-light tracking-wide">{t.addressVal}</p>
            </div>

            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] text-outline-variant uppercase mb-1">{t.phoneTitle}</h3>
              <a href="tel:+306932733135" className="font-body text-sm text-on-surface/90 font-light tracking-wide hover:text-solar-ochre transition-colors duration-300">
                +30 6932 733 135
              </a>
            </div>

            <div>
              <h3 className="font-body text-[10px] tracking-[0.2em] text-outline-variant uppercase mb-1">{t.emailTitle}</h3>
              <a href="mailto:info@logiagaia.gr" className="font-body text-sm text-on-surface/90 font-light tracking-wide hover:text-solar-ochre transition-colors duration-300 lower">
                info@logiagaia.gr
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8 w-full bg-[#FDFBF7] p-8 md:p-10 border-[0.5px] border-[#EAE6DF] shadow-sm rounded-sm text-neutral-900 lg:-mt-16"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Input Group */}
              <div className="space-y-1.5">
                <label className="block font-display text-[11px] tracking-[0.15em] text-[#7A756E] uppercase">
                  {t.nameLabel}
                </label>
                <div className="relative border-b border-[#CBC5BA] focus-within:border-solar-ochre transition-colors duration-300">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    className="w-full bg-white px-4 py-2.5 text-sm font-light tracking-wide outline-none text-neutral-800 placeholder-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Email Input Group */}
              <div className="space-y-1.5">
                <label className="block font-display text-[11px] tracking-[0.15em] text-[#7A756E] uppercase">
                  {t.emailLabel}
                </label>
                <div className="relative border-b border-[#CBC5BA] focus-within:border-solar-ochre transition-colors duration-300">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className="w-full bg-white px-4 py-2.5 text-sm font-light tracking-wide outline-none text-neutral-800 placeholder-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Role Selection Tabs Group */}
              <div className="space-y-1.5">
                <label className="block font-display text-[10px] tracking-[0.1em] text-[#7A756E] uppercase">
                  {t.roleLabel}
                </label>
                <div className="grid grid-cols-3 border border-[#E2DCDEC] bg-white">
                  {['SOMMELIER', 'IMPORTER', 'JOURNALIST'].map((roleItem) => (
                    <button
                      key={roleItem}
                      type="button"
                      onClick={() => handleRoleChange(roleItem)}
                      className={`py-2.5 text-[11px] font-body tracking-widest text-center transition-all duration-300 border-r last:border-r-0 border-[#EFEBE4] ${
                        formData.role === roleItem
                          ? 'text-solar-ochre font-medium bg-[#FBF9F4] shadow-inner'
                          : 'text-[#B0AAA0] hover:text-neutral-700 bg-white'
                      }`}
                    >
                      {roleItem}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input Group */}
              <div className="space-y-1.5">
                <label className="block font-display text-[11px] tracking-[0.15em] text-[#7A756E] uppercase">
                  {t.messageLabel}
                </label>
                <div className="relative border border-[#E2DCDEC] focus-within:border-solar-ochre transition-colors duration-300 bg-white p-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    rows={4}
                    className="w-full bg-transparent p-2 text-sm font-light tracking-wide outline-none text-neutral-800 placeholder-gray-300 resize-none h-24"
                    required
                  />
                </div>
              </div>

              {/* GDPR Checkbox */}
              <div className="flex items-start gap-3 select-none pt-1">
                <label className="relative flex items-center h-5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gdpr"
                    checked={formData.gdpr}
                    onChange={handleChange}
                    className="peer sr-only"
                  />
                  <div className="w-4 h-4 border border-[#CBC5BA] peer-checked:border-solar-ochre peer-checked:bg-solar-ochre transition-all duration-300 flex items-center justify-center bg-white">
                    <span className="text-white text-[10px] scale-0 peer-checked:scale-100 transition-transform duration-200">✓</span>
                  </div>
                </label>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-tight text-[#615C55] tracking-wide">
                  {t.gdprLabel}
                </span>
              </div>

              {/* Validation Feedbacks */}
              {status.error && (
                <p className="text-red-600 font-['Plus_Jakarta_Sans'] text-xs tracking-wide">{status.error}</p>
              )}
              {status.success && (
                <p className="text-solar-ochre font-['Plus_Jakarta_Sans'] text-xs tracking-wide">{t.successMsg}</p>
              )}

              {/* Action Button */}
              <div className="pt-1 flex justify-start">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full max-w-[200px] py-3 border border-solar-ochre bg-transparent text-solar-ochre hover:bg-solar-ochre hover:text-white transition-all duration-300 font-body text-[11px] tracking-[0.25em] uppercase cursor-pointer disabled:opacity-50"
                >
                  {status.loading ? t.loadingBtn : t.submitBtn}
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
