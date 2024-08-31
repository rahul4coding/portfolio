import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Rahul Bhatija</span>, a passionate Software Engineer with 2.5 years of professional experience in MEAN/MERN Stack & AWS Cloud.
            <br />
            <br />
            I hold a Bachelor of Engineering (B.E.) degree in Computer Science from Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal (India).
            <br />
            <br />
            Throughout my career, I've gained hands-on experience with a range of technologies, including JavaScript, Angular, React, Node.js, MySQL, MongoDB, and AWS Cloud.
            <br />
            <br />
            My expertise includes deploying and managing applications using AWS services such as EC2, S3, SNS, and Lambda, with various certifications in AWS Cloud.
            <br />
            
            <br />
            Beyond my professional life, I am passionate about yoga, reading books, exploring new places, and traveling.
            <br />
            <br />
            As I continue to evolve in my career, my short term goal is to transition fully into a Cloud Solution Architect role, designing impactful cloud solutions that solve real-world problems.
          </p>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Designing impactful cloud solutions that solve real-world problems."
          </p> */}
          {/* <footer className="blockquote-footer">Rahul Bhatija</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
