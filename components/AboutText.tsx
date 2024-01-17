"use client";

import { useLanguageContext } from "@/context/Context";
import Link from "next/link";

export const IntroText = () => {
  const { englishActive, setEnglishActive } = useLanguageContext();
  {
    return englishActive ? (
      <div className="about-intro-info">
        <div className="about-intro-header">
          <h2>Hello World!</h2>
        </div>
        <div className="about-intro-description">
          <p>
            My name is Francisco Osorio Silva, here in Colombia they call me
            &quot;Pacho&quot;. Im an adventure seeker, animal lover, running
            enthusiast and avid gamer, who enjoys learning and overcoming
            challenges.
          </p>
        </div>
      </div>
    ) : (
      <div className="about-intro-info">
        <div className="about-intro-header">
          <h2>¡Hola Mundo!</h2>
        </div>
        <div className="about-intro-description">
          <p>
            Me llamo Francisco Osorio Silva, también me dicen &quot;Pacho&quot;.
            Soy una persona aventurera, amante de los animales, que se divierte
            corriendo y jugando videojuegos. Disfruto mucho aprendiendo nuevas
            habilidades y superando obstáculos.
          </p>
        </div>
      </div>
    );
  }
};

export const HobbiesText = () => {
  const { englishActive, setEnglishActive } = useLanguageContext();
  {
    return englishActive ? (
      <div className="hobbies-info">
        <div className="hobbies-header">
          <h2>When I&apos;m not coding</h2>
        </div>
        <div className="about-intro-description">
          <p>
            I love go for a run early in the morning after my first coffee.
            Exercise keeps me focused and helps me develop interesting ideas. I
            read about science, psychology, human interactions, fantasy and a
            litle bit of poetry whenever I&apos;m feeling nostalgic. People are
            very important to me, I visit friends and family whenever I can. I
            also love going to music festivals and places where I know I&apos;ll
            meet interesting individuals. I&apos;v been a gamer all my life,
            played mario, zelda and pokemon when I was a teenager, later found
            myself enjoying action-rpgs and mmorpgs like World of Warcraft,
            Witcher 3, Cyberpunk, Elden Ring, Hades and many others. I hope we
            can work together soon.
          </p>
        </div>
      </div>
    ) : (
      <div className="hobbies-info">
        <div className="hobbies-header">
          <h2>Otras cosas que disfruto</h2>
        </div>
        <div className="about-intro-description">
          <p>
            Amo trotar largas distancias en la mañana justo despues de mi primer
            café. La actividad física me mantiene enfocado y me ayuda a
            desarrollar ideas interesantes. Me encanta leer acerca de ciencia,
            psicología, interacciones humanas, fantasía y un poco de poesía
            cuando me siento nostálgico. Las personas son muy importantes para
            mi, me gusta visitar a mis amigos y familiares cada vez que tengo la
            posibilidad. También amo asistir a festivales de música y lugares
            donde pueda encontrar personajes interesantes. He sido un gamer toda
            mi vida, jugué mario, zelda y pokemón en mi adolescencia, más tarde
            gravité hacia los action-rpgs y mmorpgs como World of Warcraft,
            Witcher 3, Cyberpunk, Elden Ring, Hades y muchos más. Espero tener
            la posibilidad de trabajar contigo pronto.
          </p>
        </div>
      </div>
    );
  }
};

export const WorkText = () => {
  const { englishActive, setEnglishActive } = useLanguageContext();

  {
    return englishActive ? (
      <div className="about-intro-description">
        <p>
          I&apos;ve been learning front-end development for the last 12 months,
          I love everything about this craft, from designing the layout of a
          website and picking the right color composition, to writing DRY
          Javascript and meaningful CSS classes. My background in advertising
          and marketing has helped in my journey as a web developer. Currently
          my front-end stack includes{" "}
          <span className="yellow-text">
            HTML, CSS, JavaScript, Figma, Visual Studio Code and React
          </span>
          . Im also learning to work with{" "}
          <span className="yellow-text">
            React Native, Next.js, Node.js, TypeScript, ChatGPT(OpenAI), SCSS
          </span>
          .<br></br>
          <br></br>
          I&apos;ve had the opportunity of working on freelance projects for
          real clients, and playing with fun personal ideas. You can find all my
          work <Link href="/work">here</Link>.
        </p>
      </div>
    ) : (
      <div className="about-intro-description">
        <p>
          He estado aprendiendo desarrollo front-end los últimos 12 meses. Me
          encanta todo acerca de este oficio, desde el diseño del layout y la
          elección de los colores adecuados, hasta escribir DRY Javascript y
          clases significativas en CSS, disfruto mucho todo el proceso. Tengo un
          background en publicidad y marketing que me ha servido mucho a la hora
          de diseñar y escribir código. Actualmente mi stack de desarrollo
          front-end incluye{" "}
          <span className="yellow-text">
            HTML, CSS, JavaScript, Figma, Visual Studio Code y React
          </span>
          . También continúo aprediendo nuevas herramientas y tecnologías como{" "}
          <span className="yellow-text">
            React Native, Next.js, Node.js, TypeScript, ChatGPT(OpenAI), SCSS
          </span>
          .<br></br>
          <br></br>
          Este año he tenido la oportunidad de trabajar en proyectos freelance
          para clientes reales y desarrollar ideas divertidas. Puedes encontrar
          todo mi trabajo <Link href="/work">aquí</Link>.
        </p>
      </div>
    );
  }
};
