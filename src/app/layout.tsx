import { RootProvider } from 'fumadocs-ui/provider/next';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: { displayName: 'English' },
    ru: { displayName: 'Русский' },
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={provider()}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
