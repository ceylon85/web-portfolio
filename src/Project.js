import React from "react";
import "./css/Project.css";
import { Zoom } from "react-reveal";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="projectSection">
      <div className="title">
        <Zoom>
          <h1>My most recent project</h1>
        </Zoom>
      </div>
      <div className="project__container">
        <div className="project__card__container">
          <Zoom>
            <ProjectCard
              title="Netflix Clone"
              img={""}
              link=""
              github=""
              subtitle=""
              details={[]}
            />
          </Zoom>
        </div>

        <div className="project__card__container">
          <Zoom>
            <ProjectCard
              title="Netflix Clone"
              img={""}
              link=""
              github=""
              subtitle=""
              details={[]}
            />
          </Zoom>
        </div>
        <div className="project__card__container">
          <Zoom>
            <ProjectCard
              title="Amazon Clone"
              img={""}
              link=""
              github=""
              subtitle=""
              details={[]}
            />
          </Zoom>
        </div>
      </div>
      <div className="project__container">
        <div className="project__card__container">
          <Zoom>
            <ProjectCard
              title=""
              img={""}
              link=""
              github=""
              subtitle=""
              details={[]}
            />
          </Zoom>
        </div>

        <div className="project__card__container">
          <Zoom>
            <ProjectCard
              title=""
              img={""}
              link=""
              github=""
              subtitle=""
              details={[]}
            />
          </Zoom>
        </div>
        <div className="project__card__container">
          <Zoom>
            <ProjectCard
              title=""
              img={""}
              link=""
              github=""
              subtitle=""
              details={[]}
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Project;
