import React, { useState } from "react";
import styled from "styled-components";
import ListFilm from "./ListFilm";
import ListFilmForm from "./ListFilmForm";

function ListFilmList() {
  const [listFilms, setListFilms] = useState([]);

  const addListFilm = (ListFilm) => {
    if (!ListFilm.text || /^\s*$/.test(ListFilm.text)) {
      return;
    }

    const newListFilms = [ListFilm, ...listFilms];

    setListFilms(newListFilms);
    // console.log(ListFilm, ...listFilms);
  };

  const completeListFilm = (id) => {
    let updatedlistFilms = listFilms.map((ListFilm) => {
      if (ListFilm.id === id) {
        ListFilm.isComplete = !ListFilm.isComplete;
      }
      return ListFilm;
    });
    setListFilms(updatedlistFilms);
  };

  return (
    <div>
      <H1>Fill in the film form below:</H1>
      <ListFilmForm onSubmit={addListFilm} />
      <ListFilm />
    </div>
  );
}

export default ListFilmList;

const H1 = styled.h1`
  padding: 150px;
`;
