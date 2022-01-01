import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiPhp,
  DiPostgresql,
  DiBootstrap,
  DiHtml5,
  DiMysql,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /><h5>C ++</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /><h5>bootstrap</h5>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><h5>Nodejs</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><h5>Mongo DB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp /><h5>php</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql /><h5>PostgreSQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql /><h5>MYSQL</h5>
      </Col>

    </Row>
  );
}

export default Techstack;
