import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arafat Khan </span>
            — a motivated Computer Science student.
            <br />
            <br />
            I am skilled in <span className="purple">MERN Stack</span> and <span className="purple">Python</span>, 
            experienced in building responsive web apps, REST APIs, and AI-powered projects 
            like <span className="purple">Media Assistant AI</span>.
            <br />
            <br />
            I'm passionate about learning new technologies and seeking internship opportunities 
            in full-stack development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning & Growing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it's bad."{" "}
          </p>
          <footer className="blockquote-footer">Arafat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
