import React from "react";
import "./topbar.scss";
import logo from "../images/At1.jpg";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbar active">
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
        </div>
        <div className="right">
          <div className="hamburger">
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
