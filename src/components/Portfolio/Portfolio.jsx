import React, { useContext } from "react";
import PortfolioCard from "./PortfolioCard"; // Update to use PortfolioCard
import projectsData from "../../data.json";
import "./Portfolio.css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" style={{ color: darkMode ? "white" : "" }}>
        Projects
      </h2>
      <div className="portfolio-grid">
        {projectsData.map((project, index) => (
          <PortfolioCard // Use PortfolioCard here
            key={index}
            img={project.img} // Use the img directly from data.json
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
