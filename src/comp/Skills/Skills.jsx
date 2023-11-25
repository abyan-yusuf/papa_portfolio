import React, { useState } from "react";
import Skill from "./Skill/Skill";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skill" className="bg-bodybc md:ml-64 px-5 pt-20">
      <div className="py-20 bg-bg rounded-lg">
        <h4 className="text-gb text-xl tracking-wide font-medium text-center">
          MY SKILLS
        </h4>
        <h1 className="text-white text-4xl font-medium leading-tight mb-20 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="tabs block tabs-boxed bg-opacity-0">
          <div className="flex justify-center space-x-12 mb-10">
            <a
              className={`tab ${
                activeTab === 0
                  ? "tab-active text-lg bg-active text-black font-medium px-7 h-14 flex items-center"
                  : "tab-active text-lg bg-fg text-white font-medium px-7 h-14 flex items-center"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Download CV<i className="fa-solid fa-download ml-2"></i>
            </a>
            <a
              className={`tab ${
                activeTab === 1
                  ? "tab-active text-lg bg-active text-black font-medium px-7 h-14 flex items-center"
                  : "tab-active text-lg bg-fg text-white font-medium px-7 h-14 flex items-center"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Education
            </a>
            <a
              className={`tab ${
                activeTab === 2
                  ? "tab-active text-lg bg-active text-black font-medium px-7 h-14 flex items-center"
                  : "tab-active text-lg bg-fg text-white font-medium px-7 h-14 flex items-center"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Biography
            </a>
            <a
              className={`tab ${
                activeTab === 3
                  ? "tab-active text-lg bg-active text-black font-medium px-7 h-14 flex items-center"
                  : "tab-active text-lg bg-fg text-white font-medium px-7 h-14 flex items-center"
              }`}
              onClick={() => setActiveTab(3)}
            >
              Experience
            </a>
          </div>
          <div
            className={`tab-content grid grid-cols-2 ${
              activeTab === 0 ? "block" : "hidden"
            }`}
          >
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={true}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={true}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={true}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={true}
            />
          </div>
          <div
            className={`tab-content grid grid-cols-2 ${
              activeTab === 1 ? "block" : "hidden"
            }`}
          >
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
          </div>
          <div
            className={`tab-content grid grid-cols-2 ${
              activeTab === 2 ? "block" : "hidden"
            }`}
          >
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
          </div>
          <div
            className={`tab-content grid grid-cols-2 ${
              activeTab === 3 ? "block" : "hidden"
            }`}
          >
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
            <Skill
              subHeading="Lorem ipsum"
              heading="Lorem ipsum dolor sit amet consectetur"
              date="Lorem - ipsum"
              details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
        numquam recusandae non dolorem aliquam. Et, quia, alias cumque
        voluptatem minus officiis voluptates cupiditate facere consequatur esse
        sit magni? Molestias"
              progressHeading="Lorem"
              progress={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
