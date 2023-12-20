"use client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

import client from "@/apollo-client";

import {
  Select,
  Checkbox,
  ContentWrapper,
  MasonryComponent,
} from "@/src/components";

const Arts = () => {
  const locale = useLocale();

  const defaultYear = "year";
  const defaultCol = "collection";

  const [arts, setArts] = useState([]);
  const [year, setYear] = useState(defaultYear);
  const [collection, setCollection] = useState(defaultCol);
  const [type, setType] = useState();
  const [loading, setLoading] = useState(true);

  const handleCheckbox = (value: any) => {
    if (!type || value !== type) {
      setType(value);
    } else {
      setType(undefined);
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

    const fetchArts = async (query: string) => {
      try {
        const { data } = await client.query({
          query: gql`
            query MyQuery {
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
          fetchPolicy: "no-cache",
        });
        setLoading(false);
        setArts(data.arts);
      } catch (error) {
        console.error("Error fetching arts", error);
      }
    };
    const query = buildQuery();
    fetchArts(query);
  }, [year, collection, type]);

  const years = Array.from({ length: 2022 - 1958 + 1 }, (_, i) => i + 1958);
  const collections = ["None", "Well", "Stones", "Structures"];
  const checkboxes = ["PAINTING", "SCULPTURE", "PERFORMANCE", "CERAMICS"];

  return (
    <ContentWrapper>
      <div className="flex items-center lg:items-start flex-col py-4 gap-4 lg:flex-row">
        <div className="flex gap-4">
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
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {checkboxes.map((item) => (
            <Checkbox
              key={item}
              text={item}
              selected={type === item}
              handleCheckbox={handleCheckbox}
            />
          ))}
        </div>
      </div>
      <MasonryComponent loading={loading} data={arts} artPage />
    </ContentWrapper>
  );
};

export default Arts;
