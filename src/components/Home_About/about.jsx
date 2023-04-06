import React from "react";
import "./about.css";
import Encube from "../../img/Encube.png";
import Enwipe from "../../img/Enwipe.png";
import Enactus from "../../img/Enactus.png";
import Sankalp from "../../img/Sankalp.png";
import Siddhi from "../../img/Siddhi.png";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const About = () => {
  
  return (
    <div className="about" id="about">
      {/* left side */}
      <div className="a-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ fontSize:"1.5rem"}}>
            What does </span>

          <span  style={{color:"#FCA61F"}}>enactus do?</span>
          <spane>
          Enactus came to life in Kalinga Institute Of Industrial Technology (KIIT) and its sister institution Kalinga Institute of Social Sciences (KISS) in 2011 forming enactus KIIT-KISS under the guidance of Dr. Kaish Q Khan, our primary faculty adviser. Since then, the students have been finding various innovative ideas to implement to improve the quality of life of those who lack or are unable to find opportunities.


          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact</button>
          </Link>
         
        </div>

        {/* right side */}
      </div>
      <div className="a-right">
        <motion.div
          initial={{ rotate: 0}}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="a-mainCircle"
        >
          <div className="a-secCircle">
            <img src={Encube} alt="" />
          </div>
          <div className="a-secCircle">
            <img src={Enwipe} alt="" />
          </div>
          <div className="a-secCircle" style={{border:"#ffff"}}>
            <img src={Enactus} alt="" />
          </div>{" "}
          <div className="a-secCircle">
            <img src={Sankalp} alt="" />
          </div>
          <div className="a-secCircle">
            <img src={Siddhi} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="a-backCircle blueCircle"></div>
        <div className="a-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default About;
