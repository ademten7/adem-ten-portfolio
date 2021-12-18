import React from "react";
import "./services.scss";

import { FaLaptopCode, FaDatabase } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";

const Services = () => {
  return (
    <div className="services container" id="services">
      <div className="header">
        <h1>Services</h1>
        <div className="underline"></div>
      </div>
      <div className="ends">
        <div className="frontend end">
          <FaLaptopCode className="services-icons" />
          <h4>Front-End</h4>
          <p>
            With my knowledge of HTML5, CSS3, Javascript and its library react
            as well as with my skills to develop responsive web pages, I am
            ready to work as a front-end developer. Feel free to have a look at
            my projects!
          </p>
        </div>
        <div className="backend end">
          <FaDatabase className="services-icons" />
          <h4>Back-end</h4>
          <p>
            To my front-end knowledge and to complement it, I also improved my
            skills in Node.js, MongoDB and mongoose. I put it into practice by
            doing full stack projects. I continue to improve my progress on this
            issue. Dont forget to check out my projects!
          </p>
        </div>
        <div className="backend end">
          <VscDebugConsole className="services-icons testing" />
          <h4>Q/A-Testing</h4>
          <p>
            In addition to my front-end and back-end knowledge, I attended 8
            months Test Automation Engineer course and I learned JAVA OOP
            language with some testing frameworks like Selenium Webdriver,
            Cucumber, TestNG to test software applications. I also joined some
            none-paid project and I am experience in Smoke, Regression and
            Functional Testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
