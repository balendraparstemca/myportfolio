import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import { Fade } from "react-reveal";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";
import Resume from "../Resume/Resume";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">

          <Row>
            <Col md={6} className="home-header">
              <Fade bottom duration={8000} distance="90px">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>

                <h5>
                  I'M
                  <strong className="main-name"> Balendra Kumar paraste</strong>
                </h5>

                <div style={{ textAlign: "left" }}>
                  <Type />

                </div>
                <br />
               

                <br />

              </Fade>
           

            </Col>

            <Col md={6} style={{ paddingBottom: 20 }}>
              <Fade bottom duration={8000} distance="90px">
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Fade>
            </Col>

          </Row>

        </Container>
     
      <Fade bottom duration={8000} distance="90px">
        <Home2 />
      </Fade>
      <Fade top duration={8000} distance="90px">
      <Resume/>
      </Fade>
      </Container>
      <Fade bottom duration={8000} distance="90px">
        <Home3 />
      </Fade>

    </section>
  );
}

export default Home;
