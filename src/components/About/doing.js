import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/fullstack.svg";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Fade } from "react-reveal";


function Do() {
    return (

        <Container>
            <h1 style={{ fontSize: "2.1em", paddingTop: "20px", paddingBottom: "10px", justifyContent: "center" }}>
                What I Do?
            </h1>
            <Fade bottom duration={2000}>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col
                    md={5}
                    style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    className="about-img"
                >
                    <img src={laptopImg} alt="about" className="img-fluid" />
                </Col>

                <Col
                    md={7}
                    style={{
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                    }}
                >


                    <h5 className="purple" style={{ fontSize: "2.1em", paddingBottom: "2px" }}>
                        Full Stack Development
                    </h5>
                    <Card className="quote-card-view">
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                               
                                <p>I am a full stack developer web developer who works with both the front and back ends of a application.</p>
                                <ul>
                                    <li className="about-activity">
                                        <ImPointRight /> Building resposive website front end using React-Redux, React with Typescript,
                                    </li>
                                    <li className="about-activity">
                                        <ImPointRight /> Creating application backend Rest API  in Node, Express & Flask, Nest js
                                    </li>
                                    <li className="about-activity">
                                        <ImPointRight /> Database:MongoDB,MYSQL,PostgreSQL
                                    </li>

                                </ul>

                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            </Fade>



        </Container>

    );
}

export default Do;
