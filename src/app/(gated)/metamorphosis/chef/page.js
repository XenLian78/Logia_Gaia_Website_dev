// Dedicated page to Thomas Tritsikakis //
'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function ChefThomasPage() {
  const { lang } = useLanguage();
  const router = useRouter();

  const content = {
    EL: {
      heroTitle: 'Ο Τεχνίτης της',
      heroTitleItalic: 'Γαστρονομίας',
      heroSubtitle: 'Chef Θωμάς Τριτσικάκης',
      bioLabel: 'Η Μεταμόρφωση',
      bioQuote: '"Από την αρχιτεκτονική της υψηλής ζαχαροπλαστικής στη γλυπτική της κρητικής γης."',
      bioP1: 'Γεννημένος στην καρδιά της Κρήτης, ο Θωμάς Τριτσικάκης αποτελεί ηγετική φυσιογνωμία της ελληνικής γαστρονομίας. Η διαδρομή του ως καταξιωμένος pastry chef, σύμβουλος επιχειρήσεων και εκπαιδευτής ζαχαροπλαστικής τέχνης, χαρακτηρίζεται από μια αδιάκοπη αναζήτηση της τελειότητας και της αυθεντικότητας.',
      bioP2: 'Ως ιδιοκτήτης του LOGIA GAIA, μετουσίωσε το όραμά του σε μια επιχειρηματική πραγματικότητα που τιμά τις ρίζες του. Με επίκεντρο τα οικογενειακά κτήματα στον Άγιο Θωμά Ηρακλείου, παράγει οίνους και ελαιόλαδο ανώτερης ποιότητας, μια προσπάθεια που αναγνωρίστηκε με το Authentic Taste of Greece® – Gold Award 2026.',
      bioP3: 'Στόχος της οικογένειας Τριτσικάκη είναι να προσφέρει προϊόντα που εσωκλείουν την αληθινή κρητική παράδοση, από το χώμα μέχρι το τραπέζι, συνδυάζοντας την κληρονομιά των προγόνων με μια σύγχρονη, εκλεπτυσμένη αισθητική.',
      bioBtn: 'Εξερευνήστε τη φιλοσοφία',
      awardLabel: 'Τιμητικός Τίτλος',
      awardTitle: 'Παγκόσμια Αναγνώριση',
      awardSub: 'Πρεσβευτής της Ελληνικής Γαστρονομίας® 2026',
      awardText: 'Πιστοποιημένος επίσημος Πρεσβευτής της Ελληνικής Γαστρονομίας παγκοσμίως. Τιμήθηκε με το Χρυσό Μετάλλιο "Τίτλος Τιμής" από το GTBB, σε αναγνώριση της εξαιρετικής του απόδοσης και συμβολής στη διατήρηση της ελληνικής κουλτούρας, των αξιών και της παράδοσης σε παγκόσμιο επίπεδο.',
      awardBadge1: 'Κάτοχος Χρυσού Μεταλλίου GTBB',
      awardBadge2: 'Διεθνής Πιστοποίηση Βράβευσης',
      legacyTitle: 'Η Κληρονομιά του Μονακριβού',
      legacyText: 'Η κληρονομιά του Θωμά Τριτσικάκη είναι άρρηκτα συνδεδεμένη με την οικογένεια και τη γη. Τα κρασιά Monakrivo δεν είναι απλώς προϊόντα, αλλά η υλοποίηση μιας υπόσχεσης: να διατηρηθεί η αυθεντικότητα της κρητικής οινοποιίας προσφέροντας παράλληλα μια εμπειρία παγκόσμιας κλάσης, "αναντικατάστατη".',
      gallery1: 'Το Terroir',
      gallery2: 'Η Τέχνη',
      gallery3: 'Η Κληρονομιά',
      ctaTitle: 'Ζήστε τη Μεταμόρφωση',
      ctaBtn1: 'Κλείστε μια Ιδιωτική Γευσιγνωσία'
    },
    EN: {
      heroTitle: 'The Artisan of',
      heroTitleItalic: 'Gastronomy',
      heroSubtitle: 'Chef Thomas Tritsikakis',
      bioLabel: 'The Metamorphosis',
      bioQuote: '"From the architecture of haute pastry to the sculpture of Cretan earth."',
      bioP1: 'Born in the heart of Crete, Thomas Tritsikakis is a leading figure in Greek gastronomy. His journey as an accomplished pastry chef, business consultant, and culinary arts instructor is defined by an unyielding pursuit of perfection and authenticity.',
      bioP2: 'As the owner of LOGIA GAIA, he translated his vision into a business reality that honors his roots. Centered on the family estates in Agios Thomas, Heraklion, he produces premium wines and olive oil—an endeavor recognized with the Authentic Taste of Greece® – Gold Award 2026.',
      bioP3: 'The Tritsikakis family aims to offer products encapsulating true Cretan tradition from soil to table, blending ancestral heritage with a modern, sophisticated aesthetic.',
      bioBtn: 'Explore the philosophy',
      awardLabel: 'Honorary Title',
      awardTitle: 'World Class Recognition',
      awardSub: 'Ambassador for Greek Gastronomy® 2026',
      awardText: 'Certified as an official Ambassador to represent Greek Gastronomy throughout the world. Presented with the Gold Medal "Title of Honor" by GTBB in recognition of outstanding performance and contribution to the sustainment of Greek culture, Greek values and Greek tradition across the globe.',
      awardBadge1: 'GTBB Gold Medal Recipient',
      awardBadge2: 'Global Certification Award',
      legacyTitle: 'The Legacy of Monakrivo',
      legacyText: 'The legacy of Thomas Tritsikakis is inextricably linked with family and earth. Monakrivo wines are not mere products, but the realization of a promise: to preserve the authenticity of Cretan winemaking while delivering a world-class experience.',
      gallery1: 'The Terroir',
      gallery2: 'The Craft',
      gallery3: 'The Heritage',
      ctaTitle: 'Experience the Metamorphosis',
      ctaBtn1: 'Book a Private Tasting'
    }
  };

  const t = content[lang] || content['EN'];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] } }
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-[#141313] text-[#e5e2e1] flex flex-col selection:bg-solar-ochre selection:text-black antialiased">

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative h-[90vh] w-full flex flex-col justify-end overflow-hidden mt-0">
          <Image 
            src="/chef/metamorphosis_chef_page_tritsikakis_hero_image.jpg" 
            alt="Chef Thomas Tritsikakis" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141313] via-transparent to-transparent z-10" />
          
          <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-[120px] pb-24 mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl space-y-4"
            >
              <h1 className="font-display font-light text-5xl md:text-7xl tracking-tight leading-none text-white">
                {t.heroTitle} <br />
                <span className="italic text-solar-ochre">{t.heroTitleItalic}</span>
              </h1>
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-outline-variant/70 pt-2">
                {t.heroSubtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Biography Section */}
        <section className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-32"
            >
              <h2 className="font-display text-4xl font-light tracking-tight text-white">{t.bioLabel}</h2>
              <p className="font-display text-lg italic leading-relaxed text-outline-variant select-none">
                {t.bioQuote}
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-7 space-y-8 font-body text-sm text-on-surface/80 leading-relaxed tracking-wide text-justify border-t border-outline-variant/10 pt-4 lg:border-t-0 lg:pt-0"
            >
              <p>{t.bioP1}</p>
              <p>{t.bioP2}</p>
              <p>{t.bioP3}</p>

              <div className="pt-8 border-t border-outline-variant/20">
                <button 
                  onClick={() => router.push('/philosophy')}
                  className="group inline-flex items-center gap-3 text-solar-ochre font-body text-[11px] uppercase tracking-widest cursor-pointer transition-colors hover:text-white"
                >
                  {t.bioBtn} 
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Awards & Recognition Section */}
        <section className="bg-[#1c1b1b] py-28 border-y border-outline-variant/10">
          <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px]">
            <div className="text-center mb-20">
              <span className="font-body text-[11px] tracking-[0.2em] text-solar-ochre uppercase block mb-3">
                {t.awardLabel}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-white">
                {t.awardTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageFade}
                className="lg:col-span-6 relative aspect-square w-full max-w-xl mx-auto border border-solar-ochre/30 bg-[#141313] p-4 shadow-2xl"
              >
                <Image src="/chef/award_image.jpg" alt="Award" fill className="object-cover" />
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="lg:col-span-6 space-y-6"
              >
                <div className="w-12 h-[1px] bg-solar-ochre opacity-60" />
                <h3 className="font-display text-2xl md:text-3xl font-light text-white leading-tight">
                  {t.awardSub}
                </h3>
                <p className="font-body text-sm text-outline-variant leading-relaxed tracking-wide">
                  {t.awardText}
                </p>

                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-solar-ochre" />
                    <span className="font-body text-[11px] uppercase tracking-wider text-white/90">{t.awardBadge1}</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-solar-ochre" />
                    <span className="font-body text-[11px] uppercase tracking-wider text-white/90">{t.awardBadge2}</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Legacy Section */}
        <section className="py-28 max-w-[1440px] w-full mx-auto px-6 md:px-[120px]">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="w-16 h-[1px] bg-solar-ochre mx-auto" />
            <h2 className="font-display text-4xl font-light tracking-tight text-white">{t.legacyTitle}</h2>
            <p className="font-body text-sm text-outline-variant leading-relaxed tracking-wide">
              {t.legacyText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageFade} className="relative aspect-[4/5] w-full bg-neutral-900 border border-outline-variant/20 p-4 overflow-hidden">
              <Image src="/chef/teroir_image.jpg" alt={t.gallery1} fill className="object-cover p-2" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageFade} className="relative aspect-[4/5] w-full bg-neutral-900 border border-outline-variant/20 p-4 overflow-hidden md:mt-12">
              <Image src="/chef/craft_image.jpg" alt={t.gallery2} fill className="object-cover p-2" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageFade} className="relative aspect-[4/5] w-full bg-neutral-900 border border-outline-variant/20 p-4 overflow-hidden">
              <Image src="/chef/heritage_image.jpg" alt={t.gallery3} fill className="object-cover p-2" />
            </motion.div>
          </div>
        </section>

        {/* 5. Call to Action */}
        <section className="py-24 bg-[#1c1b1b] border-t border-outline-variant/10 text-center px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mx-auto space-y-10"
          >
            <h2 className="font-display text-3xl font-light text-white tracking-tight">{t.ctaTitle}</h2>
            <div className="flex justify-center items-center">
              <button 
                onClick={() => router.push('/contact')}
                className="w-full sm:w-auto py-4 px-10 border border-solar-ochre text-solar-ochre font-body text-[11px] uppercase tracking-widest transition-all duration-300 hover:bg-solar-ochre hover:text-black cursor-pointer rounded-sm"
              >
                {t.ctaBtn1}
              </button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}