import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link,Switch} from 'react-router-dom'
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
        <Route exact path="/">

        </Route>
        <Route exact path="/portfolio-managers">
          <ManagerComponent />
        </Route>
        <Route exact path="/projects">
          <ProjectComponent />
        </Route>
        <Route exact path="/tasks">
          <TaskComponent />
        </Route>
        <Route exact path="/resources">
          <ResourceComponent />
        </Route>
        <Route exact path="/login">
          <LoginComponent />
        </Route>
        <Route exact path="/signup">
          <SignupComponent />
        </Route>
        </Routes>
      </div> 
    </div>
  </Router>
  );
}

export default App;
