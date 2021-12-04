import React from "react";
import aboutImg from "../images/about.png";
import "./about.scss";

const About = () => {
  return (
    <section className="section about container" id="about">
      <div className="about-underline">
        <h1>About me</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center about-center">
        <img src={aboutImg} className="hero-photo" alt="about img" />

        <article className="about-info">
          <div className="section-title about-title"></div>
          <p>
            I decided to change my career path two years ago, taking my
            experience of working in a team with me and beginning a new journey
            with Web Development. I started a 13 month coding school and became
            completely hooked.
          </p>
          <p>
            During the course, I enjoyed the challenges and the effort required
            to overcome them, the feeling of success that came at the end, and
            anticipating the new challenges to come. Knowing that I will keep
            learning, as well as keep facing new challenges and continue to
            solve them, has led me to become incredibly integrated into the
            field of web development. Do I love my job? Yes!
          </p>
          <div className="btn-box">
            <a href="#skills" className="btn">
              my skills
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
