import React, { useState } from "react";
import styled from "styled-components";
import ListFilmForm from "./ListFilmForm";
import ListFilmList from "./ListFilmList";
import { RiCloseCircleLine } from "react-icons/ri";
// import { TiEdit } from "react-icons/ri";

function ListFilm({ listFilms, completeListFilm }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return listFilms.map((ListFilm, index) => (
    <Div1
      className={
        ListFilm.isComplete ? "list-film-row complete" : "list-film-row"
      }
      key={index}
    >
      <Div2 key={ListFilm.id} onClick={() => completeListFilm(ListFilm.id)}>
        {ListFilm.text}
      </Div2>
      <Div3 className="icons">
        <RiCloseCircleLine />
        {/* <TiEdit /> */}
      </Div3>
    </Div1>
  ));
}

export default ListFilm;

const Div1 = styled.div``;
const Div2 = styled.div``;
const Div3 = styled.div``;
