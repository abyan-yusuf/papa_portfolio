const Nav = (props) => {
  return (
    <div>
      <a href={props.url} className="flex rounded-lg border-2 border-borderc group" autoFocus>
        <p className="bg-fg py-4 px-5 rounded-lg text-xl text-white group-focus:bg-gb group-hover:text-black group-hover:bg-gb group-focus:text-black transition-background-color duration-500 ease-linear">
          <i className={'fa-solid fa-' + props.icon}></i>
        </p>
        <p className="text-gray p-5 text-center font-bold text-sm group-hover:text-gb transition-colors duration-500 ease-in-out group-hover:animate-bounce">
          {props.text}
        </p>
      </a>
    </div>
  );
};

export default Nav;
