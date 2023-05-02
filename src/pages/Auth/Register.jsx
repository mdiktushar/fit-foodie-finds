import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState('');

  
  const registerHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoUrl.value;
    const password = form.password.value;

    console.log(name, email, photo, password);
  };
  return (
    <>
      <h2 className="text-center">Register</h2>
      <p className="text-danger text-center">{error}</p>
      <Form onSubmit={registerHandler} className="w-50 m-auto mb-3">
        <Form.Group className="mb-3" >
          <Form.Label>Name address</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Photo Url</Form.Label>
          <Form.Control name="photoUrl" type="text" placeholder="Photo Url" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Register
        </Button>

        <p>
          Already have an account...!
          <Link className="Link authLink" to={`/login`}>
            Login
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Register;
