import styled from "styled-components";
import { motion } from "framer-motion";

//Styled Components
export const About = styled(motion.div)`
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 15rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem 4rem 2rem;
    text-align: center;
    min-height: 55vh;
    #logoM {
      display: none;
    }
  }
`;
export const Description = styled.div`
  flex: 1;
  overflow-x: hidden;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  p {
    color: #ffffffc8;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    padding: 3vh 3vh;
    height: 70vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;

export const Titlez = styled.div`
  font-weight: bold;

  font-size: 3.2rem;
  background: -webkit-linear-gradient(#33a5f1, #ad55ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
