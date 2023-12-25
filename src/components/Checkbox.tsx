import clsx from "clsx";
import { useTranslations } from "next-intl";

const Checkbox = ({
  selected,
  text,
  handleCheckbox,
}: {
  selected: boolean;
  text: string;
  handleCheckbox: (text: string) => void;
}) => {
  const t = useTranslations("Art");

  return (
    <div
      className={clsx(
        "flex justify-center items-center h-8 md:h-10 text-xs md:text-base w-checkbox md:w-full border rounded hover:bg-bright dark:hover:bg-dark cursor-pointer transition-all",
        { "border-dark dark:border-white ": !selected },
        { "text-highlight border-highlight border-2": selected }
      )}
      onClick={() => handleCheckbox(text)}
    >
      {t(text)}
    </div>
  );
};

export default Checkbox;
