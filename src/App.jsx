import Navbar from "./comp/Navbar/Navbar";
import Hero from "./comp/Hero/Hero";
import About from "./comp/About/About";
import Service from "./comp/Service/Service";
import Skills from "./comp/Skills/Skills";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      {/* <Skills/> */}
    </>
  );
};

export default App;
