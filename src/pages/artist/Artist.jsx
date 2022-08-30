import React from "react";
import styled from "styled-components";
import ShowCard from "../../components/ShowCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsToggleOn, BsGeoFill } from "react-icons/bs";
import { MdFavorite, MdLink, MdLocationPin, MdPhone } from "react-icons/md";

// ******* CSS Styles *******

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  
`;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  /* background-color: #0B0510; */
`;

const Card = styled.div`
  position: relative;
  height: 380px;
  margin: 0px;
  
  
`;

const Img = styled.img`
  width: 100%;
  height: 380px;
  align-self: center;
  color: black;
`;
const Overlay = styled.div`
  position: absolute; 
  top: 0px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1; 
  height: 380px;
  width: 100%;
  opacity:1;
  color: white;
  text-align: center;
`;

const Heart = styled.div`
  position: absolute; 
  top: 10px;
  right: 0; 
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.3); /* Black see-through */
  color: #f1f1f1; 
  height: 36px;
  width: 40px;
  opacity:1;
  color: white;
  border-radius: 15px;
  text-align: center;
  align-self: center;
  align-items: center;
  padding: 3px;
  margin-right: 20px;
`;

const ArtistName = styled.h1`
  /* top: 300px; */
  position: absolute;
  bottom: 0px;
  margin-left: 20px;
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Silkscreen', cursive;
`;

const GenresDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  gap: 15px;
`; 

const Genre = styled.p`
  color: white;
  /* background-color: #C5C6D0; */
  background-color: purple;
  padding: 5px 10px;
  border-radius: 5px;
`;

const AboutDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0px;
`;

const IconTextDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
`;

const Icon = styled.div`
  width: 10%;
  margin: 0px;
`;

const Text = styled.p`
width: 90%;
margin: 0px;
`;

const TitleDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Title = styled.h4`
  margin-top: 0px;
  margin-right: 10px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
`;

const SeekingVenueDiv = styled.div`
  height: auto;
  width: 80%;
  margin: 0px 20px;
  color: white;
  padding: 15px;
  background-color: #0B0510;
  border-radius: 15px;
`;

const SeekingVenueText = styled.div`
  width: 100%;
  margin: 0px 0px 5px 0px;
`;
const EmptyDiv = styled.div`
  height: 150px;
  width: 100%;
`;
const TitleText = styled.h4`
  margin: 20px 20px 10px 20px;
  font-weight: 400;
  text-align: left;
  font-family: 'Silkscreen', cursive;
`;



const Artist = () => {
  const images = {
    trending1: require("../../img/Phyno.jpg")
    }
  return (
    <Container>
      <Wrapper>
      <Header/>
        <Card>
          <Img src={images.trending1}/>
          <Overlay>
            <Heart>
              <MdFavorite style={{ height: "35px", width: "35px"}}/>
            </Heart>
            <ArtistName> PHYNO </ArtistName>
          </Overlay>
        </Card>
        <GenresDiv>
          <Genre> RAP </Genre>
          <Genre> HIGHLIFE </Genre>
          <Genre> AFRO-BEAT </Genre>
        </GenresDiv>
        <AboutDiv>
          <IconTextDiv>
            <Icon>
              <MdLocationPin style={{ height: "22px", width: "22px", color: "brown"}}/>
            </Icon>
            <Text> Enugu, Nigeria </Text>
          </IconTextDiv>
          <IconTextDiv>
            <Icon>
              <MdPhone style={{ height: "22px", width: "22px", color: "brown"}}/>
            </Icon>
            <Text> +234 810 777 2340 </Text>
          </IconTextDiv>
          <IconTextDiv>
            <Icon>
              <MdLink style={{ height: "22px", width: "22px", color: "brown"}}/>
            </Icon>
            <Text> https://www.phynoezege.com </Text>
          </IconTextDiv>
        </AboutDiv>
        <TitleDiv>
            <Title> Seeking Venue </Title>
            <Icon>
              <BsToggleOn style={{ height: "22px", width: "24px", color: "green", textAlign: "left"}}/>
            </Icon>
        </TitleDiv>
        <SeekingVenueDiv>
          <IconTextDiv style={{margin: "5px 10px"}}>
            <Icon>
            <BsGeoFill style={{ height: "22px", width: "22px"}}/>
            </Icon>
            <Text> Enugu city </Text>
          </IconTextDiv>
          <SeekingVenueText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </SeekingVenueText>
        </SeekingVenueDiv>
        <TitleText> 1 Upcoming show</TitleText>
        <ShowCard/>
        <TitleText> 0 Past show</TitleText>
        <EmptyDiv/>
      <Footer/>
      </Wrapper>
    </Container>
  )
}

export default Artist;