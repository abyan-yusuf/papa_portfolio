import Marquee from "react-fast-marquee";
const MarqueeComp = () => {
  return (
    <div className="py-20">
      <Marquee className="h-52 ml-64 px-5 bg-gb w-[80vw] pt-0">
        <span className="text-9xl text-gb text-stroke inline-block pr-[50px]">
          *Lorem
        </span>
        <span className="text-9xl text-gb text-stroke inline-block pr-[50px]">
          *Ipsum
        </span>
        <span className="text-9xl text-gb text-stroke inline-block pr-[50px]">
          *Dolor
        </span>
        <span className="text-9xl text-gb text-stroke inline-block pr-[50px]">
          *Sit
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
