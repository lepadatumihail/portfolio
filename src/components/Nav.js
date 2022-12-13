import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../index.css";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          {"mihail"}
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.5 }}
            animate={{ width: pathname === "/" ? "60%" : "0%" }}
            initial={{ width: "0" }}
          />
        </li>

        <li>
          <Link to="/work">My Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            animate={{ width: pathname === "/work" ? "60%" : "0%" }}
            initial={{ width: "0" }}
          />
        </li>

        <li>
          <Link to="/contact">Contact </Link>
          <Line
            transition={{ duration: 0.5 }}
            animate={{ width: pathname === "/contact" ? "60%" : "0%" }}
            initial={{ width: "0" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: -webkit-linear-gradient(right, #000000, #000000);
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 5rem;
    padding: 1em;
    font-family: Halfomania, serif;
    font-weight: normal;
    background: linear-gradient(
      100deg,
      #e05252 0%,
      #99e052 25%,
      #52e0e0 50%,
      #9952e0 75%,
      #e05252 100%
    );
    //background: -webkit-linear-gradient(right,#6cff8c,#7ae0ff);;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  li {
    padding-left: 6rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-evenly;
      width: 100%;
      li {
        padding: 0;
      }
    }
    #logo {
      display: none;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #23d997;
  width: 0;
  position: absolute;
  bottom: -80%;
  left: 50%;
  @media (max-width: 1300px) {
    left: 20%;
  }
`;

export default Nav;
