"use client";

import { useMenuContext } from "@/context/Context";

const Overlay = () => {
  const { menuActive, setMenuActive } = useMenuContext();

  return (
    <div
      tabIndex={0}
      role="button"
      aria-pressed="false"
      onKeyDown={(e) => e.preventDefault}
      onClick={() => setMenuActive(false)}
      className={menuActive ? "overlay active" : "overlay"}
    ></div>
  );
};

export default Overlay;
