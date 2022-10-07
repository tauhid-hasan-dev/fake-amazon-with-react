import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    return (
        <div>
            <p>this is orders : {products.length}</p>
            <p>Initital cart : {cart.length}</p>
        </div>
    );
};

export default Orders;

