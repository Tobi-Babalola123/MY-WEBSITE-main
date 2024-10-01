import React from "react";
import "./ServiceCard.css"; // Unique styling for Service cards
import resume from "./Tobi_CV.pdf";

const ServiceCard = ({ emoji, heading, detail, color }) => {
  return (
    <div className="service-card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={resume} download>
        <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
};

export default ServiceCard;
