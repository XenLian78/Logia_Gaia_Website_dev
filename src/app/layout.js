// Γενικές ρυθμίσεις για όλες τις σελίδες//

import { LanguageProvider } from '@/context/LanguageContext';
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body className="bg-background text-on-surface antialiased">
        <LanguageProvider>
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}