"use client";
import { useEffect, useState } from "react";
import client from "@/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";
import { useLocale } from "next-intl";

//TODO:
//1. Move art/id to features - DONE
//2. Closing mobile nav on redirect - DONE
//3. Add art/id page design
//4. Add no results
//5. Add Loading
//6. SEO
//7. Analitics
//8. Filter styles & responsivity - DONE
//9. "any" types fix

type ArtType = {
  art: {
    artTitle: string;
    artImage: {
      url: string;
    };
  };
};

export type ArtParams = {
  locale: string;
  id: string;
};

const Art = ({ params }: { params: ArtParams }) => {
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
        <Image
          src={art.art.artImage.url}
          width={500}
          height={500}
          alt=""
          className="w-full max-w-page"
        />
      )}
    </div>
  );
};

export default Art;
