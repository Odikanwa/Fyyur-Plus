import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {
  MdFavorite,
  MdOutlineAccessTime,
  MdLocationPin,
  MdSettingsVoice,
  MdKeyboardArrowRight,
} from "react-icons/md";

//  ******* CSS Styles ********

const Card = styled.div`
  position: relative;
  height: 300px;
  margin: 15px 20px 10px 20px;
`;

const Img = styled.img`
  width: 98%;
  height: 300px;
  border-radius: 20px;
  align-self: center;
  margin-right: 10px;
`;

const Heart = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.6); /* Black see-through */
  color: #f1f1f1;
  height: 36px;
  width: 40px;
  opacity: 1;
  color: white;
  border-radius: 15px;
  text-align: center;
  align-self: center;
  align-items: center;
  padding: 3px;
  margin-right: 7%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 157px;
  bottom: 0px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.6); /* Black see-through */
  color: #f1f1f1;
  height: 130px;
  width: 87%;
  opacity: 1;
  color: white;
  border-radius: 20px;
  text-align: center;
  margin-left: 6%;
  vertical-align: bottom;
`;

const Title = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ArtistWrapper = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-left: 10px;
`;

const ArtistIcon = styled.div`
  flex: 1;
  margin-top: 0px;
  margin-left: 10px;
  align-self: center;
`;

const ArtistText = styled.p`
  flex: 6;
  margin-top: 0px;
  margin-left: 0px;
  text-align: left;
`;

const TimeWrapper = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-left: 10px;
`;

const TimeIcon = styled.div`
  flex: 1;
  margin-top: 0px;
  margin-left: 10px;
  align-self: center;
`;

const TimeText = styled.p`
  flex: 3;
  margin-top: 0px;
  margin-left: 0px;
  text-align: left;
`;

const VenueIcon = styled.div`
  flex: 1;
  margin-top: 0px;
  margin-left: 10px;
  align-self: center;
`;

const VenueText = styled.p`
  flex: 2;
  margin-top: 0px;
  margin-left: 0px;
  text-align: left;
`;

const BookNowBtn = styled.button`
  height: 35px;
  width: 45%;
  display: flex;
  flex-direction: row;
  font-size: 15px;
  margin-top: 3px;
  margin-left: 30%;
  padding: 8px 6px;
  justify-content: center;
  color: white;
  background-color: #ff0800;
  border: none;
  border-radius: 20px;
`;
const BtnText = styled.h4`
  width: 70%;
  margin-top: 0px;
  margin-left: 0px;
  font-weight: 500;
  text-align: center;
  background-color: #ff0800;
  color: white;
`;

const BtnIcon = styled.div`
  width: 5%;
  margin-top: 0px;
  margin-left: 0;
  align-self: left;
  font-weight: 500;
  background-color: #ff0800;
  color: white;
`;

// ******* JSX Logic *******

const ShowCard = () => {
  const images = {
    trending1: require("../img/john-doe.jpg"),
    // trending2: require('../img/olamide-phyno.jpg'),
    // trending3: require('../img/peruzi.jpg')
  };
  return (
    <Card>
      <Img src={images.trending1} />
      <Heart>
        <MdFavorite style={{ height: "35px", width: "35px" }} />
      </Heart>
      <Overlay>
        <Title> JD Experience 22 </Title>
        <ArtistWrapper>
          <ArtistIcon>
            <MdSettingsVoice style={{ height: "18px", width: "18px" }} />
          </ArtistIcon>
          <ArtistText> John Doe </ArtistText>
        </ArtistWrapper>
        <TimeWrapper>
          <TimeIcon>
            <MdOutlineAccessTime style={{ height: "18px", width: "18px" }} />
          </TimeIcon>
          <TimeText> August 25 | 9pm </TimeText>
          <VenueIcon>
            <MdLocationPin style={{ height: "18px", width: "18px" }} />
          </VenueIcon>
          <VenueText> Lagos </VenueText>
        </TimeWrapper>
        <BookNowBtn>
          <BtnText> Book Now </BtnText>
          <BtnIcon>
            <MdKeyboardArrowRight style={{ height: "18px", width: "18px" }} />
          </BtnIcon>
        </BookNowBtn>
      </Overlay>
    </Card>
  );
};

export default ShowCard;
