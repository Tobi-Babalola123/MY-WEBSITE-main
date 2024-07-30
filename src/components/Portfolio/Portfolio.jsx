import React, { useContext } from "react";
import { useState } from "react";
import "./Portfolio.css";
import slides from "../../data.json";
// import "bootstrap/js/src/modal";
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
    <>
      <div className="portfolio" id="portfolio">
        {/* heading */}
        <span className="project" style={{ color: darkMode ? "white" : "" }}>
          Recent Projects
        </span>
        <span className="">Portfolio</span>

        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 1.7,
            },
            865: {
              slidesPerView: 2.92,
            },
            1000: {
              slidesPerView: 2.93,
            },
            1500: {
              slidesPerView: 6,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
          grabCursor={true}
          className="portfolio-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index + 1}>
              <img src={slide.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        aria-labelledby="exampleModalLabel"
        className="modal fade "
        id="imageExample"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <img src={catcare} alt="image" className="d-block w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
