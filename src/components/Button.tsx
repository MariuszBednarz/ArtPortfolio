import clsx from "clsx";

type ButtonProps = {
  text: string;
  type?: string;
  fill?: boolean;
  themeDisabled?: boolean;
  cookieButton?: boolean;
  onClick?: () => void;
};

const Button = ({
  text,
  type,
  fill,
  themeDisabled,
  cookieButton,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "h-10 px-8 rounded-four",
        { "w-full md:w-40": fill },
        { "w-40": !fill },
        themeDisabled
          ? clsx(
              type === "filled" && "bg-white text-dark",
              type === "outlined" && "border border-white text-white"
            )
          : clsx(
              type === "filled" &&
                "bg-white dark:bg-dark text-dark dark:text-bright",
              type === "outlined" &&
                "bg-transparent border border-dark text-dark dark:border-white dark:text-white",
              type === "cookie" &&
                "bg-dark dark:bg-bright text-white dark:text-dark"
            )
      )}
    >
      {text}
    </button>
  );
};

export default Button;
