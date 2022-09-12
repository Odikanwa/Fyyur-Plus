import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { MdMoreVert } from "react-icons/md";
import logo from "../img/logo.png";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
   }
 `;

const Container = styled.div`
  top: 0;
  height: 7vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
  background-color: #0b0510;
  color: white;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  border: none;
`;

const Menu = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const MenuButton = styled.button`
  background-color: transparent;
  color: white;
  width: 20%;
  height: 50%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
`;

const Logo = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: row;
  margin-left: 0px;
  align-items: center;
  align-self: center;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 3px;
  align-self: center;
  text-align: center;
  vertical-align: center;
`;

const LogoText = styled.h3`
  width: 40%;
  align-self: center;
  color: #ff0800;
  font-size: 16px;
  font-family: "Orbitron", sans-serif;
  font-weight: 900;
`;

const Avatar = styled.div`
  background-color: white;
  color: black;
  margin-right: 20px;
  padding: 5px;
  border-radius: 50%;
  align-self: center;
`;

const Header = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Menu>
          <MenuButton>
            <MdMoreVert style={{ height: "30px", width: "30px" }} />
          </MenuButton>
          <Logo>
            <Img src={logo} />
            <LogoText> Fyyur </LogoText>
          </Logo>
        </Menu>
        <Avatar>
          <BsFillPersonFill style={{ height: "30px", width: "30px" }} />
        </Avatar>
      </Container>
    </>
  );
};

export default Header;
