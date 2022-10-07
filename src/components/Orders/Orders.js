import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    return (
        <div className='grid grid-cols-5'>
            <div className="products col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5  lg:gap-8 p-5 lg:p-20 lg:px-40 order-2 lg:order-1">
                {
                   cart.map(product => <ReviewItem 
                                            key={product.id} 
                                            product = {product}>
                                       </ReviewItem>)
                }
            </div>
            <div className="products bg-cart-color col-span-5 lg:col-span-1 order-1 lg:order-2">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;

