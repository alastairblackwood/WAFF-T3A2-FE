import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = () => {
  const [filmName, setFilmName] = useState("");
  const [year, setYear] = useState(0);
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [summary, setSummary] = useState(0);
  const [description, setDescription] = useState(0);

  const addToList = () => {
    // console.log(filmName + year + duration + price + summary + description);
    axios.post("http://localhost:5000/api/v1/films", {
      filmName: filmName,
      year: year,
      duration: duration,
      price: price,
      summary: summary,
      description: description,
    });
  };

  return (
    <FormList>
      <Title>List film:</Title>

      <Label>Film name:</Label>
      <Text
        type={"text"}
        onChange={(event) => {
          setFilmName(event.target.value);
        }}
      ></Text>

      <Label>Year:</Label>
      <Number
        type={"number"}
        onChange={(event) => {
          setYear(event.target.value);
        }}
      ></Number>

      <Label>Duration (minutes):</Label>
      <Number
        type={"number"}
        onChange={(event) => {
          setDuration(event.target.value);
        }}
      ></Number>

      <Label>Price:</Label>
      <Number
        type={"number"}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      ></Number>

      <Label>Summary:</Label>
      <Text
        type={"text"}
        onChange={(event) => {
          setSummary(event.target.value);
        }}
      ></Text>

      <Label>Description</Label>
      <Text
        type={"text"}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></Text>

      <Label>Add image:</Label>

      <Button onClick={addToList}>Add to list</Button>
    </FormList>
  );
};

export default Form;

const Title = styled.h1`
  padding: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Text = styled.input`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 30px;
  font-size: 20px;
`;
const Number = styled.input`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 30px;
  font-size: 20px;
`;
const Button = styled.button`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 30px;
  font-size: 20px;
`;
const Label = styled.label`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const FormList = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
