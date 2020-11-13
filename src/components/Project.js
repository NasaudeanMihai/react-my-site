import React from 'react';
import '../App.css';
import todoList from '../image/todoList.jpg';
import cityTours from '../image/cityTours.jpg';
import weather from '../image/weather.jpg';


function Project() {

  return (
    
    <div className="appo">
    <h1>Project</h1>
    <p><br></br></p>
    <h2 className="about-description">
       Those are some project that I worked on using <a href="https://reactjs.org/">React</a>.
       If you are interested in more projects that I made you can find them on <a href="https://github.com/NasaudeanMihai">GitHub</a>.
    </h2>
    <h2 className="about-description" >
    I appreciate any help that can make me progress so feel free to contact me!
    </h2>
    <ul className="project-links">
        <li className="project-icon" >
          <a href="https://github.com/NasaudeanMihai/Todo-react" >
            <img className="img-project" src={todoList} alt="" />
            <span>React Todo</span>
            </a>
          </li>
        <li className="project-icon" >
          <a href="https://github.com/NasaudeanMihai/react-city-tours" >
          <img  className="img-project"  src={cityTours} alt="" />
            <span>React City-tours</span>
            </a>
          </li>
        <li className="project-icon" >
          <a href="https://github.com/NasaudeanMihai/react-weather" >
          <img  className="img-project"  src={weather} alt="" />
            <span>React Weather</span>
            </a>
          </li>

    </ul>
    </div>
    
  );
}

export default Project;
