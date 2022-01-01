import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avtar.png";
import { Fade, Zoom } from "react-reveal";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Fade top duration={8000}>
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
            </Fade>
            <Fade left duration={2000}>
             

              <p className="home-about-body">
            
                I am a simple person who works well with everyone. I am a hard worker and I like to face different types of challenges. I believe my strongest quality is my attention to detail which makes me good at my job
                <br />
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
              
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> programming C, Javascript and Python. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to{" "}
                  <b className="purple">
                   data science,Machine learning,Data structure & Algorithm
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js Nest JS </b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Fade>
          </Col>
          <Col md={4} className="myAvtar">

            <Tilt>
              <Zoom duration={2000}>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Zoom>
            </Tilt>

          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
