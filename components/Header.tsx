"use client";

import Link from "next/link";
import NavigationMenu from "./NavigationMenu";
import { useMenuContext } from "@/context/Context";

const Header = () => {
  const { menuActive, setMenuActive } = useMenuContext();

  return (
    <div className="header">
      <div className="main-nav">
        <Link href="/" onClick={() => setMenuActive(false)}>
          <div className="logo">
            <span>{`francwow={webDeveloper}`}</span>
          </div>
        </Link>

        <div className="burger">
          <button
            onClick={() => {
              setMenuActive(!menuActive);
            }}
            className={menuActive ? "burger-btn toggle" : "burger-btn"}
          >
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
          </button>
        </div>
        <NavigationMenu />
      </div>
    </div>
  );
};

export default Header;
