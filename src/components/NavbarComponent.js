import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/post">Posts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="/create"
                style={{
                  color: "whitesmoke",
                  backgroundColor: "red",
                  border: "1px solid white",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Create new Post
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
