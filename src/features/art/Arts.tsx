"use client";
import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import NavLink from "@/src/components/layout/Nav/NavLink";
import { useLocale } from "next-intl";

import Select from "@/src/components/select/Select";

const Arts = () => {
  const t = useTranslations("Art");

  const defaultYear = t("year");
  const defaultCol = t("collection");
  // const defaultType = ""

  const [arts, setArts] = useState([]);
  const locale = useLocale();

  const [year, setYear] = useState(defaultYear);
  const [collection, setCollection] = useState(defaultCol);
  // const [type, setType] = useState()

  const [isFiltered, setIsFiltered] = useState(false);

  //query build on each fire, check gpt history
  // where: {artYear: 2001, artType: PAINTING, artCollection: None}

  useEffect(() => {
    const buildQuery = () => {
      let filterConditions = [];

      if (year !== defaultYear) {
        filterConditions.push(`artYear: ${year}`);
      }
      if (collection !== defaultCol) {
        filterConditions.push(`artCollection: ${collection}`);
      }
      // if (type !== defaultType){
      //   filterConditions.push(`artType: ${type}`)
      // }s

      if (filterConditions.length == 0) {
        return "";
      } else {
        return `, where: {${filterConditions.join(", ")}}`;
      }
    };

    const fetchArts = async (query: string) => {
      try {
        const { data } = await client.query({
          query: gql`
            query MyQuery {
              arts(locales: ${locale}${query}) {
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
        setArts(data.arts);
      } catch (error) {
        console.error("Error fetching arts", error);
      }
    };

    const query = buildQuery();
    fetchArts(query);
  }, [year, collection]);

  type artType = {
    id: string;
    artTitle: string;
  };

  const years = Array.from({ length: 2022 - 1958 + 1 }, (_, i) => i + 1958);
  const collections = ["None", "Well", "Stones", "Structures"];

  return (
    <div>
      <Select
        options={years}
        selectedOption={year}
        setSelectedOption={setYear}
        defaultValue={defaultYear}
      />
      <Select
        options={collections}
        selectedOption={collection}
        setSelectedOption={setCollection}
        defaultValue={defaultCol}
      />
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
