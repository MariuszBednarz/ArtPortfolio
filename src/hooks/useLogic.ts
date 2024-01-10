"use client";

import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

import client from "@/apollo-client";

import { ArtParams } from "@/src/features/art/Art";

type ArtType = {
  art: {
    artTitle: string;
    artImage: {
      url: string;
      width: number;
      height: number;
    };
    artDescription: { html: string | TrustedHTML };
    artCollection: string;
  };
};

export type artObj = {
  id: string;
  artImage: {
    url: string;
    width: number;
    height: number;
  };
};

const useDataFetch = (isOverview?: boolean, params?: ArtParams) => {
  const locale = useLocale();

  const defaultYear = "year";
  const defaultCol = "collection";

  //data
  const [overview, setOverview] = useState<artObj[]>([]);
  const [arts, setArts] = useState<artObj[]>([]);
  const [art, setArt] = useState<ArtType | undefined>();

  //filters
  const [year, setYear] = useState<number | string>(defaultYear);
  const [collection, setCollection] = useState<number | string>(defaultCol);
  const [type, setType] = useState<string | undefined>(undefined);

  //state
  const [loading, setLoading] = useState(true);

  const handleCheckbox = (value: string) => {
    if (!type || value !== type) {
      setType(value);
    } else {
      setType(undefined);
    }
  };

  const fetchArts = async (query: string, isOverview: boolean | undefined) => {
    try {
      const { data } = await client.query({
        query: gql`
          query {
            arts(first: 100, locales: ${locale}${query}) {
             id
              artImage {
                width
                id
                height
                url
              }
            }
          }
        `,
        fetchPolicy: isOverview ? "no-cache" : "cache-first",
      });
      setLoading(false);
      if (isOverview) {
        const arr = data.arts.sort(() => Math.random() - 0.5);
        const firstTen = arr.slice(0, 10);
        setOverview(firstTen);
      } else {
        setArts(data.arts);
      }
    } catch (error) {
      console.error("Error fetching arts", error);
    }
  };

  useEffect(() => {
    const buildQuery = () => {
      let filterConditions = [];
      if (year !== defaultYear) {
        filterConditions.push(`artYear: ${year}`);
      }
      if (collection !== defaultCol) {
        filterConditions.push(`artCollection: ${collection}`);
      }
      if (type) {
        filterConditions.push(`artType: ${type}`);
      }
      if (filterConditions.length == 0) {
        return "";
      } else {
        return `, where: {${filterConditions.join(", ")}}`;
      }
    };
    const query = buildQuery();
    fetchArts(query, isOverview);
  }, [year, collection, type]);

  useEffect(() => {
    const fetchArt = async (params: ArtParams) => {
      try {
        const { data } = await client.query({
          query: gql`
            query {
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
        });
        setArt(data);
      } catch (error) {
        console.error("Error fetching arts", error);
      }
    };
    if (params) {
      fetchArt(params);
    }
  }, [params]);

  return {
    defaultCol,
    defaultYear,
    arts,
    setArts,
    year,
    setYear,
    collection,
    setCollection,
    type,
    setType,
    loading,
    setLoading,
    handleCheckbox,
    overview,
    art,
  };
};

export default useDataFetch;
