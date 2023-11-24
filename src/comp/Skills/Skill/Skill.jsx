import React from "react";

const Skill = (props) => {
  return (
    <div className="border-2 border-borderc w-[35vw] rounded py-4 m-2.5">
      <i className="fa-solid fa-angles-right text-gb text-left ms-3 z-0"></i>
      <h3 className="text-white text-lg inline ms-3 pr-10 pb-2 border-b-2 border-gb">
        {props.subHeading}
      </h3>
      <h2 className="text-white ms-12 mt-4 text-2xl font-medium">
        {props.heading}
      </h2>
      <h3 className="text-white ms-12 mt-1 text-lg font-medium">
        {props.date}
      </h3>
      <p className="text-gray ms-12 mt-4 font-medium text-[16px]">
        {props.details}
      </p>
      {props.progress ? 
        <div>
          <h3 className="text-white ms-12 my-3 text-lg font-medium">
            {props.progressHeading}
          </h3>
          <div className="bg-fg w-[85%] h-[5px] ms-12">
            <div className="bg-gb w-[80%] h-full"></div>
          </div>
        </div>
       : 
        <div></div>
      }
    </div>
  );
};

export default Skill;
