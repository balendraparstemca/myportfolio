import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.jpeg";
//import editor from "../../Assets/Projects/codeEditor.png";
//import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
//import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ytimg.com/vi/egF9ormgkps/maxresdefault.jpg"
              isBlog="{false}"
              title="E- commerce Application using React-typescript nestjs mysql"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/balendraparstemca/React_with_Typescript_and_Nestjs-E-commerce-mysql-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Capture-d-e-cran-2020-01-29-a--16.53.48--1-.png_3505a8e7e3.png"
              isBlog={false}
              title="Reactjs_nodejs-postgreysql_blogging-application"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/balendraparstemca/Reactjs_nodejs-postgreysql_blogging-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.mos.cms.futurecdn.net/zeYg7fwBycaqHwnzcFsBBi-1200-80.png"
              isBlog={false}
              title="IMDB-MOVIE-APPLICATION-IN-REACT"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/balendraparstemca/IMDB-MOVIE-APPLICATION-IN-REACT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://camo.githubusercontent.com/7bd3d80b758ebe4167dd09c6c8b1520cbf9fbc8f853a253c8576a0c04c7b8f76/68747470733a2f2f63657a6572696e2e6f72672f6173736574732f696d616765732f63657a6572696e2d64617368626f6172642d70726f64756374732e706e67"
              isBlog={false}
              title="nodejs-socket.io-e_commerce_application"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/balendraparstemca/nodejs-socket.io-e_commerce_application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="nodejs-miniproject-rest-api-with-mongodb-mysql-sql-server"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/balendraparstemca/nodejs-miniproject-rest-api-with-mongodb-mysql-sql-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://it.pomento.in/laadoo/2020/07/Hospital-Management-System.png"
              isBlog={false}
              title="Hospital-managment-system using php-mysql"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/balendraparstemca/Hospital-managment-system-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ytimg.com/vi/etUFKyulYGE/maxresdefault.jpg"
              isBlog={false}
              title="Complaint-managament-system  using php-mysql"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/balendraparstemca/Complaint-managament-system"
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
