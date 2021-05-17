import React, { useState, useEffect}  from "react";
import gsap from "gsap";

let tl = gsap.timeline();
const heroAnimation = (completeAnimation) => {
  tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: 'Power4.easeOut'
})
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: 'Power4.easeOut',
    duration: 2
}, "-=1.5")
tl.from('.hero-design', {
    opacity: 0, y: 50, ease: 'Power4.easeOut', duration: 1
}, "-=2")

gsap.from(".square-anim", {
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: 'Back.easeOut.config(1.7)'
})

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});
}

const Contact = () => {
  const [ setAnimationComplete ] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true)
  }

  useEffect(() => {
    heroAnimation(completeAnimation);
  });
  return (
    <div class="hero">
      <div class="content">
        <h1 class="stagger1">Hire Me</h1>
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
        <svg class="scroll stagger1" width="40" height="77" viewBox="0 0 40 77">
          <g id="scroll" transform="translate(-253 -787)">
            <g
              id="Rectangle_12"
              data-name="Rectangle 12"
              transform="translate(253 787)"
              fill="none"
              stroke="#fff"
              stroke-width="4"
            >
              <rect width="40" height="77" rx="20" stroke="none" />
              <rect x="2" y="2" width="36" height="73" rx="18" fill="none" />
            </g>
            <circle
              class="circle"
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="11"
              cy="11"
              r="11"
              transform="translate(262 798)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
