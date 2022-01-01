import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import homeLogo from "../../Assets/experience.svg";
import Particle from "../Particle";
import { Fade } from "react-reveal";
import { ImUserTie } from "react-icons/im";
import Example from "./accordine.js";
import { experience } from "../../portfolio.js";


function Experience() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">

                    <Row>
                        <Col md={7} style={{ paddingBottom: 20 }}>
                            <Fade bottom duration={2000} distance="90px">
                                <img src={homeLogo} alt="home pic" className="img-fluid" />
                            </Fade>
                        </Col>
                        <Col md={5} className="home-header">
                            <Fade bottom duration={8000} distance="90px">
                                <h1 style={{ paddingBottom: 15 }} className="heading">
                                    Experience <span className="wave" role="img" aria-labelledby="wave"><ImUserTie /> </span>
                                </h1>

                                <h5>

                                    <strong className="main-name"> Work, Internship and Volunteership</strong>
                                </h5>
                                <p>I have worked with some  organisation as web Developer.<br/> I have also worked with some well established companies as Full stack Developer.</p>




                            </Fade>

                        </Col>
                    </Row>
                    <Example sections={experience["sections"]} />

                </Container>


            </Container>

        </section>
    );
}

export default Experience;