import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const UsersLists = () => {
  const [usersList, setUsersList] = useState([]);

  const baseURL = "http://localhost:5001/api/v1/users/";
  const herokuURL = `https://wesandersonfilmfestival.herokuapp.com/api/v1/users/`;

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + userInfo.token,
    },
  };

  useEffect(() => {
    axios.get(herokuURL, config).then((response) => {
      setUsersList([...response.data.data.data]);
    });
  }, []);

  // below is delete functionality to allow admin to delete users if needed
  const deleteUser = (id) => {
    axios.delete(herokuURL + `${id}`, config);
  };

  return (
    <UserListBox>
      <H1>Users List:</H1>
      {usersList.map((user) => {
        return (
          <div className="users">
            <UserInfoBox>
              <H1>Name: {user.name}</H1>
              <P>Email: {user.email}</P>

              <Button onClick={() => deleteUser(user._id)}>Delete</Button>
            </UserInfoBox>
          </div>
        );
      })}
    </UserListBox>
  );
};

export default UsersLists;

const H1 = styled.h1`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const P = styled.p``;

const UserInfoBox = styled.div`
  background: #35589a;
  mix-blend-mode: soft-light;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  padding: 25px;
  margin-top: 40px;
  position: relative;
`;

const UserListBox = styled.div`
  position: relative;
  width: 500px;
  left: 400px;
  top: 100px;

  mix-blend-mode: soft-light;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  overflow-y: scroll;
  height: 950px;
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
