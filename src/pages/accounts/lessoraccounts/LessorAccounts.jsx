import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  MdMarkAsUnread,
  MdNotificationsActive,
  MdDashboard,
  MdOutlineChevronRight,
  MdLogout,
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
  height: 200px;
  width: 200px;
  /* border-radius: 50%; */
  background-color: white;
`;

const Name = styled.p`
  font-weight: bold;
  font-family: "Orbitron", sans-serif;
  word-spacing: 5px;
`;

const BodyWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0px;
  display: flex;
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
  color: #0b0510;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h4`
  font-weight: bold;
  color: black;
  margin: 0px;
`;

const EmptyDiv = styled.div`
  height: 150px;
  width: 100%;
`;

/*
NOTE: The wrapper sections are controlled with "display: none". Kindly set in js.
 */

const LessorAccounts = () => {
  const images = {
    profilePic: require("../../../img/eko.jpg"),
  };
  return (
    <Container>
      <Header />
      <HeroDiv>
        <ProfilePicImg
          src={images.profilePic}
          style={{
            height: "180px",
            width: "250px",
            borderRadius: "30px",
            border: "4px solid white",
          }}
        />
        <Name>EKO CONVENTION CENTER</Name>
      </HeroDiv>
      <BodyWrapper>
        <IconTextDropdownDiv>
          <IconTextDiv>
            <MdDashboard style={{ height: "35px", width: "35px" }} />
            <Title>Dashboard</Title>
          </IconTextDiv>
          <MdOutlineChevronRight
            style={{ height: "35px", width: "35px", color: "#ff0800" }}
          />
        </IconTextDropdownDiv>
        <IconTextDropdownDiv>
          <IconTextDiv>
            <MdMarkAsUnread style={{ height: "35px", width: "35px" }} />
            <Title>Messages</Title>
          </IconTextDiv>
          <MdOutlineChevronRight
            style={{ height: "35px", width: "35px", color: "#ff0800" }}
          />
        </IconTextDropdownDiv>
        <IconTextDropdownDiv>
          <IconTextDiv>
            <MdNotificationsActive style={{ height: "35px", width: "35px" }} />
            <Title>Notifications</Title>
          </IconTextDiv>
          <MdOutlineChevronRight
            style={{ height: "35px", width: "35px", color: "#ff0800" }}
          />
        </IconTextDropdownDiv>
        <IconTextDropdownDiv>
          <IconTextDiv>
            <MdLogout style={{ height: "35px", width: "35px" }} />
            <Title>Sign Out</Title>
          </IconTextDiv>
          <MdOutlineChevronRight
            style={{ height: "35px", width: "35px", color: "#ff0800" }}
          />
        </IconTextDropdownDiv>
        <EmptyDiv />
      </BodyWrapper>
      <Footer />
    </Container>
  );
};

export default LessorAccounts;
