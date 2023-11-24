import ThemeSwitch from "../ThemeSwitch";
import LangSwitch from "../LangSwitch";
import NavLink from "../link/NavLink";

const Nav = () => {
  return (
    <header className="flex w-screen justify-center bg-bright dark:bg-dark px-8">
      <nav className="flex w-full max-w-page flex-row justify-between h-20 items-center">
        <ul className="flex flex-row center gap-8 h-20 items-center dark:text-bright text-dark">
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
        <div className="flex gap-4">
          <LangSwitch />
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
