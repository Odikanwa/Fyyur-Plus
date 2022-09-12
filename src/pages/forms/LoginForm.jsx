import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// const Shape = css`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
// `;

// const IntoShapeTop = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
//   clip-path: polygon(
//     0 0,
//     100% 0,
//     100% 100%,
//     97% 8%,
//     52% 9%,
//     28% 10%,
//     11% 10%,
//     0 17%
//   );
//   background-color: #0b0510;
//   z-index: 10;
//   /* @media only screen and (max-width: 480px){
//       clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
//   } */
// `;

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  margin: 0px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: #0b0510;
  font-family: "Roboto", sans-serif;
  border: none;
`;

const FormDiv = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0px;
  /* margin-left: 20px;
  margin-right: 20px;
  margin-top: 20vh;
  margin-bottom: 20vh;
  border-radius: 40px; */
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20;
  /* background-color: #f0ede5; */
  align-self: center;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Caption = styled.h2`
  font-weight: bold;
  color: white;
  text-align: center;
`;

const Input = styled.input`
  height: 30px;
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  border: none;
  background-color: white;
  border-radius: 40px;
`;

const SignIn = styled.button`
  height: auto;
  width: 40%;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  background-color: #ff0800;
  border: none;
  color: white;
  border-radius: 50px;
`;

const TextFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Text = styled.p`
  font-weight: bold;
`;

const LoginForm = () => {
  return (
    <Container>
      <Header />
      <FormDiv>
        <Caption>Welcome!</Caption>
        <Input placeholder="  Username" />
        <Input placeholder="  Password" />
        <SignIn>Sign In</SignIn>
        <TextFlex>
          <Text>Forgot Password?</Text>
          <Text>Sign Up</Text>
        </TextFlex>
      </FormDiv>
      <Footer />
    </Container>
  );
};

export default LoginForm;
