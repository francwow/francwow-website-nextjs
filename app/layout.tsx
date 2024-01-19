import type { Metadata } from "next";
import { Inter, Roboto, Oxygen } from "next/font/google";
import "../styles/globals.css";
import "../styles/normalize.css";
import Provider from "@/components/Provider";
import ScrollTop from "@/components/ScrollTop";
import Overlay from "@/components/Overlay";
import Header from "@/components/Header";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Francisco | Frontend Developer",
  description:
    "Hi, my name is Francisco. I'm a frontend developer from Colombia and this is my web portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${materialSymbols.variable}`} lang="en">
      <Provider>
        <body
          className={`${materialSymbols.variable} ${inter.variable} ${roboto.variable} ${oxygen.variable}`}
        >
          <ScrollTop />
          <div className="main-wrapper">
            <Overlay />
            <Header />
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
