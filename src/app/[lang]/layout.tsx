import { RootProvider } from "fumadocs-ui/provider/next";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";
import '@/app/global.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const { provider } = defineI18nUI(i18n, {
    translations: {
        en: {
            displayName: "English",
        },
        ru: {
            displayName: "Russian",
        },
    },
});

export default async function RootLayout({
    params,
    children,
}: LayoutProps<"/[lang]">) {
    const lang = (await params).lang;

    return (
        <html lang={lang} className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <RootProvider i18n={provider(lang)}>{children}</RootProvider>
            </body>
        </html>
    );
}
