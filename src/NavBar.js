import React, { useContext } from "react";
import UserContext from "./userContext";
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

/**  */
function NavBar({handleLogout}) {
  const currentUser = useContext(UserContext);
  console.log("NavBar currentUser in Nav", currentUser);

  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <NavLink exact to="/" id="friender">Friender</NavLink>
      {currentUser === null

      ? <Container className="Navbar-anon"> 
        <Nav className="me-auto">
          <NavLink exact to="/signup">Sign Up</NavLink>
          <NavLink exact to="/login">Log In</NavLink>
        </Nav>
      </Container>
      : <Container className="Navbar-loggedin">
        <Nav className="me-auto">
          <NavLink exact to="/matches">Matches</NavLink>
          <NavLink exact to="/likes">Likes</NavLink>
          <NavLink exact to="/profile">Profile</NavLink>
          <NavLink onClick={handleLogout} exact to="/">Logout</NavLink>
        </Nav>
      </Container>}
    </Navbar>
  )
}
export default NavBar;