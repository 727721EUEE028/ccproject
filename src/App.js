import './App.css';
import './App.css';
//import Login from './components/Day9/Login';
//import Submit from './components/Day9/Submit';
import Day6 from './components/Day6';
import  Axios from './components/Day7';
import Day8 from './components/Day8';
import Login from './components/Login';
import Home from './components/Home'
import NavBar from './components/NavBar.js';
import Singers from './components/Singers';
import Albums from './components/Albums';
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';

function App() {
  
  return (
    <div style={{textAlign:"center"}}>
    <h1 style={{color:"blue"}}>Day-6</h1>
    <Day6 />
    <h1 style={{color:"blue"}}>Day-7</h1>
    <Axios />
    <h1 style={{color:"blue"}}>Day-8</h1>
    <Day8 />
    <h1 style={{color:"blue"}}>Day-9</h1>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
    <h1 style={{color:"blue"}}>Day-10</h1>
    <Login />
    </div>
  );
}
export default App;






