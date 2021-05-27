import React from "react";

const Skills = ({ imgSrc, title, altText, text }) => {
  return (
    <div>
      <ul>
        <li className="transition2">
          <div className="icon-container one">
            <img src={imgSrc} alt={altText} />
          </div>
          <p className="skill-title">{title}</p>
          <p className="featured-desc skill-desc">{text}</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;