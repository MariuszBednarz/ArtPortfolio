import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";
import { notFound } from "next/navigation";

import { TranslatedPage } from "@/components/TranslatedPage";

const GET_IDS = gql`
  query GetPaintings {
    arts(first: 100) {
      id
    }
  }
`;

export default async function Art({ params }: any) {
  const { data } = await getClient().query({ query: GET_IDS });
  const itemExists = data.arts.find((item: any) => item.id === params.id);

  if (!itemExists) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TranslatedPage />
      Art {params.id}
    </main>
  );
}
