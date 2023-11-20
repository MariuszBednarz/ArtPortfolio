import ThemeSwitch from "../ThemeSwitch";
import LangSwitch from "../LangSwitch";
import NavLink from "../link/NavLink";

const Nav = () => {
  return (
    <header className="w-screen bg-bright dark:bg-dark">
      <nav className="flex flex-row justify-between h-20 items-center">
        <ul className="flex flex-row center h-20 items-center dark:text-bright text-dark">
          <li className="px-4 text-lg">
            <NavLink href="/">Strona główna</NavLink>
          </li>
          <li className="px-4 text-lg">
            <NavLink href="/art">Katalog prac</NavLink>
          </li>
          <li className="px-4 text-lg">
            <NavLink href="/bio">Wiesław F. Bednarz</NavLink>
          </li>
        </ul>
        <LangSwitch />
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Nav;
