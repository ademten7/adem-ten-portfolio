import React, { useState } from "react";
import "./menu.scss";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { FaMailBulk } from "react-icons/fa";
import Contact from "../contact/Contact";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={menuOpen ? "menu active" : "menu"}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#services">Services</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <button className="contact-me" onClick={handleShow}>
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
