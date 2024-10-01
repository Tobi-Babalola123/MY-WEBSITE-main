import React, { useContext } from "react";
import "./Intro.css";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Tobi Babalola</span>
          <span>I'm a Frontend Developer</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a target="_blank" href="https://github.com/Tobi-Babalola123">
            <img src="/img/github.png" alt="" />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/tobi-babalola-9638372a1"
          >
            <img src="/img/linkedin.png" alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/pinnacle_s_lair?igsh=NTc4MTIwNjQ2YQ=="
          >
            <img src="/img/instagram.png" alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src="/img/vector1.png" alt="" />
        <img src="/img/vector2.png" alt="" />
        <img src="/img/appi.png" alt="" className="profile-pic" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src="/img/glassesimoji.png"
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img="/img/thumbup.png" text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv
            img="/img/crown.png"
            text1="Frontend Developer"
            text2=""
          />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
