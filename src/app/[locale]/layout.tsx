import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Lexend } from "next/font/google";

import Layout from "@/src/components/layout/Layout";

import "./globals.css";

const lexend = Lexend({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title:
    "Wiesław Bednarz - Portfolio Artysty Malarza Rzeźbiarza i Performera | Obrazy, pejzaże, ceramika, rzeźba w stali i kamieniu",
  description:
    "Odkryj wyjątkowe prace Wiesława Bednarza, artysty malarza, rzeźbiarza i performera. Przeglądaj kolekcję dzieł od ceramiki i rzeźby w stali po klasyczne pejzaże oraz cykl Umarłe Studnie",
  keywords:
    "Wiesław Bednarz, portfolio, malarz, prace, obrazy, rzeźba, performance, kolekcja, dzieła, sztuki, stal, kamień, sztuka",
};

const RootLayout = async ({
  children,
  params: { locale = "pl" },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={lexend.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
