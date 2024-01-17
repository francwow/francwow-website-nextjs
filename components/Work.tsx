"use client";

import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import WorkMobile from "./WorkMobile";
import WorkDeskTop from "./WorkDeskTop";
import { useMenuContext } from "@/context/Context";

const Work = () => {
  const contRef = useRef<HTMLDivElement>(null);
  const { menuActive, setMenuActive } = useMenuContext();
  const mobile = useMediaQuery("(max-width: 991px)");

  return (
    <div className={`main-section  ${menuActive ? "move-left" : ""}`}>
      <div ref={contRef} className="work-wrapper work-background">
        {mobile ? <WorkMobile /> : <WorkDeskTop />}
      </div>
    </div>
  );
};

export default Work;
