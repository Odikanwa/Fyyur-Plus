import React from 'react';
import styled from "styled-components";
import { BsHouse, BsSearch, BsBell, BsEnvelope } from "react-icons/bs";


const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 8vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  background-color: black;
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

const Footer = () => {
  return (
    <Container>
      <Button>
        <BsHouse style={{ height: "25px", width: "25px"}}/>
      </Button>
      <Button>
        <BsSearch style={{ height: "25px", width: "25px"}}/>
      </Button>
      <Button>
        <BsBell style={{ height: "25px", width: "25px"}}/>
      </Button>
      <Button>
        <BsEnvelope style={{ height: "25px", width: "25px"}}/>
      </Button>
    </Container>
  )
}

export default Footer