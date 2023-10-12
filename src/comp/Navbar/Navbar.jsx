import Nav from "./Nav/Nav";

function Navbar() {
  return (
    <section className="w-64 bg-bg">
      <div>
        <a
          href="/"
          className="bg-fg text-white py-12 px-8 text-3xl font-semibold flex justify-center"
        >
          <p className="text-white">Amdad</p>
        </a>
      </div>
      <div className="pt-12 px-6">
        <Nav icon="fa-solid fa-house" text="HOME" />
        <div className="py-4"></div>
        <Nav icon="fa-solid fa-address-card" text="ABOUT ME" />
        <div className="py-4"></div>
        <Nav icon="fa-solid fa-briefcase" text="SERVICE" />
        <div className="py-4"></div>
        <Nav icon="fa-solid fa-wrench" text="SKILLS" />
        <div className="py-4"></div>
        <Nav icon="fa-solid fa-message" text="PORTFOLIO" />
        <div className="py-4"></div>
        <Nav icon="fa-solid fa-blog" text="BLOG" />
        <div className="py-4"></div>
        <Nav icon="fa-solid fa-id-badge" text="CONTACT" />
        <div className="py-4"></div>
      </div>
    </section>
  );
}
export default Navbar;
