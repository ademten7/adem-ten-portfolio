import React from "react";

import "./skills.scss";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";

import react from "../images/react2.png";
import nodejs from "../images/nodejs.png";
import redux from "../images/redux.png";
import bootstrap from "../images/bootstrap.png";
import sass from "../images/sass.png";

import mui from "../images/mui.png";
import github from "../images/GitHub.png";
import java from "../images/java.jpg";
import figma from "../images/figma.png";
import mongodb from "../images/mongodb.png";
import reactBootstrap from "../images/reactboot.svg";
import expressJS from "../images/ExpressJS.png";
import cucumber from "../images/cucumber.png";
import selenium from "../images/selenium.png";
import testNG from "../images/testNG.png";

import jenkins from "../images/jenkins.png";
import jest from "../images/jest.png";
import jira from "../images/jira.png";

let images = [
  html,
  css,
  js,
  java,
  react,
  redux,
  reactBootstrap,
  bootstrap,
  nodejs,
  mongodb,
  expressJS,
  sass,
  mui,
  github,
  figma,
  jest,
  cucumber,
  selenium,
  testNG,
  jenkins,
  jira,
];

export default function Skills(props) {
  return (
    <section className="skills" id="skills">
      <div className="headline">
        <div className="section-title">
          <h1>Skills</h1>
          <div className="underline-skills"></div>
        </div>
        {/* <div className="section-center-skills skills-center">
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
        </div> */}
      </div>
      <div className="section-center-skills">
        {/* <h4>Additional Skills:</h4> */}
        {/* <div className="skillBoxContainer">
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
        </div> */}
        {/* <div className="images-icons">
          <div className="image-box">
            <img src={html} alt="html" width="150" />
          </div>
          <div className="image-box">
            <img src={css} alt="css" width="150" />
          </div>
          <div className="image-box">
            {" "}
            <img src={js} alt="js" width="150" />
          </div>
          <div className="image-box">
            <img src={react} alt="react" width="150" />
          </div>
          <div className="image-box">
            <img src={redux} alt="redux" width="150" />
          </div>
          <div className="image-box">
            {" "}
            <img src={nodejs} alt="nodejs" width="150" />
          </div>
          <div className="image-box">
            {" "}
            <img src={bootstrap} alt="bootstrap" width="150" />
          </div>
          <div className="image-box">
            {" "}
            <img src={sass} alt="sass" width="150" />
          </div>

          <div className="image-box">
            {" "}
            <img src={mui} alt="mui" width="150" />
          </div>
          <div className="image-box">
            {" "}
            <img src={github} alt="github" width="150" />
          </div>
          <div className="image-box">
            {" "}
            <img src={java} alt="java" width="100" height="150" />
          </div>
          <div className="image-box">
            {" "}
            <img src={figma} alt="figma" width="150" />
          </div>
        </div> */}

        <div className="effects-body ">
          {images?.map((image) => {
            return (
              <div class="effects">
                <img src={image} alt="skill" />
                <img src={image} alt="skill" /> <img src={image} alt="skill" />
                <img src={image} alt="skill" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
