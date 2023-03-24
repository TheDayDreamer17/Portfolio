import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vismay Thaker </span>
            from <span className="purple"> Ahmedabad, Gujarat, India.</span>
            <br />I am a Game Developer
            <br /> But
            <br />
            Apart from this, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watch thriller series/Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Play PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hangout with friends
            </li>
          </ul>

          <h2 style={{ color: "#4AD1F9" }}>
            "Fake it till you make it!"{" "}
          </h2>
          <h2 className="blockquote-footer">Vismay Thaker</h2>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
