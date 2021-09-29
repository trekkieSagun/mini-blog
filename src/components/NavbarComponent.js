import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="navbar-content">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Mini Blog</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/posts">Posts</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="/create"
                style={{
                  color: "white",
                  backgroundColor: "green",

                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <Link to="/create">Create new Post</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
