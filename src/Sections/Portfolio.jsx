import React from "react";
import { portfolioItems } from '../Data/Portfolio.data';
import Portfolios from "../components/Portfolios.component";

const Portfolio = () => {
  return (
    <section id="work" className="portfolio">
      <div className="inner bottom transition2">
        <a href="/" className="featured-title">
          My Pojects
        </a>
        <p className="subtitle">/ All My Pojects With Live Link /</p>
      </div>
      {portfolioItems.map((items) => (
        <Portfolios 
          key={items.id}
          imgSrc={items.imgSrc}
          url={items.url}
          text={items.text}
          altText={items.altText}
          subTitle={items.subTitle}
          title={items.title}
        />
      ))}
    </section>
  );
};

export default Portfolio;
