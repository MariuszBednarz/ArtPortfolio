import clsx from "clsx";

type ButtonProps = {
  text: string;
  outlined?: boolean;
  themeDisabled?: boolean;
};

const Button = ({ text, outlined, themeDisabled }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "h-10 px-8 rounded-four",
        themeDisabled
          ? clsx(
              !outlined && "bg-white text-dark",
              outlined && "border border-white text-white"
            )
          : clsx(
              !outlined && "bg-white dark:bg-dark text-dark dark:text-bright",
              outlined &&
                "bg-transparent border border-dark text-dark dark:border-white dark:text-white"
            )
      )}
    >
      {text}
    </button>
  );
};

export default Button;
