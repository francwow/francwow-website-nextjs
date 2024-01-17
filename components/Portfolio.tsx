import { useLanguageContext } from "@/context/Context";
import Link from "next/link";

type PortfolioProps = {
  visible: boolean;
};

const Portfolio = ({ visible }: PortfolioProps) => {
  const { englishActive, setEnglishActive } = useLanguageContext();

  return (
    <div
      className={
        visible ? "portfolio-container visible" : "portfolio-container"
      }
    >
      {englishActive ? (
        <div className="portfolio">
          <div className="info-link-container">
            <div className="cover-1"></div>
            <Link href="/about">
              <h2>ABOUT ME</h2>
            </Link>
          </div>
          <div className="info-link-container">
            <div className="cover-2"></div>
            <Link href="/work">
              <h2>MY WORK</h2>
            </Link>
          </div>
          <div className="info-link-container">
            <div className="cover-3"></div>
            <Link href="/contact">
              <h2>CONTACT</h2>
            </Link>
          </div>
        </div>
      ) : (
        <div className="portfolio">
          <div className="info-link-container">
            <div className="cover-1"></div>
            <Link href="/about">
              <h2>ACERCA DE MI</h2>
            </Link>
          </div>
          <div className="info-link-container">
            <div className="cover-2"></div>
            <Link href="/work">
              <h2>MI TRABAJO</h2>
            </Link>
          </div>
          <div className="info-link-container">
            <div className="cover-3"></div>
            <Link href="/contact">
              <h2>CONTACTO</h2>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
