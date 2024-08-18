import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Tenor_Sans } from "next/font/google";

import { NavBar, Footer } from "@/components/reusable";

import "./globals.css";

const tenor = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Wiesław Bednarz - Portfolio Artysty Malarza Rzeźbiarza i Performera | Obrazy, pejzaże, ceramika, rzeźba w stali i kamieniu",
  description:
    "Odkryj wyjątkowe prace Wiesława Bednarza, artysty malarza, rzeźbiarza i performera. Przeglądaj kolekcję dzieł od ceramiki i rzeźby w stali po klasyczne pejzaże oraz cykl Umarłe Studnie",
  keywords:
    "Wiesław Bednarz, portfolio, malarz, prace, obrazy, rzeźba, performance, kolekcja, dzieła, sztuki, stal, kamień, sztuka",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={tenor.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <NavBar />
            <main className="w-full h-full min-h-mobilePage sm:min-h-page bg-white dark:bg-darker">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
