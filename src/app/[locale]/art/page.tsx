import { Metadata } from "next";

import Arts from "@/src/features/art/Arts";

export const metadata: Metadata = {
  title:
    "Wiesław Bednarz - Portfolio Artysty Malarza Rzeźbiarza i Performera | Obrazy, pejzaże, rzeźba w stali i kamieniu",
  description:
    "Odkryj wyjątkowe prace Wiesława Bednarz, artysty malarza, rzeźbiarza i performera. Przeglądaj kolekcję dzieł od ceramiki i rzeźby w stali po klasyczne pejzaże oraz cykl Umarłe Studnie",
  keywords:
    "Wiesław Bednarz, portfolio, malarz, prace, obrazy, rzeźba, performance, kolekcja, dzieła, sztuki, stal, kamień, sztuka",
};

const ArtsPage = () => {
  return <Arts />;
};

export default ArtsPage;
