import React from 'react';
import axios from 'axios';
import './App.css';

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
import Header from '../Header/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className='nav-list'>
          <ul>
            <li>
              <NavLink to='/admin'>REMOVE WHEN DONE</NavLink>
            </li>
            <li>
              <NavLink to='/'>
                <button className='nav-btn'>Home</button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/customer'>
                <button className='nav-btn'>Customer</button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/checkout'>
                <button className='nav-btn'>Checkout</button>
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/customer'>
            <Customer />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <PizzaList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
