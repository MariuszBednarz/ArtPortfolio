import clsx from "clsx";

import { ChevronProps } from "@/types/components";

const Chevron = ({ rotate, selected }: ChevronProps): JSX.Element => {
  return (
    <svg
      className={clsx("fill-dark dark:fill-bright transition-all", {
        "rotate-180": rotate,
        "rotate-0": !rotate,
        "fill-highlight dark:fill-highlight": selected,
      })}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.35183 8.7516C6.57687 8.52663 6.88203 8.40026 7.20023 8.40026C7.51843 8.40026 7.8236 8.52663 8.04863 8.7516L12.0002 12.7032L15.9518 8.7516C16.0625 8.63699 16.1949 8.54557 16.3413 8.48268C16.4878 8.41979 16.6452 8.38668 16.8046 8.3853C16.9639 8.38391 17.1219 8.41428 17.2694 8.47461C17.4169 8.53495 17.5508 8.62405 17.6635 8.73673C17.7762 8.8494 17.8653 8.98338 17.9256 9.13085C17.986 9.27833 18.0163 9.43635 18.0149 9.59568C18.0135 9.75502 17.9804 9.91248 17.9176 10.0589C17.8547 10.2053 17.7632 10.3377 17.6486 10.4484L12.8486 15.2484C12.6236 15.4734 12.3184 15.5997 12.0002 15.5997C11.682 15.5997 11.3769 15.4734 11.1518 15.2484L6.35183 10.4484C6.12687 10.2234 6.00049 9.9182 6.00049 9.6C6.00049 9.2818 6.12687 8.97663 6.35183 8.7516V8.7516Z"
      />
    </svg>
  );
};

export default Chevron;
