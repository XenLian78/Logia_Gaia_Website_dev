// Μεταμορφωση - Metamorfosis Page //
'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MetamorphosisPage() {
  const { lang } = useLanguage();
  const router = useRouter();

  const content = {
    EL: {
      heroSubtitle: 'Ο ΑΛΧΗΜΙΣΤΗΣ ΤΗΣ ΑΚΡΙΒΕΙΑΣ',
      heroTitle: 'Από την υψηλή ζαχαροπλαστική στην οινοποίηση.',
      heroAuthor: '— Chef Thomas Tritsikakis',
      sec1Num: '01.',
      sec1Label: 'Η ΚΛΗΡΟΝΟΜΙΑ & Η ΠΡΟΣΩΠΙΚΟΤΗΤΑ',
      sec1Title: 'Οι ρίζες στον Άγιο Θωμά.',
      sec1Text: 'Η επιστροφή στις ρίζες δεν είναι οπισθοδρόμηση, αλλά η απόλυτη ευθυγράμμιση με το terroir. Η μετάβαση από τη δομημένη δημιουργία της γαστρονομίας στην οργανική εξέλιξη του αμπελώνα.',
      sec2Num: '02.',
      sec2Label: 'Η ΕΠΙΣΤΗΜΗ ΤΩΝ ΓΡΑΜΜΑΡΙΩΝ',
      sec2Title: 'Η τέχνη της απόλυτης ακρίβειας.',
      sec2Text: 'Η οινοποίηση χαμηλής παρέμβασης απαιτεί την ίδια μαθηματική ακρίβεια με την υψηλή ζαχαροπλαστική. Κάθε γραμμάριο, κάθε βαθμός θερμοκρασίας, κάθε δευτερόλεπτο μεταμορφώνει το τελικό αποτέλεσμα.',
      sec2Btn: 'ΠΕΡΙΣΣΟΤΕΡΑ ΓΙΑ ΤΟ ΘΩΜΑ ΤΡΙΤΣΙΚΑΚΗ',
      sec3Num: '03.',
      sec3Label: 'ΔΙΕΘΝΗΣ ΑΝΑΓΝΩΡΙΣΗ',
      sec3Title: 'Authentic World Taste® - Gold Award 2026',
      sec3Text: 'Μια παγκόσμια Αναγνώριση απο διεθνείς οργανισμούς γαστρονομίας για την αυθεντικότητα, τη γεύση και τη σταθερή ποιότητα των προϊόντων μας.',
      badge1Title: 'ΒΡΑΒΕΙΑ 2026:',
      badge1Sub: '',
      badge2Title: 'TOP WINE OF THE YEAR',
      badge2Sub: 'GOLDEN AWARD 2026',
      badge3Title: 'WINERY OF THE YEAR',
      badge3Sub: 'GOLDEN AWARD 2026',
      badge4Title: 'GOLDEN CHOICE',
      badge4Sub: 'GOLDEN AWARD 2026',
      motoText: '"Το κρασί είναι η ζαχαροπλαστική της γης. Απαιτεί την ίδια υπομονή, την ίδια ακρίβεια."',
      motoAuthor: '— THOMAS TRITSIKAKIS'
    },
    EN: {
      heroSubtitle: 'THE ALCHEMIST OF PRECISION',
      heroTitle: 'From haute pastry to premium winemaking.',
      heroAuthor: '— Chef Thomas Tritsikakis',
      sec1Num: '01.',
      sec1Label: 'THE HERITAGE & THE PERSONALITY',
      sec1Title: 'Roots in Agios Thomas.',
      sec1Text: 'Returning to one\'s roots is not a retreat, but the ultimate alignment with the terroir. Moving from the structured design of gastronomy to the organic evolution of the vineyard.',
      sec2Num: '02.',
      sec2Label: 'THE SCIENCE OF GRAMS',
      sec2Title: 'The Art of Accuracy.',
      sec2Text: 'Low-intervention winemaking demands the exact same mathematical discipline as fine pastry. Every single gram, every degree of temperature, every second transforms the final creation.',
      sec2Btn: 'MORE ABOUT THOMAS TRITSIKAKIS',
      sec3Num: '03.',
      sec3Label: 'INTERNATIONAL RECOGNITION',
      sec3Title: 'Authentic World Taste® - Gold Award 2026',
      sec3Text: 'A global recognition from international gastronomy organizations for the authenticity, taste and consistent quality of our products.',
      badge1Title: 'AWARDS 2026:',
      badge1Sub: '',
      badge2Title: 'TOP WINE OF THE YEAR',
      badge2Sub: 'GOLDEN AWARD 2026',
      badge3Title: 'WINERY OF THE YEAR',
      badge3Sub: 'GOLDEN AWARD 2026',
      badge4Title: 'GOLDEN CHOICE',
      badge4Sub: 'GOLDEN AWARD 2026',
      motoText: '"Wine is the pastry of the earth. It demands the exact same patience, the exact same accuracy."',
      motoAuthor: '— THOMAS TRITSIKAKIS'
    }
  };

  const t = content[lang] || content['EN'];

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const imageFade = { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } } };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-on-surface flex flex-col selection:bg-solar-ochre selection:text-black">

      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden border-b border-outline-variant/10">
        <Image 
          src="/metamorphosis/hero_image_metamorfosis_page.jpg" 
          alt="Metamorphosis Hero Background" 
          fill 
          sizes="100vw"
          className="object-cover object-center"
          priority
          loading="eager" 
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-[120px] text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
            <span className="font-body text-[11px] tracking-[0.4em] text-solar-ochre uppercase block">{t.heroSubtitle}</span>
            <h1 className="font-display font-light text-4xl md:text-6xl max-w-4xl lowercase tracking-tight leading-tight text-white">{t.heroTitle}</h1>
            <p className="font-body text-xs tracking-widest text-outline-variant/70 pt-2 block">{t.heroAuthor}</p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-24 space-y-32 md:space-y-44 flex-grow">
        
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-4 border-l border-outline-variant/20 pl-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm text-solar-ochre">{t.sec1Num}</span>
              <span className="font-body text-[10px] tracking-[0.25em] text-outline-variant uppercase">{t.sec1Label}</span>
            </div>
            <h2 className="font-display text-3xl font-light tracking-tight text-white">{t.sec1Title}</h2>
            <p className="font-body text-sm text-on-surface/80 leading-relaxed font-light tracking-wide">{t.sec1Text}</p>
            <div className="pt-4">
              <button onClick={() => router.push('/metamorphosis/chef')} className="group relative inline-flex items-center justify-center py-3.5 px-8 border border-solar-ochre/40 bg-transparent text-solar-ochre text-[11px] tracking-[0.25em] font-body uppercase overflow-hidden cursor-pointer rounded-sm transition-all duration-300 hover:border-solar-ochre hover:text-white">
                <span className="absolute inset-0 w-full h-full bg-solar-ochre scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 -z-10" />
                {t.sec2Btn}
              </button>
            </div>
          </motion.div>
          <motion.div variants={imageFade} className="lg:col-span-7 aspect-[4/3] w-full border border-outline-variant/20 bg-neutral-900 p-4 relative">
            <Image 
              src="/metamorphosis/chef_portrait_metamorphosis.jpg" 
              alt="Chef Portrait" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw" 
              className="object-cover p-2" 
              loading="eager"
              priority
            />
          </motion.div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div variants={imageFade} className="lg:col-span-6 order-2 lg:order-1 aspect-square max-w-md mx-auto lg:mx-0 w-full rounded-full border border-outline-variant/20 bg-neutral-900 p-4 overflow-hidden relative">
            <Image 
              src="/metamorphosis/pastry_closeup_metamorphosis.jpg" 
              alt="Pastry Close-up" 
              fill 
              sizes="(max-width: 768px) 100vw, 400px" 
              className="object-cover p-4 rounded-full" 
              loading="eager"
              priority
            />
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-6 order-1 lg:order-2 space-y-6 lg:pl-12">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm text-solar-ochre">{t.sec2Num}</span>
              <span className="font-body text-[10px] tracking-[0.25em] text-outline-variant uppercase">{t.sec2Label}</span>
            </div>
            <h2 className="font-display text-3xl font-light tracking-tight text-white">{t.sec2Title}</h2>
            <p className="font-body text-sm text-on-surface/80 leading-relaxed font-light tracking-wide">{t.sec2Text}</p>
          </motion.div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-3xl mx-auto space-y-12 py-12 border-y border-outline-variant/10">
          <div className="w-full max-w-[320px] h-24 mx-auto border border-solar-ochre/20 bg-neutral-900 rounded-sm flex items-center justify-center relative">
             <Image src="/awards/Authentic_World_Taste_Gold_Award_2026.png" alt="Emblem" fill sizes="320px" className="object-contain p-2" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="font-display text-sm text-solar-ochre">{t.sec3Num}</span>
              <span className="font-body text-[10px] tracking-[0.25em] text-outline-variant uppercase">{t.sec3Label}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-white">{t.sec3Title}</h2>
            <p className="font-body text-sm text-on-surface/70 max-w-xl mx-auto leading-relaxed font-light tracking-wide">{t.sec3Text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6 border-t border-outline-variant/5">
            {[ 
              { t: t.badge1Title, s: t.badge1Sub }, 
              { t: t.badge2Title, s: t.badge2Sub }, 
              { t: t.badge3Title, s: t.badge3Sub },
              { t: t.badge4Title, s: t.badge4Sub }
            ].map((b, i) => (
              <div key={i} className="space-y-1">
                <h4 className="font-display text-lg text-solar-ochre font-light">{b.t}</h4>
                <p className="font-body text-[9px] tracking-[0.2em] text-outline-variant uppercase">{b.s}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div variants={imageFade} className="lg:col-span-7 min-h-[350px] border border-outline-variant/20 bg-neutral-900 p-4 relative">
            <Image src="/metamorphosis/vineyard_golden_hour_metamorphosis.jpg" alt="Vineyard" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover p-2" priority />
          </motion.div>
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <motion.div variants={imageFade} className="aspect-[16/9] w-full border border-outline-variant/20 bg-neutral-900 p-4 relative">
              <Image src="/metamorphosis/bottle_label_closeup_metamorphosis.jpg" alt="Bottle Label" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover p-2" />
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#111111] p-8 border border-outline-variant/10 rounded-sm flex flex-col justify-center space-y-4">
              <p className="font-display text-lg italic font-light tracking-wide text-neutral-200 leading-relaxed">{t.motoText}</p>
              <p className="font-body text-[10px] tracking-[0.2em] text-solar-ochre uppercase text-right">{t.motoAuthor}</p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}