import React from 'react';
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';


import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';

import Checkout from '../Checkout/Checkout.jsx';
import Customer from '../Customer/Customer.jsx';
import PizzaList from '../PizzaList/PizzaList.jsx';
import Admin from '../Admin/Admin.jsx';


function App() {


  

 

  return (
    <Router>
    <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
    </header>
        <div className='nav-list'>
              <NavLink to='/'>
                <button className='nav-btn'>Home </button> 
              </NavLink>
              <NavLink to='/customer'>
                <button className='nav-btn'>Customer </button> 
              </NavLink>
              <NavLink to='/checkout'>
                <button className='nav-btn'>Checkout </button> 
              </NavLink>
        </div>

        <Switch>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/customer'>
            <Customer/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path='/'>
            <PizzaList />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
