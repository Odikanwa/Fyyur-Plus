import React from "react";
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: white;
`;

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  /* margin: 0px 20px 0px 20px;
  border-radius: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  /* background-color: #3E3D53; */
  background-color: #0b0510;
`;

const AvatarDescWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  align-self: center;
  justify-items: center;
  justify-content: center;
  background-color: white;
`;

const Desc = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  vertical-align: middle;
`;

const Title = styled.h3`
  margin-top: 0px;
  font-weight: 500;
  margin-bottom: 2px;
`;

const Text = styled.p`
  width: auto;
  margin-top: 0px;
  margin-bottom: 4px;
  color: white;
  padding: 5px 10px 5px 0px;
  border-radius: 5px;
  font-family: "Silkscreen", cursive;
  background-color: #0b0510;
`;

const Heart = styled.div`
  margin-top: 3%;
  margin-right: 20px;
`;

const ArtistCard = () => {
  const images = {
    trending1: require("../img/burna.jpg"),
    trending2: require("../img/davido.jpg"),
    trending3: require("../img/Flavor.png"),
    // trending4: require('../img/olamide.jpg'),
    // trending5: require('../img/Phyno.jpg'),
    // trending6: require('../img/rema.jpeg'),
    // trending7: require('../img/simi.jpg'),
    // trending8: require('../img/tekno.jpg'),
    // trending9: require('../img/zoro.jpg')
  };
  return (
    <Container>
      <Wrapper>
        <AvatarDescWrapper>
          {/* <Avatar> */}
          <Img src={images.trending1} />
          {/* </Avatar> */}
          <Desc>
            <Title>Burna Boy</Title>
            <Text style={{ backgroundColor: "purple", paddingLeft: 10 }}>
              1 UPCOMING SHOW
            </Text>
          </Desc>
        </AvatarDescWrapper>
        <Heart>
          <MdFavorite style={{ height: "20px", width: "20px" }} />
        </Heart>
      </Wrapper>
      <Wrapper>
        <AvatarDescWrapper>
          {/* <Avatar> */}
          <Img src={images.trending2} />
          {/* </Avatar> */}
          <Desc>
            <Title>Davido</Title>
            <Text>0 UPCOMING SHOW</Text>
          </Desc>
        </AvatarDescWrapper>
        <Heart>
          <MdFavorite style={{ height: "20px", width: "20px" }} />
        </Heart>
      </Wrapper>
      <Wrapper>
        <AvatarDescWrapper>
          {/* <Avatar> */}
          <Img src={images.trending3} />
          {/* </Avatar> */}
          <Desc>
            <Title>Flavor</Title>
            <Text>0 UPCOMING SHOW</Text>
          </Desc>
        </AvatarDescWrapper>
        <Heart>
          <MdFavorite style={{ height: "20px", width: "20px" }} />
        </Heart>
      </Wrapper>
    </Container>
  );
};

export default ArtistCard;
