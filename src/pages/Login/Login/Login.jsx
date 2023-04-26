import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-25 mx-auto">
      <h4 className="text-center">Log in here</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          LogIn
        </Button>{" "}
        <br />
        <Form.Text className="">
          Don't Have an Account?
          <Link to="/register"> Register here</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
