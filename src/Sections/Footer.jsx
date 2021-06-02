import React from "react";
// import { Link } from "react-router-dom";
// import github from "../images/github.png";
// import linkedin from "../images/linkedin.png";
// import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <section className="portfolio">
      <footer className="footer">
        <h3 className="pagination stagger1">
          {`Copyright by ${new Date().getFullYear()} Arsim Sejdiu`}
        </h3>
      </footer>
    </section>
  );
};

export default Footer;
