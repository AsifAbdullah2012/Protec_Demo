import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">Protec</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              {/*
                               <NavDropdown.Item as={Link} to="/new-page">
                 New Page
               </NavDropdown.Item>
              
               */}

              {/* ----- OPEN New Tab  */}

              <NavDropdown.Item
                onClick={() =>
                  window.open("/contact", "_blank", "noopener,noreferrer")
                }
              >
                Contact
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  window.open("/newpage", "_blank", "noopener,noreferrer")
                }
              >
                Custom Widget
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  window.open("/newpage", "_blank", "noopener,noreferrer")
                }
              >
                New Page
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
