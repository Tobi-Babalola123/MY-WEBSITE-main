import React from "react";
import "./Card.css"; // Optional: for additional custom styling

const Card = ({ img, title, description, liveLink, codeLink }) => {
  return (
    <div className="card" style={{ width: "100%", maxWidth: "700px" }}>
      <div className="card-image">
        <img src={img} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="button-container">
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
    </div>
  );
};

export default Card;
