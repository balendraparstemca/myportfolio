import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import homeLogo from "../../Assets/education.svg";
import Particle from "../Particle";
import { Fade } from "react-reveal";
import { IoIosSchool } from "react-icons/io";
import laptopImg from "../../Assets/univ_logo.png";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import naresh from "../../Assets/naresh.jpg";
import nptel from "../../Assets/nptel.jpg";
import ProjectCards from "../Projects/ProjectCards";



function Edhome() {
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
                                    Education <span className="wave" role="img" aria-labelledby="wave"><IoIosSchool /> </span>
                                </h1>

                                <h5>

                                    <strong className="main-name"> Basic Qualification and Certifcations</strong>
                                </h5>
                               
                           

                            </Fade>

                        </Col>



                    </Row>

                </Container>

                <Container>
                    <h1 style={{ fontSize: "2.1em", paddingTop: "20px", paddingBottom: "10px", justifyContent: "center" }}>
                        <strong className="purple">Degrees Received</strong>
                    </h1>
                    <Fade left duration={3000}>
                        <Row className="about-content" style={{ justifyContent: "center", padding: "10px" }}>
                            <Col
                                md={7}
                                style={{
                                    justifyContent: "center",
                                    paddingTop: "30px",
                                    paddingBottom: "50px",
                                }}
                            >

                                <h5 style={{ fontSize: "1.6em", paddingBottom: "10px" }}>
                                    <strong className="purple">Pondicherry central University</strong>
                                </h5>
                                <Card className="quote-card-view">
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p style={{ textAlign: "justify" }}>
                                                <span className="purple">Masters in computer Science (M.C.A) </span>
                                                from <span className="purple"> 2016</span> To  <span className="purple"> 2019</span>

                                            </p>
                                            <ul>
                                                <li className="about-activity" style={{ paddingBottom: "10px" }}>
                                                    <ImPointRight /> I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.
                                                </li>
                                                <li className="about-activity" style={{ paddingBottom: "10px" }}>
                                                    <ImPointRight /> Apart from this, I have done courses on Python, Full Stack Development.Javascript Frameworks Like Angular,React,Nodejs
                                                </li>
                                                <li className="about-activity">
                                                    <ImPointRight /> Currently i am learning about Deep Learning, Data Science, Cloud Computing,Machine learning
                                                </li>

                                            </ul>

                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col
                                md={5}
                                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                                className="about-img"
                            >
                                <img src={laptopImg} alt="about" className="img-fluid" />
                            </Col>
                        </Row>

                    </Fade>


                </Container>

                </Container>
                <Container>
                <Fade bottom>
                    <Container>
                        <h1 className="project-heading">
                            <strong className="purple">Certifications </strong>
                        </h1>
                        <p style={{ color: "white" }}>
                           i have done some Certifications course 
                        </p>
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                            <Col md={4} className="project-card">
                                <ProjectCards
                                    imgPath={nptel}
                                    isBlog={false}
                                    title="PROGRAMMING IN C"
                                    link="https://drive.google.com/file/d/1ku8K5cpyHtSa8ROUeoc95bM6MVcchv7s/view?usp=sharing"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCards
                                    imgPath={nptel}
                                    isBlog={false}
                                    title="PROGRAMMING IN C++"
                                    link="https://drive.google.com/file/d/1SL_zB5BciiJFfaYaJz28zATRHCJ60NSx/view?usp=sharing"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCards
                                    imgPath={nptel}
                                    isBlog={false}
                                    title="INTRODUCTION TO MODERN APPLICATION DEVELOPMENT"
                                    link="https://drive.google.com/file/d/1QrTVI0q8c2PJHF-etIuk_vhDkA6aK7CJ/view?usp=sharing"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCards
                                    imgPath={naresh}
                                    isBlog={false}
                                    title="Node JS"
                                    link="https://drive.google.com/file/d/1mNGD4J76EL0pSzDsO8vT1Nlt3rZelkCj/view?usp=sharing"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCards
                                    imgPath={naresh}
                                    isBlog={false}
                                    title="Angular 8"
                                    link="https://drive.google.com/file/d/1GKwTUVRmaT78tj21GlttImcaUNgt-EOx/view?usp=sharing"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCards
                                    imgPath={naresh}
                                    isBlog={false}
                                    title="Python"
                                    link="https://drive.google.com/file/d/1jUjrXri7kz_vhGXcLAiGmTjxkdoux-OH/view?usp=sharing"
                                />
                            </Col>
                        </Row>
                    </Container>
                    </Fade>
                </Container>
      


        </section>
    );
}

export default Edhome;
