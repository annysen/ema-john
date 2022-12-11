import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const {cart} = props;
    
    let totalPrice= 0;
    let shipping = 0;
    let quantity = 0;
    
    for ( const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
        }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = (totalPrice + shipping + tax).toFixed(2);

    return (
        <div className='cart-container'>
            <h1>Order Summery</h1>
            <h3>Total Item added: {cart.length}</h3>
            <p>Total price: ${totalPrice}</p>
            <p>Sipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand price: ${grandTotal}</p>

        </div>
    );
};

export default Cart;