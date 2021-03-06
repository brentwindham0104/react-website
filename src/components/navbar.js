import React from 'react';
import { MemoryRouter, Switch, Route, Link , BrowserRouter as Router} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './home';
//import '../App.css';
import './navbar.css';
import Resume from './resume.js';

function Homes() {
    return (
        <span>Homes </span>
    )
}
// function Resume(){
//     return (
//         <span>Resume</span>
//     )
// }

function Projects(){
    return (
        <span>Projects</span>
    )
} 

const Navbar = () => (
    //<span>Home</span> 
    
      <Router>
        
        <h2>
              <nav>
                  <ul className="navbar">
                      <li  className="nav-link">
                        <Link to="/">
                            Home
                        </Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/resume">
                            Resume
                        </Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/projects">
                            Projects
                        </Link>
                      </li>
                  </ul>
              </nav>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
              </Switch>
        </h2>
      </Router>
);

export default Navbar;