import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-avatar2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an enthusiastic and proficient Game developer with a passion for creating
              <b className="purple">  Immersive and Interactive </b> gaming experiences.
              <br />
              <br />
              As an avid learner, I relish in the opportunity to share my wealth of knowledge with others.
              <br />
              <br />
              My extensive experience with
              <i>
                <b className="purple">  Unity Game engine </b>
              </i>
              has enabled me to delve into the creation of both
              <i>
                <b className="purple"> mobile and VR/AR games as well as non-gaming products. </b>
              </i>
              <br />
              <br />
              In my free moments, I immerse myself in the exploration of &nbsp;
              <i>
                <b className="purple">prototypes, constantly seeking new insights and learning opportunities. </b>
                When not occupied with work, I can often be found engrossed in {" "}
                <b className="purple">
                  Reading books or indulging in PC gaming.
                </b>
              </i>

              &nbsp; My insatiable thirst for knowledge and passion for the industry drives me to continually strive for excellence.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TheDayDreamer17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thakervismay/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
