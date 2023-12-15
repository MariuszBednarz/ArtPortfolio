"use client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

import client from "@/apollo-client";

import NavLink from "@/src/components/layout/Nav/NavLink";
import MasonryComponent from "../../components/Masonry";
import { Select, Checkbox, ContentWrapper } from "@/src/components";

const Arts = () => {
  const locale = useLocale();

  const defaultYear = "year";
  const defaultCol = "collection";

  const [arts, setArts] = useState([]);
  const [year, setYear] = useState(defaultYear);
  const [collection, setCollection] = useState(defaultCol);
  const [type, setType] = useState();

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
              arts(locales: ${locale}${query}) {
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
      <div className="flex px-8 py-4 gap-4">
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
        {checkboxes.map((item) => (
          <Checkbox
            text={item}
            selected={type === item}
            handleCheckbox={handleCheckbox}
          />
        ))}
      </div>
      <MasonryComponent data={arts} />
    </ContentWrapper>
  );
};

export default Arts;
