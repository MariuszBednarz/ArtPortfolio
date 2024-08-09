import { notFound } from "next/navigation";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";

const GET_ART = gql`
  query GetPaintings {
    arts(first: 100) {
      id
      createdAt
      artYear
      artType
      artTitle
      artImage(forceParentLocale: true) {
        url
        height
        width
      }
    }
  }
`;

export default async function Art({ params }: any) {
  // if (true) {
  //   notFound();
  // }

  const { data } = await getClient().query({ query: GET_ART });

  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Art
      {data.arts.map((el: any) => (
        <div key={el.id}>
          {el.id}

          <Image
            src={el.artImage.url}
            width={el.artImage.width}
            height={el.artImage.height}
            alt={el.artTitle}
          />
        </div>
      ))}
    </main>
  );
}
