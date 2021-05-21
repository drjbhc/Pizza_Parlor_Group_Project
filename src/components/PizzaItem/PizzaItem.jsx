import React, { useEffect, useState } from 'react';
import '../App/App.css';

function PizzaItem(props) {
    const [cartStatus, setCartStatus] = useState(true);

    let pizza = props.pizza;

    return (
        <div key={props.i} className="pizzaItems">
            <p className="pizza_name">{pizza.name}</p>
            <p><img className="pizza_image" src={pizza.image_path} /></p>
            <p className='pizza_desc'>{pizza.description}</p>
            <p className="pizza_price">$ {pizza.price}</p>
            <div className="pizza_price" onClick={(event) => (setCartStatus(!cartStatus))}>
                {cartStatus ? <button className="buy-btn">Add to Cart</button> : <button className="remove-btn">Remove</button>}
            </div>
            <br />
        </div>
    )
}

export default PizzaItem;