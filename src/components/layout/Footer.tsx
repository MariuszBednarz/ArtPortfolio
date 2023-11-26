import NavLink from "./Nav/NavLink";

const Footer = () => {
  return (
    <footer className="flex w-screen justify-center bg-bright dark:bg-dark px-4 md:px-8 shadow-md">
      <div className="flex w-full max-w-page flex-row justify-center sm:justify-end h-48 sm:h-20 items-center">
        <ul className="flex gap-8 flex-col items-center sm:items-start sm:flex-row">
          <li>
            <a
              href={"https://www.linkedin.com/in/mariusz-bednarz-89a092123/"}
              target="_blank"
            >
              &copy; 2023 Mariusz Bednarz
            </a>
          </li>
          <li>
            <a href="mailto:mmbednarz90@gmail.com">Kontakt</a>
          </li>
          <li>
            <NavLink href={"/"}>Polityka prywatności</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
