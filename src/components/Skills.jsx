import React from "react";

const Skills = () => {
  return (
    <section class="skills">
      <div class="skills-container">
        <ul>
          <li class="transition2">
            <div class="icon-container one">
              <img src="images/icon-ux.svg" alt="UI/UX Icon" />
            </div>
            <p class="skill-title">UI UX Design</p>
            <p class="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li class="transition2">
            <div class="icon-container two">
              <img src="images/icon-frontend.svg" alt="UI/UX Icon" />
            </div>
            <p class="skill-title">Frontend Development</p>
            <p class="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li class="transition2">
            <div class="icon-container three">
              <img src="images/icon-logo.svg" alt="UI/UX Icon" />
            </div>
            <p class="skill-title">Identity Design</p>
            <p class="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
