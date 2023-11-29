import React from "react";

const Card = ({subject, icon, desc, button, buttonLink}) => {
  return (
    <div className="bg-bg p-10 basis-[32%]">
      <h1 className="text-center text-xl font-semibold text-white">
        <i className={"fa-solid fa-" + icon + " text-7xl text-gb pb-5"}></i>
        <br />
        {subject}
      </h1>
      <p className="text-center pt-3 font-medium">
        {desc}
      </p>
      <a
        href={buttonLink}
        target="_blank"
      >
        <p className="pt-3 hover:text-gb text-center font-medium">{ button }</p>
      </a>
    </div>
  );
};

export default Card;
