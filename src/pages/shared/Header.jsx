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
    </Container>
  );
};

export default Header;
