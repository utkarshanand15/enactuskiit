import React, { useContext } from "react";
import "./value.css";
import Card from "../Card/Card";
import Collab from "../../img/Collab_1.png";
import Intregrity from "../../img/Intregrity.png";
import Innovation from "../../img/Innovation.png";
import { motion } from "framer-motion";

const Value = () => {
  
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="value" id="value">
      <div className="awesome">
        <span style={{ color: "white"  }}>What</span>
        <span style={{color:"#FCA61F"}}>we believe in?</span>
        <spane>
        Enactus is a nonprofit organization that was founded in the year 1965.It is led by student teams from all the top universities in the world which creates entrepreneurial projects to address social, environmental, and economic issues in order to achieve the sustainable development goals in the community.

        </spane>
        <a href="#">
          <button className="button s-button">Read More</button>
        </a>
      </div>
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
          <Card
            emoji={Intregrity}
            heading={"Integrity"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}/>

        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "8rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
          <Card
            emoji={Innovation}
            heading={"Innovation"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}/>
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
          <Card
            emoji={Collab}
            heading={"Collaboration"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"/>
        </motion.div>

      </div>
    </div>
  );
};

export default Value;
