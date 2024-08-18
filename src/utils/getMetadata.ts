import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export const getMeta = async (id: string, locale: string) => {
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
  const { data } = await getClient().query({
    query: GET_META,
  });
  return data;
};
