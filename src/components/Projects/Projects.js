import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/MediAssist AI.png";

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
              imgPath={chatify}
              isBlog={false}
              title="MediAssist AI"
              description="Built a full-stack AI-powered media assistant using the MERN stack (MongoDB, Express.js, React.js, Node.js).

Integrated Google Generative AI API for smart media recommendations and automation.

Implemented secure authentication with JWT and user-friendly UI for seamless experience.

Tech Stack: React, Node.js, Express, MongoDB, AI API"
              ghLink="https://github.com/KhanArafat/MediAssist-AI"
              demoLink="https://medi-assist-ai-blond.vercel.app"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
