const NoResultIcon = (): JSX.Element => {
  return (
    <svg
      width="140"
      height="102"
      viewBox="0 0 140 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="44"
        y="31"
        width="80"
        height="50"
        rx="10"
        className="fill-darker"
      />
      <rect
        x="16"
        y="37.7056"
        width="80"
        height="50"
        rx="10"
        transform="rotate(-15 16 37.7056)"
        className="fill-dark dark:fill-white"
      />
      <rect
        x="35"
        y="16"
        width="80"
        height="50"
        rx="10"
        className="fill-highlight"
      />
      <rect
        x="40"
        y="40"
        width="54"
        height="20"
        rx="10"
        className="fill-white dark:fill-dark"
      />
      <rect
        x="70"
        y="20"
        width="39"
        height="15"
        rx="7.5"
        className="fill-white dark:fill-dark"
      />
      <circle
        cx="95"
        cy="46"
        r="13"
        strokeWidth="4"
        className="stroke-dark dark:stroke-white"
      />
      <path
        d="M105 56L116 67"
        strokeWidth="4"
        strokeLinecap="round"
        className="stroke-dark dark:stroke-white"
      />
    </svg>
  );
};

export default NoResultIcon;
