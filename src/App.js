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
import Nothing from './Components/Nothing/Nothing';
import FilmLayout from './Components/Films/FilmLayout';

const App = () => {
  
  //set up useState and callback functions for statecontext
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const adminRole = useCallback(()=> {
    setAdmin(true)
  }, [])

  const loading = useCallback(()=> {
    setIsLoading(true);
  }, [])

  const notloading = useCallback(()=> {
    setIsLoading(false);
  }, [])

  

  return (
    <>
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout, isAdmin: isAdmin, adminRole: adminRole, isLoading: isLoading, loading: loading, notloading: notloading }}>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* Layout parent to display children in Outlet */}
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>} exact /> 
            <Route path="/films" elmement={<FilmLayout/>}> 
              <Route index element={<Films  /> } exact />
              <Route path=':id' element={<Film />} exact/>
              {/* </Route> */}
            </Route> 
            <Route path='/about' element={<About/>} exact  />
            <Route path='/schedule' element={<Schedule/>} exact  />
            <Route path='/login' element={<LogIn/>} exact  />
            <Route path='/signup' element={<SignUpPage/>} exact />
            <Route path="*" element={<Nothing/>}
    />
          </Route>
        </Routes>
      </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
