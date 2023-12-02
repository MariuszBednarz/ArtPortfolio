"use client";
import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "@/src/components/layout/Nav/NavLink";
import { useLocale } from "next-intl";

const Arts = () => {
  const [arts, setArts] = useState([]);
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query MyQuery {
              arts(locales: ${locale}) {
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

  type artType = {
    id: string;
    artTitle: string;
  };

  return (
    <div>
      art
      {arts.map((art: artType) => (
        <div key={art.id}>
          <h1>{art.artTitle}</h1>
          <h1>Art nr {art.id}</h1>
          <NavLink href={`/art/${art?.id}`}>Art {art?.id}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Arts;
