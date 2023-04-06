import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Github from "../../img/2.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Triangle from "../../img/triangle.svg"
import { Link } from "react-scroll";
const Intro = () => {
 
  

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span >enactus</span>
          <span  style={{color:"#FCA61F"}}>KIIT-KISS</span>
          <span>
          Enactus is the world’s largest experiential<br></br> learning platform dedicated to creating a better world
          <br></br> developing the next generation of entrepreneurial<br></br> leaders and social innovators...
          </span>
        </div>
        <Link to="value" smooth={true} spy={true}>
          <button className="button i-button">Read More</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://www.facebook.com/kiitenactus/"><img src={Github} alt=""/></a>
        <a href="https://www.linkedin.com/company/enactus-kiit/"><img src={LinkedIn} alt=""/></a>
        <a href="https://instagram.com/enactus_kiit?igshid=YmMyMTA2M2Y="><img src={Instagram} alt=""/></a>

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Triangle} alt="" />
       
       
      </div>
    </div>
  );
};

export default Intro;
