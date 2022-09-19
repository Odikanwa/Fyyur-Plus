import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsSliders, BsLampFill } from "react-icons/bs";
import { MdVerifiedUser, MdPeopleAlt, MdSpeakerGroup } from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  /* background-color: #F8EEEC; */
  /* background-color: #F0EDE5; */
  background-color: white;
`;

const CaptionDiv = styled.div`
  height: auto;
  /* background-color: white; */
  width: 80%;
  margin: 20px;
  display: flex;
  flex-direction: row;
  border-left: 5px solid brown;
  border-radius: 10px;
  padding: 0px 0px 0px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #0b0510;
  color: white;
`;

const Caption = styled.h3`
  font-weight: bold;
  font-family: "Orbitron", sans-serif;
  width: 60%;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const CaptionImg = styled.img`
  height: 80px;
  width: 150px;
  text-align: right;
  /* background-color: silver;  */
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  /* padding: 10px; */
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ButtonsDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0px 0px;
  justify-content: space-evenly;
`;
const Button = styled.button`
  font-weight: bold;
  padding: 7px 10px;
  border-radius: 10px;
  background-color: white;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FilterButton = styled.button`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  padding: 7px 10px;
  border-radius: 10px;
  background-color: white;
  border: none;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FilterText = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Title = styled.h3`
  margin: 20px 20px 0px 20px;
`;
const Card = styled.div`
  margin: 20px;
  height: 285px;
  width: 90%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 0px;
  /* box-shadow: -3px 3px 3px 3px rgba(0,0,0,0.75);
-webkit-box-shadow: -3px 3px 3px 3px rgba(0,0,0,0.75);
-moz-box-shadow: -3px 3px 3px 3px rgba(0,0,0,0.75); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Img = styled.img`
  height: 180px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ImgTextDiv = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  margin: 0px 20px 0px 0px;
  flex-direction: column;
`;

const IconTextDiv = styled.div`
  height: 18px;
  width: auto;
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  align-items: center;
`;
const VenueType = styled.p`
  font-weight: bold;
  margin: 0px 10px 0px 10px;
  color: brown;
`;

const VenuePrice = styled.p`
  /* font-size: 20px; */
  font-weight: bold;
  margin: 0px 10px 0px 10px;
`;

const VenueText = styled.p`
  margin: 3px 10px 0px 10px;
`;

const CapacityDiv = styled.div`
  margin: 0px 20px 10px 0px;
  display: flex;
  flex-direction: row;
`;

const Venues = () => {
  const images = {
    captionImg: require("../../img/stage3.jpg"),
    cardImg: require("../../img/eko.jpg"),
  };
  return (
    <Container>
      <Header />
      <CaptionDiv>
        <Caption> Find Your Dream Venue </Caption>
        <CaptionImg src={images.captionImg} />
      </CaptionDiv>
      <ButtonsDiv>
        <Button style={{ backgroundColor: "#ff0800", color: "white" }}>
          {" "}
          All{" "}
        </Button>
        <Button> Hall | Theatre </Button>
        <Button> Open Air </Button>
        <FilterButton>
          <FilterText> Filter </FilterText>
          <BsSliders
            style={{ height: "18px", width: "18px", paddingLeft: "5px" }}
          />
        </FilterButton>
      </ButtonsDiv>
      <Title> Venues </Title>
      <Card>
        <Img src={images.cardImg} />
        <ImgTextDiv>
          <IconTextDiv>
            <MdVerifiedUser
              style={{ height: "18px", width: "18px", color: "brown" }}
            />
            <VenueType> Premium | Hall</VenueType>
          </IconTextDiv>
          <VenuePrice> 100, 000 NGN / Hour </VenuePrice>
          <VenueText> Eko Convention Center, Eko Hotel, Lagos</VenueText>
          <CapacityDiv>
            <IconTextDiv>
              <MdPeopleAlt style={{ height: "18px", width: "18px" }} />
              <VenueText> 10,000 </VenueText>
            </IconTextDiv>
            <IconTextDiv>
              <MdSpeakerGroup style={{ height: "18px", width: "18px" }} />
              <VenueText> Installed </VenueText>
            </IconTextDiv>
            <IconTextDiv>
              <BsLampFill style={{ height: "18px", width: "18px" }} />
              <VenueText> Installed </VenueText>
            </IconTextDiv>
          </CapacityDiv>
        </ImgTextDiv>
      </Card>
      {/* <EmptyDiv/> */}
      <Footer />
    </Container>
  );
};

export default Venues;
