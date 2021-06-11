import './App.css';
import Navbar from './NavBar'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import './frienderAPI'
import frienderApi from './frienderAPI';
import { React, useState, useEffect } from 'react'
import { decodeToken } from "react-jwt";
import userContext from './userContext'




function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [errorMessages, setErrorMessages] = useState([]);
  const [loading, setLoading] = useState(true)

  console.log('user--->>', currentUser)

  function setLocalStorage(token) {
    localStorage.setItem("token", token);
    return localStorage.getItem("token");
  }


  useEffect(() => {
    if (token) {
      async function settingCurrUser() {
        try {
          const decodedToken = decodeToken(token);
          frienderApi.token = token;
          let userData = await frienderApi.getUser(decodedToken.id);
          setCurrentUser(userData);
          setLoading(false)
        } catch (err) {
            console.log('err in lon in', err)
            setLoading(false)
        }
      }
      settingCurrUser();
      setLocalStorage(token);
    } else {
      setCurrentUser(null);
      localStorage.removeItem("token");
      setLoading(false)
    }
  }, [token]);


  async function handleLogin(loginData) {
    try {
      const token = await frienderApi.login(loginData);
      setToken(token);
      return { success: true, errors: null }
    } catch (errors) {
      return { success: false, errors: errors }
    }
  }

  /** Removes token and currentUser from state 
   * and removes token from local storage */
  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
  }

  /** Accepts loginData {username, password}
   * Returns token if authenticated */
  async function handleSignup(signupData) {
    try {
      const token = await frienderApi.signupUser(signupData);
      setToken(token);
      return { success: true, errors: null }
    } catch (errors) {
      return { success: false, errors: errors }
    }
  }


  async function handleUpdate(file, formData) {
    const data = new FormData();
    data.append("file", file, "photo.jpeg");
    try {
      const resp = await frienderApi.sendImageToAWS(data);  //url
      let updatedFormData = {...formData, image_url:resp}
      const user = await frienderApi.updateUser(updatedFormData);
      setCurrentUser(user);
      return { success: true, errors: null }
    } catch (errors) {
      return { success: false, errors: errors }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={currentUser}>
          <Navbar handleLogout={handleLogout}/>
          <Routes
            handleSignup={handleSignup}
            handleLogin={handleLogin}
            handleUpdate={handleUpdate}
            errorMessages={errorMessages} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
