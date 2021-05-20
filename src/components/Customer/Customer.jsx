
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Customer() {

    const history = useHistory();

    function addPizza() {


        axios({
            method: 'POST',
            url: '/api/order',
            data: data
        }).then(response => {
            history.push('/checkout');
        }).catch(error => {
            alert('Error, was unable to go to checkout');
            console.log(error);
        })
    }

    return (
        <> </>
    )
}

export default Customer;