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
  const data = await getMeta(params.id, params.locale);
  const { artTitle, artDescription } = data.arts[0];

  return {
    title: artTitle,
    description: artDescription.text,
  };
}

const ArtPage = async ({ params }: ParamsProps): Promise<JSX.Element> => {
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

  const itemExists = data.arts.find((item: Item) => item.id === params.id);

  if (!itemExists) {
    notFound();
  }

  return <Art data={data.arts[0]} />;
};

export default ArtPage;
