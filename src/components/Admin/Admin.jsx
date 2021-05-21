import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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
      console.log(response.data);
    });
  };

  //return admin page that shows name, time and order total for each order place
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            return (
              <tr key={i}>
                <td>{orders.customer_name}</td>
                <td>{orders.time}</td>
                <td>{orders.type}</td>
                <td>{orders.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
