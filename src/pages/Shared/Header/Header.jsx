import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/FirebaseAuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const logOutHandler = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Fit Foodie Finds" height="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="Link navLink me-5" to={`/`}>
              Home
            </Link>
            <Link className="Link navLink me-5" to={`blog`}>
              Blog
            </Link>
          </Nav>

          {user ? (
              <Button onClick={logOutHandler} variant="outline-danger">Logout</Button>
          ) : (
            <Link to={"login"}>
              <Button variant="outline-success">Login</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
