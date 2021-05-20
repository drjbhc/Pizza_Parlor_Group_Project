import React from 'react';
import axios from 'axios';
import './App.css';


import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

function App() {



  return (

    <Router>
      <ul>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="/" exact></NavLink>
        </li>
        <li>
          <NavLink to="/" exact></NavLink>
        </li>
      </ul>

      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>

        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>

      </div>
    </Router >
  );
}

export default App;
