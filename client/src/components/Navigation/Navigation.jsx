import { useContext } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./Navigation.module.css";
import Path from "../../paths";
import AuthContext from "../../context/authContext";

export default function Navigation() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className={styles.navBackgroundColor}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Book Worm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={Path.Home}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={Path.Books}>
              Books
            </Nav.Link>
            <Nav.Link as={Link} to={Path.About}>
              About
            </Nav.Link>

            {isAuthenticated && (
              <>
                <Nav.Link style={{ pointerEvents: "none" }}>|</Nav.Link>
                <Nav.Link as={Link} to={Path.CreateBook}>
                  Create Book
                </Nav.Link>
                <Nav.Link as={Link} to={Path.Profile}>
                  Profile
                </Nav.Link>
              </>
            )}

            {!isAuthenticated && (
              <>
                <Nav.Link style={{ pointerEvents: "none" }}>|</Nav.Link>
                <Nav.Link as={Link} to={Path.Login}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={Path.Register}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
