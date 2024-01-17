import { useLanguageContext, useMenuContext } from "@/context/Context";
import Icons from "./Icons";
import Languages from "./Languages";
import Link from "next/link";

const NavigationMenu = () => {
  const { englishActive, setEnglishActive } = useLanguageContext();
  const { menuActive, setMenuActive } = useMenuContext();

  return (
    <div className={menuActive ? "nav-menu-wrapper show" : "nav-menu-wrapper"}>
      <div
        className={
          menuActive
            ? "nav-menu-container fade-in"
            : "nav-menu-container fade-out"
        }
      >
        {englishActive ? (
          <nav className="nav-menu">
            <Link
              className="link"
              href="/about"
              onClick={() => setMenuActive(false)}
            >
              About
            </Link>
            <Link
              className="link"
              href="/work"
              onClick={() => setMenuActive(false)}
            >
              Work
            </Link>
            <Link
              className="link"
              href="/contact"
              onClick={() => setMenuActive(false)}
            >
              Contact
            </Link>
          </nav>
        ) : (
          <nav className="nav-menu">
            <Link
              className="link"
              href="/about"
              onClick={() => setMenuActive(false)}
            >
              Acerca
            </Link>
            <Link
              className="link"
              href="/work"
              onClick={() => setMenuActive(false)}
            >
              Trabajo
            </Link>
            <Link
              className="link"
              href="/contact"
              onClick={() => setMenuActive(false)}
            >
              Contacto
            </Link>
          </nav>
        )}
        <Languages />
        <Icons />
      </div>
    </div>
  );
};

export default NavigationMenu;
