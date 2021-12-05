import React from "react";
import "./additionalSkills.scss";

const AdditionalSkills = () => {
  return (
    <div className="additional-skills container">
      <div className="header">
        <h1>Additional Skills</h1>
        <div className="underline"></div>
      </div>
      <div className="skillBoxContainer">
        <p className="skillBox">ES6+</p>
        <p className="skillBox">Bootstrap</p>
        <p className="skillBox">React-Redux</p>
        <p className="skillBox">React-Hooks(16.8+)</p>
        <p className="skillBox">Styled-Components</p>
        <p className="skillBox">MVC</p>
        <p className="skillBox">Clean Code</p>
        <p className="skillBox">Bug Fixing</p>
        <p className="skillBox">Solution-oriented working</p>
        <p className="skillBox">Desire to keep learning</p>
        <p className="skillBox">mindful, transparent and empathetic teamwork</p>
        <p className="skillBox">Prioritising the tasks</p>
        <p className="skillBox">Disciplined work respecting deadlines</p>
      </div>
    </div>
  );
};

export default AdditionalSkills;
