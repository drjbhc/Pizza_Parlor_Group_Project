import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

import PizzaItem from '../PizzaItem/PizzaItem.jsx';


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

    function nextButton() {
        history.push('/customer');
    }

    

    const pizzas = useSelector(store => store.pizzaReducer);

    return (
        <>
            <p><button className="homenext-btn" onClick={(event) => nextButton()}>Next</button></p>
            {pizzas.map((pizza, i) => (
                <PizzaItem pizza={pizza} key={i}/>
            ))}
        </>
    )
}

export default PizzaList;