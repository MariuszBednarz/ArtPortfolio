import clsx from "clsx";

type BurgerProps = {
  toggleMenu: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
};

const Burger = ({ toggleMenu, isOpen }: BurgerProps) => {
  return (
    <div
      className="w-7 h-7 flex flex-col justify-between cursor-pointer"
      onClick={toggleMenu}
    >
      <div
        className={clsx(
          "h-1 w-7 bg-dark dark:bg-bright rounded-[2px] transform transition duration-300 ease-in-out",
          {
            "rotate-45 translate-y-3": isOpen,
            "rotate-0": !isOpen,
          }
        )}
      ></div>
      <div
        className={clsx(
          "h-1 w-7 bg-dark dark:bg-bright rounded-[2px] transform transition duration-300 ease-in-out",
          {
            "opacity-0": isOpen,
            "opacity-100": !isOpen,
          }
        )}
      ></div>
      <div
        className={clsx(
          "h-1 w-7 bg-dark dark:bg-bright rounded-[2px] transform transition duration-300 ease-in-out",
          {
            "-rotate-45 -translate-y-3": isOpen,
            "rotate-0": !isOpen,
          }
        )}
      ></div>
    </div>
  );
};

export default Burger;
