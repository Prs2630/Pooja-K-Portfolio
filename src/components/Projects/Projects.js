import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/weather.jpg";
import chatify from "../../Assets/Projects/inventory2.png";
import bitsOfCode from "../../Assets/Projects/food.jpg";

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
              title="Inventory Manangement System"
              description="Inventory App build with react.js,redux,NodejsManage orders. Track inventory. Handle GST billing. Oversee warehouses. One inventory management software to run all your inventory operations."
              ghLink="https://github.com/Prs2630/Inventory-Manangement-system"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Food order App"
              description="Thali App is build with react.js,redux.Thali is a food delivery app that offers fresh and delicious food to people in a hurry. All you need to do is place your order, and the app will take care of the rest."
              ghLink="https://github.com/Prs2630/thali--app"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="Weather App build with react.js.See current and forecasted weather with a smart layout that updates as conditions change. And view precipitation, air quality, and temperature maps to see different conditions near you."
              ghLink="https://github.com/Prs2630/react-weather-new"
              // demoLink=""              
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
