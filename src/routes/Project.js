import React from 'react'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Project1 from '../components/Project/Project'
import Footer from '../components/Home_Footer/Footer'
import "./home.css"
import Header from '../components/Home/Header';

const Project = () => {
    return (
        <div>
            <Navbar />
            <Banner heading='Projects'/>
            <div className="App" style={{color: "white"}} > 
            <Project1/>           
             </div>
             <Footer/>

        </div>
    )
}

export default Project
