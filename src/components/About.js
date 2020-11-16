import React from 'react';
import '../cssStyle/about.css';
import me from '../image/me1312.jpg';


function About() {

  return (

    <div>
    <h1>About</h1>
    <img className="img-me" src={me} alt="" width="200" height="313"/>
    <h2 className="desc" > Hello my name is Mihai! </h2>
    <p><br></br></p>
    <h2 className="desc">
      I began my adventure into the world of coding after i finished my bachelor degree in Robotics.
      All I knew was that I wanted to became a programmer, little did i knew how
      vast the programming is. After talking with friends that are working in programming I was 
      introduced to web development using <a href="https://reactjs.org/" >React</a>.
    </h2>
    <p><br></br></p>
    <h2 className="desc" >
      Know what I strive for is to get better at programming and be the best version of myself.
      I try to learn from anyone who is willing to teach me. I did some course on <a href="https://www.udemy.com/" >Udemy</a> :
    </h2>
    <ul className="desc" >
      <li>
        JavaScript
      </li>
      <li>
        Html
      </li>
      <li>
        Css
      </li>
      <li>
        Java
      </li>
    </ul>
    </div>

  );
}

export default About;
