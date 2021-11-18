import React, { useState } from "react";
import { MyContext } from "./context";

const Container = (props) => {
  const [menuOpen, setMenuOpen] = useState("Adem");

  return (
    <MyContext.Provider value={{ menuOpen, setMenuOpen }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
