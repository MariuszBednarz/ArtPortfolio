import { notFound } from "next/navigation";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

import { Home } from "@/components/pages";
import { ParamsProps, HomeArt } from "@/types/components";

const HomePage = async ({ params }: ParamsProps) => {
  const { locale } = await params;

  const GET_ART = gql`
  query GetPaintings {
    arts(first: 100, locales: ${locale}) {
      id
      artImage(forceParentLocale: true) {
        url
        height
        width
      }
    }
  }
`;

  const { data } = await getClient().query<{ arts: HomeArt[] }>({
    query: GET_ART,
  });

  if (!data) {
    return notFound();
  }

  const images = data.arts.map((art: HomeArt) => {
    return {
      id: art.id,
      url: art.artImage.url,
    };
  });

  if (!data) {
    return notFound();
  }

  return <Home images={images} />;
};

export default HomePage;
