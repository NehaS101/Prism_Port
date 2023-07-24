import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import ManagerComponent from './components/managercomponent';
import ProjectComponent from './components/projectcomponent';
import TaskComponent from './components/taskcomponent';
import ResourceComponent from './components/resourcecomponent';
import LoginComponent from './components/loginComponent';
import SignupComponent from './components/signupComponent';
import LandingComponent from './components/landing component';

function App() {
  
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" className='link'><img className="logo" src ={require("./image/logo3.png")} /></Link>
          </li>
          <li>
            <Link to="/portfolio-managers" className='link'>Portfolio Managers</Link>
          </li>
          <li>
            <Link to="/projects" className='link'>Projects</Link>
          </li>
          <li>
            <Link to ="/tasks" className='link'>Tasks</Link>
          </li>
          <li>
            <Link to="/resources" className='link'>Resources</Link>
          </li>
          <li>
            <Link to="/login" className='link'>Login</Link>
          </li>
          <li>
            <Link to="/signup" className='link'>Sign Up</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
        <Route path="/" element={<LandingComponent />}></Route>
        <Route path="/portfolio-managers" element={<ManagerComponent />}></Route>
        <Route path="/projects" element={<ProjectComponent />}></Route>
        <Route path="/tasks" element={<TaskComponent />}></Route>
        <Route path="/resources" element={<ResourceComponent />}></Route>
        <Route path="/login" element={ <LoginComponent />} ></Route>
        <Route path="/signup" element={<SignupComponent />}></Route>
        </Routes> 
      </div> 
    </div>
  </Router>
  );
}

export default App;
