import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'


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
      </div>
    </div>
  </Router>
  );
}

export default App;
