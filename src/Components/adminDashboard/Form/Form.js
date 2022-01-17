import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(0);
  const [language, setLanguage] = useState(0);
  const [genre, setGenre] = useState(0);
  const [director, setDirector] = useState(0);
  const [cast, setCast] = useState(0);
  const [description, setDescription] = useState(0);
  const [duration, setDuration] = useState(0);
  const [releaseDate, setReleaseDate] = useState(0);
  const [showDate, setShowDate] = useState(0);

  const [newUpdate, setNewUpdate] = useState("");

  const [filmList, setFilmList] = useState([]);

  const [values, setValues] = useState({
    name: "",
    duration: "",
    releaseDate: "",
    description: "",
    showDate: "",
    image: "",
    language: "",
    genre: "",
    director: "",
    cast: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const baseURL = "http://localhost:5001/api/v1/films/";
  const herokuURL = `https://wesandersonfilmfestival.herokuapp.com/api/v1/films/`;

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let config = {
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + userInfo.token,
    },
  };

  useEffect(() => {
    axios.get(herokuURL).then((response) => {
      setFilmList([...response.data.data.data]);
    });
  }, []);

  const addToList = () => {
    axios.post(herokuURL, {
      name: name,
      image: image,
      language: language,
      genre: genre,
      director: director,
      cast: cast,
      description: description,
      duration: duration,
      releaseDate: releaseDate,
      showDate: showDate,
    });
  };

  const updateFilm = (id) => {
    axios.put(
      herokuURL + `${id}`,
      {
        id: id,
        newUpdate: newUpdate,
      },
      config
    );
  };

  const deleteFilm = (id) => {
    axios.delete(herokuURL + `${id}`, config);
  };

  return (
    <FormBox>
      <FormList>
        <Title>List new film:</Title>

        <Label>Title:</Label>
        <Text
          type={"text"}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></Text>

        <Label>Image:</Label>
        <Number
          type={"number"}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        ></Number>

        <Label>Language:</Label>
        <Text
          type={"text"}
          onChange={(event) => {
            setLanguage(event.target.value);
          }}
        ></Text>

        <Label>Genre:</Label>
        <Text
          type={"text"}
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        ></Text>

        <Label>Director:</Label>
        <Text
          type={"text"}
          onChange={(event) => {
            setDirector(event.target.value);
          }}
        ></Text>

        <Label>Cast</Label>
        <Text
          type={"text"}
          onChange={(event) => {
            setCast(event.target.value);
          }}
        ></Text>

        <Label>Description:</Label>
        <Text
          type={"text"}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></Text>

        <Label>Duration:</Label>
        <Text
          type={"text"}
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        ></Text>

        <Label>Release Date:</Label>
        <Number
          type={"number"}
          onChange={(event) => {
            setReleaseDate(event.target.value);
          }}
        ></Number>

        <Label>Show Date:</Label>
        <Number
          type={"number"}
          onChange={(event) => {
            setShowDate(event.target.value);
          }}
        ></Number>

        <Button onClick={addToList}>Add to list</Button>
      </FormList>

      <FilmListBox>
        <H1>Films listed:</H1>
        {filmList.map((val, key) => {
          return (
            <div key={key} className="film">
              <FilmInfoBox>
                <H1>Title: {val.name}</H1>
                <P>Duration: {val.duration}</P>
                <P>Price: {val.price}</P>
                <P>Year published: {val.year}</P>
                <P>Description: {val.description}</P>

                <Button onClick={() => updateFilm(val._id)}>Update</Button>
                <Button onClick={() => deleteFilm(val._id)}>Delete</Button>
              </FilmInfoBox>
            </div>
          );
        })}
      </FilmListBox>
    </FormBox>
  );
};

export default Form;

const Title = styled.h1`
  padding: 80px;
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
  border: 1px solid #000000;
  border-radius: 83px;
`;
const Number = styled.input`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 30px;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 83px;
`;
const Button = styled.button`
  font-size: 0.8rem;
  background: #ead04b;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ead04b;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  margin-top: 1.3rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ead04b;
    transform: translateY(-5px);
  }
  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
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
  position: relative;
`;

const FormBox = styled.div`
  position: absolute;
  width: 350px;
  height: 950px;
  left: 72px;
  top: 140px;

  background: #35589a;
  mix-blend-mode: soft-light;
  border-radius: 60px;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const H1 = styled.h1`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const P = styled.p``;

const FilmInfoBox = styled.div`
  background: #35589a;
  mix-blend-mode: soft-light;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  padding: 25px;
  margin-top: 40px;
  position: relative;
`;

const FilmListBox = styled.div`
  position: absolute;
  width: 500px;
  left: 400px;
  top: 10px;

  mix-blend-mode: soft-light;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  overflow-y: scroll;
  height: 950px;
`;
