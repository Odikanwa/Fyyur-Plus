import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";

//  ******* CSS Styles ********

const Card = styled.div`
  position: relative;
  height: 300px;
  margin: 7px 20px 10px 20px;
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
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1; 
  height: 40px;
  width: 40px;
  opacity:1;
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
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
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

// ******* JSX Logic *******

const ShowCard = () => {
  const images = {
    trending1: require("../img/john-doe.jpg")
    // trending2: require('../img/olamide-phyno.jpg'),
    // trending3: require('../img/peruzi.jpg')
    }
  return (
    <Card>
        <Img src={images.trending1}/>
        <Heart>
          <MdFavorite style={{ height: "35px", width: "35px"}}/>
        </Heart>
        <Overlay/>
    </Card>
  )
}

export default ShowCard;