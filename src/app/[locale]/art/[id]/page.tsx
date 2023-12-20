"use client";
import { useEffect, useState } from "react";
import client from "@/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";
import { useLocale } from "next-intl";

type ArtType = {
  art: {
    artTitle: string;
    artImage: {
      url: string;
    };
  };
};

const Art = ({ params }: { params: any }) => {
  const [art, setArt] = useState<ArtType>();
  const locale = useLocale();

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query MyQuery {
              art(locales: ${locale}, where: { id: "${params.id}"}) {
                id
                artCollection
                artDescription {
                  html
                  text
                }
                artImage {
                  width
                  id
                  height
                  mimeType
                  url
                }
                artTitle
              }
            }
          `,
          fetchPolicy: "no-cache",
        });
        setArt(data);
      } catch (error) {
        console.error("Error fetching arts", error);
      }
    };
    fetchArt();
  }, []);

  const { id } = params;

  return (
    <div className="max-w-page w-full">
      <p>{art && art?.art.artTitle}</p>
      Art nr {id}
      {art && (
        <Image src={art.art.artImage.url} width={300} height={300} alt="" />
      )}
    </div>
  );
};

export default Art;
