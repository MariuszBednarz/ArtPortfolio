import { notFound } from "next/navigation";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";

import { Bio } from "@/components/pages";
import { ParamsProps } from "@/types/components";

interface BioData {
  expos: Array<{
    expo: string;
    id: string;
  }>;
}

const getBio = async (locale: string): Promise<BioData | null> => {
  const GET_BIO = gql`
    query MyQuery {
      expos(locales: ${locale}) {
        expo
        id
      }
    }
    `;
  const { data } = await getClient().query<BioData>({ query: GET_BIO });
  return data || null;
};

export default async function BioPage({ params }: ParamsProps) {
  const { locale } = await params;
  const bio = await getBio(locale);
  if (!bio) {
    notFound();
  }
  return <Bio bio={bio.expos} />;
}
