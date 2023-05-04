import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import isEmail from "validator/es/lib/isEmail";

const Login = () => {
  const { singIn, googleLogin, gitHubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = location.state?.from?.pathname || `/`;

  const loginHandler = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email.length == 0) {
      setError("Not an Email");
      return;
    }
    if (password.length < 6) {
      setError(`Password length can't be less than 6`);
      return;
    }
    if (!isEmail(email)) {
      setError("Not an Email");
      return;
    }

    // console.log(email, password);
    singIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Login Successful: ", user);
        navigate(goTo, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  };

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
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
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
        <Button
          onClick={() => googleLogin(navigate, goTo)}
          className="mb-3 w-50"
          variant="outline-danger"
        >
          Google
        </Button>
        <br />
        <Button
          onClick={() => gitHubLogin(navigate, goTo)}
          className="mb-3 w-50"
          variant="outline-dark"
        >
          GitHub
        </Button>
      </div>
    </>
  );
};

export default Login;
