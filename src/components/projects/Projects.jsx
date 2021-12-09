import React from "react";
import "./projects.scss";
import recipe from "../images/recipe.png";
import commerce from "../images/e-commerce.png";
import netflix from "../images/netflix.png";
import candy from "../images/candy.png";

import hotel from "../images/hotel.png";
import emoji from "../images/emoji.png";
import todo from "../images/todo.png";
import weather from "../images/weather.png";
import project_bootstrap from "../images/project-bootstrap.png";

const Projects = () => {
  return (
    <div className="my-projects" id="projects">
      <h1>Projects</h1>
      <div className="underline"></div>
      <section>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={commerce} alt="" />
            </div>

            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/ademten7/react-e-commerce-app"
              >
                <div>
                  <h2>E Commerce App</h2>
                  <p>Technologies: React</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={netflix} alt="" />
            </div>
            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/ademten7/my-netflix-project"
              >
                <div>
                  <h2>NetFlix-Clone-Project</h2>
                  <p>
                    <p>Technologies: React</p>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={candy} alt="" />
            </div>
            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/ademten7/react-candy-crush-app"
              >
                <div>
                  <h2>Candy Crush Game</h2>
                  <p>
                    <p>Technologies: React</p>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={hotel} alt="" />
            </div>
            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/ademten7/react-hotel-project"
              >
                <div>
                  <h2>Hotel App</h2>
                  <p>
                    <p>Technologies: React</p>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={recipe} alt="" />
            </div>
            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/ademten7/recipe-app"
              >
                <div>
                  <h2>Recipe-App</h2>
                  <p>
                    <p>Technologies: React</p>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={emoji} alt="" />
            </div>
            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/ademten7/react-search-emoji-app"
              >
                <div>
                  <h2>Emoji App</h2>
                  <p>
                    <p>Technologies: React</p>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={todo} alt="" />
            </div>
            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/ademten7/TODO-app"
              >
                <div>
                  <h2>TODO App</h2>
                  <p>
                    <p>Technologies: React</p>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={weather} alt="" />
            </div>
            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/ademten7/WeatherApp"
              >
                <div>
                  <h2>Weather App</h2>
                  <p>
                    <p>Technologies: DOM</p>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBx">
              <img src={project_bootstrap} alt="" />
            </div>
            <div className="contentBx">
              <a
                style={{ textDecoration: "none" }}
                href="https://fbw-e04-2.github.io/uib-final-project-ademten7/"
              >
                <div>
                  <h2>Bootstrap Portfolio Page</h2>
                  <p>
                    <p>Technologies: Bootstrap and Sass</p>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
