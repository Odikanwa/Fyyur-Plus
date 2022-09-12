import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  MdAccountCircle,
  MdOutlineExpandLess,
  MdMarkAsUnread,
  MdNotificationsActive,
  MdFavorite,
  MdMode,
  MdHelpOutline,
  MdLogout,
  MdNoAccounts,
  MdOutlineChevronRight,
} from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 100vw;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  border: none;
  background-color: #f0ede5;
`;

const HeroDiv = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
  background-color: #0b0510;
  color: white;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`;

const ProfilePicImg = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background-color: white;
`;

const Name = styled.p`
  font-weight: bold;
  font-family: "Orbitron", sans-serif;
  word-spacing: 5px;
`;

const TopButtonsDiv = styled.div`
  height: 30px;
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const TopButton = styled.button`
  height: 20px;
  width: auto;
  padding: 10px;
  color: white;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  border: none;
`;

const BodyWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0px;
`;

const PersonalSectionWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0px;
  display: flex;
  /* display: none; */
  flex-direction: column;
`;

const IconTextDropdownDiv = styled.div`
  height: auto;
  width: 85%;
  margin: 20px 20px 0px 20px;
  padding: 15px 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const IconTextDiv = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #0b0510;
  gap: 20px;
`;

const Title = styled.h4`
  font-weight: bold;
  color: black;
  margin: 0px;
`;

const SettingsSectionWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0px;
  /* display: flex; */
  display: none;
  flex-direction: column;
`;

const ProfileDiv = styled.div`
  height: 250px;
  width: 90%;
  margin: 10px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const AboutMe = styled.p`
  height: 100%;
  flex: 1;
  font-family: "Orbitron", sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding: 115px 10px;
  margin-top: 0px;
  background-color: purple;
  color: white;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
`;

const AboutMeList = styled.div`
  height: 100%;
  flex: 3;
  color: black;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
`;

const ListTitle = styled.p`
  font-weight: bold;
  margin: 0px;
`;
const Desc = styled.p`
  margin: 0px 0px 10px 0px;
  padding: 3px 0px;
  border-bottom: 0.5px solid purple;
`;

const EmptyDiv = styled.div`
  height: 150px;
  width: 100%;
`;

/*
NOTE: The wrapper sections are controlled with "display: none". Kindly set in js.
 */

const UserAccounts = () => {
  const images = {
    profilePic: require("../../../img/Mk.jpg"),
  };
  return (
    <Container>
      <Header />
      <HeroDiv>
        <ProfilePicImg
          src={images.profilePic}
          style={{ height: "140px", width: "140px", borderRadius: "50%" }}
        />
        <Name> John Doe</Name>
        <TopButtonsDiv>
          <TopButton
            style={{
              textDecoration: "underline solid white 6px",
              textUnderlineOffset: "11px",
            }}
          >
            Personal
          </TopButton>
          <TopButton> Settings </TopButton>
          <TopButton> Tickets </TopButton>
        </TopButtonsDiv>
      </HeroDiv>
      <BodyWrapper>
        <PersonalSectionWrapper>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdAccountCircle style={{ height: "35px", width: "35px" }} />
              <Title>Profile</Title>
            </IconTextDiv>
            <MdOutlineExpandLess
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <ProfileDiv>
            <AboutMe>ABOUT ME</AboutMe>
            <AboutMeList>
              <ListTitle>Full Name</ListTitle>
              <Desc>John Doe</Desc>
              <ListTitle>Username</ListTitle>
              <Desc>johndoe0001</Desc>
              <ListTitle>Email</ListTitle>
              <Desc>johndoe@gmail.com</Desc>
              <ListTitle>Lives in</ListTitle>
              <Desc>Lagos, Nigeria</Desc>
            </AboutMeList>
          </ProfileDiv>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdMarkAsUnread style={{ height: "35px", width: "35px" }} />
              <Title> Messages </Title>
            </IconTextDiv>
            <MdOutlineChevronRight
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdNotificationsActive
                style={{ height: "35px", width: "35px" }}
              />
              <Title> Notifications </Title>
            </IconTextDiv>
            <MdOutlineChevronRight
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdFavorite style={{ height: "35px", width: "35px" }} />
              <Title> Saved Shows </Title>
            </IconTextDiv>
            <MdOutlineChevronRight
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdFavorite style={{ height: "35px", width: "35px" }} />
              <Title> Followed Artists </Title>
            </IconTextDiv>
            <MdOutlineChevronRight
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <EmptyDiv />
        </PersonalSectionWrapper>
        <SettingsSectionWrapper>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdMode style={{ height: "35px", width: "35px" }} />
              <Title> Edit Personal Profile </Title>
            </IconTextDiv>
            <MdOutlineChevronRight
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdHelpOutline style={{ height: "35px", width: "35px" }} />
              <Title> Help </Title>
            </IconTextDiv>
            <MdOutlineChevronRight
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdLogout style={{ height: "35px", width: "35px" }} />
              <Title> Sign Out </Title>
            </IconTextDiv>
            <MdOutlineChevronRight
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <IconTextDropdownDiv>
            <IconTextDiv>
              <MdNoAccounts style={{ height: "35px", width: "35px" }} />
              <Title> Delete Account </Title>
            </IconTextDiv>
            <MdOutlineChevronRight
              style={{ height: "35px", width: "35px", color: "#ff0800" }}
            />
          </IconTextDropdownDiv>
          <EmptyDiv />
        </SettingsSectionWrapper>
      </BodyWrapper>
      <Footer />
    </Container>
  );
};

export default UserAccounts;
