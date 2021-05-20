import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Customer() {
    const [name, set_customer_name] = useState('');
    const [address, set_customer_address] = useState('');
    const [city, set_customer_city] = useState('');
    const [zip, set_customer_zip] = useState('');
    const [delivery, set_delivery] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    // Grab information and push it to cartReducer

    function nextButton() {

        dispatch({
            type: 'SET_CUSTOMER_INFO',
            payload: data // update cartReducer
        });

        history.push('/checkout');
    }

    return (
        <>
            <form onSubmit={(event) => nextButton(event)}>
                <input
                    value={name}
                    onChange={(event) => set_customer_name(event.target.value)}
                    type='text'
                    placeholder='Name'
                />
                <br />
                <input
                    value={address}
                    onChange={(event) => set_customer_address(event.target.value)}
                    type='text'
                    placeholder='Address'
                />
                <br />
                <input
                    value={city}
                    onChange={(event) => set_customer_city(event.target.value)}
                    type='text'
                    placeholder='City'
                />
                <br />
                <input
                    value={zip}
                    onChange={(event) => set_customer_zip(event.target.value)}
                    type='text'
                    placeholder='Zip'
                />
                <br />
                <select
                    name='Delivery / Pickup'
                    onChange={(event) => set_delivery(event.target.value)}
                >
                    <option value={delivery} default>Delivery</option>
                    <option value={delivery}>Pickup</option>
                </select>
            </form>
        </>
    )
}

export default Customer;