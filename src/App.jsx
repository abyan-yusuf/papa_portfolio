import Navbar from "./comp/Navbar/Navbar";
import Hero from "./comp/Hero/Hero";
import About from "./comp/About/About";
import Service from "./comp/Service/Service";
import Skills from "./comp/Skills/Skills";
import Portfolio from "./comp/Portfolio/Portfolio";
import MarqueeComp from "./comp/Marquee/Marquee";
const App = () => {
  return (
    <div className="bg-bodybc">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Portfolio />
      <MarqueeComp />
     </div>
  );
};

export default App;
