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
      </div>
      <div className="section-center-skills">
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
