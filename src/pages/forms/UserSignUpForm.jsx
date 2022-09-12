import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Container = styled.div`
  height: auto;
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
  height: auto;
  width: 100vw;
  margin: 0px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20;
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

const Text = styled.p`
  font-weight: bold;
  color: white;
`;

const Label = styled.label`
  margin: 0px;
  width: 80%;
  font-weight: bold;
  color: white;
  text-align: left;
`;

const File = styled.input`
  color: white;
  height: 30px;
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  border-radius: 40px;
  border: none;
  border-radius: 40px;
`;
const EmptyDiv = styled.div`
  height: 150px;
  width: 100%;
`;

const UserSignUpForm = () => {
  return (
    <Container>
      <Header />
      <FormDiv>
        <Caption>Hi there!</Caption>
        <Text>Welcome. It'd take just 5 minutes to fill.</Text>
        <Input placeholder="  First Name" />
        <Input placeholder="  Last Name" />
        <Input placeholder="  Email" />
        <Input placeholder="  State" />
        <Input placeholder="  Country" />
        <Label>Upload Profile Picture</Label>
        <File type="file" name="filename" />
        <Input placeholder="  Username" />
        <Input placeholder="  Password" />
        <SignIn>Submit</SignIn>
        <EmptyDiv />
      </FormDiv>
      <Footer />
    </Container>
  );
};

export default UserSignUpForm;
