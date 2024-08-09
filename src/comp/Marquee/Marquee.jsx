import Marquee from "react-fast-marquee";
const MarqueeComp = () => {
  return (
    <div className="py-20">
      <Marquee
        className="h-52 ml-64 px-5 bg-gb w-[(100%-16rem)!important] pt-0"
        pauseOnHover={true}
        speed={150}
      >
        <span className="text-[100px] uppercase font-bold text-gb text-stroke inline-block pr-[50px]">
          * Lorem
        </span>
        <span className="text-[100px] uppercase font-bold text-gb text-stroke inline-block pr-[50px]">
          * Ipsum
        </span>
        <span className="text-[100px] uppercase font-bold text-gb text-stroke inline-block pr-[50px]">
          * Dolor
        </span>
        <span className="text-[100px] uppercase font-bold text-gb text-stroke inline-block pr-[50px]">
          * Sit
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
