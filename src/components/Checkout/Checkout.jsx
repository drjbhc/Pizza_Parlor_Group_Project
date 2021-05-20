import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout() {

    const dispatch = useDispatch();
    const history = useHistory();

    const cart = useSelector(store => store.cartReducer);// Grabs info to display from cartReducer

    function addPizza() {

        axios({
            method: 'POST',
            url: '/api/order',
            data: data // Send info to router/database
        }).then(response => {

            dispatch({
                type: 'CHECKED_OUT',
            });

            history.push('/');
        }).catch(error => {
            alert('Error, was unable to go to checkout');
            console.log(error);
        })
    }


    return (
        <> </>
    )
}

export default Checkout;