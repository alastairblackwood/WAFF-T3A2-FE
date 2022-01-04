import './App.css';
import React,{useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import HomePage from './Components/HomePage/HomePage';
// import {getFilms} from './Services/filmServices'
// import Films from './Components/Films'
// import Film from './Components/Film'
import LogIn from './Components/LogInPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import Navbar from './Components/Navbar/Navbar';



  // export const Logout = () => {
  //   const [isAuthenticated, userHasAuthenticated] = useState(false);

  // const handleLogout = () => {
  // localStorage.removeItem("userInfo")
  // userHasAuthenticated(false)
  // }

  //   return (
  //     <>
  //     <StateContext.Provider value={{ isAuthenticated, userHasAuthenticated}}>

  //     <div>
        
  //       {isAuthenticated ? 
  //           (
  //               <button onClick={handleLogout}>Logout</button>
  //           )
  //           : (
  //           <button>Login</button>
  //           )}
  //     </div>
  //     </StateContext.Provider>
  //     </>
  //   )
  
  // }


const App = () => {
  
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  // will need to add this to navbar
  const handleLogout = () => {
    localStorage.removeItem("userInfo")
    userHasAuthenticated(false)
  }


  return (
    <>
    <StateContext.Provider value={{ isAuthenticated, userHasAuthenticated}}>
      <Router>
    {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<HomePage/>} exact />   
          {/* uncomment film to get film posts */}
          {/* <Route path='/' element={<Film/>} exact /> */}
          
          <Route path='/login' element={<LogIn/>} exact  />
          <Route path='/signup' element={<SignUpPage/>} exact />
          {/* <Route path='/login' element={<LogIn/>} exact loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
          <Route path='/signup' element={<SignUpPage/>} exact loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /> */}
        </Routes>
      </Router>
      {/* <Logout/> */}
      {isAuthenticated ? 
            (
                <button onClick={handleLogout}>Logout</button>
            )
            : (
            <button>Login</button>
            )}
    </StateContext.Provider>
    </>
  );
}

export default App;
