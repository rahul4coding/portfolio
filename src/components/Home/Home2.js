import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/rahul_bhatija.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Professional Summary: <span className="purple"> Rahul Bhatija </span>
            </h1>
            <p className="home-about-body">
  <br />
  <br />Rahul Bhatija is a skilled Software Engineer with 2.5 years of experience, specializing in the
  <i>
    <b className="purple"> MEAN/MERN stack. </b>
  </i>
  <br />
  <br />
  Currently based in India, Rahul is transitioning into 
  <i>
    <b className="purple"> Cloud Engineer/Architect role. </b>
  </i>
  <br />
  <br />
  With hands-on experience in building, deploying and managing web applications using AWS services like
  <i>
    <b className="purple"> EC2, S3, SNS and Lambda, </b>
  </i>
   he has expertise in
  <i>
    <b className="purple"> AWS Cloud. </b>
  </i>
  {/* and */}
  {/* <i>
    <b className="purple"> AWS Solution Architect Associate. </b>
  </i> */}
  <br />
  <br />
  Rahul is passionate about leveraging cloud technologies to build scalable and efficient serverless solutions.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="home-profile-image" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
          <h1>Let's Connect!</h1>
<p>
  I'm active on various platforms. Feel free to <span className="purple">reach out</span> and connect with me.
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
    </Container>
  );
}
export default Home2;
