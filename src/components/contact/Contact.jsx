import React, { useRef, useState } from "react";
import { ImLocation2 } from "react-icons/im";

import { GrLinkedin, GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./contact.scss";
import EmailJS from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    EmailJS.sendForm(
      //RESTART THE SERVICE
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID
    )
      .then((result) => {
        console.log(result.text); //if we get OK  message it we works
        if (result.text === "OK") {
          setStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container contact">
      <h1 className="header">Contact Me</h1>
      {status ? (
        <div>
          <h1 className="respond">Thanks for your email!!!</h1>
          <p className="header-para">
            I love questions and feedback and I'm always happy to help
          </p>
        </div>
      ) : (
        <div className="contact-page">
          <div className="contact-left">
            <h3 style={{ fontWeight: "bolder" }}>Send me a message</h3>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              Send me message and I will respond ASAP
            </p>
            <form ref={formRef} onSubmit={sendEmail}>
              <div>
                <div className="names-emails">
                  <div className="name">
                    <label>Full Name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Type full name here"
                      required
                      name="user_name"
                    />
                  </div>
                  <div className="email">
                    <label>Email</label>
                    <br />
                    <input
                      type="email"
                      placeholder="Type email here"
                      required
                      name="user_email"
                    />
                  </div>
                </div>
                <div className="telephone-organisation">
                  <div className="tel">
                    <label>Telephone</label>
                    <br />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      required
                      name="user_phone"
                    />
                  </div>
                  <div className="organisation">
                    <label>Organisation</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Organisation name"
                      required
                      name="organisation"
                    />
                  </div>
                </div>
                <br />
                <label className="message">Message</label>
                <br />
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  id="textarea"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button className="btn-secondary" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-right">
            <h3 style={{ fontWeight: "bolder" }}>Contact Information</h3>
            <p>
              <ImLocation2 style={{ color: "white" }} /> Kibitzweg 4, 24565 Kiel
            </p>
            <p>
              <GrMail /> tenadem82@gmail.com
            </p>{" "}
            <p>
              {" "}
              <BsFillTelephoneFill />
              +49 179 460 02 68
            </p>
            <div>
              <a href="https://www.linkedin.com/in/ademten/">
                <GrLinkedin />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
