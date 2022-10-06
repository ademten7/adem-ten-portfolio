import React, { useEffect, useRef, useState } from "react";
import "./intro.scss";
import { init } from "ityped";
import { FaLaptopCode } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Contact from "../contact/Contact";

const Intro = () => {
  const textRef = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      typeSpeed: 100,
      strings: [
        "Full Stack Developer",
        "Web Designer",
      ],
    });
    // import { init } from "ityped";
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Adem Ten</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <button className="hire" onClick={handleShow}>
            <FaLaptopCode />
            HIRE ME
          </button>
          <Modal size="xl" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              {" "}
              <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
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
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
