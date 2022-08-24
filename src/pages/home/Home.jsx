import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TrendingCarousel from "../../components/TrendingCarousel";
import TodayShowCarousel from "../../components/TodayShowCarousel";
import LiveShow from "../../components/LiveShow";
import ShowCard from "../../components/ShowCard";
import { MdRadioButtonChecked } from "react-icons/md";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 100vw;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrendingHeader = styled.div`
  background-color: black;
  height: 40px;
  border-top: 1px solid gray;
`;

const TrendingHeaderText = styled.h4`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-weight: 800;
  align-self: center;
  
  margin: 9px 20px; 
`;

const TrendingCard = styled.div`
  background-color: black;
  color: white;
  height: 90px;
  margin: 5px 20px 5px 20px;
  padding: 5px;
  border-radius: 20px;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h4`
  font-weight: 600;
  margin: 10px 5px 0px 20px;
`;

const LiveIcon = styled.div`
  align-self: center;
  margin-top: 12px;
  margin-left: 0px;
  text-align: left;
  color: #ff0800;
`

const EmptyDiv = styled.div`
  height: 150px;
`;


const Home = () => {
  return (
    <Container>
      <Header/>
      <Wrapper>
      <TrendingHeader>
            <TrendingHeaderText>
              Trending ...
            </TrendingHeaderText>
          </TrendingHeader>
        <TrendingCard> 
            <TrendingCarousel/>
        </TrendingCard>
        <TitleDiv>
        <Title>
          Live Show 
        </Title>
        <LiveIcon>
          <MdRadioButtonChecked style={{ height: "15px", width: "15px"}}/>
        </LiveIcon>
        </TitleDiv>
        <LiveShow/>
        <Title>
          Today's Shows
        </Title>
        <TodayShowCarousel/>
        <Title>
          Upcoming Shows
        </Title>
        <ShowCard/>
        <EmptyDiv/>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Home;