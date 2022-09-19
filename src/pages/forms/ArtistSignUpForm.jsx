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
  overflow-x: hidden !important;
`;

const Caption = styled.h2`
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 10px;
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

const Text = styled.p`
  font-weight: bold;
  color: white;
`;

const Label = styled.label`
  margin: 0px;
  padding: 0px;
  width: 85%;
  font-weight: bold;
  color: white;
  text-align: left;
`;

const File = styled.input`
  color: white;
  height: 30px;
  width: 85%;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 0px;
  font-size: 18px;
  border-radius: 40px;
  border: none;
  border-radius: 40px;
`;
const CheckBoxDiv = styled.div`
  height: auto;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const CheckBox = styled.input`
  height: 30px;
  width: 13%;
  margin: 0px 5px 10px 0px;
  font-size: 18px;
  border: none;
  background-color: white;
  border-radius: 40px;
  align-self: center;
  vertical-align: middle;
`;
const CheckBoxLabel = styled.p`
  height: 30px;
  width: 70%;
  margin: 0px;
  /* margin: 0px 0px 10px 0px;
  padding: 10px 10px 10px 0px; */
  border: none;
  color: white;
  text-align: left;
`;

const GenresCheckboxesDiv = styled.div`
  height: auto;
  width: 90%;
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

const GenreCheckBoxDiv = styled(CheckBoxDiv)`
  width: 30%;
`;

const TextArea = styled.textarea`
  height: 80px;
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  border: none;
  background-color: white;
  border-radius: 10px;
`;

const SubmitBtn = styled.button`
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

const EmptyDiv = styled.div`
  height: 150px;
  width: 100%;
`;

const ArtistSignUpForm = () => {
  return (
    <Container>
      <Header />
      <FormDiv>
        <Caption>Hello!</Caption>
        <Text>Sign up to get started.</Text>
        <Input placeholder="  Name" />
        <Input placeholder="  Phone" />
        <Input placeholder="  Email" />
        <Input placeholder="  City" />
        <Label>Genres</Label>
        <GenresCheckboxesDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="afro-beats" value="false" />
            <CheckBoxLabel>AfroBeats</CheckBoxLabel>
          </GenreCheckBoxDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="amapiano" value="false" />
            <CheckBoxLabel>Amapiano</CheckBoxLabel>
          </GenreCheckBoxDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="juju" value="false" />
            <CheckBoxLabel>Juju</CheckBoxLabel>
          </GenreCheckBoxDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="high-life" value="false" />
            <CheckBoxLabel>High-life</CheckBoxLabel>
          </GenreCheckBoxDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="reggae" value="false" />
            <CheckBoxLabel>Reggae</CheckBoxLabel>
          </GenreCheckBoxDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="pop" value="false" />
            <CheckBoxLabel>Pop</CheckBoxLabel>
          </GenreCheckBoxDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="rap" value="false" />
            <CheckBoxLabel>Rap</CheckBoxLabel>
          </GenreCheckBoxDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="blues" value="false" />
            <CheckBoxLabel>Blues</CheckBoxLabel>
          </GenreCheckBoxDiv>
          <GenreCheckBoxDiv>
            <CheckBox type="checkbox" name="others" value="false" />
            <CheckBoxLabel>Others</CheckBoxLabel>
          </GenreCheckBoxDiv>
        </GenresCheckboxesDiv>
        <Input placeholder="  Other genres" />
        <Input placeholder="  Website link" />
        <Input placeholder="  Twitter link" />
        <Input placeholder="  Instagram link" />
        <TextArea
          placeholder="Venue Description"
          name="venueDesc"
          rows="5"
          cols="10"
          wrap=""
        ></TextArea>
        <Label>Upload Profile Picture</Label>
        <File type="file" name="filename" />
        <SubmitBtn>Submit</SubmitBtn>
        <EmptyDiv />
      </FormDiv>
      <Footer />
    </Container>
  );
};

export default ArtistSignUpForm;
