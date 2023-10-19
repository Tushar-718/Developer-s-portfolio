import React from 'react';
import './intro.css';
import bg from '../../assets/img1.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Tushar Kumar</span><br/>Web Developer</span>
                <p className="introPara">I am skilled web designer with experience in creating <br/> visually appealing and user friendly websites.</p>
                <Link><button type="button" className='btn'><img src={btnImg} alt='Hire me' className='btnImg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt='profile' className='bg' />
        </section>
    )
}

export default Intro