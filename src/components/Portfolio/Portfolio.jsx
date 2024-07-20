import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import catcare from "../../img/catcare.jpg";
import Mary from "../../img/catcare76.jpg";
import mary from "../../img/catcare5.jpg";
import plugg from "../../img/g1.jpg";
import vic from "../../img/catcare6.jpg";
import vick from "../../img/ring.jpg";
import baker from "../../img/Valentine.png";
import bakers from "../../img/cnv.jpg";
import kitchen from "../../img/bake.jpg";
import bud2 from "../../img/bud2.jpg";
import bud3 from "../../img/g2.jpg";
import bud4 from "../../img/bud4.jpg";
import bud5 from "../../img/bud5.jpg";
import budweiser from "../../img/g3.jpg";
import redeemc from "../../img/redeemc.jpg";
import summer1 from "../../img/summer1.jpg";
import summer2 from "../../img/summer2.jpg";
import gadgets from "../../img/WhatsApp Image 2024-05-05 at 15.51.36_1e78a813.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span className="project" style={{ color: darkMode ? "white" : "" }}>
        Recent Projects
      </span>
      <span className="">Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={catcare} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mary} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={plugg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mary} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={summer1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vick} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={baker} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gadgets} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={summer2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={kitchen} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bakers} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bud2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bud3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bud4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bud5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={budweiser} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={redeemc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
