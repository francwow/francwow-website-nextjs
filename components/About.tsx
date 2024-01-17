"use client";

import { useInView } from "react-intersection-observer";
import { IntroText, HobbiesText, WorkText } from "./AboutText";
import Icons from "./Icons";
import Footer from "./Footer";
import Boxes from "./Boxes";
import { useMediaQuery } from "usehooks-ts";
import { useMenuContext } from "@/context/Context";
import Image from "next/image";

const About = () => {
  const deskTop = useMediaQuery("(min-width: 991px)");
  const { menuActive, setMenuActive } = useMenuContext();
  const { ref: profileRef, inView: profileInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: deskRef, inView: deskInView } = useInView({
    threshold: 0.3,
  });

  return (
    <div
      className={`main-section ${menuActive ? "move-left" : ""} invert-color`}
    >
      <div className="about-wrapper about-background">
        <div className="about-intro-container">
          <Boxes inverted={false} />
          {deskTop ? (
            <div className="about-intro-text">
              <IntroText />
              <WorkText />
            </div>
          ) : (
            <div>
              <IntroText />
            </div>
          )}

          <div ref={profileRef} className="about-intro-img">
            <div
              className={
                profileInView ? "desc-overlay hide-overlay" : "desc-overlay"
              }
            ></div>
            <Image
              src="/work.webp"
              alt="Francisco smiling"
              width={600}
              height={600}
              priority
            />
          </div>
          {deskTop ? null : <WorkText />}
        </div>
        <div className="about-hobbies">
          <Boxes inverted={true} />
          <HobbiesText />
          <div ref={deskRef} className="about-intro-img">
            <div
              className={
                deskInView ? "desc-overlay hide-overlay" : "desc-overlay"
              }
            ></div>
            <Image
              loading="lazy"
              src="/aboutpic.webp"
              alt="office desk"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="footer-wrapper">
          <Icons />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
