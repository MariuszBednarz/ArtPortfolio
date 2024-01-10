import client from "@/apollo-client";
import { gql } from "@apollo/client";

export const getMeta = async (id: string) => {
  try {
    const { data } = await client.query({
      query: gql`
          query {
            art(locales: pl, where: { id: "${id}"}) {
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
  } catch (error) {
    console.error("Couldn't get meta", error);
  }
};
