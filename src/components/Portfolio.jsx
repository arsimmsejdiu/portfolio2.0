import React from "react";
import fretty from '../images/fretty.jpg';

const Portfolio = () => {
  return (
    <section class="portfolio">
      <div class="portfolio-container transition3">
        <div class="portfolio-left">
          <div class="inner">
            <p class="subtitle">Guitar App</p>

            <p class="featured-title">Fretastic.com</p>
            <p class="featured-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sint, molestias qui nihil accusamus praesentium vel
              tenetur quisquam quas rem.
            </p>
          </div>
        </div>
        <a href="/">
          <img src={fretty} alt="Fretastic" />
        </a>
      </div>

      <div class="portfolio-container transition3">
        <div class="portfolio-left">
          <div class="inner">
            <p class="subtitle">Guitar App</p>

            <p class="featured-title">Fretastic.com</p>
            <p class="featured-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sint, molestias qui nihil accusamus praesentium vel
              tenetur quisquam quas rem.
            </p>
          </div>
        </div>
        <a href="/">
          <img src="images/fretty.jpg" alt="Fretastic" />
        </a>
      </div>

      <div class="portfolio-container transition3">
        <div class="portfolio-left">
          <div class="inner">
            <p class="subtitle">Guitar App</p>

            <p class="featured-title">Fretastic.com</p>
            <p class="featured-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sint, molestias qui nihil accusamus praesentium vel
              tenetur quisquam quas rem.
            </p>
          </div>
        </div>
        <a href="/">
          <img src="images/fretty.jpg" alt="Fretastic" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
