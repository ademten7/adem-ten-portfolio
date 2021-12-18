import React from "react";
import "./footer.scss";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="wrapper-icons">
        <div className="button">
          <a href="https://www.linkedin.com/in/ademten/">
            <div className="icon">
              <i className="LinkedIn">
                <GrLinkedin />
              </i>
            </div>
            <span>Linkedin</span>
          </a>
        </div>

        <div className="button">
          <a href="https://github.com/ademten7">
            <div className="icon">
              <i className="GitHub">
                <FaGithub />
              </i>
            </div>
            <span>GitHub</span>
          </a>
        </div>
        {/* <div className="button">
          <a href="www.linkedin.com/in/ademten">
            <div className="icon">
              <i className="Instagram">
                <FaInstagramSquare />
              </i>
            </div>
            <span>Instagram</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
