import { useState } from "react";
import Nav from "./Nav/Nav";

function Navbar() {
  const navbarDefaultStyle =
    "w-64 h-full bg-bg fixed overflow-y-scroll no-scrollbar";
  const buttonDefaultStyle =
    "px-4 py-3 bg-gb md:hidden absolute z-10 m-2 text-black text-2xl";
  const iconDefaultStyle = "bars";
  const [navbarStyle, setNavbarStyle] = useState(navbarDefaultStyle);
  const [buttonStyle, setButtonStyle] = useState(buttonDefaultStyle);
  const [iconStyle, setIconStyle] = useState(iconDefaultStyle);
  const [isStyleChanged, setIsStyleChanged] = useState(false);

  const changeNavbarStyle = () => {
    if (isStyleChanged) {
      setNavbarStyle(navbarDefaultStyle);
      setButtonStyle(buttonDefaultStyle);
      setIconStyle(iconDefaultStyle);
    } else {
      setNavbarStyle("w-64 h-full bg-bg md:inline");
      setButtonStyle(
        "px-4 py-3 bg-fg md:hidden absolute z-10 bottom-1/2 left-64 m-2 text-white text-2xl"
      );
      setIconStyle("xmark");
    }
    setIsStyleChanged(!isStyleChanged);
  };
  const changeNavbarStyleOnNavClick = () => {
    setNavbarStyle(navbarDefaultStyle);
  };
  return (
    <>
      <nav className={navbarStyle}>
        <div>
          <a
            href="/"
            className="bg-fg md:py-12 py-5 px-8 text-3xl font-semibold flex justify-center"
          >
            <p className="font-black font-lithos tracking-widest text-white flex items-center">
              <img
                src="Screenshot 2023-10-26 115300.png"
                className="w-[45px] inline-block mr-[10px]"
              />
              AMDAD
            </p>
          </a>
        </div>
        <div className="pt-12 px-6 bg-bg">
          <Nav icon="house" text="HOME" url="#hero" />
          <div className="py-3"></div>
          <Nav icon="address-card" text="ABOUT ME" url="#about" />
          <div className="py-3"></div>
          <Nav icon="briefcase" text="SERVICE" url="#service" />
          <div className="py-3"></div>
          <Nav icon="wrench" text="SKILLS" url="#skill" />
          <div className="py-3"></div>
          <Nav icon="message" text="PORTFOLIO" />
          <div className="py-3"></div>
          <Nav icon="blog" text="BLOG" />
          <div className="py-3"></div>
          <Nav icon="id-badge" text="CONTACT" />
          <div className="py-3"></div>
        </div>
      </nav>
      <div>
        <button className={buttonStyle} onClick={changeNavbarStyle}>
          <i className={"fa-solid fa-" + iconStyle}></i>
        </button>
      </div>
    </>
  );
}
export default Navbar;
