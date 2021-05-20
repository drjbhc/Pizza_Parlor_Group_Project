import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function PizzaList() {

    const dispatch = useDispatch();
    const history = useHistory();

    function getPizzas() {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then(response => {
            console.log(response.data);

            dispatch({
                type: 'SET_PIZZA_LIST',
                payload: response.data
            })

        }).catch(error => {
            console.log('error on GET', error);
        });
    }

    useEffect(() => {
        console.log('in useEffect');
        getPizzas();
    }, []);

    function addPizza() {


        axios({
            method: 'POST',
            url: '/api/pizzas',
            data: data
        }).then(response => {
            history.push('/customer');
        }).catch(error => {
            alert('Error, was unable to get pizza information');
            console.log(error);
        })
    }

    return (
        <> </>
    )
}

export default PizzaList;