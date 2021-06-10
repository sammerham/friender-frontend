import React from 'react';
import {Link, NavLink, BrowserRouter, Switch} from 'react-router-dom';
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

/**  */
function NavBar (){

    return (
        <Navbar bg="dark" variant="dark" className="navbar">
             <Container className="Navbar-anon">
              <Nav className="me-auto">
                <NavLink exact to="/" id="friender">Frinder</NavLink>
                <NavLink exact to="/signup">Sign Up</NavLink>
                <NavLink exact to="/login">Log In</NavLink>
              </Nav>
            </Container>
            <Container className="Navbar-loggedin">
              <Nav className="me-auto">
                {/* <NavLink exact to="/">Jobly</NavLink> */}
                <NavLink exact to="/matches">Matches</NavLink>
                <NavLink exact to="/likes">Likes</NavLink>
                <NavLink exact to="/profile">Profile</NavLink>
                {/* <NavLink onClick={logout} exact to="/">Logout</NavLink> */}
              </Nav>
            </Container>
        </Navbar>
      )
}
export default NavBar;