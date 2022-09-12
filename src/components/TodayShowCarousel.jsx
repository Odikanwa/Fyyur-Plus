import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

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

const Overlay = styled.div`
  position: absolute; 
  top: 157px;
  bottom: 0px; 
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.6); /* Black see-through */
  color: #f1f1f1; 
  height: 130px;
  width: 87%;
  opacity:1;
  color: white;
  border-radius: 20px;
  text-align: center;
  margin-left: 6%;
  vertical-align: bottom;
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

const TodayShowCarousel = () => {
    
  const images = {
    trending1: require("../img/john-doe.jpg"),
    trending2: require('../img/olamide-phyno.jpg'),
    trending3: require('../img/peruzi.jpg')
    
  }
  const settings = {

    className: "center",
    centerMode: true,
    centerPadding: "30px",
    swipeToSlide: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
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
              <Overlay/>
            </Card>
            <Card>
              <Img src={images.trending2}/>
              <Overlay/>
            </Card>
            <Card>
              <Img src={images.trending3}/>
              <Overlay/>
            </Card>
        </Slider>
      </div>
    );
}
export default TodayShowCarousel;