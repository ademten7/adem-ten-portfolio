import React from "react";
import Skill from "./Skill";
import "./skills.scss";

export default function Skills(props) {
  return (
    <section className="section skills container" id="skills">
      <div className="section-title">
        <h1>Skills</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center skills-center">
        <article>
          <h3>Front End</h3>
          <Skill lang="HTML/CSS" value="90%" />
          <Skill lang="Javascript" value="90%" />
          <Skill lang="React" value="90%" />
        </article>
        <article>
          <h3>Back End</h3>
          <Skill lang="NodeJS" value="80%" />
          <Skill lang="MongoDB" value="80%" />
          <Skill lang="Mongoose" value="80%" />
          <Skill lang="JAVA" value="70%" />
        </article>
      </div>
      <div className="section-center">
        <h4>Additional Skills:</h4>
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
          <p className="skillBox">
            mindful, transparent and empathetic teamwork
          </p>
          <p className="skillBox">Prioritising the tasks</p>
          <p className="skillBox">Disciplined work respecting deadlines</p>
        </div>
      </div>
    </section>
  );
}
