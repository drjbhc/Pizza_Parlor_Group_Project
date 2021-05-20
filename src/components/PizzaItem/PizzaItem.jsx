import React, { useEffect, useState } from 'react';

function PizzaItem(props) {
    const [cartStatus, setCartStatus] = useState(true);

    let pizza = props.pizza;

    return (
        <div key={props.i}>
            <p>{pizza.name}</p>
            <div><img className="pizza_image" src={pizza.image_path} /></div>
            <p>{pizza.description}</p>
            <p>${pizza.price}</p>
            <div onClick={(event) => (setCartStatus(!cartStatus))}>
                {cartStatus ? <button>Add to Cart</button> : <button>Remove from Cart</button>}
            </div> {/* Button needs independent conditional rendering */}
        </div >
    )
}

export default PizzaItem;