import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export const getMeta = async (id: string) => {
  try {
    const { data } = await getClient().query({
      query: gql`
        query GetPaintings {
          art(locales: pl, where: { id: "${id}" }) {
            id
            artTitle
            artDescription {
              text
            }
          }
        }
      `,
    });
    return data;
  } catch (err) {
    console.error("couldnt't get metadata", err);
  }
};
