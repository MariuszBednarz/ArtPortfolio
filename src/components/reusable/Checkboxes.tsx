import Checkbox from "./Checkbox";

import { CheckboxesProps } from "@/types/components";

const Checkboxes = ({ setType, type, types }: CheckboxesProps) => {
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
  );
};

export default Checkboxes;
