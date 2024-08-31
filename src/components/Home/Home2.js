import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/rahul_bhatija.jpg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color:"whitesmoke" }}>
            Professional <span className="purple"> Summary </span>
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
        
       
      </Container>
    </Container>
  );
}
export default Home2;
