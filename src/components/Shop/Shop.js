import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then( data => setProducts(data))
    } ,[])

    const [cart, setCart] = useState([]);

    // add click handeler for add to cart 
    const addToCartHandeler = (product) => {
        const newCart =[...cart, product];
        setCart(newCart);
    }
    return (
        <div className='products'>
            <div className="products-continer">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCartHandeler= {addToCartHandeler}
                    ></Product> )
                }              
            </div>
            <div className="order-summery">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;