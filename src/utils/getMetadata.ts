import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

interface MetaData {
  arts: Array<{
    id: string;
    artTitle: string;
    artDescription: {
      text: string;
    };
  }>;
}

export const getMeta = async (
  id: string,
  locale: string
): Promise<MetaData> => {
  const GET_META = gql`
query GetPaintings {
  arts(locales: ${locale}, where: { id: "${id}"}) {
    id
    artTitle
    artDescription {
      text
    }
  }
}
`;
  const { data } = await getClient().query<MetaData>({
    query: GET_META,
  });

  if (!data) {
    throw new Error("Failed to fetch metadata");
  }

  return data;
};
