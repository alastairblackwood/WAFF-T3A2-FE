import './App.css';
import React,{useState, useReducer, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import HomePage from './Components/HomePage/HomePage';
import {getFilms} from './Services/filmServices'
import Films from './Components/Films'
import Film from './Components/Film'
import LogIn from './Components/LogInPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';

const App = () => {
  
  const [loggedInUser, setLoggedInUser] = useState("")

  const initialState = {
    films: [],
  }
  const [store, dispatch] = useReducer(stateReducer,initialState)
	useEffect(() => {
		getFilms()
		.then((films) => dispatch({type: 'setFilms', data: films}))
		.catch((error) => console.log(error))
	},[])


  return (
    <>
    <StateContext.Provider value={{store,dispatch}}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} exact />   
          {/* uncomment film to get film posts */}
          {/* <Route path='/' element={<Film/>} exact /> */}
          <Route path='/login' element={<LogIn/>} exact loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
          <Route path='/signup' element={<SignUpPage/>} exact loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        </Routes>
      </Router>
    </StateContext.Provider>
    </>
  );
}

export default App;
