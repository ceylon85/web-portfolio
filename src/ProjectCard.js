import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./css/ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="projectCard">
      <div className="projectCard__front">
        <div className="projectCard__img">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="projectCard__title">
          <h3>{props.title}</h3>
        </div>
        <div className="projectCard__subtitle">
          <h5>{props.subtitle}</h5>
          <ul>
            {props.details.map((detail) => {
              return <li key={detail}>{detail}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="projectCard__back">
        <div className="projectCard__details">
          <div className="link__to__site">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Link to Site
            </a>
          </div>
          <div className="link__to__github">
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <br />
              Code Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
