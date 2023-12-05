import clsx from "clsx";
import Divider from "@/src/components/Divider";
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Award = ({ data }: { data: any }) => {
  const { title, description } = data;
  return (
    <div className="bg-brightw-full flex flex-col items-center">
      <div className={clsx(" px-8 max-w-[600px]", crimson.className)}>
        <h1 className="text-2xl mb-4">{title}</h1>
        <p>{description}</p>
        <Divider />
      </div>
    </div>
  );
};

export default Award;
