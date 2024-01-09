"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { gql } from "@apollo/client";

import client from "@/apollo-client";

import { ContentWrapper } from "@/src/components";

//TODO:
//1. Move art/id to features - DONE
//2. Closing mobile nav on redirect - DONE
//3. Add art/id page design -
//4. Add no results - DONE
//5. Add Loading - DONE
//6. SEO
//7. Analitics
//8. Filter styles & responsivity - DONE
//9. "any" types fix
//10 mobile page-width (scrollbar bug)

type ArtType = {
  art: {
    artTitle: string;
    artImage: {
      url: string;
      width: number;
      height: number;
    };
    artDescription: any;
    artCollection: string;
  };
};

export type ArtParams = {
  locale: string;
  id: string;
};

const Art = ({ params }: { params: ArtParams }) => {
  const [art, setArt] = useState<ArtType | undefined>();
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

  console.log(art?.art.artDescription);
  // const { artTitle, artImage, artDescription, artCollection } = art?.art;
  return (
    <ContentWrapper>
      <p>{art && art?.art.artTitle}</p>
      <div
        dangerouslySetInnerHTML={{ __html: art?.art.artDescription.html }}
      ></div>
      {art && (
        <Image
          src={art?.art.artImage.url}
          width={art?.art.artImage.width}
          height={art?.art.artImage.height}
          alt=""
          className="w-full object-contain mx-auto"
        />
      )}
    </ContentWrapper>
  );
};

export default Art;
