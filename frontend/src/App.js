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

function App() {
  
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio-managers">Portfolio Managers</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to ="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
        <Route path="/" ></Route>
        <Route path="/portfolio-managers" element={<ManagerComponent />}></Route>
        <Route path="/projects" element={<ProjectComponent />}></Route>
        <Route path="/tasks" element={<TaskComponent />}></Route>
        <Route path="/resources" element={<ResourceComponent />}></Route>
        <Route path="/login" element={ <LoginComponent />}></Route>
        <Route path="/signup" element={<SignupComponent />}></Route>
        </Routes> 
      </div> 
    </div>
  </Router>
  );
}

export default App;
