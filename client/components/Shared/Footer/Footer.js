import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area py-5 ">
      <Container>
        <footer className="row text-start">
          <div className="col-md-6 col-lg-3 ">
            <h3>About Us</h3>
            <p>
              We provide friendly, well-trained guide for your travelling. you
              will be satisfied. Our priority is you. We'll never leave you
              hand. You will never walk alone.
            </p>
            <button className="btn btn-warning">Events</button>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <h3>Pages</h3>
            <a href="/">Home</a>
            <br />
            <a href="/">About Us</a>
            <br />
            <a href="/">Events</a>
            <br />
            <a href="/">Manage</a>
            <br />
            <a href="/">Blog</a>
            <br />
            <a href="/">Contact</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Offices</h3>
            <a href="#">France</a>
            <br />
            <a href="#">Bangladesh</a>
            <br />
            <a href="#">India</a>
            <br />
            <a href="#">Canada</a>
            <br />
            <a href="#">Spain</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Contacts</h3>
            <h5>Phone: +88 01879664431</h5>
            <p>E-mail: mimon@gmail.com</p>
            <br />
            <p>Address: 12/13 Dhanmandi Dhaka, 1214</p>
          </div>
        </footer>
        <div className="text-center">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
