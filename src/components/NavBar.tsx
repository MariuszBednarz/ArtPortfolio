import Link from "next/link";
import NavigationLink from "./NavLink";

import LangSwitch from "./LangSwitch";

export const NavBar = ({ locale }: { locale: string }) => {
  return (
    <div>
      <LangSwitch />
      <ul>
        <li>
          <NavigationLink href="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink href="/art">Art</NavigationLink>
        </li>
        <li>
          <NavigationLink href="/bio">Bio</NavigationLink>
        </li>
      </ul>
    </div>
  );
};
