import React from 'react'
import './skill.css'

const Skill = () => {
    return (
        <section id="skillPage">
            <h1 className="skillTitle">My Skills</h1>
            <p className="skillDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptates libero distinctio consequatur iste, eius perspiciatis amet quis eos sit quae in facere reiciendis veritatis!</p>
            <h2 className='head1'>TECHNICAL SKILLS</h2>
            <div className="techSkills">
                <div className="skillBar">
                    <i class="fa-brands fa-html5"></i>
                    <div className="skillBarText">
                        <h3>HTML</h3>
                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
                    </div>
                </div>
                <div className="skillBar">
                    <i class="fa-brands fa-css3-alt"></i>
                    <div className="skillBarText">
                        <h3>CSS</h3>
                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
                    </div>
                </div>
                <div className="skillBar">
                    <i class="fa-brands fa-bootstrap"></i>
                    <div className="skillBarText">
                        <h3>BOOTSTRAP</h3>
                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></p>
                    </div>
                </div>
                <div className="skillBar">
                    <i class="fa-brands fa-js"></i>
                    <div className="skillBarText">
                        <h3>JAVASCRPIT</h3>
                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
                    </div>
                </div>
                <div className="skillBar">
                    <i class="fa-brands fa-react"></i>
                    <div className="skillBarText">
                        <h3>REACT</h3>
                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></p>
                    </div>
                </div>
                <div className="skillBar">
                    <i class="fa-brands fa-github"></i>
                    <div className="skillBarText">
                        <h3>GIT</h3>
                        <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
                    </div>
                </div>
            </div>
            <h2 className='head2'>SOFT SKILLS</h2>
            <div className="softSkills">
                <div className="softSkillBar">
                    <i class="fa-solid fa-user-plus"></i>
                    <div className="softSkillBarText">
                        <h3>Team Player</h3>
                    </div>
                </div>
                <div className="softSkillBar">
                    <i class="fa-solid fa-sliders"></i>
                    <div className="softSkillBarText">
                        <h3>Adaptability</h3>
                    </div>
                </div>
                <div className="softSkillBar">
                    <i class="fa-solid fa-calendar-xmark"></i>
                    <div className="softSkillBarText">
                        <h3>Time Management</h3>
                    </div>
                </div>
                <div className="softSkillBar">
                    <i class="fa-solid fa-check"></i>
                    <div className="softSkillBarText">
                        <h3>Problem-solving</h3>
                    </div>
                </div>
                <div className="softSkillBar">
                    <i class="fa-solid fa-ghost"></i>
                    <div className="softSkillBarText">
                        <h3>Creativity</h3>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Skill