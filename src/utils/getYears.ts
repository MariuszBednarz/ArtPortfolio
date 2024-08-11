import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

type artType = {
  artYear: number | null;
};

export const getYears = async () => {
  try {
    const { data } = await getClient().query({
      query: gql`
        query GetYears {
          arts(first: 100) {
            artYear
          }
        }
      `,
    });
    const uniqueYears: unknown[] = [
      ...new Set(
        data.arts
          .map((art: artType) => art.artYear)
          .filter((year: number): year is number => year !== null)
          .sort((a: number, b: number) => a - b)
      ),
    ];
    return uniqueYears;
  } catch (err) {
    console.error("couldn't get years", err);
  }
};
