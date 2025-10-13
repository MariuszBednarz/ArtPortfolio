import type { Metadata } from "next";

import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";
import { notFound } from "next/navigation";

import { Art } from "@/components/pages";

import { ParamsProps, Item } from "@/types/components";

import { getMeta } from "@/utils";

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const { id, locale } = await params;
  const data = await getMeta(id, locale);
  const { artTitle, artDescription } = data.arts[0];

  return {
    title: artTitle,
    description: artDescription.text,
  };
}

interface ArtData {
  arts: Array<{
    id: string;
    createdAt: string;
    artYear: string | null;
    artType: string;
    artTitle: string;
    artDescription: { text: string };
    artImage: { url: string; height: number; width: number };
  }>;
}

const ArtPage = async ({ params }: ParamsProps) => {
  const { id, locale } = await params;
  
  const GET_ART = gql`
query GetPaintings {
  arts(locales: ${locale}, where: { id: "${id}"}) {
    id
    createdAt
    artYear
    artType
    artTitle
    artDescription {
      text
    }
    artImage(forceParentLocale: true) {
      url
      height
      width
    }
  }
}
`;

  const { data } = await getClient().query<ArtData>({ query: GET_ART });

  if (!data || !data.arts || data.arts.length === 0) {
    notFound();
  }

  const itemExists = data.arts.find((item: Item) => item.id === id);

  if (!itemExists) {
    notFound();
  }

  return <Art data={data.arts[0]} />;
};

export default ArtPage;
