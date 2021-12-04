import React from "react";
import "./services.scss";

import { FaLaptopCode, FaDatabase } from "react-icons/fa";

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
            With my knowledge of es7 + html, css, javascript and its library
            react as well as with my skills to develop responsive web pages, I
            am ready to work as a front-end developer. Feel free to have a look
            at my projects!
          </p>
        </div>
        <div className="backend end">
          <FaDatabase className="services-icons" />
          <h4>Back-end</h4>
          <p>
            In addition to my front-end knowledge and to complement it, I also
            improved my skills in node.js, mongodb and mongoose. I put it into
            practice by doing full stack projects. I continue to improve my
            progress on this issue. Dont forget to check out my projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
