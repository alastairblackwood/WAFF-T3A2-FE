import React, { useState } from "react";

import {
  DashboardContainer,
  DashboardH1,
  AllItems,
  Items,
  Icon,
  ItemHeading,
  Button,
  FilmContainer,
  UsersContainer,
} from "./DashboardElements";
import { MdLocalMovies } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import Form from "../Form/Form";
import UsersLists from "../UsersList/UsersLists";

const Dashboard = () => {
  const [showFilms, setShowFilms] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  return (
    <>
      <DashboardContainer>
        <DashboardH1>Admin Dashboard</DashboardH1>
        <AllItems class="all-items">
          <Items class="item">
            <Icon class="icon">
              <MdLocalMovies size={25} />
            </Icon>
            <ItemHeading class="item-heading">
              View all listed films as well as add, edit, and delete <br />
              <br />
            </ItemHeading>
            <Button onClick={() => setShowFilms(!showFilms)}>
              View all films
            </Button>
          </Items>

          <Items class="item">
            <Icon class="icon">
              <FiUsers size={25} />
            </Icon>
            <ItemHeading class="item-heading">
              View all users that are already logged into the <br />
              Wes Anderson Film Festival Website.
            </ItemHeading>
            <Button onClick={() => setShowUsers(!showUsers)}>
              View all users
            </Button>
          </Items>
        </AllItems>

        {showFilms && (
          <FilmContainer>
            <Form />
          </FilmContainer>
        )}

        {showUsers && (
          <UsersContainer>
            <UsersLists />
          </UsersContainer>
        )}
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
