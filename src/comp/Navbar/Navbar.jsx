import Nav from "./Nav/Nav";

function Navbar() {
  return (
    <nav className="w-64 h-full bg-bg fixed overflow-y-scroll no-scrollbar">
      <div>
        <a href='/'
          className="bg-fg py-12 px-8 text-3xl font-semibold flex justify-center"
        >
          <p className="font-black font-mono tracking-widest text-white">AMDAD</p>
        </a>
      </div>
      <div className="pt-12 px-6">
        <Nav icon="house" text="HOME" url='#hero' />
        <div className="py-4"></div>
        <Nav icon="address-card" text="ABOUT ME" url='#about' />
        <div className="py-4"></div>
        <Nav icon="briefcase" text="SERVICE" />
        <div className="py-4"></div>
        <Nav icon="wrench" text="SKILLS" />
        <div className="py-4"></div>
        <Nav icon="message" text="PORTFOLIO" />
        <div className="py-4"></div>
        <Nav icon="blog" text="BLOG" />
        <div className="py-4"></div>
        <Nav icon="id-badge" text="CONTACT" />
        <div className="py-4"></div>
      </div>
    </nav>
  );
}
export default Navbar;
