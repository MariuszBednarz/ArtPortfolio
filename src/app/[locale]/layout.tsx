import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Tenor_Sans } from "next/font/google";

import { Footer, CookieBanner } from "@/components/reusable";

import { NavBar, GoogleAnalytics } from "@/components/sections";

import { RootLayoutProps } from "@/types/components";

import "./globals.css";
import { Suspense } from "react";

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
const GA = process.env.NEXT_GA_MEASUREMENT_ID;

const RootLayout = async ({
  children,
  params: { locale },
}: RootLayoutProps): Promise<JSX.Element> => {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Suspense fallback={null}>
        <GoogleAnalytics GA={GA} />
      </Suspense>
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
            <CookieBanner />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
