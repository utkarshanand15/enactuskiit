import React, { useContext } from "react";
import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Sidebar from "../../img/Siddhi_1.png";
import Ecommerce from "../../img/GENERIC1.png";
import MusicApp from "../../img/Encube.jpg";
import Vetra from "../../img/Vetra_2.png"
const Project = () => {
  
  return (
    <div className="home_project" id="home_project">
      {/* heading */}
      <span >Recent</span>
      <span  style={{color:"#FCA61F"}}>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="home_project-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Vetra} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
