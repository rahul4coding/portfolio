import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Tech<strong className="purple"> Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
      <Row>
          <Col md={12} className="home-about-social">
          <h1>Let's Connect!</h1>
<p>
  Feel free to <span className="purple">reach out</span> and connect with me.
</p>
<ul className="home-about-social-links">
  <li className="social-icons">
    <a
      href="https://github.com/rahul4coding"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillGithub />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://twitter.com/rahuuulbhatija"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiOutlineTwitter />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.linkedin.com/in/rahul-bhatija/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <FaLinkedinIn />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.instagram.com/rahul.bhatija"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillInstagram />
    </a>
  </li>
</ul>

          </Col>
        </Row>
    </Container>
  );
}

export default About;
