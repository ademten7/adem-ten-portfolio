import React from "react";
import "./projects.scss";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <div className="my-projects" id="projects">
      <h1>Projects</h1>
      <div className="underline"></div>
      <section>
        {projects?.map((project) => {
          return (
            <div className="card">
              <div className="box">
                <div className="imgBx">
                  <img src={project.src} alt="" />
                </div>

                <div className="contentBx">
                  <a style={{ textDecoration: "none" }} href={project.href}>
                    <div>
                      <h2>{project.header}</h2>
                      <p>{project.Technologies}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
