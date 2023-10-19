import React from 'react'
import './myProject.css'
import project1 from './../../assets/portfolio-1.png'
import project2 from './../../assets/portfolio-2.png'
import project3 from './../../assets/portfolio-3.png'
import project4 from './../../assets/portfolio-4.png'
import project5 from './../../assets/portfolio-5.png'
import project6 from './../../assets/portfolio-6.png'

const MyProject = () => {
    return (
        <section id="projects">
            <h2 className="projectTitle">My Projects</h2>
            <span className="projectDesc">Committed and goal-oriented Information Technology graduate looking to pursue a career in the Front end developer domain. Possess excellent knowledge in HTML, CSS, JavaScript and React frontend library. Ability to learn things quickly and capable of working in a fast-paced and team-driven environment.</span>
            <div className="projectList">
                <div className="project">
                    <img src={project1} alt="UIDesign" className='aboutBarImg' />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ab!</p>
                        <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="project">
                    <img src={project2} alt="UIDesign" className='aboutBarImg' />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ab!</p>
                        <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="project">
                    <img src={project3} alt="UIDesign" className='aboutBarImg' />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ab!</p>
                        <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="project">
                    <img src={project4} alt="UIDesign" className='aboutBarImg' />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ab!</p>
                        <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="project">
                    <img src={project5} alt="UIDesign" className='aboutBarImg' />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ab!</p>
                        <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="project">
                    <img src={project6} alt="UIDesign" className='aboutBarImg' />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ab!</p>
                        <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <button className="projectBtn">See More</button>
        </section>
    )
}

export default MyProject