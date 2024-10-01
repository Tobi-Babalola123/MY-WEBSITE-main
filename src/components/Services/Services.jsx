import React, { useContext } from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition animation
  const transition = {
    duration: 1.5, // Slower duration for better effect
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>About Me</span>
        <p className="About-me-details">
          "I'm Tobi Babalola, a dedicated Front-End Developer passionate about
          using web technologies to create innovative solutions. My focus is on
          addressing challenges across diverse industries through the power of
          technology. As a lifelong learner, I'm constantly expanding my
          knowledge and skill set to deliver impactful results. Currently, I'm
          diving into Node.js and Express.js to further enhance my expertise in
          backend development."
        </p>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side - cards */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Ensures it triggers again when in view
          transition={{ ...transition, delay: 0.2 }}
        >
          <ServiceCard
            emoji="/img/glasses.png"
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React, Bootstrap"}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Ensures it triggers again when in view
          transition={{ ...transition, delay: 0.4 }}
        >
          <ServiceCard
            emoji="/img/humble.png"
            heading={"Front End Coding"}
            detail={"Proficiency in HTML, CSS, React, Bootstrap"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }} // Ensures it triggers again when in view
          transition={{ ...transition, delay: 0.6 }}
        >
          <ServiceCard
            emoji="/img/heartemoji.png"
            heading={"Design"}
            detail={"Canva Pro, Adobe Photoshop, Vivid, Lightroom"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
