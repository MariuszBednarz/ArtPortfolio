import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import LangSwitch from "../LangSwitch";

const Nav = () => {
  return (
    <header className="w-screen bg-bright dark:bg-dark">
      <nav className="flex flex-row justify-between h-20 items-center">
        <ul className="flex flex-row center h-20 items-center">
          <li className="px-4 text-lg">
            <Link href="/">Strona główna</Link>
          </li>
          <li className="px-4 text-lg">
            <Link href="/art">Katalog prac</Link>
          </li>
          <li className="px-4 text-lg">
            <Link href="/bio">Wiesław F. Bednarz</Link>
          </li>
        </ul>
        <LangSwitch />
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Nav;
