import React from 'react';
import '../cssStyle/project.css';
import todoList from '../image/todoList.jpg';
import cityTours from '../image/cityTours.jpg';
import weather from '../image/weather.jpg';


function Project() {

  return (
    
    <div>
    <h1>Project</h1>
    <p><br></br></p>
    <h2 className="project-desc">
       Those are some project that I worked on using <a href="https://reactjs.org/">React</a>.
       If you are interested in more projects that I made you can find them on <a href="https://github.com/NasaudeanMihai">GitHub</a>.
    </h2>
    <h2 className="project-desc" >
    I appreciate any help that can make me progress so feel free to contact me!
    </h2>
    <ul className="project-li">
        <li className="li-icon-project" >
          <a href="https://github.com/NasaudeanMihai/Todo-react" >
            <img src={todoList} alt="" />
            <span>React Todo</span>
            </a>
          </li>
        <li className="li-icon-project" >
          <a href="https://github.com/NasaudeanMihai/react-city-tours" >
          <img src={cityTours} alt="" />
            <span>React City-tours</span>
            </a>
          </li>
        <li className="li-icon-project" >
          <a href="https://github.com/NasaudeanMihai/react-weather" >
          <img src={weather} alt="" />
            <span>React Weather</span>
            </a>
          </li>

    </ul>
    </div>
    
  );
}

export default Project;
