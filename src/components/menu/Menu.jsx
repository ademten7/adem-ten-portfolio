import React, { useState } from "react";
import "./menu.scss";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { FaMailBulk, FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";

import Contact from "../contact/Contact";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={menuOpen ? "menu active" : "menu"}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a className="links" href="#intro">
            <FaHome /> Home
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="links" href="#about">
            <BsPersonCircle /> About
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="links" href="#services">
            <MdHomeRepairService /> Services
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a className="links" href="#projects">
            <AiOutlineFundProjectionScreen />
            Projects
          </a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a className="links" href="#skills">
            <GiStrong /> Skills
          </a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li> */}
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <button className="links" onClick={handleShow}>
            <FaMailBulk />
            Contact
          </button>
          <Modal size="xl" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              {" "}
              <Modal.Title id="example-modal-sizes-title-lg">
                Contact Me
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Contact />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
