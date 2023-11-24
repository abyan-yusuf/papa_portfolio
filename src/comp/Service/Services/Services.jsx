const Services = ({ img, text, desc }) => {
  return (
    <div className="relative group">
      <div className="bg-bg pb-8 px-7 pt-12 rounded-md absolute z-10 group-hover:-translate-y-24 transition-transform duration-500">
        <div className="relative">
          <img src={img} className="h-24 rounded-lg absolute bottom-1" />
        </div>
        <div>
          <h2 className="text-white text-2xl py-4">{text}</h2>
          <p className="text-gray leading-7 text-lg">{desc}</p>
        </div>
      </div>
      <div
        className="flex justify-center max-h-[15px] items-center z-0 absolute top-[40vh] left-24"
      >
        <a
          href="#"
          className="text-white py-2 rounded-md border-2 hover:bg-gb hover:text-black text-lg border-gb px-4 transition-colors duration-500 font-normal inline-block"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Services;
