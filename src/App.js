import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Forget from './Pages/Forget'

function App() {
  return (
    <div className="App">
      <div>
        <nav>
        {/* <ul>
            <Link to="/">Home</Link>
          </ul> */}
          {/* <ul>
            <Link to="/SignIn">SignIn</Link>
          </ul> */}
          {/* <ul>
            <Link to="/SignUp">SignUp</Link>
          </ul> */}
          {/* <ul>
            <Link to="/Forget">Forget</Link>
          </ul> */}
        </nav>
        <Routes>
          <Route path='/' element = {<Home />} ></Route>
          <Route path='/SignIn' element = {<SignIn />}></Route>
          <Route path='/SignUp' element = {<SignUp />}></Route>
          <Route path='/Forget' element = {<Forget />}></Route>
        </Routes>
      </div>
      <div className="formcomp">
        {/* <form className="signupcont">
          <input placeholder="Email ID"></input>
          <input placeholder="Name"></input>
          <input placeholder="Mobile No"></input>
          
          <input placeholder="Enter OTP"></input>
          <button>Sign Up</button>
        </form> */}
      </div>
    </div>
  );
}

export default App;
