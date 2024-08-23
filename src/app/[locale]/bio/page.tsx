import { notFound } from "next/navigation";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";

import { Bio } from "@/components/pages";
import { ParamsProps } from "@/types/components";

const getBio = async (locale: string) => {
  const GET_BIO = gql`
    query MyQuery {
      expos(locales: ${locale}) {
        expo
        id
      }
    }
    `;
  const { data } = await getClient().query({ query: GET_BIO });
  return data;
};

export default async function BioPage({ params }: ParamsProps) {
  const bio = await getBio(params.locale);
  if (!bio) {
    notFound();
  }
  return <Bio bio={bio.expos} />;
}
