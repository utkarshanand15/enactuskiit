import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Intro from "../components/Home_Intro/Intro";
import Value from "../components/Home_Values/value";
import "./home.css";
import Experience from "../components/Home_Experience/Experience";
import About from "../components/Home_About/about";
import Project from "../components/Home_Project/project";
import Contact from "../components/Home_Contact/Contact";
import Footer from "../components/Home_Footer/Footer";

function Home() {
    
    return (
        <div>
        <Navbar />

      <div
        className="App" style={{color: "white"}} >
            <Intro />
            <Value/>
            <Experience />
            <Project/>
            <About />
            <Contact />
        </div>
          <Footer/>

        </div>
    )
}

export default Home
