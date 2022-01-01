import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
} from "react-icons/si";
import {
  DiStackoverflow,DiGithub,DiDocker
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /><h5>Linux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><h5>Visual Studio code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter /><h5>Jupyter</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiStackoverflow /><h5>Stackoverflow</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub /><h5>Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker /><h5>Docker</h5>
      </Col>
       
    </Row>
  );
}

export default Toolstack;
