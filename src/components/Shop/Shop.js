import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const loadData = async() =>{
        const res = await fetch('products.json');
        const data = await res.json();
        setProducts(data);
    }

    const addToCartHandler = () =>{
        console.log('clicked');
    }
    useEffect(()=>{
        loadData()
    },[])

    return (
        <div className='grid grid-cols-5'>
            <div className="products col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-20 ">
                {
                    products.map(product => <Product 
                                                    key={product.id} 
                                                    product={product} 
                                                    addToCartHandler = {addToCartHandler}>
                                            </Product>)
                }
            </div>
            <div className="products">
                <h1>This is sidebar</h1>
            </div>
        </div>
    );
};

export default Shop;