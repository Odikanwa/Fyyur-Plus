import React from 'react';
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { MdMoreVert } from "react-icons/md";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
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
  background-color: black;
  color: white;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 50%;
  align-self: center;
  justify-items: center;
  justify-content: center;
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
`

const Text = styled.p`
  margin-top: 0px;
  margin-bottom: 4px;
`;

const Kebab = styled.div`
  margin-top: 3%;
  margin-right: 10px;
`;

const Video = styled.div`
    background-color: black;
    height: 230px;
    margin: 7px 0px 10px 0px;
`;

const LiveShow = () => {
  return (
    <Container>
      <Wrapper>
        <AvatarDescWrapper>
            <Avatar>
                <BsFillPersonFill style={{ height: "30px", width: "30px"}}/>
            </Avatar>
            <Desc>
                <Title>Wild, Wild Night</Title>
                <Text>Olameda et Phyna</Text>
                <Text>Eko Hall</Text>
            </Desc>
        </AvatarDescWrapper>
        <Kebab>
          <MdMoreVert style={{ height: "20px", width: "20px"}}/>
        </Kebab>
      </Wrapper>
        <Video/>
    </Container>
  )
}

export default LiveShow;