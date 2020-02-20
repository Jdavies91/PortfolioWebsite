import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarItems from './NavBarItems'
import '../../css/Navbar.css'
import {Navbar, Nav,NavDropdown} from'react-bootstrap'
function Nbar(){

    return(
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand className="Navbarlogo"href="/">Jonathan Davies 
          <br/>
          
          </Navbar.Brand >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto fontcolor">
    <NavBarItems id='/' name="Home"/>
    <NavBarItems id='/about' name=" About me"/>
    <NavBarItems id='/resume' name="Resume"/>
    <NavDropdown title="Projects" bg="dark"className="float-left " >
      <NavDropdown.Item href="/webprojects">Web Projects</NavDropdown.Item>
      <NavDropdown.Item href="/softwareprojects">Software Projects</NavDropdown.Item>
      </NavDropdown>
    <NavBarItems id='/contact' name="Contact me"/>
 
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

    )
}





export default Nbar