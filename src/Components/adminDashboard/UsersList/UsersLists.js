import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const UsersLists = () => {
  const [usersList, setUsersList] = useState([]);

  //   useEffect(() => {
  //     axios.get("http://localhost:5001/api/v1/users").then((response) => {
  //       setUsersList([...response.data.data.data]);
  //     });
  //   }, []);

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  console.log("response.data");
  //   axios.get("http://localhost:5001/api/v1/users").then((response) => {
  //     console.log(response);
  //   });
  //   console.log("usersList", usersList);

  const fetchUsers = async () => {
    try {
      const baseURL = "http://localhost:5001/api/v1/users/";
      const { data } = await axios.get(baseURL, config);
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchUsers();

  return (
    <div>
      <H1>Users List:</H1>
      {usersList.map((val, key) => {
        return (
          <div key={key} className="users">
            <UserListBox>
              <H1>Name: {val.name}</H1>
              <P>Email: {val.email}</P>
              {/* <P>Password: {val.password}</P> */}

              {/* <Button onClick={() => deleteUser(val._id)}>Delete</Button> */}
            </UserListBox>
          </div>
        );
      })}
    </div>
  );
};

export default UsersLists;

const H1 = styled.h1`
  padding: 200px;
`;

const P = styled.p``;

const UserListBox = styled.div``;

{
  /* <FilmListBox>
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

          <Button onClick={() => deleteUser(val._id)}>Delete</Button>
        </FilmInfoBox>
      </div>
    );
  })}
</FilmListBox>; */
}
