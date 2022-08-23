import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: black;
  height: 100vh;
  color: white;
  top: 0;

`;

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Img = styled.img`
  height: 25px;
`;

// const Item = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   cursor: pointer;
//   padding: 7.5px 0px;

//   &:hover {
//     background-color: white;
//     color: red;
//   }
// `;
const Menu = () => {
  return (
    <Container>
        <Wrapper>
          <Link to="/" style={{color: "white"}}>
            <Logo>
                <Img/>
                Fyyur
            </Logo>
          </Link>
        </Wrapper>
    </Container>
  )
}

export default Menu