import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Resume from "../Services/Tobi_CV.pdf";

const navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Tobi_CV.pdf";
    document.body.appendChild(link); // Append to body
    link.click(); // Simulate click
    document.body.removeChild(link);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Tobi</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {/* <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li> */}
            <li>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="resume-link"
                to="#"
                onClick={handleDownload}
                spy={true}
                smooth={true}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
        {/* <a href={Resume} download>
          <button className="button n-button">Resume</button>
        </a> */}
      </div>
    </div>
  );
};

export default navbar;
