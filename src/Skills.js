import React from "react";
import "./css/Skills.css";
import SkillsCard from "./SkillsCard";
import { Flip } from "react-reveal";

function Skills() {
  return (
    <div className="skillSection">
      <Flip bottom>
        <SkillsCard />
      </Flip>
    </div>
  );
}

export default Skills;
