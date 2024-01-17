"use client";

import { useState } from "react";
import Description from "./Description";
import Portfolio from "./Portfolio";
import { useMenuContext } from "@/context/Context";

const MainSection = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [visible, setVisible] = useState(false);
  const { menuActive, setMenuActive } = useMenuContext();

  const arrowHandle = () => {
    setVisible((visible) => !visible);
    setShowPortfolio((showPortfolio) => !showPortfolio);
  };

  return (
    <div
      className={`main-section main-background ${
        menuActive ? "move-left" : ""
      } ${showPortfolio ? "" : ""}`}
    >
      <div className="home-wrapper">
        <div className="fos-presentation">
          <Description visible={visible} />
          <Portfolio visible={visible} />
          <div
            tabIndex={0}
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                arrowHandle();
              }
            }}
            onClick={arrowHandle}
            className={
              showPortfolio ? "arrow-wrapper-expanded" : "arrow-wrapper"
            }
          >
            <div
              style={
                showPortfolio
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0deg)" }
              }
              className="arrow-container"
            >
              <span
                style={
                  showPortfolio ? { color: "inherit" } : { color: "white" }
                }
                className="arrow"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
