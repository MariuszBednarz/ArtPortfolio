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
              art(where: { id: "${params.id}"}, locales: ${locale}) {
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
        console.log(data);
        setArt(data);
      } catch (error) {
        console.error("Error fetching arts", error);
      }
    };
    fetchArt();
  }, []);

  const { id } = params;

  return (
    <div>
      <p>{art && art?.art.artTitle}</p>
      Art nr {id}
      {art && (
        <Image src={art.art.artImage.url} width={300} height={300} alt="" />
      )}
    </div>
  );
};

export default Art;
