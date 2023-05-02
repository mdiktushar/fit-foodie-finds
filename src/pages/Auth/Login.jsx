import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2 className="text-center">Login</h2>
      <Form className="w-50 m-auto mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Login
        </Button>
        <p>
          Don't have an account..? Please{" "}
          <Link className="Link authLink" to={`/register`}>
            create an account
          </Link>
        </p>
      </Form>

      <div className="text-center">
        <Button className="mb-3 w-50" variant="outline-danger">
          Google
        </Button>
        <br />
        <Button className="mb-3 w-50" variant="outline-dark">
          GitHub
        </Button>
      </div>
    </>
  );
};

export default Login;
