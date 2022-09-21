import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { MdMoreVert } from "react-icons/md";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
   }
 `;

const Container = styled.div`
  top: 0;
  height: 11vh;
  width: 100vw;
  margin: 0px;
  font-family: "Roboto", sans-serif;
  background-color: #0b0510;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  top: 0;
  height: 11vh;
  width: 100vw;
  margin: 0px;
  display: flex;
  flex-direction: row;
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

const Logo = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: row;
  margin-left: 0px;
  align-items: center;
  align-self: center;
`;

const Kebab = styled.div`
  background-color: transparent;
  color: white;
  margin-left: 20px;
  margin-right: 0px;
  align-self: center;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 10px;
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

//Display set to 'none'. To be made visible when user is signed in
const Avatar = styled.div`
  background-color: white;
  color: black;
  margin-right: 20px;
  padding: 5px;
  border-radius: 50%;
  align-self: center;
  display: none;
`;

export const LinksRibbon = styled.div`
  height: 9vh;
  width: 100vw;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid silver;
`;

const Button = styled.button`
  height: auto;
  width: auto;
  margin: 0px 0px 0px 20px;
  padding: 0;
  border: none;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const MenuLink = styled(NavLink)`
  height: auto;
  width: auto;
  padding: 5px 15px;
  color: black;
  background-color: white;
  text-decoration: none;
  border-radius: 20px;
  &.active {
    text-decoration: 3px underline;
    text-underline-offset: 3px;
  }
  @media (max-width: 420px) {
    color: black;
    &:hover,
    &.active {
      text-decoration: none;
      background-color: #ff0800;
      color: white;
      font-weight: bold;
    }
  }
`;

const CenterMenu = styled.div`
  height: 40vh;
  width: 70vw;
  margin: 30vh 15vw;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0b0510;
  color: white;
  position: fixed;
  border-radius: 20px;
  z-index: 1;
`;

const Text = styled.p``;

const Header = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Menu>
            <Kebab>
              <MdMoreVert style={{ height: "30px", width: "30px" }} />
            </Kebab>
            <Logo>
              <Img src={logo} />
              <LogoText>Fyyur</LogoText>
            </Logo>
          </Menu>
          <Avatar>
            <BsFillPersonFill style={{ height: "30px", width: "30px" }} />
          </Avatar>
        </Wrapper>
        <LinksRibbon>
          <Button>
            <MenuLink to="/">Shows</MenuLink>
          </Button>
          <Button>
            <MenuLink to="../artists/">Artists</MenuLink>
          </Button>
          <Button>
            <MenuLink to="../venues">Venues</MenuLink>
          </Button>
        </LinksRibbon>
        <CenterMenu>
          <Text>Login</Text>
          <Text>Post Show</Text>
          <Text>Post Venue</Text>
          <Text>Get the App</Text>
        </CenterMenu>
      </Container>
    </>
  );
};

export default Header;
