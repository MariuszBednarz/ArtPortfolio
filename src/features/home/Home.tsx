"use client";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { gql } from "@apollo/client";

import client from "@/apollo-client";

import { MasonryComponent } from "@/src/components";
import Banner from "./Banner";

const Home = () => {
  const [arts, setArts] = useState([]);
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
      <Banner />
      <MasonryComponent data={arts} />
    </div>
  );
};

export default Home;
