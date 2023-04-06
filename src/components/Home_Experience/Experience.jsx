import React from "react";
import "./Experience.css";
const Experience = () => {

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle">10+</div>
        <span>Years </span>
        <span style={{color:" #FCA61F"}}>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >6+</div>
        <span>Completed </span>
        <span  style={{color:" #FCA61F"}}>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">55+</div>
        <span>Working</span>
        <span  style={{color:" #FCA61F"}}>Member</span>
      </div>
    </div>
  );
};

export default Experience;
