import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export const getYears = async (): Promise<(number | null)[] | undefined> => {
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

    const years: (number | null)[] = data.arts.map(
      (art: { artYear: number | null }) => art.artYear
    );

    const filteredYears: number[] = years.filter(
      (year): year is number => year !== null
    );

    const sortedYears: number[] = filteredYears.sort((a, b) => a - b);

    const uniqueYears: (number | null)[] = [...new Set<number>(sortedYears)];

    uniqueYears.unshift(null);

    return uniqueYears;
  } catch (err) {
    console.error("Couldn't get years", err);
    return undefined;
  }
};
