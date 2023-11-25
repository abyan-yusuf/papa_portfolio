import { useEffect, useState } from "react";

const Hero = () => {
  var mySkills = [
    "ERP Specialist",
    "Project Manager",
    "PL SQL Developer",
    "Software Engineer",
  ];
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(mySkills[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mySkills.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setItem(mySkills[index]);
  }, [index]);

  return (
    <header
      id="hero"
      className="bg-bodybc md:ml-64 pl-5 w-auto py-20 bg-working bg-center bg-cover h-screen z-[-5]"
    >
      <h1 className="heading text-5xl text-white font-bold leading-tight">
        HI, I'M AMDAD! I'M <br />
        <span className="text-gb font-black">{item}</span>
      </h1>
      <div className="flex flex-wrap w-2/3 md:w-1/2 leading-6 mt-10 mb-10 text-lg">
        <p className="text-gray font-medium">
          Versatile and hands-on Project Manager who leads teams to design and
          implement successful ERP projects that align business and IT
          objectives and deliver rapid results
        </p>
        <div className="flex w-96 justify-between pt-20">
          <a
            href="Amdad-CV-P-v.0.1.docx"
            className=" text-black bg-gb py-3 rounded-md transition-colors duration-500 ease-in-out hover:bg-fg hover:text-white px-8 font-medium"
            target="_blank"
            download
          >
            Download CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Hero;
