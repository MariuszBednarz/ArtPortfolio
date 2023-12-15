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
        "flex justify-center items-center h-10 w-32 border rounded hover:bg-bright dark:hover:bg-dark cursor-pointer transition-all",
        { "border-dark dark:border-white": !selected },
        { "text-highlight border-highlight": selected }
      )}
      onClick={() => handleCheckbox(text)}
    >
      {t(text)}
    </div>
  );
};

export default Checkbox;
