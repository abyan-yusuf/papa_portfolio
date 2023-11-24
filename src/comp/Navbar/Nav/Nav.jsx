import { useState, useEffect } from "react";
const Nav = (props) => {
  const [active, makeActive] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 300) {
        makeActive("HOME");
      } else if (scrollY < 1400) {
        makeActive("ABOUT ME");
      } else if (scrollY > 1500) {
        makeActive("SERVICE");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href={props.url}
      className="flex items-center w-48 rounded-lg border-2 border-borderc group"
    >
      <p
        className={
          props.text == active
            ? "bg-active md:py-4 md:px-4 py-3 px-3 rounded-lg md:text-xl text-sm text-black"
            : "bg-fg md:py-4 md:px-4 py-3 px-3 rounded-lg md:text-xl text-sm text-white group-focus:bg-gb group-hover:text-black group-hover:bg-gb group-focus:text-black transition-background-color duration-500 ease-linear"
        }
      >
        <i className={"fa-solid fa-" + props.icon}></i>
      </p>
      <p
        className={
          props.text == active
            ? "text-gb px-3 py-3 text-center font-bold text-sm group-hover:text-gb transition-colors duration-500 ease-in-out group-hover:animate-bounce"
            : "text-gray px-3 py-3 text-center font-bold text-sm group-hover:text-gb transition-colors duration-500 ease-in-out group-hover:animate-bounce"
        }
      >
        {props.text}
      </p>
    </a>
  );
};

export default Nav;
