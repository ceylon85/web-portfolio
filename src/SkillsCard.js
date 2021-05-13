import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCogs, faTools } from "@fortawesome/free-solid-svg-icons";
import "./css/SkillsCard.css";

const SkillsCard = () => {
  return (
    <div className="skills__card">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skills__container">
        <div className="column">
          <div className="skill__title">
            <FontAwesomeIcon icon={faCode} className="skill__icon" />
            <h3>Frontend</h3>
          </div>
          <div className="skillsList__container">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="column center__column">
          <div className="skill__title">
            <FontAwesomeIcon icon={faCogs} className="skill__icon" />
            <h3>Backend</h3>
          </div>
          <div className="skillsList__container">
            <ul>
              <li>Node JS</li>
              <li>Express</li>
              <li>Mongodb</li>
              <li>REST</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        <div className="column last__column">
          <div className="skill__title">
            <FontAwesomeIcon icon={faTools} className="skill__icon" />
            <h3>Tools</h3>
          </div>
          <div className="skillsList__container">
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>npm</li>
              <li>Terminal</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
