import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  // const { user } = useContext(AuthContext);

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="banner-logo" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="">{moment().format("dddd, MMMM D YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest </Button>
        <Marquee className="text-danger" speed={40} pauseOnHover>
          I can be a React component, multiple React components, or just some
          text.I can be a React component, multiple React components, or just
          some text.
        </Marquee>
      </div>
      {/* <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link>
                  <span className="me-2">{user.displayName}</span>
                  <FaUserCircle className="fs-3"></FaUserCircle>
                </Nav.Link>
              )}
              <Nav.Link eventKey={2}>
                {user ? (
                  <Button variant="outline-primary">Log-out</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="outline-primary">Login</Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </Container>
  );
};

export default Header;
