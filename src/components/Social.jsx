import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import { Link } from "react-router-dom";

const Social = () => (
    <div className="social-header">
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
            <img src={instagram} alt="instagram" />
          </Link>
        </li>
      </ul>
    </div>
  );

  export default Social;