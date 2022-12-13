import React from "react";
import { UseScroll } from "./UseScroll";
import "../index.css";
//Styled Components
import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { imgRot, ScrollReveal } from "../animation.js";
import { motion } from "framer-motion";
import Home1 from "../img/me-me.png";

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Faq
      variants={ScrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.img variants={imgRot} src={Home1} alt="portrait" />

        <h2
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spanny>About Me</Spanny>
        </h2>
      </div>

      <AnimateSharedLayout style={{ zIndex: "4", flexDirection: "column" }}>
        <Toggle title="General Information">
          <div className="answer">
            <p>
              I'm Mihail, a 24 years old student at Fontys University in
              Eindhoven. Currently I am in my 4th year and looking for an
              Internship Graduation assignment in Software Engineering. I came
              to Netherlands almost 4 years ago after trying to start my studies
              in both Romania and England. I manage to adapt to new environments
              in a short amount of time as I am always eager to learn more about
              places, people, cultures, traditions and food ❤️.
            </p>
            <p>
              I do believe I am a rational person with a direct logical
              thinking, but I am also an extrovert who gains energy from social
              gathernings while being opened not only to learn new frameworks
              and technologies, but to discover people and cultures as well.
            </p>
          </div>
        </Toggle>

        {/* <Toggle title="Education">
          <div className="answer">
            <p>
              {" "}
              I started Computer Science back in Romania 3 years ago, but the
              education curriculum seemed too theoretical for me, as I tend to
              have a more practical approach for life. I later moved and started
              Software Engineering in Southampton, UK, but 2 years ago, because
              of both cultural and financial reasons I decided to move to
              Netherlands and start a new life in Eindhoven with Fontys -
              Applied Science University.
            </p>
            <p>
              Of course I did not know if it is the right choice, but you never
              know until you try. Now I am in my 3rd year of Software
              Engineering, where I specialise in mobile and web applications,
              both front-end and back-end. Fontys offered me a good education,
              but my real education comes from my parents, who always pushed me
              forward, to go out of comfort zone, to try something new until I
              love it. So for now I am still in my seeking phase of life.
            </p>
          </div>
        </Toggle> */}

        <Toggle title="Programming">
          <div className="answer">
            <p>
              {" "}
              My background started with C++ back in high school. That was my
              starting point in my software engineering journey. It helped me
              realize that IT is all about logic, and hard work obviously ☺. I
              love C# and Object Orineted Programming because there is no
              'correct way' of doing a specific task. Everyone can get the same
              result but with different code. The knowledge that I recieved
              during the study years from developing databases in SQL, creating
              Windows Form Applications in C#, mobile apps with Kotlin and
              Swift, web applications with React, Bootrstrap, Angular, Laravel,
              made me realise that the more I learn, the more there is to be
              learned.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  position: relative;
  z-index: 4;
  margin-top: -50px;
  img {
    width: 50%;
    @media (min-width: 800px) {
      width: 25%;
    }
  }
  span {
    display: block;
  }
  h2 {
    padding-bottom: 3rem;
    font-weight: lighter;
  }
  h4 {
    font-size: 35px;
    font-weight: lighter;
    cursor: pointer;
  }
  .faq-line {
    //background: linear-gradient(330deg, #e05252 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #e05252 100%);
    background: linear-gradient(
      10deg,
      #000000,
      #20ffde,
      #828500,
      #ffc342,
      #000000
    );
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      font-size: 25px;
      padding: 1rem 0rem;
    }
  }
`;

const Spanny = styled.span`
  display: table;
  font-weight: normal;
  margin: 0 auto;
  font-size: 2.5em;
  font-family: Halfomania, sans-serif;
  //background: linear-gradient(330deg, #e05252 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #e05252 100%);
  background: linear-gradient(100deg, #20ffde, #ffc342);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
`;

export default FaqSection;
