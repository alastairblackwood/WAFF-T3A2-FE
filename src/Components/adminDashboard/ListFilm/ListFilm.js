import React, { useState } from "react";
import styled from "styled-components";
import ListFilmForm from "./ListFilmForm";
import ListFilmList from "./ListFilmList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

// function ListFilm({ listFilms, completeListFilm }) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: "",
//   });

//   return listFilms.map((listFilm, index) => (
//     <Div1
//       className={
//         listFilm.isComplete ? "list-film-row complete" : "list-film-row"
//       }
//       key={index}
//     >
//       <Div2 key={listFilm.id} onClick={() => completeListFilm(listFilm.id)}>
//         {listFilm.text}
//       </Div2>
//       <Div3 className="icons">
//         <RiCloseCircleLine />
//         <TiEdit />
//       </Div3>
//     </Div1>
//   ));
// }

const ListFilm = ({ listFilm, completeListFilm }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <div>
      {/* mapping is happening at the list level */}
      {/* {listFilms.map((listFilm) => ( */}
      {listFilm && (
        <Div1
          className={
            listFilm.isComplete ? "list-film-row complete" : "list-film-row"
          }
          //   key={index}
        >
          <Div2 key={listFilm.id} onClick={() => completeListFilm(listFilm.id)}>
            {listFilm.text}
          </Div2>
          <Div3 className="icons">
            <RiCloseCircleLine />
            <TiEdit />
          </Div3>
        </Div1>
      )}
      )) ;
    </div>
  );
};

const Div1 = styled.div``;
const Div2 = styled.div``;
const Div3 = styled.div``;

export default ListFilm;
