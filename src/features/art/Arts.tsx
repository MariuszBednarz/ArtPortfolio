"use client";

import useDataLogic from "@/src/hooks/useDataLogic";

import { YEARS, COLLECTIONS, CHECKBOXES } from "@/src/utils/constants";

import {
  Select,
  Checkbox,
  ContentWrapper,
  MasonryComponent,
} from "@/src/components";

const Arts = () => {
  const {
    defaultCol,
    defaultYear,
    arts,
    year,
    setYear,
    collection,
    setCollection,
    type,
    loading,
    handleCheckbox,
  } = useDataLogic(false);
  return (
    <ContentWrapper>
      <div className="flex items-center lg:items-start flex-col py-4 gap-4 lg:flex-row md:px-8">
        <div className="flex gap-4 flex-col md:flex-row w-full px-4 md:px-0">
          <Select
            options={YEARS}
            selectedOption={year}
            setSelectedOption={setYear}
            defaultValue={defaultYear}
            fixed
          />
          <Select
            options={COLLECTIONS}
            selectedOption={collection}
            setSelectedOption={setCollection}
            defaultValue={defaultCol}
          />
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap md:flex-nowrap md:flex-row w-full px-4 md:px-0">
          {CHECKBOXES.map((item) => (
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
