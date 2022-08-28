import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

//  ******* CSS Styles ********

const Card = styled.div`
  position: relative;
  height: auto;
  margin: 15px 20px 10px 20px;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  align-self: center;
  margin-right: 10px;
`;

const ArtistName = styled.p`
  text-align: center;
  margin-right: 12px;
`;

// ******* JSX Logic *********

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "transparent" }}
      onClick={onClick}
    />
  );
}

const FavoriteArtistCarousel = () => {
    
  const images = {
    trending1: require("../img/burna.jpg"),
    trending2: require('../img/davido.jpg'),
    trending3: require('../img/Flavor.png'),
    trending4: require('../img/olamide.jpg'),
    trending5: require('../img/Phyno.jpg'),
    trending6: require('../img/rema.jpeg'),
    trending7: require('../img/simi.jpg'),
    trending8: require('../img/tekno.jpg'),
    trending9: require('../img/zoro.jpg')
    
  }
  const settings = {

    className: "center",
    centerMode: true,
    centerPadding: "40px",
    swipeToSlide: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    
  };
   
    return (
      <div>
        <Slider {...settings}>
            <Card>
              <Img src={images.trending1}/>
              <ArtistName>Burna Boy</ArtistName>
            </Card>
            <Card>
              <Img src={images.trending2}/>
              <ArtistName>Davido</ArtistName>
            </Card>
            <Card>
              <Img src={images.trending3}/>
              <ArtistName>Flavor</ArtistName>
            </Card>
            <Card>
              <Img src={images.trending4}/>
              <ArtistName>Olamide</ArtistName>
            </Card>
            <Card>
              <Img src={images.trending5}/>
              <ArtistName>Phyno</ArtistName>
            </Card>
            <Card>
              <Img src={images.trending6}/>
              <ArtistName>Rema</ArtistName>
            </Card>
            <Card>
              <Img src={images.trending7}/>
              <ArtistName>Simi</ArtistName>
            </Card>
            <Card>
              <Img src={images.trending8}/>
              <ArtistName>Tekno</ArtistName>
            </Card>
            <Card>
              <Img src={images.trending9}/>
              <ArtistName>Zoro</ArtistName>
            </Card>
        </Slider>
      </div>
    );
}
export default FavoriteArtistCarousel;