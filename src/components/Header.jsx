import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../img/logo.png";
import appleBadge from "../img/download_on_applestore.svg";
import googleBadge from "../img/download_on_playstore.svg";
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

const LogoIcon = styled.img`
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

const LinksRibbon = styled.div`
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
  height: auto;
  width: 70vw;
  margin: 30vh 15vw;
  padding: 30px;
  display: none;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0b0510;
  color: white;
  position: fixed;
  border-radius: 20px;
  z-index: 2;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const DropdownLink = styled(MenuLink)`
  width: 80%;
  padding: 8px 15px;
  margin-bottom: 12px;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  color: white;
  border: 1px solid silver;
`;

const Text = styled.h3`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 0px;
  padding-top: 20px;
  border-top: 1px solid silver;
`;

const BadgesDiv = styled.div`
  height: auto;
  width: 100%;
  padding-top: 10px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  height: auto;
  width: 50%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.9); /* Black see-through */
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(14px);
  opacity: 1;
  z-index: 1;
  display: none;
`;

// TOD0: Add Google play and applestore icons to 'get the app' and set flex to row.

const Header = () => {
  const centerMenuRef = useRef();
  const overlayRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleCenterMenu = () => {
    setMenuOpen(!menuOpen);

    if (menuOpen === true) {
      //display center menu and blur page
      centerMenuRef.current.style.display = "flex";
      overlayRef.current.style.display = "block";
    } else {
      //remove menu and unblur page
      centerMenuRef.current.style.display = "none";
      overlayRef.current.style.display = "none";
    }
  };

  //Custom hook for closing mobile nav dropdown menu on click ouside the menu
  const useOnClickOutside = (centerMenuRef, handler) => {
    useEffect(() => {
      const listener = (event) => {
        //Do nothing if clicking ref's element or descendant elements
        if (
          !centerMenuRef.current ||
          centerMenuRef.current.contains(event.target)
        ) {
          return;
        } else {
          //exit menu
          centerMenuRef.current.style.display = "none";
          overlayRef.current.style.display = "none";
        }
        //Keep menu fixed for tablet devices
        // if (window.screen.width > 767) {
        //   buttonRef.current.style.display = "none";
        //   menuRef.current.style.display = "inline-flex";
        // }
        // handler(event);
      };
      //document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        //document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [centerMenuRef, handler]);
  };
  //call onclickOutside hook
  useOnClickOutside(centerMenuRef, () => setMenuOpen(true));

  return (
    <>
      <GlobalStyle />
      <Container>
        <Overlay ref={overlayRef} />
        <Wrapper>
          <Menu>
            <Kebab onClick={toggleCenterMenu}>
              <MdMoreVert style={{ height: "30px", width: "30px" }} />
            </Kebab>
            <Logo>
              <LogoIcon src={logo} />
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
            <MenuLink to="../venues/">Venues</MenuLink>
          </Button>
        </LinksRibbon>
        <CenterMenu ref={centerMenuRef}>
          <DropdownLink
            to="../forms/loginform/"
            style={{ backgroundColor: "#ff0800", border: "none" }}
          >
            Login
          </DropdownLink>
          <DropdownLink to="../forms/loginform/">Post Show</DropdownLink>
          <DropdownLink to="../forms/loginform/">Post Venue</DropdownLink>
          <Text>Get the best experience on the app.</Text>
          <BadgesDiv>
            <Img src={googleBadge} />
            <Img src={appleBadge} />
          </BadgesDiv>
        </CenterMenu>
      </Container>
    </>
  );
};

export default Header;
