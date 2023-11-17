"use client";
import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Art = () => {
  const [arts, setArts] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query MyQuery {
              arts {
                id
                artTitle
              }
            }
          `,
          fetchPolicy: "no-cache",
        });
        setArts(data.arts);
      } catch (error) {
        console.error("Error fetching arts", error);
      }
    };

    fetchArts();
  }, []);

  return (
    <div>
      art
      {arts.map((art: any) => (
        <div key={art.id}>
          <h1>{art.artTitle}</h1>
          <h1>Art nr {art.id}</h1>
          <Link href={`/art/${art?.id}`}>Art {art?.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default Art;
