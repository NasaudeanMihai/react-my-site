import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import logo from './image/emnLogo1.jpg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {

  return (
    
    <Router>
    <nav>
      
      <Link to="/">
      <img className="logo" src={logo} alt="Here is the Logo" />
      </Link>
      <ul className="nav-links">
        <Link to="/about">
          <li className="nav-btn">About</li>
        </Link>
        <Link to="/project">
          <li className="nav-btn">Project</li>
        </Link>
        <Link to="/contact">
          <li className="nav-btn">Contact</li>
        </Link>
      </ul>
    </nav>
    <div>
      <Switch>
        <Route path="/" exact component={Home}/>

        <Route path="/about" component={About} />

        <Route path="/project" component={Project} />

        <Route path="/contact" component={Contact} />

      </Switch>
    </div>
    </Router>
  );
}


export default App;
