import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { MdMoreVert } from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AvatarDescWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 80px; */
  width: 80%;
`;

const Avatar = styled.div`
  /* background-color: black; */
  color: white;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 50%;
  align-self: center;
  justify-items: center;
  justify-content: center;
  border: 2px solid black;
`;

const Desc = styled.div`
  width: 75%;
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
  margin-top: 0px;
  margin-bottom: 4px;
`;

const SmallText = styled(Text)`
  font-weight: small;
  color: grey;
`;

const Kebab = styled.div`
  margin-top: 3%;
  margin-right: 20px;
`;

const Video = styled.div`
  background-color: black;
  height: 220px;
  width: 100%;
  margin: 7px 0px 10px 0px;
`;

const LiveShow = () => {
  return (
    <Container>
      <Wrapper>
        <AvatarDescWrapper>
          <Avatar>
            <BsFillPersonFill
              style={{ height: "30px", width: "30px", color: "orange" }}
            />
          </Avatar>
          <Desc>
            <Title>For My Hand</Title>
            <Text>Burna Boy feat. Ed Sheeran</Text>
            <SmallText>Wembley Arena, London</SmallText>
          </Desc>
        </AvatarDescWrapper>
        <Kebab>
          <MdMoreVert style={{ height: "20px", width: "20px" }} />
        </Kebab>
      </Wrapper>
      <Video>
        <iframe
          width="100%"
          height="220"
          src="https://www.youtube-nocookie.com/embed/9J4WImLne1A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Video>
    </Container>
  );
};

export default LiveShow;
