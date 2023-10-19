import React, { useState } from 'react';
import './navbar.css';
import logo1 from '../../assets/logo1.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const[showMenu,setShowMenu]=useState(false);
    return (
        <nav className='navbar'>
            <img src={logo1} className='logo' alt='logo' />
            <div className='desktopMenu'>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLinkItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className=" desktopMenuLinkItem">About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">Projects</Link>
                <Link activeClass="active" to="skillPage" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">Skills</Link>
            </div>
            <button className='desktopMenuBtn' onClick={()=>{
                document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me
            </button>

            {/* <img src={menu} className='logo' alt='logo' /> */}
            <i class="fa-solid fa-bars" id="mobMenu" onClick={()=>setShowMenu(!showMenu)}></i>
            <div className='navMenu' style={{display : showMenu?'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className=" linkItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="skillPage" spy={true} smooth={true} offset={-50} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar