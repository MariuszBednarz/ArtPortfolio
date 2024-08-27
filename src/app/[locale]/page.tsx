import { notFound } from "next/navigation";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

import { Home } from "@/components/pages";
import { ParamsProps, HomeArt } from "@/types/components";

const HomePage = async ({ params }: ParamsProps): Promise<JSX.Element> => {
  const GET_ART = gql`
  query GetPaintings {
    arts(first: 100, locales: ${params.locale}) {
      id
      artImage(forceParentLocale: true) {
        url
        height
        width
      }
    }
  }
`;

  const { data } = await getClient().query({ query: GET_ART });

  const images = await data.arts.map((art: HomeArt) => {
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
