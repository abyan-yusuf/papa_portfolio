import { useState, useEffect } from "react";
const Nav = (props) => {
  const [active, makeActive] = useState("HOME");

  useEffect(() => {
    // Add a scroll event listener
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
    <div>
      <a
        href={props.url}
        className="flex rounded-lg border-2 border-borderc group"
      >
        <p
          className={
            props.text == active
              ? "py-4 px-5 rounded-lg text-xl bg-active text-black"
              : "bg-fg py-4 px-5 rounded-lg text-xl text-white group-focus:bg-gb group-hover:text-black group-hover:bg-gb group-focus:text-black transition-background-color duration-500 ease-linear"
          }
        >
          <i className={"fa-solid fa-" + props.icon}></i>
        </p>
        <p
          className={
            props.text == active
              ? "text-gb p-5 text-center font-bold text-sm group-hover:text-gb transition-colors duration-500 ease-in-out group-hover:animate-bounce"
              : "text-gray p-5 text-center font-bold text-sm group-hover:text-gb transition-colors duration-500 ease-in-out group-hover:animate-bounce"
          }
        >
          {props.text}
        </p>
      </a>
    </div>
  );
};

export default Nav;
