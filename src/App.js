import './App.css';
import {ThemeProvider} from 'styled-components';
import React,{useState} from 'react'
import { Outlet, useNavigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import HomePage from './Components/HomePage/HomePage';
// import {getFilms} from './Services/filmServices'
// import Films from './Components/Films'
// import Film from './Components/Film'
import About from './Components/About/About';
import LogIn from './Components/LogInPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import { theme } from './Components/SharedStyles/styledFonts';
import Schedule from './Components/Schedule/Schedule';

const App = () => {
  
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  // will need to add this to navbar
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    userHasAuthenticated(false);
  }
 
  return (
    <>
    <StateContext.Provider value={{ isAuthenticated, userHasAuthenticated}}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>} exact />   
            {/* uncomment film to get film posts */}
            {/* <Route path='/' element={<Film/>} exact /> */}
            <Route path='/about' element={<About/>} exact  />
            <Route path='/schedule' element={<Schedule/>} exact  />
            <Route path='/login' element={<LogIn/>} exact  />
            <Route path='/signup' element={<SignUpPage/>} exact />
            {/* <Route path='/login' element={<LogIn/>} exact loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            <Route path='/signup' element={<SignUpPage/>} exact loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /> */}
        </Route>
        </Routes>
      {isAuthenticated ? 
            (
                <button onClick={handleLogout}>Logout</button>
            )
            : (
            <button>Login</button>
            )}
      {/* <Logout/> */}
      </ThemeProvider>
    </StateContext.Provider>
    </>
  );
}

export default App;
