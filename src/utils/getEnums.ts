import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

interface EnumType {
  name: string;
}

interface EnumData {
  __type: {
    enumValues: EnumType[];
  };
}

export const getEnums = async (
  enumName: string
): Promise<string[] | undefined> => {
  try {
    const { data } = await getClient().query<EnumData>({
      query: gql`
        query GetEnumValues {
          __type(name: "${enumName}") {
            enumValues {
              name
            }
          }
        }
      `,
    });
    const result = data?.__type?.enumValues || [];

    const enums = result.map((el: EnumType) => {
      return el.name;
    });
    return enums;
  } catch (err) {
    console.error("couldn't get enums", err);
  }
};
