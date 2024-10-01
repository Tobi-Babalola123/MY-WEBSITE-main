import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
// import profilePic1 from "../../img/vicki-modified.png";
// import profilePic2 from "../../img/maria-modified.png";
// import profilePic3 from "../../img/SHALOM.jpg";
// import profilePic4 from "../../img/Mimie.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: "/img/vicki.png",
      review:
        "Tobi did absolutely excellent work for me designing a logo, and a flyer, and other promotional material and did it quickly! I will reach out to Tobi every time I have a need. I can’t say enough positive things about the experience.",
      // Vicki"
    },

    {
      img: "img/maria.png",
      review:
        "Tobi was fantastic to work with from start to finish.  Working with Tobi was worth every penny and was surprisingly affordable!",
    },
    {
      img: "img/SHALOM.jpg",
      review:
        "I worked with Tobi to implement a logo design for my Landscaping startup. It was a pleasure every step of the way.He understood my ideas clearly and communicated them back to me. The work he produced was stunning,",
    },
    {
      img: "img/Mimie.jpg",
      review:
        "I’ve been working with Casey exclusively since 2014 and it has been great! He works fast and consistently delivers high-quality work. He takes my vision and translates it into a professional design that functions for my business goals.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
