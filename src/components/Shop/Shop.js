import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
    
    useEffect(() => {
        const storedCart = getStoredCart();
        for( const id in storedCart){
            const addedProducts = products.find(product => product.id === id)
            console.log(addedProducts);        }
    },[])

    // add click handeler for add to cart 
    const addToCartHandeler = (product) => {
        const newCart =[...cart, product];
        setCart(newCart);
        addToDb(product.id)
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