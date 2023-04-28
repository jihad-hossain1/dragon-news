import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("loooog", logOut);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/category/0">Home</Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <>
                  <span className="me-2">{user.displayName}</span>
                  <FaUserCircle className="fs-3"></FaUserCircle>
                </>
              )}

              {user ? (
                <Button onClick={handleLogOut} variant="outline-primary">
                  LogOut
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="outline-primary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
