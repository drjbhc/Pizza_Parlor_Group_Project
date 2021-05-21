import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Admin() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    console.log('in useEffect');
    getOrders();
  }, []);
  
  const getOrders = (event) => {
    console.log('retrieving orders');

    axios({
      method: 'GET',
      url: '/api/order',
    }).then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  };

  //return admin page that shows name, time and order total for each order place
  return (
    <>
      <table className='admin_table'>
        <thead>
          <tr>
            <th className='admin_head'>Name</th>
            <th className='admin_head'>Time Order Placed</th>
            <th className='admin_head'>Type</th>
            <th className='admin_head'>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className='admin_line'>{order.customer_name}</td>
              <td className='admin_line'>{order.time}</td>
              <td className='admin_line'>{order.type}</td>
              <td className='admin_line'>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
