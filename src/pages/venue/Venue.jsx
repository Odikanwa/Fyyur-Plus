import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsLampFill } from "react-icons/bs";
import { MdFavorite, MdPhotoLibrary, MdSms, MdCall, MdStarHalf, MdVerifiedUser, MdPeopleAlt, MdSpeakerGroup } from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #F0EDE5;
  /* font-family: 'Roboto', sans-serif; */ 
`;

const Card = styled.div`
  position: relative;
  height: 320px;
  margin: 0px;
`;

const Img = styled.img`
  width: 100%;
  height: 320px;
  align-self: center;
  color: black;
`;
const Overlay = styled.div`
  position: absolute; 
  top: 0px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.3); /* Black see-through */
  color: #f1f1f1; 
  height: 320px;
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

const TopButtonsDiv = styled.div`
  height: 110px;
  width: 90%;
  margin: -50px 20px 10px 20px;
  border-radius: 15px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const TopButton = styled.button`
  height: auto;
  width: 80px;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  gap: 5px;
  /* background-color: silver; */
  color: black;
  justify-content: center; 
  align-items: center;
`;

const Text = styled.p`
  margin: 0px;
  align-self: center;
`;

const SpecTextDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  margin: 0px 20px 20px 10px;
  gap: 5px;
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
  font-size: 24px;
  font-weight: bold;
  margin: 0px 10px 0px 10px;
`;

const VenueText = styled.p`
  margin: 3px 10px 0px 10px;
`;

const CapacityDiv = styled.div`
  margin: 0px 20px 0px 0px;
  display: flex;
  flex-direction: row;
`;

const Title = styled.h3`
margin: 0px 20px 10px 20px;
font-weight: bold;
`;

const Desc = styled.p`
  margin: 0px 20px 30px 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: #0B0510;
  color: white;
`;

const TextSpan = styled.span`
  color: brown;
  font-weight: bold;
  text-decoration: underline;
`;
const MapDiv = styled.div`
  height: 300px;
  width: 90%;
  margin: 0px 20px 30px 20px;
  background-color: grey;
  border-radius: 20px;
  box-shadow: -3px 3px 3px 3px rgba(0,0,0,0.75);
  -webkit-box-shadow: -3px 3px 3px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: -3px 3px 3px 3px rgba(0,0,0,0.75);
`;

const RatingsDiv = styled.div`
  height: auto;
  width: 80%;
  margin: 0px 20px 0px 20px;
  background-color: white;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* font-size: 22px;
  font-weight: bold; */
`;

const RatingsBarDiv = styled.div`
  height: auto;
  width: 80%;
  margin: 0px 20px 10px 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top: 1px solid silver;
`;

const StarSpan = styled.span`
  color: gold;
`;

const YellowRatingsBar = styled.div`
  height: 13px;
  width: 150px;
  background-color: silver;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const YellowRatingsStrip = styled.div`
  height: 100%;
  margin: 0px;
  border-radius: 10px;
  background-color: gold;
`;

const EmptyDiv = styled.div`
  height: 150px;
  width: 100%;
`;

const ReviewsDiv = styled.div`
  height: auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 10px 20px 0px 20px;
  padding: 10px 10px 0px 10px;
  border-radius: 20px;
`;

const ReviewerDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row; 
`;

const ReviewerImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px 5px 10px 0px;
  padding: 10px;
  align-self: center;
