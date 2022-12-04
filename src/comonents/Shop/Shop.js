import React, { useEffect, useState } from 'react';
import "./Shop.css"

const Shop = () => {
    const[products, setProdcts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then( res => res.json())
        .then(data => setProdcts(data))
    } ,[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>This is Product Container: {products.length} </h3>
            </div>
            <div className="cart-container">
                <h3>Order List</h3>
            </div>
        </div>
    );
};

export default Shop;