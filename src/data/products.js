// Δεδομένα για τα προίόντα //

export const PRODUCTS = [
  {
    id: 'monakrivo-rose',
    slug: 'monakrivo-rose-dry',
    year: '2026',
    quality: 'Premium',
    image: '/products/monakrivo-rose-dry.jpg',
    translateY: false,
    hasVariations: false,
    // Ρύθμιση ποσοστών Taste Graph για το Rose
    tasteGraph: {
      acidity: 15,
      body: 55,
      tannins: 15,
      fruitIntensity: 80
    },
    translations: {
      EL: { title: 'Monakrivo Rose Dry', subtitle: 'Μονοποικιλιακό • Οροπέδιο Αγίου Θωμά', description: 'Νότες λιαστής ντομάτας, άγριου θυμαριού και παλαιωμένου κέδρου. Ωρίμανση για 18 μήνες σε γαλλικά βαρέλια.' },
      EN: { title: 'Monakrivo Rose Dry', subtitle: 'Single Vineyard • Saint Thomas Plateau', description: 'Notes of sun-dried tomato, wild thyme, and aged cedar. Matured for 18 months in French oak.' }
    }
  },
  {
    id: 'monakrivo-white',
    slug: 'monakrivo-white-dry',
    year: '2026',
    quality: 'Premium',
    image: '/products/monakrivo-white-dry.jpg',
    translateY: true,
    hasVariations: false,
    // Ρύθμιση ποσοστών Taste Graph για το Λευκό
    tasteGraph: {
      acidity: 75,
      body: 60,
      tannins: 10,
      fruitIntensity: 70
    },
    translations: {
      EL: { title: 'Monakrivo White Dry', subtitle: 'Υψηλό Υψόμετρο • Οροπέδιο Αγίου Θωμά', description: 'Αρώματα πυρηνόκαρπων φρούτων με έντονη ορυκτή δομή. Παράγεται μέσω αυθόρμητης ζύμωσης.' },
      EN: { title: 'Monakrivo White Dry', subtitle: 'High Altitude • Saint Thomas Plateau', description: 'Stone fruit aromatics with a distinct mineral backbone. Produced via spontaneous fermentation.' }
    }
  },
  {
    id: 'monakrivo-red',
    slug: 'monakrivo-red-dry',
    year: '2016',
    quality: 'Premium',
    image: '/products/monakrivo-red-dry.jpg',
    translateY: false,
    hasVariations: false,
    // Ρύθμιση ποσοστών Taste Graph για το Κόκκινο
    tasteGraph: {
      acidity: 55,
      body: 85,
      tannins: 75,
      fruitIntensity: 65
    },
    translations: {
      EL: { title: 'Monakrivo Red Dry', subtitle: 'Προφιλοξηρικά Κλήματα • Οροπέδιο Αγίου Θωμά', description: 'Σύνθετες στρώσεις δέρματος, γαρίφαλου και αποξηραμένου ιβίσκου. Ένας διαλογισμός στην Κρητική μακροζωία.' },
      EN: { title: 'Monakrivo Red Dry', subtitle: 'Pre-Phylloxera Vines • Saint Thomas Plateau', description: 'Complex layers of leather, clove, and dried hibiscus. A meditation on Cretan longevity.' }
    }
  },
  {
    id: 'extra-virgin-olive-oil',
    slug: 'extra-virgin-olive-oil',
    year: '2026',
    quality: 'PREMIUM',
    category: 'oil', // Αλλαγή του label ΕΝΑΤΣΗ στη σελίδα του λαδιού
    image: '/products/extra-virgin-olive-oil.jpg',
    translateY: true,
    hasVariations: false,
    // Ρύθμιση ποσοστών Taste Graph για το Ελαιόλαδο
    tasteGraph: {
      acidity: 15,          // Αντιπροσωπεύει την οξύτητα του λαδιού
      body: 70,             // Αντιπροσωπεύει το σώμα/ρευστότητα
      tannins: 60,          // Θα εμφανιστεί ως "Πικάντικο" / "Pungency"
      fruitIntensity: 0     // Θα εμφανιστεί ως "Ένταση" / "Intensity" στο 0%
    },
    translations: {
      EL: { title: 'Ελαιόλαδο', subtitle: 'Εξαιρετικό Παρθένο • Ελαιώνες Αγίου θωμά • 1lt, 500ml, 350ml', description: 'Κορυφαίας ποιότητας ελαιόλαδο με εξαιρετικά χαμηλή οξύτητα, έντονα αρώματα και πιπεράτη επίγευση.' },
      EN: { title: 'Olive Oil', subtitle: 'Extra Virgin • Saint Thomas Groves • 1lt, 500ml, 350ml', description: 'Premium quality olive oil with exceptionally low acidity, intense aromas of fresh-cut grass, and a pepper finish.' }
    }
  }
];