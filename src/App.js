import './App.css';
import {ThemeProvider} from 'styled-components';
import React,{useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {StateContext} from './utils/stateContext'
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import Films from './Components/Films/Films'
import Film from './Components/Films/Film'
import About from './Components/About/About';
import LogIn from './Components/LogInPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
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
            <Route path='/films' element={<Films/>} exact >
              <Route path='/films/:id' element={<Film/>}/>
            </Route>
            <Route path='/about' element={<About/>} exact  />
            <Route path='/schedule' element={<Schedule/>} exact  />
            <Route path='/login' element={<LogIn/>} exact  />
            <Route path='/signup' element={<SignUpPage/>} exact />
            {/* <Route path='/login' element={<LogIn/>} exact loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            <Route path='/signup' element={<SignUpPage/>} exact loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /> */}
        </Route>
        </Routes>
      {/* {isAuthenticated ? 
            (
                <button onClick={handleLogout}>Logout</button>
            )
            : (
            <button>Login</button>
            )} */}
      {/* <Logout/> */}
      </ThemeProvider>
    </StateContext.Provider>
    </>
  );
}

export default App;
