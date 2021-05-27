import React from "react";

const Portfolios = ({ imgSrc, url, altText, title, text, subTitle }) => {
  return (
    <div>
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="featured-title">{title}</p>
            <p className="subtitle">{subTitle.map((sub) => `#${sub}  `)}</p>
            <p className="featured-desc">{text}</p>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgSrc} alt={altText} />
        </a>
      </div>
    </div>
  );
};

export default Portfolios;
