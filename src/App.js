import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";

// import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import { MyContext } from "./Context/context";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import AdditionalSkills from "./components/additionalSkills/AdditionalSkills";
import GetInTouch from "./components/getInTouch/GetInTouch";

function App() {
  const { menuOpen, setMenuOpen } = useContext(MyContext);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Services />
        <Projects />
        <Skills />
        <AdditionalSkills />
        <GetInTouch />

        {/* <DImage /> */}
      </div>
    </div>
  );
}

export default App;
