import React from "react";
import App from "./App";
import reactDOM from "react-dom";
import Container from "./Context/Container";

reactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById("root")
);
