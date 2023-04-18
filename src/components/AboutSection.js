import { motion } from "framer-motion";
import React from "react";
import Home1 from "../img/logo1.png";
import Gato from "../img/gato.jpg";
import { titleAnim, Fade, imgRot } from "../animation.js";
import Wave from "../components/Wave";
import pdf from "../img/work/cv.pdf";

//Styled Components
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About style={{ zIndex: 1, position: "relative" }}>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>I love you</span> weirdo,{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              for your cuteness, <span>smile and </span> kindness.
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}></motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={Fade}>
          I always do, even tho i might not say it enough.{" "}
        </motion.p>
      </Description>

      <Image style={{ position: "relative", zIndex: -1 }}>
        <motion.img
          id="logoM"
          variants={imgRot}
          style={{ height: "78vh" }}
          src={Gato}
          alt="portrait"
        />
      </Image>

      <Wave />
    </About>
  );
};

export default AboutSection;
