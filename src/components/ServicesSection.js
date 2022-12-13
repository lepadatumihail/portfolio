import React from "react";
import { UseScroll } from "./UseScroll";

//Images
import home2 from "../img/widgy-1.png";
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
          <Spanny style={{ fontFamily: "Halfomania" }}>
            Languages and Frameworks
          </Spanny>
        </h2>
      </Description>

      <img src={home2} id="logoZ" alt="portrait" />
    </Services>
  );
};

const Spanny = styled.span`
  font-weight: normal;
  font-family: Halfomania, sans-serif;
  //background: linear-gradient(330deg, #e05252 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #e05252 100%);
  background: linear-gradient(100deg, #20ffde, #9661f9);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

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
  img {
    width: 100%;
    @media (min-width: 800px) {
      width: 60%;
    }
  }

  @media (max-width: 1900px) {
    flex-direction: row;
  }
  @media (max-width: 800px) {
    flex-direction: column;
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
