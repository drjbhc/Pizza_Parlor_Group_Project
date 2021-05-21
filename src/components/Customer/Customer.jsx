import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import '../App/App.css';

function Customer() {
  const [name, set_customer_name] = useState('');
  const [address, set_customer_address] = useState('');
  const [city, set_customer_city] = useState('');
  const [zip, set_customer_zip] = useState('');
  const [delivery, set_delivery] = useState('delivery');

  const dispatch = useDispatch();
  const history = useHistory();

  function nextButton(event) {
    event.preventDefault();

    let customerInfo = {
      name: name,
      address: address,
      city: city,
      zip: zip,
      delivery: delivery,
    };

    dispatch({
      type: 'SET_CUSTOMER_INFO',
      payload: customerInfo,
    });

    history.push('/checkout');
  }

  return (
    <div className='pizza_form'>
      <p className='form-align'>Please Enter Your Information:</p>
      <form onSubmit={(event) => nextButton(event)}>
        <input
          className='form-align'
          value={name}
          onChange={(event) => set_customer_name(event.target.value)}
          type='text'
          placeholder='Name'
        />
        <input
          className='form-align'
          value={address}
          onChange={(event) => set_customer_address(event.target.value)}
          type='text'
          placeholder='Address'
        />
        <input
          className='form-align'
          value={city}
          onChange={(event) => set_customer_city(event.target.value)}
          type='text'
          placeholder='City'
        />
        <input
          className='form-align'
          value={zip}
          onChange={(event) => set_customer_zip(event.target.value)}
          type='text'
          placeholder='Zip'
        />
        <select
          className='form-align'
          name='Delivery / Pickup'
          onChange={(event) => set_delivery(event.target.value)}
        >
          <option value={'delivery'} default>
            Delivery
          </option>
          <option value={'pickup'}>Pickup</option>
        </select>
        <button className='next-btn'> Next </button>
        {/* <input  type='button' value='Next' /> */}
      </form>
    </div>
  );
}

export default Customer;
