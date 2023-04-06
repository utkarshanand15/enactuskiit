import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TeamCard from '../components/Team_Cards/team_card'
import Banner from '../components/Banner/Banner'
import Footer from "../components/Home_Footer/Footer";
import "./team.css";
import Header from '../components/Home/Header';





const Team = () => {
    return (
        <div>
            <Navbar />
            <Banner heading='Team' />
             <div className="App"  style={{color: "white"}}>  
             <Header heading="Team" paragraph="We believe in transforming innovation into action and action into progress"/>   
             <TeamCard/>
        </div>
        <Footer />

        </div>
    )
}

export default Team
