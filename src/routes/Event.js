import React from 'react'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/index';
import "./event.css"
import Footer from "../components/Home_Footer/Footer";
import "./home.css";


const Event = () => {
    return (
        <div>
            <Navbar />
            <Banner heading='Events'/>
            <div className="App" style={{color: "white"}} >          
            <div className='container'>
            <Home/>    
            </div>
             </div>
             <Footer/>
         </div>
    )
}

export default Event
