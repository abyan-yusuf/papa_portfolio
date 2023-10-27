import Ambition from "../../../public/about_1.png";
import Purpose from "../../../public/about_2.png";
import Smile from "../../../public/about_img_2.jpg";
import Image from "../../../public/about_shapes.png";
const About = () => {
  return (
    <section id="about" className="md:py-20 pt-20 pb-96 bg-bodybc md:ml-64 px-5">
      <h4 className=" text-gb text-xl tracking-wide font-medium">ABOUT ME</h4>
      <h1 className="text-white text-2xl font-medium leading-snug mt-5 mb-14">
        PROJECT MANAGEMENT | STRATEGIC PLANNING | BUSINESS PROCESS DESIGN |
      </h1>
      <div className="flex flex-wrap space-y-10">
        <div className="basis-full">
          <img src={Ambition} className="w-32 mb-10 h-auto" />
          <h2 className="text-white text-3xl font-medium">My Ambition</h2>
          <p className="text-gray mt-5 leading-7 text-lg">
            Result oriented, Energetic, driven, and accomplished Project Manager
            with a track record of 100% success in managing complex IT
            modernization and system integration projects. Sophisticated
            software development and engineering skills with genuine enthusiasm
            for resolving business challenges through technical innovation.
          </p>
          <img src={Purpose} className="w-32 mb-10 h-auto mt-10" />
          <h2 className="text-white text-3xl font-medium">My Purpose</h2>
          <p className="text-gray mt-5 leading-7 text-lg">
            Solutions driver who bridges the gap between business and technology
            while envisioning the bigger picture. Devises strategies to align
            multiple disciplines, coordinating efforts between business groups
            and driving complex systems integration for robust, high-quality
            systems that solve business problems and provide business results.
          </p>
        </div>
        <div className="basis-full relative">
          <img
            src={Image}
            className="h-52 w-auto absolute md:end-16 z-0 animate-animation"
          />
          <div className="flex justify-center">
            <img src={Smile} className="mt-10 md:h-2/4 basis-full z-10 absolute border-8 border-borderc" />
          </div>
          <div className=" z-20 p-5 bg-gb w-64 absolute md:end-16 md:bottom-80 top-80 start-20 flex items-center justify-between rounded-lg">
            <p className="inline">
              <i className="fa-solid fa-medal md:text-4xl text-3xl text-gb p-3 bg-white inline"></i>
            </p>
            <div>
              <h3 className="md:text-4xl text-3xl font-black">20+</h3>
              <p className="md:text-lg text-md font-bold">Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
