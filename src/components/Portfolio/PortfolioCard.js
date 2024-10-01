import React from "react";
import "./PortfolioCard.css"; // Unique styling for Portfolio cards

const PortfolioCard = ({ img, title, description, liveLink, codeLink }) => {
  return (
    <div className="portfolio-card">
      <img src={img} alt={title} className="portfolio-card-img" />
      <div className="portfolio-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={liveLink}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live
        </a>
        <a
          href={codeLink}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
