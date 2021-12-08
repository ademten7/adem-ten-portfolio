import React, { useState } from "react";
import "./getInTouch.scss";
import ConnectImg from "../images/connect-img.jpg";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Contact from "../contact/Contact";
import { FaMailBulk } from "react-icons/fa";

const GetInTouch = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className=" connect container">
      <div className="connect-img-container">
        <div className="connect-img img-1">
          <img src={ConnectImg} alt="connect-img" />
        </div>
        <div className="connect-img img-2">
          <img src={ConnectImg} alt="connect-img" />
        </div>
        <div className="connect-img img-3">
          <img src={ConnectImg} alt="connect-img" />
        </div>
        <div className="connect-img img-4">
          <img src={ConnectImg} alt="connect-img" />
        </div>
      </div>
      <div className="connect-banner" id="contact">
        <div className="section-title">
          <h2>Let's Get In Touch</h2>
          <div className="underline"></div>
        </div>
        <p className="connect-text">
          Now I am looking for a position where I can work with all my passion,
          while collaborating with colleagues. Take a look at my work or feel
          free to get in touch!
        </p>

        <div className="get-in-touch">
          <button className="links" onClick={handleShow}>
            <FaMailBulk />
            CONTACT ME
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
      </div>
    </div>
  );
};

export default GetInTouch;
