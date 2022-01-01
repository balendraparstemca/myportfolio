import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import addressLogo from "../../Assets/address_image.svg";
import { Fade} from "react-reveal";

import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home3() {
  return (
    <Container fluid className="home-contact" id="about">
      <Container>
        <Row>
        <Col md={6} style={{ paddingBottom: 20 }}>
            <Fade bottom duration={8000} distance="90px">
              <img src={addressLogo} alt="home pic" className="img-fluid" />
              </Fade>
            </Col>
          <Col md={6} className="home-about-description">
          <Fade top duration={8000}>
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> Contact Me</span> 
            </h1>
            </Fade>
          <Fade right duration={2000}>
         
            <p className="home-about-body">
            I am available. You can message me if you are interested in my profile for work .I will reply within 24 hours 
           
            
            </p>
            <br/>
            <p>
              <h5>Mobile No.: 9424703403</h5>
              <h5>Email:balendramcapu@gmail.com</h5>
            </p>
            <div style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href='/resume' target="_blank">
           
            &nbsp;See My Resume
          </Button>
       
                </div>
            </Fade>
            <div style={{marginTop:'25px'}}>
            <Fade top duration={8000}>
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> Address</span> 
            </h1>
            </Fade>
              <Fade right duration={2000}>
         
            <p className="purple">
           Hyderabad
            </p>
            </Fade>
            </div>
          </Col>
        
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/balendraparstemca"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/balendra-paraste-806503116/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;
