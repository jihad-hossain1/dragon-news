import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import bg from '../../../assets/bg1.png'
import {
  FaBeer,
  FaGithub,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button variant="outline-primary">
        <FaGoogle></FaGoogle> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twiter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instgram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
