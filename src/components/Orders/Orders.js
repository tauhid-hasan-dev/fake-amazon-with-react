import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    return (
        <div>
            <p>this is orders : {products.length}</p>
        </div>
    );
};

export default Orders;