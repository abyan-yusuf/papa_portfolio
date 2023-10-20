import Ambition from "../../../public/about_1.png";
import Purpose from "../../../public/about_2.png";
import Smile from "../../../public/about_img_2.jpg";
import Image from "../../../public/about_shapes.png";
const About = () => {
  return (
    <section id="about" className="py-20 bg-bodybc ml-64 pl-5">
      <h4 className=" text-gb text-xl tracking-wide font-medium">ABOUT ME</h4>
      <h1 className="text-white text-5xl font-medium leading-tight mb-14">
        Lorem ipsum dolor sit amet <br /> consectetur
      </h1>
      <div className="flex">
        <div className="w-1/2">
          <img src={Ambition} className="w-32 mb-10 h-auto" />
          <h2 className="text-white text-3xl font-medium">My Ambition</h2>
          <p className="text-gray mt-5 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in
            molestias voluptatum quasi nisi dolores, architecto error eos
            perferendis, soluta possimus aliquam corrupti rerum itaque
            recusandae non rem hic reprehenderit.
          </p>
          <img src={Purpose} className="w-32 mb-10 h-auto mt-10" />
          <h2 className="text-white text-3xl font-medium">My Purpose</h2>
          <p className="text-gray mt-5 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in
            molestias voluptatum quasi nisi dolores, architecto error eos
            perferendis, soluta possimus aliquam corrupti rerum itaque
            recusandae non rem hic reprehenderit.
          </p>
        </div>
        <div className="w-1/2 relative">
          <img src={Image} className="h-52 w-auto absolute end-16 z-0 animate-animation" />
          <img src={Smile} className="mt-10 h-3/4 z-10 absolute" />
          <div className=" z-20 p-7 bg-gb w-72 absolute end-16 top-2/3 flex items-center justify-between rounded-lg">
            <p className="inline">
              <i className="fa-solid fa-medal text-4xl text-gb p-3 bg-white inline"></i>
            </p>
            <div>
              <h3 className="text-4xl font-black">20+</h3>
              <p className="text-lg font-bold">Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
