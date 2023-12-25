import clsx from "clsx";
import { Crimson_Text } from "next/font/google";

import Divider from "@/src/components/Divider";

type dataType = {
  nr: number;
  title: string;
  description: string;
};

const crimson = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Award = ({ data, lastItem }: { data: dataType; lastItem: boolean }) => {
  const { title, description } = data;

  return (
    <div className="bg-brightw-full flex flex-col items-center">
      <div className={clsx(" px-8 max-w-award", crimson.className)}>
        <h1 className="text-2xl mb-4">{title}</h1>
        <p>{description}</p>
        {lastItem && <Divider />}
      </div>
    </div>
  );
};

export default Award;
