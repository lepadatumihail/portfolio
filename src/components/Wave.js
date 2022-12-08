import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient
        id="Gradient-1"
        x2="0%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="10%" stop-color="#48afc1" />
        <stop offset="10%" stop-color="#b4c63b" />
        <stop offset="20%" stop-color="#ef5b2b" />
        <stop offset="20%" stop-color="#9532ff" />
        <stop offset="30%" stop-color="#d9ff00" />
        <stop offset="30%" stop-color="#1cb98f" />
        <stop offset="40%" stop-color="#48afc1" />
        <stop offset="40%" stop-color="#b4c63b" />
        <stop offset="50%" stop-color="#ef5b2b" />
        <stop offset="50%" stop-color="#503969" />
        <stop offset="60%" stop-color="#ab6294" />
        <stop offset="60%" stop-color="#1cb98f" />
        <stop offset="70%" stop-color="#48afc1" />
        <stop offset="70%" stop-color="#b4c63b" />
        <stop offset="80%" stop-color="#ef5b2b" />
        <stop offset="80%" stop-color="#503969" />
        <stop offset="90%" stop-color="#ab6294" />
        <stop offset="90%" stop-color="#1cb98f" />
        <stop offset="100%" stop-color="#48afc1" />
      </linearGradient>
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        onWaiting={{ duration: 2 }}
        transition={{ duration: 2.2 }}
        stroke="url(#Gradient-1)"
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        strokeOpacity="0.45"
        strokeWidth="11"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
  color: white;
`;

export default Wave;
