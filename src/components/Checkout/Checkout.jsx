import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../App/App.css';

function Checkout(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((store) => store.cartReducer); 
  const customer = useSelector((store) => store.customerReducer);
  
    const calculateOrderCost = cartList => {
      const totalPrice = (sum, item) => sum + Number(item.price);
      const priceTotal = cartList.reduce(totalPrice, 0); // Bad naming convention, to fix when working
      return priceTotal;
    }

    let total = calculateOrderCost(cart);

  function submitOrder() {

    // Alternate way to get Date and Time, not currently being used though.
    let currentDate = new Date();

    let date = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} `;
    let time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    // Resource used to help create above code:
    // https://www.w3docs.com/snippets/javascript/how-to-get-the-current-date-and-time-in-javascript.html

    let order = {
      customer_name: customer.name,
      street_address: customer.address,
      city: customer.city,
      zip: customer.zip,
      type: customer.delivery,
      total: total,
      time: date + time, // Not currently being used, uses the TIMESTAMP DEFAULT in Postico
      pizzas: cart
    };

    axios({
      method: 'POST',
      url: '/api/order',
      data: order,
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

      <div className='checkout_table'>
        <p className='checkout_line'>{customer.name}</p>
        <p className='checkout_line'>{customer.address}</p>
        <p className='checkout_line'>
          {customer.city} {customer.zip}
        </p>
        <p className='checkout_line'>{customer.delivery}</p>

        <table className='checkout_line'>
          <thead>
            <tr>
              <th className='checkout_line'>Name</th>
              <th className='checkout_line'>Cost</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pizza, i) => (
              <tr key={i}>
                <td className='checkout_line'>{pizza.name}</td>
                <td className='checkout_line'>${pizza.price}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>
                Total: ${total}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button className='checkout-btn' onClick={(event) => submitOrder()}>
          Checkout
        </button>
        <br />
      </div>
    </>
  );
}

export default Checkout;
