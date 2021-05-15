import React from "react";
import react from "../images/atom.svg";
import node from "../images/nodejs.svg";
import docker from "../images/docker.svg";
import redux from "../images/redux.svg";
import mongodb from "../images/mango.svg";
import javascript from "../images/javascript.svg";

const Skills = () => {
  return (
    <section class="skills">
      <div class="skills-container">
        <div class="inner bottom transition2">
          <p class="subtitle">My Programming Stack</p>
          <a href="/" class="featured-title">
            Skills
          </a>
        </div>
        <ul>
          <li class="transition2">
            <div class="icon-container one">
              <img src={react} alt="UI/UX Icon" />
            </div>
            <p class="skill-title">ReactJS</p>
            <p class="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li class="transition2">
            <div class="icon-container two">
              <img src={node} alt="UI/UX Icon" />
            </div>
            <p class="skill-title">NodeJS</p>
            <p class="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li class="transition2">
            <div class="icon-container three">
              <img src={docker} alt="UI/UX Icon" />
            </div>
            <p class="skill-title">Docker Containers & Microservices</p>
            <p class="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li class="transition2">
            <div class="icon-container three">
              <img src={redux} alt="UI/UX Icon" />
            </div>
            <p class="skill-title">Redux State Management</p>
            <p class="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li class="transition2">
            <div class="icon-container three">
              <img src={mongodb} alt="UI/UX Icon" />
            </div>
            <p class="skill-title">MongoDB Database</p>
            <p class="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li class="transition2">
            <div class="icon-container three">
              <img src={javascript} alt="UI/UX Icon" />
            </div>
            <p class="skill-title">Javascript</p>
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
