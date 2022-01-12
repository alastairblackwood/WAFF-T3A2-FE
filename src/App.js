import './App.css';
import {ThemeProvider} from 'styled-components';
import React,{useState, useCallback} from 'react'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import {AuthContext} from './utils/stateContext'
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
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <>
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* Layout parent to display children in Outlet */}
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>} exact />   
            <Route path='/films' element={<Films/>} exact >
              <Route path='/films/:id' element={<Film/>}/>
            </Route>
            <Route path='/about' element={<About/>} exact  />
            <Route path='/schedule' element={<Schedule/>} exact  />
            <Route path='/login' element={<LogIn/>} exact  />
            <Route path='/signup' element={<SignUpPage/>} exact />
             </Route>
        </Routes>
      </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
