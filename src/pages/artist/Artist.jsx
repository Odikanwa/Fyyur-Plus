import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MdFavorite, MdOutlineAccessTime, MdLocationPin, MdSettingsVoice } from "react-icons/md";

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
  background-color: #0B0510;
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
      <Footer/>
      </Wrapper>
    </Container>
  )
}

export default Artist;