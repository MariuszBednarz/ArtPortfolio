import Link from "next/link";
import { notFound } from "next/navigation";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";

import NavigationLink from "@/components/NavLink";

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
  const { data } = await getClient().query({ query: GET_ART });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Art {data.arts.length}
      {data.arts.map((el: any) => (
        <div key={el.id}>
          {el.id}
          <NavigationLink href={`art/${el.id}`}>Link to subpage</NavigationLink>
          {/* <Image
            src={el.artImage.url}
            width={el.artImage.width}
            height={el.artImage.height}
            alt={el.artImage}
          /> */}
        </div>
      ))}
    </main>
  );
}
