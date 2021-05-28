import React from "react";
import { More, Svg } from '../components/svg';
import About from "../components/About";

const Hero = () => {
  return (
    <div class="hero">
      <div class="content">
        <h1 class="stagger1">Fullstack Web Developer</h1>
        <About />
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
