import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h2 className="text-center">Register</h2>
      <Form className="w-50 m-auto mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name address</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" placeholder="Photo Url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Register
        </Button>

        <p>
          Already have an account...!{" "}
          <Link className="Link authLink" to={`/login`}>
            Login
          </Link>
        </p>
      </Form>

    </>
  );
};

export default Register;
