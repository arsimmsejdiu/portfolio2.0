import React from "react";
import { Link } from "react-router-dom";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import cv from "../images/cv.svg";

const Footer = () => {
  return (
    <section className="portfolio">
      <footer className="footer">
        <h3 className="pagination stagger1">
          {`Copyright by ${new Date().getFullYear()} Arsim Sejdiu`}
        </h3>
          <div className="social-header pagination stagger1">
            <ul>
              <li>
                <a
                  href="https://github.com/arsimmsejdiu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="dribbble" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arsim-sejdiu-93447331/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="behance" />
                </a>
              </li>
              <li>
                <Link to="/">
                  <img src={instagram} alt="insta" />
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1bJhjGIvlsJJTPCxwsY0RvGEkHAk9r_Zv/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={cv} alt="cv" />
                </a>
              </li>
            </ul>
          </div>
      </footer>
    </section>
  );
};

export default Footer;
