const Nav = (props) => {
  return (
    <div>
      <a href="/" className="flex rounded-lg border-2 border-borderc group transition-all duration-150">
        <p className="text-white bg-fg py-4 px-5 rounded-lg text-xl text-white group-hover:bg-gb group-hover:text-black">
          <i class={props.icon}></i>
        </p>
        <p className="p-5 text-center font-bold text-md group-hover:text-gb">{props.text}</p>
      </a>
    </div>
  );
};

export default Nav;
