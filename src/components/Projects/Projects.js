import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="InfoCrown Technologies"
              description="Designed and developed InfoCrown's website, enhancing user experience and showcasing IT services. Implemented responsive design, seamless navigation, and impactful visuals, resulting in a professional online presence that effectively communicates the company's expertise and services."
              // ghLink=""
              demoLink="https://infocrown.co"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio Site"
              description="Built with latest technologies, my personal website showcases my expertise in React.js, JavaScript, and CSS. Leveraging modern web development best practices, my website demonstrates my passion for innovative and effective digital solutions. I invite you to explore this site & share feedback." 
              // ghLink=""
              demoLink="https://rahulbhatija.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="React Editor"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink="https://github.com/rahul4coding/React-Editor"
              demoLink="https://editor.rahulbhatija.com"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
