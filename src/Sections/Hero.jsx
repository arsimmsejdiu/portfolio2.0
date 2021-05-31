import React from "react";
import { More, Svg } from '../components/svg';
import About from "../components/About";
import { HeroMeet, TitleH1 } from '../components/Paragraph';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <TitleH1 text='Fullstack Web Developer'/>
        <About />
        <HeroMeet text="Meet Arsim Sejdiu"/>
        <More />
      </div>
      <Svg />
    </div>
  );
};

export default Hero;
