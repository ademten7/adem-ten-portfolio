import React, { useContext } from "react";
import "./topbar.scss";
// import logo from "../images/At1.jpg";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MyContext } from "../../Context/context";
import { GrLinkedin } from "react-icons/gr";

const Topbar = () => {
  const { menuOpen, setMenuOpen } = useContext(MyContext);
  return (
    <div className={menuOpen ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            ten.
          </a>
          <div className="itemContainer">
            <BsTelephoneForwardFill className="icon" />
            <span>+49 4600 260</span>
          </div>
          <div className="itemContainer">
            <IoMdMail className="icon" />
            <span>tenadem82@gmail.com</span>
          </div>
          <div className="itemContainer linkedin">
            <a href="https://www.linkedin.com/in/ademten/">
              <GrLinkedin />
            </a>
          </div>
        </div>
        <div className="right">
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
