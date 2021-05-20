import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function PizzaList() {
    const [cartStatus, setCartStatus] = useState(false);

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

        dispatch({
            type: 'SET_CART_PIZZAS',
            payload: data // update cartReducer
        })

        history.push('/customer');
    }

    const pizzas = useSelector(store => store.pizzaReducer);

    return (
        <>
            {pizzas.map((pizza, i) => (
                <div key={i}>
                    <p>{pizza.name}</p>
                    <div><img src={pizza.image_path} /></div>
                    <p>{pizza.description}</p>
                    <p>${pizza.price}</p>
                    <div onClick={(event) => (setCartStatus(!cartStatus))}>
                        {cartStatus ? <button>Add to Cart</button> : <button>Remove from Cart</button>}
                    </div> {/* Button needs conditional rendering */}
                </div >
            ))
            }
            <button>Next</button>
        </>
    )
}

export default PizzaList;