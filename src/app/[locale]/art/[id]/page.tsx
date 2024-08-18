import type { Metadata } from "next";

import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";
import { notFound } from "next/navigation";

import Art from "@/components/features/artPage/Art";

import { getMeta } from "@/utils";

type Props = {
  params: { id: string; locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getMeta(params.id, params.locale);
  const { artTitle, artDescription } = data.arts[0];

  return {
    title: artTitle,
    description: artDescription.text,
  };
}

export default async function ArtPage({ params }: any) {
  const GET_ART = gql`
query GetPaintings {
  arts(locales: ${params.locale}, where: { id: "${params.id}"}) {
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

  const { data } = await getClient().query({ query: GET_ART });

  const itemExists = data.arts.find((item: any) => item.id === params.id);

  if (!itemExists) {
    notFound();
  }

  return <Art data={data} />;
}
