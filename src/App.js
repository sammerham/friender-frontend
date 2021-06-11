import './App.css';
import Navbar from './NavBar'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import './frienderAPI'
import frienderApi from './frienderAPI';
import { React, useState } from 'react'

import userContext from './userContext'






function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const [isUserLoading, setIsUserLoading] = useState(true);
  const [errorMessages, setErrorMessages] = useState([]);

  async function handleLogin(loginData) {
    try {
      const user = await frienderApi.login(loginData);
      setCurrentUser(user);
      return { success: true, errors: null }
    } catch (errors) {
      return { success: false, errors: errors }
    }
  }

  /** Removes token and currentUser from state 
   * and removes token from local storage */
  function handleLogout() {
    setCurrentUser(null);
    // localStorage.removeItem('user');
  }

  /** Accepts loginData {username, password}
   * Returns token if authenticated */
  async function handleSignup(signupData) {
    try {
      const user = await frienderApi.signupUser(signupData);
      setCurrentUser(user);
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
          <Navbar />
          <Routes
            handleSignup={handleSignup}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            handleUpdate={handleUpdate}
            errorMessages={errorMessages} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
