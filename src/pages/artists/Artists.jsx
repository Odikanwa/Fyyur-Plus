import React from 'react'
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FavoriteArtistCarousel from '../../components/FavoriteArtistCarousel';
import ArtistCard from '../../components/ArtistCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h3`
  margin-left: 20px;
  margin-bottom: 0px;
`


const Artists = () => {
  return (
    <Container>
      <Header/>
      <Title> Favorite Artists </Title>
        <FavoriteArtistCarousel/>
      <Title> Artists List </Title>
      <ArtistCard/>
      <Footer/>
    </Container>
  )
}

export default Artists;