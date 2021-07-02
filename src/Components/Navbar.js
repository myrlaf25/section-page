import React from "react";
import nytelock from '../assets/logo/nytelockLogo.png'
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';



function Navbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className="navbar">
    <Container className='headerContainer'>
   <img 
   className='logo'
   src={nytelock}
   alt='nytelockLogo'
   />
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item backgroundColor='yellow'>
          <Nav.Link backgroundColor='yellow' eventKey="1" href="#/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            About
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Services" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">
            Graphic Design & Branding
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Logo Design</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Name Card Design</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">
            Web Design & Development
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Flyer Design</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">
            SEO & Keyword Analysis
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Video Production</NavDropdown.Item>
        </NavDropdown>

        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            Portfolio
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            Blog
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </div>
  );
}

export default Navbar;
