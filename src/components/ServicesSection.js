import React from "react";
import { UseScroll } from "./UseScroll";

//Images
import clock from "../img/clock.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import home2 from "../img/widgy-2.png";
import "../index.css";

//Styled Components

import { ScrollReveal } from "../animation.js";
import styled from "styled-components";
import { About, Description } from "../styles";

const ServicesSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Services
      ref={element}
      initial="hidden"
      variants={ScrollReveal}
      animate={controls}
    >
      <Description style={{ zIndex: -1 }}>
        <h2>
          <span style={{ fontFamily: "Halfomania" }}>Strong Points</span>
        </h2>

        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Working calmly under pressure.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Worthy</h3>
            </div>
            <p>The enthusiasm and attitude will pay off.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Adaptable</h3>
            </div>
            <p>Switched 4 countries in last 4 years.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Social</h3>
            </div>
            <p>Good flow of emotional intelligence.</p>
          </Card>
        </Cards>
      </Description>

      <img id="skillz" src={home2} alt="portrait" />
    </Services>
  );
};

const Services = styled(About)`
  display: flex;
  flex-direction: row;
  h2 {
    padding-bottom: 4rem;
  }
  p {
    width: 90%;
    padding: 2rem 0rem 4rem 0rem;
  }
  span {
    font-family: Halfomania, sans-serif;
    font-size: 6rem;
    font-weight: normal;
  }

  @media (max-width: 1900px) {
    flex-direction: row;
    #skillz {
      width: 80vh;
      padding-left: 1rem;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    #skillz {
      width: 60vh;
      padding-left: 1rem;
    }
  }
`;

const Cards = styled.div`
  min-width: 40rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    padding: 2rem;
    justify-content: center;
    min-width: 30rem;
  }
`;

const Card = styled.div`
  flex-basis: 18rem;

  .icon {
    display: flex;
    align-items: center;
    h3 {
      border-bottom: 0.5px solid gray;
      margin-left: 0.5rem;
      color: white;
      padding: 1rem;
      font-size: xx-large;
      font-weight: lighter;
    }
  }
`;

export default ServicesSection;
