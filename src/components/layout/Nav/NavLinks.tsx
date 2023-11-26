import clsx from "clsx";
import NavLink from "./NavLink";

const NavLinks = ({ mobile }: { mobile?: boolean | undefined }) => {
  return (
    <ul
      className={clsx(
        "flex flex-row center gap-8 items-start dark:text-bright text-dark ",
        { "flex-col": mobile === true }
      )}
    >
      <li className="text-lg">
        <NavLink href="/">Strona główna</NavLink>
      </li>
      <li className="text-lg">
        <NavLink href="/art">Katalog prac</NavLink>
      </li>
      <li className="text-lg">
        <NavLink href="/bio">Wiesław F. Bednarz</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
