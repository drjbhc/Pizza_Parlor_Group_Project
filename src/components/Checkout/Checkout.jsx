import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((store) => store.cartReducer); // Grabs info to display from cartReducer
  const customer = useSelector((store) => store.customerReducer);

  function submitOrder() {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();

    let date = `${cMonth}/${cDay}/${cYear}`;
    let time = currentDate.getHours() + ':' + currentDate.getMinutes();
    // The above code was borrowed from this helful resource:
    // https://www.w3docs.com/snippets/javascript/how-to-get-the-current-date-and-time-in-javascript.html

    let order = {
      name: customer.name,
      day_placed: date,
      time_placed: time,
      type: customer.delivery,
      total_price: 0, // Need total to send to router
    };

    axios({
      method: 'POST',
      url: '/api/order',
      data: order, // Send info to router/database
    })
      .then((response) => {
        dispatch({
          type: 'CHECKED_OUT',
        });

        history.push('/');
      })
      .catch((error) => {
        alert('Error, was unable to go to checkout');
        console.log(error);
      });
  }

  return (
    <>
      {/* {JSON.stringify(cart)}
        {JSON.stringify(customer)} */}

      <div>
        <p>{customer.name}</p>
        <p>{customer.address}</p>
        <p>
          {customer.city} {customer.zip}
        </p>
        <p>{customer.delivery}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((pizza, i) => (
            <tr key={i}>
              <td>{pizza.name}</td>
              <td>${pizza.price}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Total: $</td>
          </tr>
        </tbody>
      </table>
      <button onClick={(event) => submitOrder()}>Checkout</button>
    </>
  );
}

export default Checkout;