`;

const ReviewerTextDiv = styled.div`
  width: 100%;
  /* height: 80%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  text-align: left;
  align-items: left;
  
`;

const ReviewTextBlock = styled.p`
  width: 85%;
  margin: 0px 20px 20px 20px;
  background-color: white
`;

const BookNowBtn = styled.button`
  font-weight: bold;
  color: white;
  margin-right: 20px;
  padding: 10px 20px;
  background-color: #ff0800;
  border: none;
  border-radius: 20px;
`;
const BookNowBtnButtom = styled.button`
  width: 90%;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin: 30px 20px 10px 20px;
  padding: 20px 30px;
  background-color: #ff0800;
  border: none;
  border-radius: 40px;
`;


const Venue = () => {
  const images = {
    heroImg: require("../../img/eko.jpg"),
    reviewerImg: require("../../img/tekno.jpg")
    }
  return (
    <Container>
      <Header/>
          <Card>
            <Img src={images.heroImg}/>
            <Overlay>
              <Heart>
                <MdFavorite style={{ height: "35px", width: "35px"}}/>
              </Heart>
            </Overlay>
          </Card>
          <TopButtonsDiv>
          <TopButton>
            <MdSms style={{ height: "25px", width: "25px", alignSelf: "center", padding: "10px", backgroundColor: "silver", borderRadius: "10px"}}/>
            <Text> Text </Text>
          </TopButton>
          <TopButton>
            <MdCall style={{ height: "25px", width: "25px", alignSelf: "center", padding: "10px", backgroundColor: "silver", borderRadius: "10px"}}/>
            <Text> Call </Text>
          </TopButton>
          <TopButton>
            <MdPhotoLibrary style={{ height: "25px", width: "25px", alignSelf: "center", padding: "10px", backgroundColor: "silver", borderRadius: "10px"}}/>
            <Text> Photos </Text>
          </TopButton>
          <TopButton>
            <MdStarHalf style={{ height: "25px", width: "25px", alignSelf: "center", padding: "10px", backgroundColor: "silver", borderRadius: "10px"}}/>
            <Text> Reviews </Text>
          </TopButton>
        </TopButtonsDiv>
        <SpecTextDiv>
            <IconTextDiv>
              <MdVerifiedUser style={{ height: "18px", width: "18px", color: "brown"}}/>
              <VenueType> Premium | Hall</VenueType>
            </IconTextDiv>
            <IconTextDiv style={{paddingLeft: "0px", justifyContent: "space-between"}}>
              <VenuePrice> 100, 000 NGN / Hour </VenuePrice>
              <BookNowBtn> Book Now </BookNowBtn>
            </IconTextDiv>
            <VenueText> Eko Convention Center, Eko Hotel, Lagos</VenueText>
            <CapacityDiv> 
              <IconTextDiv>
                <MdPeopleAlt style={{ height: "18px", width: "18px"}}/>
                <VenueText> 10,000 </VenueText>
              </IconTextDiv>
              <IconTextDiv>
                <MdSpeakerGroup style={{ height: "18px", width: "18px"}}/>
                <VenueText> Installed </VenueText>
              </IconTextDiv>
              <IconTextDiv>
                <BsLampFill style={{ height: "18px", width: "18px"}}/>
                <VenueText> Installed </VenueText>
              </IconTextDiv>
            </CapacityDiv>
        </SpecTextDiv>
        <Title> Description </Title>
        <Desc> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...<TextSpan>show more</TextSpan>
        </Desc>
        <Title> Need a Map? </Title>
        <MapDiv>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.746682566303!2d3.4279245147702264!3d6.42658279535034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe6a84cddd53!2sEko%20Hotels%20%26%20Suites!5e0!3m2!1sen!2sng!4v1661452118417!5m2!1sen!2sng" title="google-map" width="100%" height="100%" style={{border:0, borderRadius: "20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </MapDiv>
        <IconTextDiv style={{justifyContent: "space-between"}}>
          <Title> Verified Reviews </Title>
          <Text style={{color: "brown", fontWeight: "bold", marginRight: "20px"}}> See all &#129122; </Text>
        </IconTextDiv>
        <RatingsDiv>
          <Text style={{ fontSize: "35px", fontWeight: "bold", color: "gold"}}> 4.7/5 </Text>
          <Text style={{ fontSize: "22px", color: "gold", fontWeight: "bold"}}>
            <>&#9733; &#9733; &#9733; &#9733; <MdStarHalf style={{ fontSize: "22px", margin: "0px 0px 2px 0px", verticalAlign: "middle"}}/></>
          </Text>
          <Text style={{fontWeight: "bold"}}> 45 verified ratings </Text>
        </RatingsDiv>
        <RatingsBarDiv>
          <IconTextDiv style={{justifyContent: "space-between"}}>
            <Text style={{ fontSize: "22px", fontWeight: "bold", wordSpacing: "2px"}}>
            <> 5 <StarSpan>&#9733;</StarSpan> (35) </>
            </Text>
            <YellowRatingsBar>
              <YellowRatingsStrip style={{width: "79%"}}/>
            </YellowRatingsBar>
          </IconTextDiv>
          <IconTextDiv style={{justifyContent: "space-between"}}>
            <Text style={{ fontSize: "22px", fontWeight: "bold", wordSpacing: "2px"}}>
            <> 4 <StarSpan>&#9733;</StarSpan> (5) </>
            </Text>
            <YellowRatingsBar>
              <YellowRatingsStrip style={{width: "11%"}}/>
            </YellowRatingsBar>
          </IconTextDiv>
          <IconTextDiv style={{justifyContent: "space-between"}}>
            <Text style={{ fontSize: "22px", fontWeight: "bold", wordSpacing: "2px"}}>
            <> 3 <StarSpan>&#9733;</StarSpan> (3) </>
            </Text>
            <YellowRatingsBar>
              <YellowRatingsStrip style={{width: "6%"}}/>
            </YellowRatingsBar>
          </IconTextDiv>
          <IconTextDiv style={{justifyContent: "space-between"}}>
            <Text style={{ fontSize: "22px", fontWeight: "bold", wordSpacing: "2px"}}>
            <> 2 <StarSpan>&#9733;</StarSpan> (2) </>
            </Text>
            <YellowRatingsBar>
              <YellowRatingsStrip style={{width: "4%"}}/>
            </YellowRatingsBar>
          </IconTextDiv>
          <IconTextDiv style={{justifyContent: "space-between"}}>
            <Text style={{ fontSize: "22px", fontWeight: "bold", wordSpacing: "2px"}}>
            <> 1 <StarSpan>&#9733;</StarSpan> (1) </>
            </Text>
            <YellowRatingsBar>
              <YellowRatingsStrip style={{width: "2.2%"}}/>
            </YellowRatingsBar>
          </IconTextDiv>
        </RatingsBarDiv>
        <ReviewsDiv>
          <ReviewerDiv>
            <ReviewerImg src={images.reviewerImg}/>
            <ReviewerTextDiv>
              <Text style={{fontWeight: "bold", alignSelf: "flex-start"}}> T. </Text>
              <IconTextDiv style={{justifyContent: "space-between", padding: 0}}>
                <Text style={{ fontSize: "20px", color: "gold", fontWeight: "bold", marginBottom: "2px"}}>
                  <>&#9733; &#9733; &#9733; &#9733; &#9733;</>
                </Text>
                <Text> March 10, 2022</Text>
              </IconTextDiv>
              
            </ReviewerTextDiv>
          </ReviewerDiv>
          <ReviewTextBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </ReviewTextBlock>
        </ReviewsDiv>
        <BookNowBtnButtom> Book Now </BookNowBtnButtom>
        <EmptyDiv/>
      <Footer/>
    </Container>
  )
}

export default Venue;