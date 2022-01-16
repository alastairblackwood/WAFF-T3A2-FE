import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Loading from "../Loading";

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

  // const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    axios.get("http://localhost:5001/api/v1/films/").then((response) => {
      setFilmList([...response.data.data.data]);
    });
  }, []);

  console.log("response.data");
  axios.get("http://localhost:5001/api/v1/films/").then((response) => {
    console.log(response.data.data.data);
  });
  console.log("filmList", filmList);

  // setLoading(true);

  const addToList = () => {
    axios.post("http://localhost:5001/api/v1/films", {
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
    axios.put("http://localhost:5001/api/v1/films/:id", {
      id: id,
      newUpdate: newUpdate,
    });
  };

  const deleteFilm = (id) => {
    axios.delete(`http://localhost:5001/api/v1/films/:id/${id}`);
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

                {/* <Input
                type="text"
                placeholder="Update..."
                onChange={(event) => {
                  setNewUpdate(event.target.value);
                }}
              /> */}
                <Button onClick={() => updateFilm(val._id)}>Update</Button>
                <Button onClick={() => deleteFilm(val._id)}>Delete</Button>
              </FilmInfoBox>
            </div>
          );
        })}
        {/* <Loading /> */}
        {/* {loading && <Loading />}{" "} */}
      </FilmListBox>
    </FormBox>
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
  font-size: 0.8rem;
  background: #f774c5;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
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
`;

const FormBox = styled.div`
  position: absolute;
  width: 350px;
  height: 950px;
  left: 72px;
  top: 140px;

  background: #555555;
  mix-blend-mode: soft-light;
  border-radius: 60px;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
`;

const H1 = styled.h1`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const P = styled.p``;

const FilmInfoBox = styled.div`
  background: #555555;
  mix-blend-mode: soft-light;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  padding: 25px;
  margin-top: 40px;
`;

const FilmListBox = styled.div`
  position: absolute;
  width: 500px;
  height: 100px;
  left: 400px;
  top: 10px;

  background: #555555;
  mix-blend-mode: soft-light;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
`;
