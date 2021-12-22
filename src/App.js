import './App.css';
import NarBar from './Components/adminDashboard/Navbar/NarBar';
import SideProfile from './Components/adminDashboard/sideProfile/SideProfile';
import FilmList from './Components/adminDashboard/FilmList/FilmList';

function App() {
  return (
    <>
     <NarBar />
     <SideProfile />
     <FilmList />
    </>
  );
}

export default App;
