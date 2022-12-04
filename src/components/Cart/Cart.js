import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
    return (
        <div>
            <h1>Order Summery</h1>
            <h3>Total Item added: {cart.length}</h3>

        </div>
    );
};

export default Cart;