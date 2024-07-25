import { getMeta } from "@/src/utils/getMeta";

import Art, { ArtParams } from "@/src/features/art/Art";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { id } = params;
  const meta = await getMeta(id);
  return {
    title: meta.art.artTitle,
    description: meta.art.artDescription.text,
    keywords:
      "Wiesław Bednarz, portfolio, malarz, prace, obrazy, rzeźba, performance, kolekcja, dzieła, sztuki, stal, kamień, sztuka",
  };
}

const ArtPage = ({ params }: { params: ArtParams }) => {
  return <Art params={params} />;
};

export default ArtPage;
