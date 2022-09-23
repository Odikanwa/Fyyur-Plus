import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsHouse, BsSearch, BsBell, BsEnvelope } from "react-icons/bs";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 7vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
  background-color: #0b0510;
  color: white;
  align-items: center;
  justify-content: space-around;
  overflow-x: hidden;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  width: 40px;
  height: 40px;
  align-self: center;
  margin: auto;
  border: none;
`;
const MenuLink = styled(NavLink)`
  height: auto;
  width: auto;
  margin: 10px;
  text-decoration: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
  /* &.active {
    text-decoration: 3px underline;
    text-underline-offset: 3px;
    text-decoration: none;
    background-color: transparent;
    color: white;
    font-weight: bold;
  }
  @media (max-width: 420px) {
    color: black;
    background-color: transparent;
    &:hover,
    &.active {
      text-decoration: none;
      background-color: transparent;
      color: white;
      font-weight: bold;
    }
  } */
`;

const Footer = () => {
  return (
    <Container>
      <Button>
        <MenuLink to="/">
          <BsHouse style={{ height: "25px", width: "25px", color: "white" }} />
        </MenuLink>
      </Button>
      <Button>
        <BsSearch style={{ height: "25px", width: "25px" }} />
      </Button>
      <Button>
        <BsBell style={{ height: "25px", width: "25px" }} />
      </Button>
      <Button>
        <BsEnvelope style={{ height: "25px", width: "25px" }} />
      </Button>
    </Container>
  );
};

export default Footer;
