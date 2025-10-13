import { notFound } from "next/navigation";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

import { Arts } from "@/components/pages";
import { ParamsProps, FilterArt } from "@/types/components";

import { getEnums, getYears } from "@/utils";

interface ArtsData {
  arts: FilterArt[];
}

const ArtsPage = async ({ params }: ParamsProps) => {
  const { locale } = await params;

  const GET_ART = gql`
  query GetPaintings {
    arts(first: 100, locales: ${locale}) {
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

  const { data } = await getClient().query<ArtsData>({ query: GET_ART });

  const collections = await getEnums("ArtCollection");
  const types = await getEnums("ArtType");
  const years = await getYears();

  if (!data) {
    return notFound();
  }

  return (
    <Arts data={data} collections={collections} types={types} years={years} />
  );
};

export default ArtsPage;
