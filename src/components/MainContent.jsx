import React from "react";

import Hero from "./Hero";
import Feature from "./Feature";
import Skills from './Skills';
import Portfolio from './Portfolio';

const MainContent = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default MainContent;
