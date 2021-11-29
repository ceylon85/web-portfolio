import React from "react";
import "./css/Skills.css";
import SkillsCard from "./SkillsCard";
import { Zoom } from "react-awesome-reveal";

function Skills() {
  return (
    <div className="skillSection">
      <Zoom>
        <SkillsCard />
      </Zoom>
    </div>
  );
}

export default Skills;
