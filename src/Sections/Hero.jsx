import React from "react";
import { More, Svg } from '../components/svg';
import About from "../components/About";
import { HeroMeet } from '../components/Paragraph';

const Hero = () => {
  return (
    <div class="hero">
      <div class="content">
        <h1 class="stagger1">Fullstack Web Developer</h1>
        <About />
        <HeroMeet text="Meet Arsim Sejdiu"/>
        <More />
      </div>
      <Svg />
    </div>
  );
};

export default Hero;
