import React from 'react';
import '../App.css';

function Contact() {

  return (
 
    <div className ="appo">
      <h1>Contact</h1>
      <p><br></br></p>
      <h2 className="contact-description">
        Thank you for taking the time to visit my website. 
        If you have any ideas, feedback you may find me, at :
      </h2>
      <h3><a href="mailto:emilianmihainasaudean93@gmail.com">emilianmihainasaudean93@gmail.com</a></h3>
      <p></p>
      <ul className="contact-links">
        <li className="icon" >
          <a href="https://www.facebook.com/emilianmihai.nasaudean/" >
            <i className="fab fa-facebook"></i>
            <span> Facebook</span>
          </a>
        </li>
        <li className="icon" >
        <a href="https://github.com/NasaudeanMihai" >
            <i className="fab fa-github-square"></i>
            <span> GitHub</span>
          </a>
        </li>
        <li className="icon" >
        <a href="https://www.instagram.com/mihai.en/" >
            <i className="fas fa-camera"></i>
            <span> Instagram</span>
          </a>
        </li>
        <li className="icon" >
          <a href="https://www.linkedin.com/in/emilian-mihai-nasaudean-a48911186/" >
            <i className="fab fa-linkedin"></i>
            <span> Linkedin</span>
          </a>
        </li>
      </ul>
    </div>

  );
}

export default Contact;
