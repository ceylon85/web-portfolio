import React from "react";
import "./css/Project.css";
import { Zoom } from "react-reveal";
import ProjectCard from "./ProjectCard";
import Covid19 from './images/covid19.png'
import Netflix from './images/netflix.png'
import Amazon from './images/amazon.png';
import Youtube from './images/youtube.png';
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
              img={Netflix}
              link="https://reactnetflixclone-d1bc4.web.app/"
              github="https://github.com/ceylon85/react-netflix-clone"
              subtitle="Built auth and payment with React.js"
              details={[
                "React JS",
                "Redux",
                "FireStore as DB",
                "Authentication with Firebase",
                "Stripe for payment processing",
                "Deployed to Firebase",
              ]}
            />
          </Zoom>
        </div>

        <div className="project__card__container">
          <Zoom>
            <ProjectCard
              title="Amazon Clone"
              img={Amazon}
              link="https://clone-bc826.web.app/"
              github="https://github.com/ceylon85/react-amazon-clone"
              subtitle="Built auth and payment with React.js"
              details={[
                "React JS",
                "Firestore as DB",
                "Cloud Functions and authentication with Firebase",
                "Stripe for payment processing",
                "Deployed to Firebase",
              ]}
            />
          </Zoom>
        </div>
        <div className="project__card__container">
          <Zoom>
            <ProjectCard
              title="Covid19_Tracker"
              img={Covid19}
              link="https://covid19-tracker-b0155.web.app/"
              github="https://github.com/ceylon85/react-covid19-Tracker"
              subtitle="Build a Covid19-Tracker with React.js"
              details={["React JS","Material-ui","leaflet","chart.js","Deployed to Firebase"]}
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
              title="Youtube Clone"
              img={Youtube}
              link="https://ceylon85.github.io/youtube-clone/"
              github="https://github.com/ceylon85/youtube-clone"
              subtitle="Build a Youtube Clone with Html,CSS,JS"
              details={["Html", "CSS", "JS", "Deployed to Github Pages"]}
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
