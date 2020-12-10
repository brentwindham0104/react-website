import React from 'react';
import { MemoryRouter, Switch, Route, Link , BrowserRouter as Router} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import Home from '.home';
import '../App.css';

// function Home() {
//     return (
//         <span>Home</span>
//     )
// }
function Resume(){
    return (
        <span>Resume</span>
    )
}

function Projects(){
    return (
        <span>Projects</span>
    )
} 

const Navbar = () => (
    //<span>Home</span> 
    
      <Router>
        <h1 className="header">Welcome To My Website</h1>
        <h2>
              <nav className="nav-links">
                  <ul>
                      <li>
                        <Link to="/">
                            <Home />
                        </Link>
                      </li>
                      <li>
                        <Link to="/resume">
                            <Resume />
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects">
                            <Projects />
                        </Link>
                      </li>
                  </ul>
              </nav>
        </h2>
        <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/resume">
              <Button>Resume</Button>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Button>Projects</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
      </Router>
);

export default Navbar;