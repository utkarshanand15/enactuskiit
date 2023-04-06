import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import logo from "../../img/logo.svg"


const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    

    return (
        <div className= 'header'>
        <img className='logo' src={logo} alt=''/>

           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/team'>Team</Link>
               </li>
               <li>
                   <Link to='/project'>Project</Link>
               </li>
               <li>
                   <Link to='/event'>Event</Link>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
           </div>
        </div>
    )
}

export default Navbar
