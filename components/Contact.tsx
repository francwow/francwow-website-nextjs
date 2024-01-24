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
            </p>
            <div className="contact-info">
              <span className="p-2 bg-gray-800 rounded-md">
                francwow06@gmail.com
              </span>
              <span className="p-2 bg-gray-800 rounded-md">+57 3132105286</span>
            </div>

            <div className="link-container">
              <button
                onClick={(e) => {
                  window.location.href = "mailto:francwow06@gmail.com";
                  e.preventDefault();
                }}
                className="btn"
              >
                SEND EMAIL
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
                francwow06@gmail.com |
              </span>
              <span className="p-2 bg-gray-800 rounded-md">+57 3132105286</span>
            </p>
            <div className="link-container">
              <button
                onClick={(e) => {
                  window.location.href = "mailto:francwow06@gmail.com";
                  e.preventDefault();
                }}
                className="btn"
              >
                CONTACTAR
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
