import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {

  const [error, setError] = useState('');

  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  }
  return (
    <>
      <h2 className="text-center">Login</h2>
      <p className="text-danger text-center">{error}</p>
      <Form onSubmit={loginHandler} className="w-50 m-auto mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Login
        </Button>
        <p>
          Don't have an account..? Please
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
