import clsx from "clsx";
import { Tenor_Sans } from "next/font/google";

import Divider from "@/src/components/Divider";

type dataType = {
  nr: number;
  title: string;
  description: string;
};

const crimson = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Award = ({ data, lastItem }: { data: dataType; lastItem: boolean }) => {
  const { title, description } = data;

  return (
    <div className="w-full flex flex-col items-center">
      <div className={clsx(" px-8 max-w-award", crimson.className)}>
        <h1 className="text-2xl mb-4">{title}</h1>
        <p>{description}</p>
        {lastItem && <Divider />}
      </div>
    </div>
  );
};

export default Award;
