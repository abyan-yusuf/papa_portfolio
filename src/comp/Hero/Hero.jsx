import { useEffect } from "react";
import { useState } from "react";

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
    }, 3000); // Change the delay to 2000 milliseconds (2 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Update the "item" state when the "index" changes
    setItem(mySkills[index]);
  }, [index]);

  return (
    <header className="bg-bodybc ml-64 pl-5 w-auto h-screen py-20 bg-working bg-cover">
      <h1 className="heading text-5xl text-white font-bold leading-tight transition-all delay-500">
        HI, I'M AMDAD! I'M <br />
        <span className="text-gb font-black">{item}</span>
      </h1>
      <div className="flex flex-wrap w-1/2 leading-6 mt-10 mb-10 text-lg">
        <p className="text-gray font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          perferendis id fuga perspiciatis maxime tenetur consequatur, odit
          rerum porro sunt! Nostrum quasi asperiores commodi aspernatur maiores!
          Aut consectetur incidunt pariatur?
        </p>
        <div className="flex w-96 justify-between pt-20">
          <a
            href="/Amdad-CV-P-v.0.1.docx"
            className=" text-black bg-gb py-5 transition-colors duration-500 ease-in-out hover:bg-bg hover:text-white px-8 font-medium"
          >
            Download CV <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Hero;