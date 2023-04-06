import React from "react";
import "./team_card.css";
import Gaurav from "../../img/Gaurav.jpg"
import Shreeja from "../../img/Shreeja.jpeg"
import Harsh from "../../img/Harsh.png"

import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter,FaInstagram} from 'react-icons/fa'



const teamCard = () => {
    const team = [
      
    ]; 
     return (
        <div class="main">
        <div class="profile-card">
            <div class="img">
                <img src={Shreeja}/>
            </div>
            <div class="caption">
                <h3>Shreeja Verma</h3>
                <p>Director Strats And Communication</p>
                <div class="social-links">
                    <a href="https://instagram.com/shreejaverma__?igshid=YmMyMTA2M2Y="><i ><FaInstagram/></i></a>
                    <a href="https://m.facebook.com/100003059560731/"><i ><FaFacebook/></i></a>
                    <a href="https://www.linkedin.com/in/shreeja-verma-she-her-622b001b5"><i ><FaLinkedin/></i></a>
                </div>
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={Gaurav}/>
            </div>
            <div class="caption">
                <h3>Gaurav Verma</h3>
                <p>Director Operations</p>
                <div class="social-links">
                <a href="https://www.instagram.com/vgauravkumar"><i ><FaInstagram/></i></a>
                    <a href="https://www.facebook.com/gauravkumar.verma.7"><i ><FaFacebook/></i></a>
                    <a href="https://www.linkedin.com/in/vgauravkumar"><i ><FaLinkedin/></i></a>
                </div>
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={Harsh}/>
            </div>
            <div class="caption">
                <h3 style={{color:"#000000"}}>Harsh Raj</h3>
                <p>Director Design</p>
                <div class="social-links">
                <a href=" https://www.instagram.com/harzssh/"><i ><FaInstagram/></i></a>
                    <a href="https://www.facebook.com/harshrajgodda/"><i ><FaFacebook/></i></a>
                    <a href="https://www.linkedin.com/in/harsh-raj-aa6557183/"><i ><FaLinkedin/></i></a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default teamCard
