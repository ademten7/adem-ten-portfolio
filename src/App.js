import React, { useContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import { MyContext } from "./Context/context";
import Skills from "./components/skills/Skills";

function App() {
  const { menuOpen, setMenuOpen } = useContext(MyContext);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Skills />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
