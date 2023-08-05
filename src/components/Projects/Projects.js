import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import holidayExpress from "../../Assets/Projects/holidayExpress.mp4";
import melting from "../../Assets/Projects/melting.mp4";
import fpsGame from "../../Assets/Projects/FpsGame.mp4";
import spidermanDemo from "../../Assets/Projects/Grappling Task Demo Reel.mp4";
import GrapplingHookDemo from "../../Assets/Projects/GrapplingHookDemo.mp4";
import ariseGroup from "../../Assets/Projects/ariseGroup.mp4";
import pepsiDemo from "../../Assets/Projects/pepsiDemo.mp4";
import bowman from "../../Assets/Projects/bowman.mp4";
import toonybricks from "../../Assets/Projects/toonybricks.mp4";
import arPocketTank from "../../Assets/Projects/arPocketTank.mp4";
import cardShuffle from "../../Assets/Projects/cardShuffle.mp4";
import vertexHotToNormalShader from "../../Assets/Projects/vertexHotToNormalShader.mp4";
import vrFit from "../../Assets/Projects/vrFit.mp4";
import mot from "../../Assets/Projects/mot.mp4";

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
              imgPath={fpsGame}
              isBlog={false}
              title="Fps Demo"
              description="Created a Fps mini game in unity Where you can pick up guns , ammo , potions. There is an inventory System to manage & use the items."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vertexHotToNormalShader}
              isBlog={false}
              title="A Vertex Hot metal To Normal Shader"
              description="Created a metal burning hot to normal shader effect using mous point position. User uv channels to store color data and manipulate with time."
              ghLink=""
              demoLink=""
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spidermanDemo}
              isBlog={false}
              title="Delivery guy got spidey web shooters"
              description="implemented subtitles in timeline and create a entry cutscene.Here delivery guy delivers parcels going through the city with spidy web shooters."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GrapplingHookDemo}
              isBlog={false}
              title="Fps Grappling Gun"
              description="Expanded the Fps controller I created before and added grappling gun using spring joint."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={melting}
              isBlog={false}
              title="Ice Melting"
              description="Created a melting shader in unity using dissolve and fresnal effect along with noise."
              ghLink="https://github.com/TheDayDreamer17/IceShaderWithMelting"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arPocketTank}
              isBlog={false}
              title="AR Pocket Tank"
              description="Created a Turn based AR pocket tank, with hit guidance. Used Unity terrain system to create the arena."
              ghLink="https://github.com/TheDayDreamer17/Panzer-Clash-AR"
              demoLink=""
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardShuffle}
              isBlog={false}
              title="Card Shuffle Demo"
              description="Created a Card shuffle demo, implementing a deck of card which gives random card from 1 deck and we can shuffle cards and discard them from our hand by swiping."
              ghLink="https://github.com/TheDayDreamer17/Card-Game"
              demoLink=""
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pepsiDemo}
              isBlog={false}
              title="Pepsi Web Ar Demo"
              description="Created an AR Product demo of pepsi in web AR using animations and particle effects."
              ghLink="https://github.com/TheDayDreamer17/Pepsi-WebXR-Demo"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={holidayExpress}
              isBlog={false}
              title="Holiday Express"
              description="This is the well praised and loved immersive experience of Virtuelly.It had various puzzles to solve among friends as you are able to see and hear them. This is possible due to Agora .It was properly synced using photon pun."
              ghLink=""
              demoLink="https://virtuelly.com/virtual-experiences/experience-view/665/the-virtuelly-express-escape-game-by-virtuelly-experiences"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ariseGroup}
              isBlog={false}
              title="ArchViz Appartment in AR"
              description="Developed an AR app using Unity engine and AR Core to showcase buildings created by Arise Group of Builders. Optimized polygon count to ensure stable FPS and used Asset bundles to store data and 3D models.
              Added an EMI calculator, ChatBot, and chat on WhatsApp. 
              Created a custom horizontal scroll view with a materialistic android view of scrollable fading cards."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.AriseGroup.Arise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrFit}
              isBlog={false}
              title="VR Fit"
              description="VR Fit is a VR app for Jio Glass. You select your avatar and the exercise you want to perform. You can exercise or yoga along with your
              selected avatar. You hear soothing music depending on the environment selected."
              ghLink=""
              demoLink=""
            />

          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={toonybricks}
              isBlog={false}
              title="TransfrVR"
              description="Collaborated with TransfrVR to develop simulation programs
              Created custom extensions and generic conditions to streamline programming
              Utilized nested prefabs for efficient collaboration
              Offered creative input to improve simulations
              Communicated progress updates and discussed solutions with client's team during weekly calls."
              ghLink=""
              demoLink="https://transfrinc.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mot}
              isBlog={false}
              title="Multiple Object Detection (MOT)"
              description="MOT is a VR project made for university of Italy. It was created in order to research on the analytical data of human eye focus on multiple object at once.
              So we take data of gender , age and let the user see 8 target in which few targets depending on the exercise are highlighted which are to be observed by the player.
              These targets then move for 7-8 seconds and then you have to mark which were those targets out of the 8 targets. This task is done 20 times and a graph is generated based on
              every iteration. We create a CSV report for each exercise of individual player."
              ghLink=""
              demoLink=""
            />

          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toonybricks}
              isBlog={false}
              title="Toonybricks"
              description="Created a family of match-based games with a custom level generator, attractive and challenging levels, daily bonus, gift boxes, collectibles, boosters, and powerups.
                Created a custom algorithm for generating level boundaries using Line renderer. 
              Implemented Unity testing in this game.
              Conducted unit testing session to enlighten the benefits of Unity Unit Testing to the team."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.wss.toonybricks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bowman}
              isBlog={false}
              title="Bowman"
              description="Developed a single-player game using Spine in Unity with endless levels mechanism, unlockable skins, and weapons for the protagonist. 
              Implemented Spin Wheel and added Unity IAP."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.escobar.bowman"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={toonybricks}
              isBlog={false}
              title="ML Robot Arm"
              description="Developed a simulation project using Unity's MLAgent for a human in a wheelchair to get food and water with the help of a robot arm.
              Created a testable environment, flow diagrams of code workflow, and trained the environment using PPO and SAC algorithms.
              Compared results by generating Python graphs."
              ghLink=""
              demoLink=""
            />

          </Col>





        </Row>
      </Container>
    </Container >
  );
}

export default Projects;
