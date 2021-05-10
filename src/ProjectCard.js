import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./css/ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <div className="ProjectCard__front">
        <div className="ProjectCard__img">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="ProjectCard__title">
          <h3>{props.title}</h3>
        </div>
        <div className="ProjectCard__desc">
          <h5>{props.subtitle}</h5>
          <ul>
            {props.details.map((detail) => {
              return <li key={detail}>{detail}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="ProjectCard__back">
        <div className="ProjectCard__details">
          <div className="link-to-site">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Check it out!
            </a>
          </div>
          <div className="link-to-github">
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
