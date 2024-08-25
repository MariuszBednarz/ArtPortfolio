import { useTranslations } from "next-intl";

import { Select, Checkbox } from "@/components/reusable";

import { FiltersProps } from "@/types/components";

const Filters = ({
  years,
  year,
  setYear,
  collection,
  collections,
  setCollection,
  type,
  types,
  setType,
}: FiltersProps): JSX.Element => {
  const t = useTranslations("Arts");
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
    <div className="flex items-center lg:items-start flex-col py-4 gap-4 lg:flex-row md:px-8">
      <div className="flex gap-4 flex-col md:flex-row w-full px-4 md:px-0">
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
      </div>
      <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap md:flex-nowrap md:flex-row w-full px-4 md:px-0">
        {types &&
          types.map((el: string) => {
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
    </div>
  );
};
export default Filters;
