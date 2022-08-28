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
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
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

const Details = styled.div`
  margin-top: 220px;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: red; */
  padding: 20px 20px 0px 0px;
  gap: 10px;
`;

const DetailsLeft = styled.div`
  height: 150px;
  flex: 3;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  padding-right: 5px;
  gap: 5px;
  
`;

const Title = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
`;

const IconTextDiv = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const IconDiv = styled.div`
  height: 100%;
  flex: 1;
`;

const Text = styled.p`
  height: 100%;
  flex: 5;
  margin-top: 0px;
  text-align: left;
`;
 
const DetailsRight = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DateDiv = styled.div`
  height: 27%;
  width:  70%;
  background-color: purple;
  align-items: center;
  padding: 7px;
  border-radius: 10px;
`;

const Month = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
`;

const Day = styled.h3`
  margin-top: 3px;
  text-align: center;
`;

const TimeDiv = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

const TimeIcon = styled.div`
  height: 100%;
  flex: 1;
`;

const TImeText = styled.p`
  margin-top: 0px;
  text-align: left;
`;

const AboutExtrasDiv = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 15px;
  padding-left: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const AboutBtn = styled.button`
  height: 43px;
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  background-color: #ff0800;
  color: white;
  border: none;
`;

const ExtrasBtn = styled.button`
  height: 43px;
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  color: #ff0800;
  background-color: white;
  border: none;
`;

const TextBlock = styled.p`
   height: auto;
   padding: 20px;
   margin-top: 0px;
   color: white;
`;

const PriceDiv = styled.h3`
  margin-top: 0px;
  padding: 20px;
  color: white;
  background-color: purple;
  border-style: dashed;
  /* background-color: #000000; */
`;

const Price = styled.span`
  font-size: 22px;
  font-weight: bold;
`;


const TicketDiv = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 0px;
  margin-left: 20px;
`;


const BuyTicketBtn = styled.button`
  height: 43px;
  width: 40%;
  font-size: 20px;
  font-weight: bold;
  background-color: #ff0800;
  color: white; 
  border: none;
`;

const GiftTicketBtn = styled.button`
  height: 43px;
  width: 40%;
  font-size: 20px;
  font-weight: bold;
  color: #ff0800;
  border: none;
`;

const Location = styled.h3`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 20px;
  color: white;
  /* background-color: #000000; */
`;

const EmptyDiv = styled.div`
  height: 150px;
  width: 100%;
`;

const MapDiv = styled.div`
  height: 300px;
  width: 90%;
  margin: 0px 20px;
  background-color: grey;
  border-radius: 20px;
`;

const Show = () => {
  const images = {
    trending1: require("../../img/john-doe.jpg")
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
            <Details>
              <DetailsLeft>
                <Title> JD EXPERIENCE 22</Title>
                <IconTextDiv>
                  <IconDiv>
                    <MdSettingsVoice style={{ height: "18px", width: "18px"}}/>
                  </IconDiv>
                  <Text> John Doe </Text>
                </IconTextDiv>
                <IconTextDiv>
                <IconDiv>
                    <MdLocationPin style={{ height: "18px", width: "18px"}}/>
                  </IconDiv>
                  <Text> Eko Convention Center, Eko Hotel, Lagos </Text>
                </IconTextDiv>
              </DetailsLeft>
              <DetailsRight>
                <DateDiv>
                  <Month> AUG </Month>
                  <Day> 27 </Day>
                </DateDiv>
                <TimeDiv>
                  <TimeIcon>
                    <MdOutlineAccessTime style={{ height: "18px", width: "18px"}}/>
                  </TimeIcon>
                  <TImeText> 9 PM </TImeText>
                </TimeDiv>
              </DetailsRight>
            </Details>
          </Overlay>
        </Card>
        <AboutExtrasDiv>
          <AboutBtn> About </AboutBtn>
          <ExtrasBtn> Extras </ExtrasBtn>
        </AboutExtrasDiv>
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </TextBlock>
        <PriceDiv> 
          Ticket Price: <Price> 1500 NGN </Price>
        </PriceDiv>
        <TicketDiv>
          <BuyTicketBtn> Buy Ticket </BuyTicketBtn>
          <GiftTicketBtn> Gift Ticket </GiftTicketBtn>
        </TicketDiv>
        <Location> Need a Map? </Location>
        <MapDiv>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.746682566303!2d3.4279245147702264!3d6.42658279535034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe6a84cddd53!2sEko%20Hotels%20%26%20Suites!5e0!3m2!1sen!2sng!4v1661452118417!5m2!1sen!2sng" title="google-map" width="100%" height="100%" style={{border:0, borderRadius: "20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </MapDiv>
        <EmptyDiv/>
      <Footer/>
      </Wrapper>
    </Container>
  )
}

export default Show;