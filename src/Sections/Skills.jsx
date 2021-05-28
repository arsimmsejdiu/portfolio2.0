import React from "react";
import Skill from "../components/Skill.component";
import { FeatureSubtitle } from '../components/Paragraph';
import { skillsItems } from "../Data/Skills.data";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="inner bottom transition2">
          <FeatureSubtitle text="My Programming Stack"/>
          <a href="/" className="featured-title">
            Skills
          </a>
        </div>
        <ul>
          {skillsItems.map((skill) => (
            <Skill
              key={skill.id}
              imgSrc={skill.imgSrc}
              altText={skill.altText}
              title={skill.title}
              text={skill.text}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
