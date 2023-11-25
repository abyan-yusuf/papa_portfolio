import React from "react";
import Video from "./VIdeo/Video";
import thumbnail from '/thumbnail.png'
import video from '/Sample.mp4'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-bodybc md:ml-64 px-5 pt-20">
      <h4 className="text-gb text-xl tracking-wide font-medium text-left pb-2">
        MY RECENT PORTFOLIO
      </h4>
      <h1 className="text-white text-4xl font-medium leading-tight pb-20 text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="space-y-5">
              <div className="flex justify-between space-x-5">
                  <Video thumbnail={ thumbnail } video={video} />
                  <Video thumbnail={ thumbnail } video={video} />
              </div>
              <div className="flex justify-between space-x-5">
                  <Video thumbnail={ thumbnail } video={video} />
                  <Video thumbnail={ thumbnail } video={video} />
                  <Video thumbnail={ thumbnail } video={video} />
              </div>
          </div>
    </section>
  );
};

export default Portfolio;
