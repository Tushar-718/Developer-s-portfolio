import React from 'react'
import './about.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const About = () => {
    return (
        <section id='about'>
            <span className="aboutTitle">About Me</span>
            <span className="aboutDesc">Committed and goal-oriented Information Technology graduate looking to pursue a career in the Front end developer domain. Possess excellent knowledge in HTML, CSS, JavaScript and React frontend library. Ability to learn things quickly and capable of working in a fast-paced and team-driven environment.</span>
            <div className="aboutBars">
                <div className="aboutBar">
                    <img src={UIDesign} alt="UIDesign" className='aboutBarImg' />
                    <div className="aboutBarText">
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore!</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={WebDesign} alt="WebDesign" className='aboutBarImg' />
                    <div className="aboutBarText">
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cumque.</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={AppDesign} alt="AppDesign" className='aboutBarImg' />
                    <div className="aboutBarText">
                        <h2>App Design</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, omnis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About