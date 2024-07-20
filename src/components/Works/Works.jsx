import React, { useContext } from "react";
import "./Works.css";
import react from "../../img/reactz.png";
import Html from "../../img/html5-icon-505x512-zls0uohx.png";
import canva from "../../img/canva-icon.webp";
import bootstrap from "../../img/bootstrap.png";
import css from "../../img/css3-removebg-preview.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Tools to Work for
          </span>
          <span>Brands & Clients</span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img className="tools-circle" src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="tools-circle" src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="tools-circle " src={canva} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img className="tools-circle " src={bootstrap} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="tools-circle " src={css} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
