import React, { useState } from "react";
import "./Projects.css";
import { projectDetails } from "../../data/project_details";

export default function Projects() {
  // const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="projects" id="projects">
      <div className="projects-header">
        <div className="project-heading">PROJECTS</div>
      </div>
      {/* <div className="projects-filter">
        <div
          id="all"
          className={activeProject === 1 ? "filter-item active" : "filter-item"}
          onClick={() => setActiveProject(1)}
        >
          ALL
        </div>
        <div className="separator"> / </div>
        <div
          id="ai-ml"
          className={activeProject === 2 ? "filter-item active" : "filter-item"}
          onClick={() => setActiveProject(2)}
        >
          AI/ML
        </div>
        <div className="separator"> / </div>
        <div
          id="web-dev"
          className={activeProject === 3 ? "filter-item active" : "filter-item"}
          onClick={() => setActiveProject(3)}
        >
          WEB
        </div>
        <div className="separator"> / </div>
        <div
          id="dsa"
          className={activeProject === 4 ? "filter-item active" : "filter-item"}
          onClick={() => setActiveProject(4)}
        >
          DSA
        </div>
      </div> */}

      <div className="pList">
        {projectDetails.map((item, index) => {
          console.log(item.pImg_path);
          return (
            <a
              href={item.pLink}
              key={index}
              id={`box-${index}`}
              className="pBox"
              data-aos-once="true"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              onMouseOver={() => {
                document.querySelector(`#box-${index}`).style.transform =
                  "scale(1.05)";
              }}
              onMouseOut={() => {
                document.querySelector(`#box-${index}`).style.transform =
                  "scale(1)";
              }}
            >
              <img className="pImg" src={item.pImg_path} alt="" />
              <div className="pDetails">
                <div className="pTitle">{item.pTitle}</div>
                <div className="pDesc">{item.pDesc}</div>
                <hr />
                <div className="pTech">
                  <span className="pTech-title">Technology: </span>
                  <span className="pTech-info">{item.pTech}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
