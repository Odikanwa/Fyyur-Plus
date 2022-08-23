import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
`;

const Img = styled.img`
  width: 30%;
  height: 70px;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  align-self: center;
`;

const Desc = styled.div`
  width: 50%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

const DescTitle = styled.h3`
  font-weight: 500;
  margin-left: 10%;
  margin-bottom: 2px;
`;

const DescArtist = styled.p`
  margin-top: 0px;
  margin-left: 10%;
`;

// const DescVenue = styled.p`
//   padding: 0px 5px 2px 5px;
// `;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "None", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "None", background: "transparent" }}
      onClick={onClick}
    />
  );
}



const TrendingCarousel = () => {
    
  const images = {
    trending1: require("../img/john-doe.jpg"),
    trending2: require("../img/olamide-phyno.jpg"),
    trending3: require("../img/peruzi.jpg")
    
  }
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 2000,
    autoplaySpeed: 8000,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
   
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Card>
                <Img src={images.trending1}/>
                <Desc>
                  <DescTitle>JD Experience 22</DescTitle>
                  <DescArtist>John Doe | Aug 25</DescArtist>
                </Desc>
            </Card>
          </div>
          <div>
          <Card>
                <Img src={images.trending2}/>
                <Desc>
                  <DescTitle>Wild, Wild Night</DescTitle>
                  <DescArtist>Olameda et Phyna | Aug 27</DescArtist>
                </Desc>
            </Card>
          </div>
          <div>
          <Card>
                <Img src={images.trending3}/>
                <Desc>
                  <DescTitle>Chill with Peruza</DescTitle>
                  <DescArtist>Peruza | Aug 30</DescArtist>
                </Desc>
            </Card>
          </div>
        </Slider>
      </div>
    );
}
export default TrendingCarousel;

// const Carousel = () => {
//   return (
//     <div>Carousel</div>
//   )
// }

// export default Carousel;