import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaLinkedin, FaTwitter ,FaInstagram } from 'react-icons/fa'





const Footer = () => {
  return (
    <footer className="footer-color">
      <div className="wave" >
        
      </div>
        <ul className="social_icon">
          <li><a href="https://www.facebook.com/100024733697783/posts/1375648823269561/?mibextid=Yed3t44RZhCy0OuM"><i ><FaFacebook/></i></a></li>
          <li><a href="https://www.instagram.com/p/CU98TSOouca/?igshid=YmMyMTA2M2Y="><i ><FaInstagram/></i></a></li>
          <li><a href="https://www.linkedin.com/company/enactus-kiit/"><i ><FaLinkedin/></i></a></li>

        </ul>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/project">Project</a>
          </li>
          <li>
            <a href="/event">Event</a>
          </li>
          
           
        </ul>

      <p>
      Copyright © Enactus KIIT-KISS
      </p>
    </footer>

  );
};

export default Footer;
