"use client";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { gql } from "@apollo/client";

import client from "@/apollo-client";

const useBioLogic = () => {
  const locale = useLocale();
  const [bio, setBio] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExpos = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query {
              expos(locales: ${locale}) {
                id
                expo
              }
            }
          `,
          fetchPolicy: "no-cache",
        });
        setLoading(false);
        setBio(data);
      } catch (error) {
        console.error("Error fetching bio", error);
      }
    };
    fetchExpos();
  }, []);

  return { bio, loading };
};

export default useBioLogic;
