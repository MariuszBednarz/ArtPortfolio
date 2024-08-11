import { notFound } from "next/navigation";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

import { getEnums, getYears } from "@/utils";

import Arts from "@/components/features/artPage/Arts";

export default async function ArtsPage({ params }: any) {
  const GET_ART = gql`
  query GetPaintings {
    arts(first: 100, locales: ${params.locale}) {
      id
      createdAt
      artYear
      artType
      artCollection
      artTitle
      artImage(forceParentLocale: true) {
        url
        height
        width
      }
    }
  }
`;

  const { data } = await getClient().query({ query: GET_ART });

  const collections = await getEnums("ArtCollection");
  const types = await getEnums("ArtType");
  const years = await getYears();

  if (!data) {
    return notFound();
  }

  return (
    <Arts data={data} collections={collections} types={types} years={years} />
  );
}
