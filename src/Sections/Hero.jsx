import React from "react";
import { More, Svg } from '../components/svg';

const Hero = () => {
  return (
    <div class="hero">
      <div class="content">
        <h1 class="stagger1">Fullstack Web Developer</h1>
        <p class=" stagger1">
          Versatile, results-driven professional with 2+ years comprehensive
          experience Fullstack Developer adept in bringing forth expertise in
          design, installation, testing and maintenance of software systems.
          Equipped with a diverse and promising skill-set. Proficient in various
          platforms, languages, and embedded systems. Experienced with the
          latest cutting edge development tools and procedures. Able to
          effectively self-manage during independent projects, as well as
          collaborate as part of a productive team.
        </p>
        <div class="meet stagger1">
          <span>👇</span>
          <p>Meet Arsim Sejdiu</p>
        </div>
        <More />
      </div>
      <Svg />
    </div>
  );
};

export default Hero;
