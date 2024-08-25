"use client";
import { useMemo, useState } from "react";

import { MasonryComponent, Filters } from "@/components/sections";
import { ContentWrapper } from "@/components/reusable";

import { FilterArtsProps, FilterState, FilterArt } from "@/types/components";

const Arts = ({
  data,
  types,
  collections,
  years,
}: FilterArtsProps): JSX.Element => {
  const [year, setYear] = useState<FilterState>(undefined);
  const [type, setType] = useState<FilterState>(null);
  const [collection, setCollection] = useState<FilterState>(null);

  const filteredArts = useMemo(() => {
    return data.arts.filter((art: FilterArt) => {
      const yearMatch =
        year === undefined
          ? true
          : year === null
          ? art.artYear === null
          : art.artYear === year;
      const typeMatch = type ? art.artType === type : true;
      const collectionMatch = collection
        ? art.artCollection === collection
        : true;
      return yearMatch && typeMatch && collectionMatch;
    });
  }, [data.arts, year, type, collection]);

  return (
    <ContentWrapper>
      <Filters
        year={year}
        years={years}
        setYear={setYear}
        type={type}
        types={types}
        setType={setType}
        collection={collection}
        collections={collections}
        setCollection={setCollection}
      />
      <MasonryComponent data={filteredArts} />
    </ContentWrapper>
  );
};

export default Arts;
