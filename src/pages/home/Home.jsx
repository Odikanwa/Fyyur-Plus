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
  font-family: "Roboto", sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const EmptyDiv = styled.div`
  height: 150px;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Trending ...</Title>
        <TrendingCard>
          <TrendingCarousel />
        </TrendingCard>
        <TitleDiv>
          <Title>Live Shows</Title>
          <LiveIcon>
            <MdRadioButtonChecked style={{ height: "15px", width: "15px" }} />
          </LiveIcon>
        </TitleDiv>
        <LiveShow />
        <Title>Today's Shows</Title>
        <TodayShowCarousel />
        <Title>Upcoming Shows</Title>
        <ShowCard />
        <EmptyDiv />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;
