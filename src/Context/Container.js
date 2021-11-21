import React, { useState } from "react";
import { MyContext } from "./context";

const Container = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MyContext.Provider value={{ menuOpen, setMenuOpen }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
