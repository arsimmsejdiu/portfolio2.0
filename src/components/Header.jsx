import React from "react";
import { Link } from 'react-router-dom';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';

const Header = () => {
  return (
    <div class="nav-container">
      <header>
        <a href="/" class="logo">
          Arsim Sejdiu
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">My work</a>
            </li>
            <li>
              <a href="/">My skills</a>
            </li>
            <li>
              <Link to="/contact">Hire me</Link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1bJhjGIvlsJJTPCxwsY0RvGEkHAk9r_Zv/view?usp=sharing" target="_blank" rel="noreferrer">My CV</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="social-header">
        <ul>
          <li>
            <Link to="/">
              <img src={github} alt="dribbble" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={linkedin} alt="behance" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={instagram} alt="twitter" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
