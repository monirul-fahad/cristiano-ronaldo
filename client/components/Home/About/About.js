import React from "react";
import { Container } from "react-bootstrap";
import { RiUserStarLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineNaturePeople } from "react-icons/md";
import { ImHappy } from "react-icons/im";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Container>
        <div>
          <h6>Why Tour Dust...!!</h6>
          <h3>Why You Are Travel With Us...!!</h3>
        </div>
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="achievement-card mt-4">
              <div className="achievement-icon">
                <RiUserStarLine />
              </div>
              <h5>2000+ Our Worldwide guide</h5>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            {" "}
            <div className="achievement-card mt-4">
              <div className="achievement-icon">
                <FaRegHandshake />
              </div>
              <h5>100% trusted travel agency</h5>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            {" "}
            <div className="achievement-card mt-4">
              <div className="achievement-icon">
                <MdOutlineNaturePeople />
              </div>
              <h5>10+ year of travel experience</h5>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            {" "}
            <div className="achievement-card mt-4">
              <div className="achievement-icon">
                <ImHappy />
              </div>
              <h5>90% of our traveller happy</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
