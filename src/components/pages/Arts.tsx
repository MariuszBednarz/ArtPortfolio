"use client";
import { useMemo, useState, Suspense } from "react";
import { useTranslations } from "next-intl";

import MasonryComponent from "@/components/sections/Masonry";
import { Checkbox, Select, ContentWrapper } from "@/components/reusable";

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

  const t = useTranslations("Arts");

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

  const handleTypeChange = (selectedType: string | null) => {
    if (type === selectedType) {
      setType(null);
    } else if (type === null) {
      setType(selectedType);
    } else {
      setType(selectedType);
    }
  };

  return (
    <ContentWrapper>
      <Select
        variant="yearSelect"
        options={years}
        selectedOption={year}
        setSelectedOption={setYear}
        defaultValue={undefined}
        defaultText={t("defaultYear")}
      />
      <Select
        variant="colSelect"
        options={collections}
        selectedOption={collection}
        setSelectedOption={setCollection}
        defaultValue={null}
        defaultText={t("defaultCol")}
      />
      <div>
        {types &&
          types.map((el: any) => {
            return (
              <Checkbox
                key={el}
                text={el}
                selected={type === el}
                handleCheckbox={handleTypeChange}
              />
            );
          })}
      </div>
      <MasonryComponent data={filteredArts} />
    </ContentWrapper>
  );
};

export default Arts;
