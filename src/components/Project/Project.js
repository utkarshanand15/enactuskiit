import React from 'react'
import './Project.css'
import Enwipe1 from '../../assets/enwipe1.png'
import Enwipe2 from '../../assets/enwipe2.png'
import Generic1 from '../../assets/GENERIC1.png'
import Generic2 from '../../assets/GENERIC2.png'
import Siddhi1 from '../../assets/Siddhi.png'
import Siddhi2 from '../../assets/Siddhi1.png'
import Vetra1 from '../../assets/vetra1.png'
import Vetra2 from '../../assets/vetra2.png'
import Sankalp1 from '../../assets/sankalp1.png'
import Sankalp2 from '../../assets/sankalp2.png'
import Encube2 from '../../assets/encube2.png'
import Encube1 from '../../assets/encube1.jpg'


const Project = () => {
    return (
        <div className='project'>
            <div className='left'>
                <h1 style={{color:"#Ffcc00"}}>Project Enwipe</h1>
                <p>Project ENWIPE which laid its foundation in 2017, initially steered through with an impact which was fairly decent. The idea bred in our minds when we observantly noticed the unwise use of water to wash cars. Our aim was to provide an eco-friendly solution and door step service of car wash.</p>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Enwipe1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Enwipe2} className='img' alt='' />
                    </div>
                </div>
            </div>
            
            <div className='left'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Generic1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Generic2} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='right'>
                <h1 style={{color:"#Ffcc00"}}>Project Generic</h1>
                <p>Project Generic has been one of the most ingenious and ambitious projects implemented by Enactus KISS-KIIT. This project was based on a campaign launched by the Department of Pharmaceuticals, Government of India, known as "Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana Kendra" (PMBJPK). The main aim of this project was to provide quality medicines at affordable prices to the masses.</p>
            </div>
            <div className='left'>
                <h1 style={{color:"#Ffcc00"}}>Project Siddhi</h1>
                <p>Project Siddhi was an initiative taken by ENACTUS KISS-KIIT in the year 2016, with a vision of providing opportunity to women and transgender, to change their lives for the better and in the process eliminating the use of plastic bags by replacing them with paper bags. ENACTUS has worked with many beneficiaries, helped transgenders and women from backward areas with employment.</p>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Siddhi2} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Siddhi1} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='left'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Vetra1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Vetra2} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='right'>
                <h1 style={{color:"#Ffcc00"}}>Project Vetra</h1>
                <p>ENACTUS KISS-KIIT has always strived to reduce the use of single use plastic, expanding our previous initiative of Project Siddhi we sell bamboo straws and edible cutlery as well as modifying our design for the paper bags by including a seed strip in it.  
After the plastic ban which was enforced in Odisha in 2018, there was a drop in the use of plastic straws and bags. As a replacement for plastic straws, paper straws are used which are not reusable and tend to get soggy mid-use. The best replacement which can be adopted by restaurants and food services are bamboo straws. Our primary targets are restaurants and food services, and encourage them to stop the use of single-use plastic bags, straws and cutlery and instead use our venture.</p>
            </div>
            <div className='left'>
                <h1 style={{color:"#Ffcc00"}}>Project Encube</h1>
                <p>One of the most threatening issues we face today is water pollution. Our everyday activities have led to the massive demise of safe, clean water. Project ENCUBE seeks to minimize the usage of toxic detergents for washing clothes and replacing them with biodegradable detergent cubes.The sole focus of this project is to make affordable biodegradable detergent cubes. The commonly used detergents in households, laundry services and for other commercial purposes are toxic and contain non-biodegradable components which when left untreated and released in natural bodies cause pollution, and contaminate both water and soil.</p>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Encube2} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Encube1} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='left'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Sankalp1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Sankalp2} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='right'>
                <h1 style={{color:"#Ffcc00"}}>Project Sankalp</h1>
                <p>Plastic; this infamous need of our generation has been a very well-known environmental threat for the last decade and more. Adding to all the huge efforts being made to control and substitute plastic, we bring forward ‘Project Sankalp’- a project aimed to secure used plastic to build our greenest visions and ignite regenerative transition.Project Sankalp consists of three verticals- each working along the lines of up-cycling but, in different ways. Leading the project is the first vertical that aims to up-cycle plastic as bricks (Eco-bricks). The second vertical is what we get out when up-cycling meets the magic of hand-looming - Used plastic bags will be sterilized and then be processed into handloom yarns to give us beautiful, colorful pieces of fabric.</p>
            </div>

            
        </div>
    )
}

export default Project
