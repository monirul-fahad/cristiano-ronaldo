import React from "react";
import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "} */}
            Travel Us
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link className="text-white fs-5" as={HashLink} to="/home#home">
              Home
            </Nav.Link>

            <Nav.Link
              className="text-white fs-5"
              as={HashLink}
              to="/home#about"
            >
              About Us
            </Nav.Link>

            <Nav.Link className="text-white fs-5" as={Link} to="/myEvents">
              My Events
            </Nav.Link>
            <Nav.Link className="text-white fs-5" as={Link} to="/manageEvents">
              Manage Events
            </Nav.Link>
            <Nav.Link className="text-white fs-5" as={Link} to="/addEvent">
              Add Events
            </Nav.Link>

            <Navbar.Text>
              <span className="fs-5 text-info fw-bold">
                {user?.displayName}
              </span>{" "}
            </Navbar.Text>

            {user?.email ? (
              <Button onClick={logOut} variant="warning" className="ms-2">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                {" "}
                <button className="btn btn-danger">Sign In</button>{" "}
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
