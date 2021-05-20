import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Customer() {

    const dispatch = useDispatch();
    const history = useHistory();

    // Grab information and push it to cartReducer

    function nextButton() {

        dispatch({
            type: 'SET_CUSTOMER_INFO',
            payload: data// update cartReducer
        });

        history.push('/checkout');
    }

    return (
        <>
            <form onSubmit={(event) => nextButton(event)}>
                <input
                    type='text'
                    placeholder='Name'
                />
                <input
                    type='text'
                    placeholder='Address'
                />
                <input
                    type='text'
                    placeholder='City'
                />
                <input
                    type='text'
                />
            </form>
        </>
    )
}

export default Customer;