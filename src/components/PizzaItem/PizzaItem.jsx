import React, { useEffect, useState } from 'react';
import '../App/App.css';
import { useDispatch } from 'react-redux';

function PizzaItem(props) {
    const [cartStatus, setCartStatus] = useState(true);
    const dispatch = useDispatch();
 
    let pizza = props.pizza;

    function addToCart(pizza) {
        let newPizza = {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            quantity: 1 // Can make an input field later to allow multiples, change this 1 to be whatever is in field
        }

        dispatch({
            type: 'SET_CART_PIZZAS',
            payload: newPizza
        })


    }


    return (
        <div key={props.i} className="pizzaItems">
            <p className="pizza_name">{pizza.name}</p>
            <p><img className="pizza_image" src={pizza.image_path} /></p>
            <p className='pizza_desc'>{pizza.description}</p>
            <p className="pizza_price">$ {pizza.price}</p>
            <div className="pizza_price" onClick={(event) => (setCartStatus(!cartStatus))}>
                {cartStatus ? <button className="buy-btn" onClick={(event) => addToCart(pizza)}>Add to Cart</button> : <button className="remove-btn">Remove</button>}
            </div> {/* REMOVE BUTTON NOT FUNCTIONAL YET */}
            <br />
        </div>
    )
}

export default PizzaItem;