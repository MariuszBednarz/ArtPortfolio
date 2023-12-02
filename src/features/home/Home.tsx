"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Crimson_Text } from "next/font/google";
import Image from "next/image";
import { gql } from "@apollo/client";
import { useLocale } from "next-intl";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import client from "@/apollo-client";
import brush from "@/public/brush.png";
import Button from "@/src/components/Button";
import NavLink from "@/src/components/layout/Nav/NavLink";
import ContentWrapper from "@/src/components/ContentWrapper";

const crimson = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Home = () => {
  const t = useTranslations("Index");

  const [arts, setArts] = useState([]);
  // const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query MyQuery {
              arts(locales: ${locale}) {
                id
                artImage {
                  width
                  id
                  height
                  mimeType
                  url
                }
              }
            }
          `,
          fetchPolicy: "no-cache",
        });
        const arr = data.arts.sort(() => Math.random() - 0.5);
        setArts(arr);
      } catch (error) {
        console.error("Error fetching arts", error);
      }
    };

    fetchArts();
  }, []);

  return (
    <div>
      <div
        className={clsx(
          "w-full relative h-full flex justify-center flex-col",
          crimson.className
        )}
      >
        <div className="brightness-50">
          <div className="relative h-full w-full">
            <Image
              src={brush}
              alt=""
              fetchPriority="high"
              sizes="100%"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full flex flex-col items-center gap-[10px]">
          <h1 className="text-3xl">Wiesław F. Bednarz</h1>
          <div className="w-full max-w-[434px] h-1 bg-bright rounded-[2px]"></div>
          <p>Portfolio</p>
          <div className="flex gap-3">
            <NavLink href="/bio">
              <Button text="Biogram" />
            </NavLink>
            <NavLink href="/art">
              <Button text="Zbiory" outlined themeDisabled />
            </NavLink>
          </div>
        </div>
      </div>
      <ContentWrapper>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 480: 2, 768: 3 }}
          className="py-8"
        >
          <Masonry gutter="32px">
            {arts.map((art) => {
              return (
                <div key={art.id}>
                  <img src={art.artImage.url} alt="" className="w-full" />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </ContentWrapper>
    </div>
  );
};

export default Home;
