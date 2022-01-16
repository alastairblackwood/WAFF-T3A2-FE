import "./App.css";
import NarBar from "./Components/adminDashboard/Navbar/NarBar";
// import ListFilmList from "./Components/adminDashboard/ListFilm/ListFilmList";
import Form from "./Components/adminDashboard/Form/Form";
import Create from "./Components/adminDashboard/Form/Create";
import Dashboard from "./Components/adminDashboard/Dashboard/Dashboard";
import UsersLists from "./Components/adminDashboard/UsersList/UsersLists.js";

function App() {
  return (
    <>
      <NarBar />
      <Dashboard />
    </>
  );
}

export default App;
