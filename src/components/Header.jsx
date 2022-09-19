import React, { useRef } from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../img/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

const Img = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20px;
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

const LinksRibbon = styled.div`
  height: 9vh;
  width: 100vw;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 1px solid silver;
`;

const Button = styled.button`
  height: auto;
  width: auto;
  margin: 0px 0px 0px 20px;
  padding: 5px 15px;
  border: none;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

// const ActiveButton = styled(Button)`
//   background-color: #ff0800;
//   color: white;
// `;

const Header = ({ to, children, ...props }) => {
  const btnRef = useRef();
  // const resolvedPath = useResolvedPath(to);
  // console.log(resolvedPath);
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  // console.log(isActive);
  // // const Btn = <Button />;
  // // const activeBtn = <ActiveButton />;
  // const btnRef = useRef();

  // if (isActive === true) {
  //   // <Button style={{ backgroundColor: "red", color: "white" }} />;
  //   btnRef.current.backgroundColor = "red";
  // }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Menu>
            <Logo>
              <Link to="/">
                <Img src={logo} />
              </Link>
              <LogoText>
                <Link to="/">Fyyur</Link>
              </LogoText>
            </Logo>
          </Menu>
          <Avatar>
            <BsFillPersonFill style={{ height: "30px", width: "30px" }} />
          </Avatar>
        </Wrapper>
        <LinksRibbon>
          <Button ref={btnRef}>
            <Link to="/">Shows</Link>
          </Button>
          <Button>
            <Link to="../artists/">Artists</Link>
          </Button>
          <Button>
            <Link to="../venues">Venues</Link>
          </Button>
        </LinksRibbon>
      </Container>
    </>
  );
};

export default Header;
