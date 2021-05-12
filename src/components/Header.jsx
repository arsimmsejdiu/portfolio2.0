import React from "react";

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
              <a href="/">Hire me</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="social-header">
        <ul>
          <li>
            <a href="/">
              <img src="../images/dribbble.png" alt="dribbble" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="../images/behance.png" alt="behance" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="../images/twitter.png" alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
