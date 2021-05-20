import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout() {

    const dispatch = useDispatch();
    const history = useHistory();

    function getOrder() {
        axios({
            method: 'GET',
            url: '/api/order'
        }).then(response => {
            console.log(response.data);

            dispatch({
                type: 'SET_ORDER',
                payload: response.data
            })

        }).catch(error => {
            console.log('error on GET', error);
        });
    }

    useEffect(() => {
        console.log('in useEffect');
        getOrder();
    }, []);

    // use the arr.length-1 when accessing which order needs to display
    return (
        <> </>
    )
}

export default Checkout;