import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import smartphone from "../images/smartphone.png";
import Message from "./Message";
import { TitleH1 } from './Paragraph';
import About from './About';
import Social from './Social';

let tl = gsap.timeline();
const heroAnimation = (completeAnimation) => {
  tl.from(".content", {
    y: "-30%",
    opacity: 0,
    duration: 2,
    ease: "Power4.easeOut",
  });
  tl.from(
    ".stagger1",
    {
      opacity: 0,
      y: -50,
      stagger: 0.3,
      ease: "Power4.easeOut",
      duration: 2,
    },
    "-=1.5"
  );
  tl.from(
    ".hero-design",
    {
      opacity: 0,
      y: 50,
      ease: "Power4.easeOut",
      duration: 1,
    },
    "-=2"
  );

  gsap.from(".square-anim", {
    stagger: 0.2,
    scale: 0.1,
    duration: 1,
    ease: "Back.easeOut.config(1.7)",
  });

  gsap.from(".transition2", {
    scrollTrigger: {
      trigger: ".transition2",
      start: "top bottom",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  gsap.from(".transition3", {
    scrollTrigger: {
      trigger: ".transition3",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.6,
  });
};

const Contact = () => {
  const [setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    heroAnimation(completeAnimation);
  });
  return (
    <div className="hero">
      <div className="content">
        <TitleH1 text="Hire Me"/>
        <div className="meet stagger1">
          <ul>
            <li>
              <Link to="/">
                <img src={smartphone} alt="smart" />
              </Link>
            </li>
          </ul>
          <p className="phone">+33749301287</p>
        </div>
        <About />
        <Social />
      </div>
      <Message />
    </div>
  );
};

export default Contact;
