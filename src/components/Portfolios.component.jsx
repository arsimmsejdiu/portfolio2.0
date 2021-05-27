import React from "react";

const Portfolios = ({ title, message, selectedFile, tags, creator }) => {
  return (
    <div>
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="featured-title">{title}</p>
            <p className="subtitle">{tags.map(tag => `#${tag}  `)}</p>
            <p className="featured-desc">{message}</p>
          </div>
        </div>
        <a
          href={creator}
          target="_blank"
          rel="noreferrer"
        >
          <img src={selectedFile} alt={selectedFile} />
        </a>
      </div>
    </div>
  );
};

export default Portfolios;
