import { Divider } from "@/components/reusable";

import { AwardProps } from "@/types/components";

const Award = ({ data, lastItem }: AwardProps): JSX.Element => {
  const { title, description } = data;
  return (
    <div className="w-full flex flex-col items-center">
      <div className=" px-8 max-w-award">
        <h1 className="text-2xl mb-4">{title}</h1>
        {Array.isArray(description) ? (
          <ul className="list-disc">
            {description.map(({ expo, id }) => (
              <li className="ml-4" key={id}>
                {expo}
              </li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
        {lastItem && <Divider />}
      </div>
    </div>
  );
};

export default Award;
