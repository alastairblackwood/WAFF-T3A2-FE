import React, { useState } from "react";
import styled from "styled-components";

function ListFilmForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <Form className="list-film-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a Film"
        value={input}
        name="text"
        className="list-film-input"
        onChange={handleChange}
      />
      <Button className="list-film-button">List Film</Button>
    </Form>
  );
}

export default ListFilmForm;

const Form = styled.form`
  padding: 200px;
`;

const Input = styled.input``;
const Button = styled.button``;
