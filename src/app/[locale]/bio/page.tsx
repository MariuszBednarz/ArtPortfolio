import Bio from "@/components/features/bioPage/Bio";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { notFound } from "next/navigation";

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

export default async function BioPage({ params }: any) {
  const bio = await getBio(params.locale);
  if (!bio) {
    notFound();
  }
  return <Bio bio={bio} />;
}
