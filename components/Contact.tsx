"use client";

import Footer from "./Footer";
import Asteroids from "./Asteroids";
import Icons from "./Icons";
import { useLanguageContext, useMenuContext } from "@/context/Context";
import Link from "next/link";

const Contact = () => {
  const { menuActive, setMenuActive } = useMenuContext();
  const { englishActive, setEnglishActive } = useLanguageContext();

  return (
    <div className={`main-section ${menuActive ? "move-left" : ""}`}>
      <div className="contact-wrapper contact-background">
        <Asteroids />
        {englishActive ? (
          <div className="contact-container">
            <h1>I would love to work with you!</h1>
            <p>
              I&apos;m eager to continue growing as a front-end developer. Send
              me a message anytime.
              <br />
              <br />
              <span className="p-2 bg-gray-800 rounded-md">
                francwow06@gmail.com | +57 3132105286
              </span>
            </p>
            <div className="link-container">
              <button className="btn">
                <Link href={"mailto:francwow06@gmail.com"}>SEND EMAIL</Link>
                {/* // onClick={(e) => {
                  window.location = "mailto:francwow06@gmail.com";
                  e.preventDefault();
                }} */}
              </button>
            </div>
          </div>
        ) : (
          <div className="contact-container">
            <h1>¡Me encantaría trabajar contigo!</h1>
            <p>
              Estoy ansioso por continuar creciendo como desarrollador
              front-end. Envíame un mensaje en cualquier momento.
              <br />
              <br />
              <span className="p-2 bg-gray-800 rounded-md">
                francwow06@gmail.com | +57 3132105286
              </span>
            </p>
            <div className="link-container">
              <button className="btn">
                <Link href={"mailto:francwow06@gmail.com"}>CONTACTAR</Link>
                {/* // onClick={(e) => {
                  window.location = "mailto:francwow06@gmail.com";
                  e.preventDefault();
                }} */}
              </button>
            </div>
          </div>
        )}

        <div className="footer-wrapper">
          <Icons />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
