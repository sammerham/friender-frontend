import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar'
import Routes from './Routes'
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}
export default App;
