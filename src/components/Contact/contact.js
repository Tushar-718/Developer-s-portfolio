import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pxwqy3t', 'template_ktzq22s', form.current, '4s4As4XV7xZ__jwHc')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <div className="contactContainer">
        <div className="contactLeft">
          <p><i class="fa-solid fa-paper-plane"></i>demo123@gmail.com</p>
          <p><i class="fa-solid fa-square-phone"></i>97XXXXXXXX</p>
          <p><i class="fa-brands fa-github"></i>https://github.com/XYZ</p>
          <div className="socialIcons">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-square-twitter"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <a href="" download>Download CV</a>
        </div>
        <div className="contactRight">
          <form action="" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="Name" placeholder='Your Name' required />
            <input type="email" name="user_email" className="email" placeholder='Your Email' required />
            <textarea className="message" name="message" rows="6" placeholder='Your Message'></textarea>
            <button type="submit" value="Send" className='submitBtn'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact