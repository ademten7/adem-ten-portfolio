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
        "Test Automation Engineer",
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
            Freelance <span ref={textRef}></span>
          </h3>
          <button className="hire" onClick={handleShow}>
            <FaLaptopCode />
            HIRE ME
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
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      {/* <div class="bubbles">
        <img class="bubble1" src="assets/bubble.png" alt="" />
        <img class="bubble2" src="assets/bubble.png" alt="" />
        <img class="bubble3" src="assets/bubble.png" alt="" />
        <img class="bubble4" src="assets/bubble.png" alt="" />
        <img class="bubble5" src="assets/bubble.png" alt="" />
        <img class="bubble6" src="assets/bubble.png" alt="" />
        <img class="bubble7" src="assets/bubble.png" alt="" />
      </div>*/}
    </div>
  );
};

export default Intro;
